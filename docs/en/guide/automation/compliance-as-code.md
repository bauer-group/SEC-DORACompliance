# Compliance-as-Code

## Principle

Every DORA requirement is represented as verifiable code or machine-readable rules. Compliance thereby becomes reproducible, versioned, and auditable.

## Policy-as-Code (OPA/Rego)

Security policies as executable policies:

```hcl
# dora_policies.rego
package dora

# Art. 9: Encryption for data in transit
deny[msg] {
    input.type == "ingress"
    not input.tls.enabled
    msg := "DORA Art. 9: TLS must be enabled for all ingress connections"
}

# Art. 9: Access control - no default admin
deny[msg] {
    input.type == "user"
    input.username == "admin"
    input.default_password == true
    msg := "DORA RTS 2024/1774: Default admin accounts must be disabled"
}

# Art. 11: Backup RPO check
warn[msg] {
    input.type == "backup_config"
    input.rpo_hours > 24
    msg := sprintf("DORA Art. 11: RPO of %dh exceeds recommended value (24h)", [input.rpo_hours])
}
```

## Infrastructure-as-Code Compliance

### IaC-Scanner for Terraform/IaC

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

### DORA-Specific Custom Checks

```python
# Pseudocode – conceptual representation
# dora_check_encryption.py
from checkov.common.models.enums import CheckResult
from checkov.terraform.checks.resource.base_resource_check import BaseResourceCheck

class DoraEncryptionAtRest(BaseResourceCheck):
    """DORA Art. 9 / RTS 2024/1774: Encryption of data at rest"""

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
    expire_in: 5 years  # DORA retention obligation
  rules:
    - if: '$CI_COMMIT_BRANCH == "main"'
```

## Git-Based Policy Lifecycle

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Draft       │────►│ Review      │────►│ Approval    │
│ (branch)    │     │ (MR review) │     │ (merge)     │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                    │
       │              Comments             Git tag
       │              Changes              v1.0.0
       │                                       │
       │                              ┌────────┴────────┐
       │                              │ Automatic        │
       │                              │ build → deploy   │
       │                              │ → internal docs  │
       │                              └─────────────────┘
```

Each policy change:

1. Is prepared in a branch
2. Undergoes code review (four-eyes principle)
3. Is merged after approval
4. Automatically receives a SemVer tag
5. Automatically generates a changelog entry
6. Is automatically published on the internal documentation site
