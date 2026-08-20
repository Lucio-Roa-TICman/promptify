import { LandingNav } from "@/components/LandingNav";
import { LandingFooter } from "@/components/LandingFooter";
import { Hero } from "@/components/hero/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { PromptPieces } from "@/components/sections/PromptPieces";
import { LearnByDoing } from "@/components/sections/LearnByDoing";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f3f2f2] text-ink dark:bg-[#16130e] dark:text-[#f2eee4]">
      <LandingNav />
      <Hero />
      <Marquee />
      <PromptPieces />
      <LearnByDoing />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
}
