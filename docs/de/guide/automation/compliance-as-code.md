# Compliance-as-Code

## Prinzip

Jede DORA-Anforderung wird als überprüfbarer Code oder maschinenlesbare Regel abgebildet. Compliance wird dadurch reproduzierbar, versioniert und auditierbar.

## Policy-as-Code (OPA/Rego)

Sicherheitsrichtlinien als executable Policies:

```hcl
# dora_policies.rego
package dora

# Art. 9: Verschlüsselung für Daten in Transit
deny[msg] {
    input.type == "ingress"
    not input.tls.enabled
    msg := "DORA Art. 9: TLS muss für alle Ingress-Verbindungen aktiviert sein"
}

# Art. 9: Zugangskontrolle - kein Default-Admin
deny[msg] {
    input.type == "user"
    input.username == "admin"
    input.default_password == true
    msg := "DORA RTS 2024/1774: Standard-Admin-Zugänge müssen deaktiviert sein"
}

# Art. 11: Backup RPO-Prüfung
warn[msg] {
    input.type == "backup_config"
    input.rpo_hours > 24
    msg := sprintf("DORA Art. 11: RPO von %dh überschreitet empfohlenen Wert (24h)", [input.rpo_hours])
}
```

## Infrastructure-as-Code Compliance

### IaC-Scanner für Terraform/IaC

```yaml
# .checkov.yaml
framework:
  - terraform
check:
  - CKV_AWS_18   # S3 Logging
  - CKV_AWS_19   # S3 Encryption
  - CKV_AWS_145  # RDS Encryption
  - CKV_K8S_1    # Pod Security
custom_policies_dir: ./dora-policies/
```

### DORA-spezifische Custom Checks

```python
# Pseudocode – konzeptionelle Darstellung
# dora_check_encryption.py
from checkov.common.models.enums import CheckResult
from checkov.terraform.checks.resource.base_resource_check import BaseResourceCheck

class DoraEncryptionAtRest(BaseResourceCheck):
    """DORA Art. 9 / RTS 2024/1774: Verschlüsselung ruhender Daten"""
    
    def __init__(self):
        name = "DORA: Ensure encryption at rest is enabled"
        id = "CKV_DORA_001"
        supported_resources = ['aws_ebs_volume', 'aws_rds_instance', 'aws_s3_bucket']
        super().__init__(name=name, id=id, categories=[], supported_resources=supported_resources)

    def scan_resource_conf(self, conf):
        if conf.get("encrypted") == [True] or conf.get("storage_encrypted") == [True]:
            return CheckResult.PASSED
        return CheckResult.FAILED
```

## CI/CD Integration

```yaml
# .gitlab-ci.yml (DORA Compliance Gate)
dora-compliance:
  stage: security
  script:
    - trivy image --severity CRITICAL,HIGH --exit-code 1 $IMAGE
    - semgrep --config=p/owasp-top-ten --config=./dora-rules/ .
    - grype $IMAGE --fail-on critical
    - checkov -d ./infrastructure/ --config-file .checkov.yaml
  artifacts:
    reports:
      - trivy-report.json
      - semgrep-report.json
      - grype-report.json
      - checkov-report.json
    paths:
      - compliance-evidence/
    expire_in: 5 years  # DORA Aufbewahrungspflicht
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
```

## Git-basiertes Policy-Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Entwurf     │────►│ Review      │────►│ Genehmigung │
│ (Branch)    │     │ (MR Review) │     │ (Merge)     │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                    │
       │              Kommentare           Git Tag
       │              Änderungen           v1.0.0
       │                                       │
       │                              ┌────────┴────────┐
       │                              │ Automatischer    │
       │                              │ Build → Deploy   │
       │                              │ → Interne Doku   │
       │                              └─────────────────┘
```

Jede Policy-Änderung:

1. Wird in einem Branch vorbereitet
2. Durchläuft Code-Review (Vier-Augen-Prinzip)
3. Wird nach Genehmigung gemerged
4. Erhält automatisch ein SemVer-Tag
5. Erzeugt automatisch einen Changelog-Eintrag
6. Wird automatisch auf der internen Doku-Site veröffentlicht
