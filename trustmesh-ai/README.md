# TrustMesh AI

**Sovereign Intelligence Where Data Lives**

TrustMesh AI is a functional hackathon demonstrator for collaborative fraud intelligence. It models three independent institution nodes, specialized agents, policy-aware consensus, cryptographic audit and a production-shaped enterprise control plane.

## Live product

- Production deployment: `https://trustmesh-ai.vercel.app`
- GitHub source: `trustmesh-ai/`

## Functional MVP

- Responsive enterprise application shell.
- Overview / Dashboard / Simulation / Agent Center / Decision / Audit / Architecture / Security / Enterprise views.
- Three simulated bank nodes.
- Fraud, Risk, Compliance and Consensus agents.
- Low-risk, review and high-risk demo presets.
- ALLOW / REVIEW / BLOCK decisions.
- Risk and confidence scoring.
- Decision lineage and explanations.
- Real SHA-256 commitment using Web Crypto.
- Local audit ledger with verification.
- JSON audit export and reset.
- Enterprise mesh-round simulation.
- Node anomaly / quarantine simulation.
- Privacy boundary, policy guardrails and threat-model UI.
- No external API keys or banking credentials.
- No live financial execution.

## Core thesis

> **Move intelligence. Not sensitive data.**

TrustMesh is positioned as a collaboration/control-plane layer, not as a claim that a deterministic hackathon model beats mature fraud engines. Its value proposition is enabling organizations to collaborate on useful intelligence while keeping raw sensitive records inside their own environments and making policy and decision lineage explicit.

## Production-shaped architecture

```text
Institution A       Institution B       Institution C
Local data/model    Local data/model    Local data/model
      |                   |                   |
      +------ identity / privacy gateways --+
                          |
                TrustMesh Intelligence Mesh
                          |
             Secure Aggregation / DP layer
                          |
                 Policy + Consensus
                          |
              Human Review / Case Mgmt
                          |
          Signed Attestation + Audit Anchor
```

## Enterprise hardening

Before production, the system needs institution-local model runtimes, secure aggregation, differential privacy where appropriate, signed model/policy versions, mTLS, workload identity, RBAC/ABAC, KMS/HSM, replay protection, immutable/WORM audit storage, monitoring, model drift controls, human escalation and independent security/privacy review.

## Competitive strategy

Do not position TrustMesh as “better fraud detection than FICO.” Mature fraud networks have years of models, data, integrations and operating history. TrustMesh differentiates at the infrastructure layer: **privacy-preserving collaboration + multi-agent policy separation + verifiable decision integrity**.

## Current research context

Financial institutions are actively exploring federated learning for cross-institution fraud detection. Recent work highlights secure aggregation, differential privacy, heterogeneous/non-IID data, poisoning resistance, explainability and governance as important engineering challenges. TrustMesh therefore makes the coordination, policy and verification layer the product wedge rather than pretending those challenges are solved.

## Jury demo

1. **Simulation → High risk → Generate Fraud Event.**
2. **Agent Center:** show Fraud / Risk / Compliance / Consensus.
3. **Decision:** show BLOCK/REVIEW/ALLOW, score, confidence and lineage.
4. **Audit:** verify the SHA-256 commitment and export JSON.
5. **Enterprise:** Run mesh round.
6. **Enterprise:** Simulate node anomaly and show Bank Beta quarantined from consensus.
7. Finish with: “Fraud is the first use case; the infrastructure is designed for any regulated environment where organizations need collective intelligence without surrendering data sovereignty.”

Built for DOJO by **ElCryptoBoy**.
