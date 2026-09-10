# TrustMesh AI

**Sovereign Intelligence Where Data Lives**

TrustMesh AI is a functional hackathon MVP for collaborative fraud intelligence. It demonstrates three independent bank nodes, specialized Fraud/Risk/Compliance agents, a consensus layer and a SHA-256 audit commitment.

## Live demo

Use **Simulation → Generate Fraud Event**. The browser runs the complete deterministic decision pipeline, stores demo events locally and produces a real SHA-256 fingerprint. No customer data, banking credentials or API keys are required.

## What is real in this MVP

- Responsive enterprise-style application shell.
- Five working views: Overview, Dashboard, Simulation, Agent Center and Audit Center.
- Three simulated institution nodes.
- Independent fraud, risk and compliance scoring.
- Policy-aware consensus producing ALLOW / REVIEW / BLOCK.
- Confidence score and explainable agent reasons.
- SHA-256 integrity commitment using the Web Crypto API.
- Local event ledger with up to 100 demo decisions.
- Clear/reset demo state.
- No live transaction execution.

## Product thesis

**Move intelligence, not sensitive data.**

TrustMesh is positioned as a collaboration/control-plane layer rather than a replacement for mature fraud engines. The production architecture is institution-local inference + privacy-preserving signal exchange + secure aggregation + differential privacy + signed policy controls + human review + cryptographic audit anchoring.

## Competitive position

Established fraud platforms such as FICO Falcon have major advantages in production models, consortium data, integrations and operating history. TrustMesh should not claim to beat those systems at raw fraud detection today. Its differentiation is the collaboration layer: enabling institutions to share useful intelligence without creating a central raw-data lake, with multi-agent explainability and verifiable decision integrity.

## Production architecture

```text
Bank Alpha                 Bank Beta                 Bank Gamma
Local data + model         Local data + model       Local data + model
      |                           |                         |
      +---------- Privacy / Policy Boundary ---------------+
                              |
                    TrustMesh Intelligence Mesh
                              |
                  Secure Aggregation / DP
                              |
                    Consensus + Policy Engine
                              |
                    Human Review / Decision
                              |
                    Cryptographic Audit Log
```

## Roadmap

1. Replace deterministic scoring with institution-local model runtimes.
2. Add secure aggregation and differential privacy.
3. Add signed policies, agent attestations and replay protection.
4. Add mTLS, RBAC/IAM and institutional identity.
5. Add AML/KYC/bank connector SDKs and case management.
6. Add model/version registry and decision replay.
7. Anchor audit commitments to a permissioned ledger, public chain or WORM storage.
8. Threat modeling, red-team testing, observability and enterprise controls.

## Demo narrative

1. Open Dashboard: show 3 healthy nodes and zero raw data shared.
2. Open Simulation: generate a $50,000 suspicious transfer from a new device and unknown country.
3. Open Agent Center: show Fraud, Risk and Compliance reasoning.
4. Return to Decision: show the consensus score and BLOCK/REVIEW/ALLOW action.
5. Open Audit Center: show the SHA-256 commitment and timestamp.
6. Explain the production upgrade: the demo simulates the control plane; real banks would run their inference locally.

Built for DOJO by **ElCryptoBoy**.
