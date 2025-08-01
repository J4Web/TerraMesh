import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Blocks, Database, Shield, Users, Globe, Cpu } from "lucide-react";

const TechStack = () => {
  const technologies = [
    {
      icon: <Blocks className="h-8 w-8 text-primary" />,
      category: "Blockchain",
      title: "Aptos",
      description: "High-performance blockchain with Move smart contracts for secure and scalable DeFi operations",
      tags: ["Move Language", "High TPS", "Secure"]
    },
    {
      icon: <Database className="h-8 w-8 text-accent" />,
      category: "Storage",
      title: "IPFS + Arweave",
      description: "Content-addressed storage for immutable proof storage and decentralized data availability",
      tags: ["Immutable", "Decentralized", "CID"]
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      category: "Verification",
      title: "zk-SNARKs",
      description: "Zero-knowledge proofs for privacy-preserving verification and Oracle/DAO witness schemes",
      tags: ["Privacy", "Zero-Knowledge", "Cryptographic"]
    },
    {
      icon: <Users className="h-8 w-8 text-primary-glow" />,
      category: "Governance",
      title: "DAO",
      description: "Decentralized governance for parameter updates, treasury management, and protocol evolution",
      tags: ["Decentralized", "Community", "Voting"]
    },
    {
      icon: <Globe className="h-8 w-8 text-accent" />,
      category: "Frontend",
      title: "Web3 dApp",
      description: "Modern web application with proof submission interface and verifier dashboard",
      tags: ["React", "Web3", "Responsive"]
    },
    {
      icon: <Cpu className="h-8 w-8 text-secondary" />,
      category: "Infrastructure",
      title: "DePIN",
      description: "Decentralized Physical Infrastructure Network for real-world impact verification",
      tags: ["IoT", "Sensors", "Edge Computing"]
    }
  ];

  return (
    <div className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built on cutting-edge blockchain and decentralized technologies for maximum security and scalability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} variant="glow" className="group hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-card/50 border border-current/20">
                    {tech.icon}
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {tech.category}
                    </Badge>
                    <CardTitle className="text-xl">{tech.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {tech.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tech.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="mt-20">
          <Card variant="glass" className="p-8">
            <h3 className="text-2xl font-display font-semibold text-center mb-8">
              System Architecture
            </h3>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center text-center">
                <div className="bg-primary/10 rounded-lg p-4 border border-primary/30">
                  <div className="font-semibold text-primary mb-2">Contributor</div>
                  <div className="text-xs text-muted-foreground">Submit Action</div>
                </div>
                <div className="text-primary text-xl">→</div>
                <div className="bg-accent/10 rounded-lg p-4 border border-accent/30">
                  <div className="font-semibold text-accent mb-2">IPFS/Arweave</div>
                  <div className="text-xs text-muted-foreground">Store Proof</div>
                </div>
                <div className="text-accent text-xl">→</div>
                <div className="bg-secondary/10 rounded-lg p-4 border border-secondary/30">
                  <div className="font-semibold text-secondary mb-2">Verification</div>
                  <div className="text-xs text-muted-foreground">zk/Oracle</div>
                </div>
                <div className="text-secondary text-xl">→</div>
                <div className="bg-primary-glow/10 rounded-lg p-4 border border-primary-glow/30">
                  <div className="font-semibold text-primary-glow mb-2">$GUI Reward</div>
                  <div className="text-xs text-muted-foreground">Move Contract</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TechStack;