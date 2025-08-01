import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle2, TrendingDown, Users, Lock, DollarSign } from "lucide-react";

const ProblemSolution = () => {
  const problems = [
    {
      icon: <AlertTriangle className="h-6 w-6 text-muted-foreground" />,
      title: "Lack of Trust",
      description: "Proof of real-world impact is often unverifiable or centralized, leading to skepticism and fraud."
    },
    {
      icon: <TrendingDown className="h-6 w-6 text-muted-foreground" />,
      title: "Greenwashing Risk",
      description: "Centralized certificates and carbon credits are opaque and prone to manipulation and false claims."
    },
    {
      icon: <DollarSign className="h-6 w-6 text-muted-foreground" />,
      title: "Inefficient Funding",
      description: "Public good contributors rarely receive real-time, trustless rewards for their efforts."
    }
  ];

  const solutions = [
    {
      icon: <CheckCircle2 className="h-6 w-6 text-accent" />,
      title: "Decentralized Verification",
      description: "DAO and oracle-based verifiers validate authenticity with zk-proof options for privacy protection."
    },
    {
      icon: <Lock className="h-6 w-6 text-accent" />,
      title: "Fraud-Resistant",
      description: "zk-proofs combined with decentralized verification prevent spoofing and ensure authenticity."
    },
    {
      icon: <Users className="h-6 w-6 text-accent" />,
      title: "Real-time Rewards",
      description: "Instant $GUI token rewards for verified environmental and infrastructure contributions."
    }
  ];

  return (
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Problem Section */}
        <div className="mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              The Problem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Public good projects face significant challenges in verification, funding, and trust
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} variant="glass" className="hover:border-muted/40 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {problem.icon}
                    <CardTitle className="text-xl">{problem.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{problem.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Solution Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              The <span className="bg-gradient-ocean bg-clip-text text-transparent">Solution</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              TerraMesh introduces a DePIN-powered, tokenized credit system that rewards measurable impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} variant="glow" className="group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    {solution.icon}
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{solution.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture Preview */}
        <div className="mt-32 text-center">
          <Card variant="glass" className="max-w-6xl mx-auto p-8 overflow-hidden">
            <h3 className="text-2xl font-display font-semibold mb-8">How It Works</h3>
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
              <div className="bg-primary/10 rounded-lg p-6 border border-primary/20 flex-1 min-w-0">
                <div className="font-semibold text-primary mb-2 text-lg">Submit Proof</div>
                <div className="text-muted-foreground text-sm">GPS + Photos</div>
              </div>
              <div className="text-primary text-2xl hidden lg:block">→</div>
              <div className="text-primary text-2xl lg:hidden rotate-90">→</div>
              <div className="bg-accent/10 rounded-lg p-6 border border-accent/20 flex-1 min-w-0">
                <div className="font-semibold text-accent mb-2 text-lg">Verification</div>
                <div className="text-muted-foreground text-sm">DAO/Oracle</div>
              </div>
              <div className="text-accent text-2xl hidden lg:block">→</div>
              <div className="text-accent text-2xl lg:hidden rotate-90">→</div>
              <div className="bg-secondary/10 rounded-lg p-6 border border-secondary/20 flex-1 min-w-0">
                <div className="font-semibold text-secondary mb-2 text-lg">Earn $GUI</div>
                <div className="text-muted-foreground text-sm">Instant Rewards</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolution;