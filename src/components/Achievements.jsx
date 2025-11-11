import React from "react";
import { Trophy, Award, Star, ExternalLink, Linkedin, Sparkles } from "lucide-react";

function Achievements() {
 const achievements = [
  {
    title: "Winner – 2025 MGEN Hackathon",
    organization: "Northeastern University",
    year: "2025",
    description:
      "Won 1st place at the largest 2025 MGEN Hackathon at Northeastern University for developing an innovative AI-powered solution with React, Node.js, and cloud technologies.",
    icon: <Trophy size={18} className="text-yellow-500" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7389700335193407488/",
    preview:
      "🏆 Honored to win 1st place at the 2025 MGEN Hackathon! Built an innovative AI-driven solution leveraging modern full-stack tools and teamwork excellence.",
  },
  {
    title: "Runner-Up – NUHACKS 2024 (LexisNexis Hackathon)",
    organization: "Northeastern University",
    year: "2024",
    description:
      "Secured 2nd place at NUHACKS 2024 organized by LexisNexis for building and optimizing datasets using the HPCC Systems platform and ECL language.",
    icon: <Award size={18} className="text-green-500" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7260689198158929921/",
    preview:
      "🥈 Thrilled to be Runner-Up at NUHACKS 2024 by LexisNexis! Worked on HPCC Systems using ECL to optimize and analyze datasets for impactful insights.",
  },
  {
    title: "Rising Star Award",
    organization: "BNP Paribas",
    year: "2022",
    description:
      "Recognized with the Rising Star Award at BNP Paribas for exceptional performance and innovative contributions to Calypso development and process automation within the investment banking domain.",
    icon: <Star size={18} className="text-primary" />,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7077470221237714944/",
    preview:
      "⭐ Grateful to receive the Rising Star Award at BNP Paribas for my contributions to Calypso development and automation in the investment banking space.",
  },
];


  return (
    <section id="achievements" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Achievements</span>
        </h2>

        <div className="flex justify-center">
          <div className="relative border-l-2 border-primary/30 ml-[30px]   ">
            {achievements.map((item, index) => (
              <div key={index} className="relative mb-10 pl-10 group">
                {/* Timeline Icon */}
                <span className="absolute -left-[13px] top-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background text-primary">
                  {item.icon}
                </span>

                {/* Card */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-transform md:w-[500px] sm:w-full overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <span className="text-sm text-muted-foreground italic mt-1 md:mt-0">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="text-sm text-primary font-medium mb-2">
                    {item.organization}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Preview Overlay */}
                  <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center text-center rounded-xl backdrop-blur-sm">
                    <p className="text-sm text-foreground leading-relaxed mb-4">
                      {item.preview}
                    </p>
                    <div className="inline-flex items-center justify-center gap-2 text-primary font-semibold">
                     <Linkedin size={16} /> View on LinkedIn <ExternalLink size={16} />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
         <div className="flex justify-center mt-12">
          <Sparkles className="text-primary animate-pulse" size={28} />
        </div>
      </div>
    </section>
  );
}

export default Achievements;
