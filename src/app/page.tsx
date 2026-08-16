import { LandingNav } from "@/components/LandingNav";
import { LandingFooter } from "@/components/LandingFooter";
import { Hero } from "@/components/hero/Hero";
import { IntroVisual } from "@/components/sections/IntroVisual";
import { CharacterShowcase } from "@/components/sections/CharacterShowcase";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { EducationalVisual } from "@/components/sections/EducationalVisual";
import { ToolsEcosystem } from "@/components/sections/ToolsEcosystem";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <LandingNav />
      <Hero />
      <IntroVisual />
      <CharacterShowcase />
      <HowItWorks />
      <EducationalVisual />
      <ToolsEcosystem />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
}
