# TrustMesh AI — Architecture

## Product thesis
TrustMesh is a collaborative intelligence control plane. The design goal is to move approved intelligence between organizations while keeping raw sensitive records inside the organization that owns them.

## MVP execution
The deployed demo is browser-local and uses synthetic transaction data. It demonstrates:

1. Event creation.
2. Independent Fraud / Risk / Compliance analysis.
3. Policy-aware consensus.
4. Decision lineage.
5. SHA-256 commitment.
6. Local audit history.
7. JSON export.
8. Enterprise control-plane simulation with node quarantine.

## Production target

```text
Institution A                  Institution B                  Institution C
Local data                     Local data                     Local data
Local model                    Local model                    Local model
Fraud/Risk agents              Fraud/Risk agents              Fraud/Risk agents
       |                              |                              |
       +---------- Privacy / Identity Gateway ---------------------+
                              |
                    Secure Aggregation Layer
                              |
                    Policy / Governance Engine
                              |
                    Consensus / Decision Layer
                              |
                 Signed Attestation + Audit Layer
                              |
                     Case Management / SIEM
```

## Security controls to add before production
- mTLS and workload identity
- OIDC/SAML + RBAC/ABAC
- KMS/HSM-backed signing keys
- secure aggregation / MPC where justified
- differential privacy where appropriate
- signed model and policy versions
- nonce + timestamp + replay protection
- immutable/WORM audit storage
- model monitoring and drift detection
- human escalation and separation of duties
- rate limits, circuit breakers and idempotency
- penetration testing and independent security review

## Important positioning
TrustMesh should not claim that a hackathon deterministic score is more accurate than mature fraud networks. The differentiator is the **coordination and privacy layer**: enabling cross-organization intelligence without requiring a centralized customer-data lake.

## Research context
Recent 2026 financial-AI research and industry proofs increasingly explore federated learning, secure aggregation, differential privacy and cross-institution fraud detection. TrustMesh therefore focuses on the orchestration, governance and verification layer rather than pretending the underlying research problem is already solved.
