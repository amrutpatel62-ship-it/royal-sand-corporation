"use client";

import Hero from "../components/about/Hero";
import MissionVision from "../components/about/MissionVision";
import ChallengeSolution from "../components/about/ChallengeSolution";
import LeadershipTeam from "../components/about/LeadershipTeam";
import CTA from "../components/about/CTA";

export default function about() {
  return (
    <>
      <Hero />
      <MissionVision />
      <ChallengeSolution />
      <LeadershipTeam />
      <CTA />
    </>
  );
}
