import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import TechStack from "@/components/TechStack";
import TokenUtility from "@/components/TokenUtility";
import Roadmap from "@/components/Roadmap";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemSolution />
      <TechStack />
      <TokenUtility />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default Index;