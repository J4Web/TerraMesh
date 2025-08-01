# TerraMesh – EcoCredit Protocol for Tokenized Public Goods on Aptos

Rewarding real-world environmental and infrastructure contributions using $GUI tokens, zk-proofs, and decentralized verification.

## Project Overview
TerraMesh is a DeFi + ImpactTech protocol designed to tokenize public goods and sustainability actions on the Aptos blockchain. It leverages decentralized physical infrastructure (DePIN), zk-SNARKs, and DAO governance to create a fraud-resistant, privacy-preserving system for rewarding measurable environmental and infrastructure contributions.

### Key Features
- **Proof Submission Layer:** Users submit GPS-tagged, timestamped photos or IoT sensor data as evidence, stored on IPFS/Arweave.
- **Verification Engine:** DAO/oracle-based verifiers or zk-proofs validate authenticity and privacy.
- **Move Smart Contracts:** Register contributions, distribute $GUI rewards, and enforce credit issuance rules.
- **DAO Governance:** Adjust reward multipliers, approve oracles, handle disputes, and manage treasury.

## Tech Stack
- **Blockchain:** Aptos (Move Smart Contracts)
- **Storage:** IPFS + Arweave (content-addressed storage)
- **Verification:** zk-SNARKs + Oracle/DAO Witness Schemes
- **Governance:** DAO-driven parameter updates & treasury management
- **Frontend:** Static Web3 dApp (React + Vite + TailwindCSS)

## Installation
This repository contains the frontend static website for TerraMesh. To run locally:

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/J4Web/TerraMesh.git
   cd TerraMesh
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
4. **Open in browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the dApp.

## Usage
- Submit proofs of real-world environmental or infrastructure actions.
- Verifiers (DAO/oracle) review submissions and issue $GUI rewards.
- Explore the dashboard for proof submission and verification status.

## Roadmap
- **Phase 1:** MVP with proof submission, DAO verification, GUI reward distribution.
- **Phase 2:** Integrate zk-SNARKs for private verifications.
- **Phase 3:** DeFi integrations for credit trading and collateralization.
- **Phase 4:** Global DAO-driven governance and ecosystem partnerships.

## Socials
- Twitter/X: [@GUI_INU](https://twitter.com/GUI_INU)
- Discord: (Coming Soon)
- GitHub: (To be published with Move contracts)

## Submission Summary
- **Project Name:** TerraMesh (EcoCredit Protocol)
- **Vision:** Tokenizing Real-World Environmental Impact with GUI Rewards
- **Category:** DeFi + ImpactTech
- **Tech Highlights:** zk-SNARK/Witness Proofs, IPFS/Arweave Storage, DAO Governance, Move Contracts
