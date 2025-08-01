import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-depth" />
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/10 animate-pulse" />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-accent/10 animate-bounce" />
      <div className="absolute bottom-20 left-20 w-12 h-12 rounded-full bg-primary-glow/20 animate-pulse" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Logo positioned top-left */}
        <div className="absolute top-8 left-8">
          <div className="w-40 h-12 bg-primary/20 rounded-lg border border-primary/30 flex items-center justify-center backdrop-blur-sm">
            <span className="text-primary font-display font-bold text-xl">TerraMesh</span>
          </div>
        </div>

        <div className="text-center pt-32">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            EcoCredit Protocol for
            <span className="bg-gradient-ocean bg-clip-text text-transparent"> Tokenized Public Goods</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Rewarding real-world environmental and infrastructure contributions using <span className="text-primary font-semibold">$GUI tokens</span>, zk-proofs, and decentralized verification on Aptos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="xl" className="group">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glow" size="xl">
              View Documentation
            </Button>
          </div>

          {/* Key features badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">zk-Proof Verification</span>
            </div>
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/20">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Environmental Impact</span>
            </div>
            <div className="flex items-center gap-2 bg-card/30 backdrop-blur-sm rounded-full px-4 py-2 border border-secondary/20">
              <Zap className="h-4 w-4 text-secondary" />
              <span className="text-sm font-medium">DePIN Infrastructure</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary mb-2">$GUI</div>
              <div className="text-muted-foreground">Utility Token</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent mb-2">DAO</div>
              <div className="text-muted-foreground">Governed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-secondary mb-2">Aptos</div>
              <div className="text-muted-foreground">Blockchain</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;