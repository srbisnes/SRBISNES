# TrustMesh AI — 90-second jury demo

## 1. Open
Landing → **Launch live demo**.

Say:
> TrustMesh moves intelligence, not sensitive data. Each institution keeps its raw records locally while specialized agents collaborate on approved signals.

## 2. Generate the high-risk event
Simulation → **High risk** → Generate Fraud Event.

Use the default synthetic payload:
- Amount: $50,000
- Country: Unknown
- New device: Yes
- Account age: 2 days
- Velocity: 6/hour

## 3. Explain the agents
Open Agent Center.

Point out:
- Fraud Agent = transaction-pattern signal
- Risk Agent = device/geography/behaviour signal
- Compliance Agent = policy authority
- Consensus Agent = final policy-aware aggregation

## 4. Show the decision
Open Decision.

Explain:
> The decision is not a black-box answer. The lineage shows which independent authorities contributed to the result.

## 5. Prove integrity
Open Audit Center → **Verify hash**.

Explain:
> The demo recomputes SHA-256 over the canonical event and agent result. If the committed payload changes, verification fails.

## 6. Show the differentiator
Open **Enterprise** in the sidebar.

Click **Run mesh round**.

Then click **Simulate node anomaly**.

Say:
> This is the production-shaped control plane: a node can be isolated from consensus without moving its raw records. The incident remains auditable.

## 7. Close
> Fraud detection is the first use case. The infrastructure can extend to insurance, healthcare, supply chain and other environments where organizations need collective intelligence without giving up data sovereignty.

## Do not claim
- Do not claim the demo is a live banking system.
- Do not claim regulatory certification.
- Do not claim real bank connectivity.
- Do not claim the deterministic scoring model beats FICO or another mature fraud engine.
