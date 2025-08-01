import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, Vote, Shield, TrendingUp, Zap, Users } from "lucide-react";

const TokenUtility = () => {
  const utilities = [
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Proof-of-Contribution Rewards",
      description: "Earn $GUI tokens directly linked to verified environmental or DePIN actions. Real impact, real rewards.",
      features: ["GPS-verified tree planting", "IoT sensor deployment", "Carbon sequestration", "Infrastructure contribution"]
    },
    {
      icon: <Vote className="h-8 w-8 text-accent" />,
      title: "DAO Governance",
      description: "Token-weighted voting for protocol rules, verifier approvals, and platform upgrades.",
      features: ["Reward multiplier adjustments", "Oracle approvals", "Treasury management", "Protocol upgrades"]
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Verifier Staking",
      description: "Validators stake $GUI to review submissions. Honest verification earns rewards, dishonest actions face slashing.",
      features: ["Stake to verify", "Earn verification fees", "Slashing protection", "Reputation system"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary-glow" />,
      title: "DeFi Composability",
      description: "Tokenized eco-credits can be traded, staked, collateralized, or used across DeFi protocols.",
      features: ["Credit trading", "Liquidity farming", "Collateral usage", "Cross-chain bridges"]
    }
  ];

  const useCases = [
    {
      icon: <Coins className="h-6 w-6 text-accent" />,
      title: "Environmental Actions",
      example: "Tree planting with GPS/photo proofs → Earn $GUI"
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Edge Hardware",
      example: "Deploy IoT sensors, solar microgrids, mesh WiFi nodes"
    },
    {
      icon: <Users className="h-6 w-6 text-secondary" />,
      title: "Node Hosting",
      example: "Support IPFS/Arweave nodes, verified via uptime proofs"
    }
  ];

  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="glow" className="mb-4 text-sm px-4 py-2">
            $GUI Token
          </Badge>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Token <span className="bg-gradient-ocean bg-clip-text text-transparent">Utility</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            $GUI powers the entire TerraMesh ecosystem with multiple utilities and real-world value creation
          </p>
        </div>

        {/* Main utilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {utilities.map((utility, index) => (
            <Card key={index} variant="glow" className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-card/50 border border-current/20">
                    {utility.icon}
                  </div>
                  <CardTitle className="text-xl">{utility.title}</CardTitle>
                </div>
                <p className="text-muted-foreground">{utility.description}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {utility.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Use cases */}
        <div className="mb-16">
          <h3 className="text-3xl font-display font-semibold text-center mb-12">Use Cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <Card key={index} variant="glass" className="text-center p-6 hover:border-primary/40 transition-all duration-300">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-card/50 border border-current/20">
                    {useCase.icon}
                  </div>
                </div>
                <h4 className="font-semibold text-lg mb-2">{useCase.title}</h4>
                <p className="text-sm text-muted-foreground">{useCase.example}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Token economics */}
        <Card variant="glass" className="p-8 text-center">
          <h3 className="text-2xl font-display font-semibold mb-6">Token Economics</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">1B</div>
              <div className="text-sm text-muted-foreground">Total Supply</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Ecosystem Rewards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">25%</div>
              <div className="text-sm text-muted-foreground">DAO Treasury</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-glow mb-2">20%</div>
              <div className="text-sm text-muted-foreground">Verifier Incentives</div>
            </div>
          </div>
          <div className="mt-8">
            <Button variant="hero" size="lg">
              Learn More About Tokenomics
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TokenUtility;