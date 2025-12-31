import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsSection />
    </Layout>
  );
};

export default Index;
