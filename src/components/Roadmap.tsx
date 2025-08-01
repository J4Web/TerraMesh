import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Circle, Clock, Rocket } from "lucide-react";

const Roadmap = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "MVP Foundation",
      status: "current",
      timeline: "Q1 2025",
      description: "Core infrastructure and basic functionality",
      milestones: [
        "Proof submission interface",
        "DAO verification system", 
        "GUI reward distribution",
        "Basic Move smart contracts",
        "IPFS integration"
      ]
    },
    {
      phase: "Phase 2", 
      title: "Privacy & Verification",
      status: "planned",
      timeline: "Q2 2025",
      description: "Advanced verification and privacy features",
      milestones: [
        "zk-SNARK integration",
        "Private proof verification",
        "Oracle network expansion",
        "Advanced fraud detection",
        "Mobile app development"
      ]
    },
    {
      phase: "Phase 3",
      title: "DeFi Integration",
      status: "planned", 
      timeline: "Q3 2025",
      description: "Credit trading and DeFi composability",
      milestones: [
        "EcoCredit marketplace",
        "Liquidity pools",
        "Cross-chain bridges",
        "Collateralization protocols",
        "Yield farming mechanisms"
      ]
    },
    {
      phase: "Phase 4",
      title: "Global Expansion",
      status: "future",
      timeline: "Q4 2025",
      description: "Worldwide adoption and ecosystem partnerships",
      milestones: [
        "Global DAO governance",
        "Enterprise partnerships",
        "Regulatory compliance",
        "Multi-chain deployment",
        "Carbon market integration"
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "current":
        return <Clock className="h-5 w-5 text-primary" />;
      case "planned":
        return <Circle className="h-5 w-5 text-accent" />;
      case "future":
        return <Rocket className="h-5 w-5 text-muted-foreground" />;
      default:
        return <CheckCircle2 className="h-5 w-5 text-accent" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "current":
        return "glow";
      case "planned":
        return "accent";
      case "future":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Development <span className="bg-gradient-ocean bg-clip-text text-transparent">Roadmap</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our journey to revolutionize environmental impact verification and tokenization
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-muted hidden md:block" />
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full bg-card border-2 border-primary shadow-glow hidden md:block" />
                
                <div className="md:ml-20">
                  <Card variant={phase.status === "current" ? "glow" : "glass"} className="hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                        <div className="flex items-center gap-3">
                          {getStatusIcon(phase.status)}
                          <Badge variant={getStatusColor(phase.status)} className="text-xs px-3 py-1">
                            {phase.phase}
                          </Badge>
                        </div>
                        <Badge variant="outline" className="text-xs w-fit">
                          {phase.timeline}
                        </Badge>
                      </div>
                      
                      <h3 className="text-2xl font-display font-semibold mb-2">{phase.title}</h3>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.milestones.map((milestone, milestoneIndex) => (
                          <div key={milestoneIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{milestone}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 text-center">
          <Card variant="glass" className="p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Join the Journey
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of the future of environmental impact verification. Follow our progress and contribute to the ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="glow" className="px-4 py-2 text-sm">
                📧 Newsletter Updates
              </Badge>
              <Badge variant="glow" className="px-4 py-2 text-sm">
                🐦 Twitter Announcements
              </Badge>
              <Badge variant="glow" className="px-4 py-2 text-sm">
                💬 Discord Community
              </Badge>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;