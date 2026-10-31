import React from "react";
import { Cpu, Lightbulb } from "lucide-react";

// Server / Database Custom Icon (Matches reference screenshot)
const ServerIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="5" rx="1.5" />
    <rect x="2" y="10" width="20" height="5" rx="1.5" />
    <rect x="2" y="17" width="20" height="5" rx="1.5" />
    <circle cx="6" cy="5.5" r="1" fill="currentColor" />
    <circle cx="6" cy="12.5" r="1" fill="currentColor" />
    <circle cx="6" cy="19.5" r="1" fill="currentColor" />
  </svg>
);

// Code </ > Custom Icon (Matches reference screenshot)
const CodeIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 6 2 12 8 18" />
    <line x1="14" y1="4" x2="10" y2="20" />
    <polyline points="16 6 22 12 16 18" />
  </svg>
);

interface TeamMember {
  number: string;
  name: string;
  role: string;
  description: string;
  icon: React.ReactNode;
}

const teamMembers: TeamMember[] = [
  {
    number: "01",
    name: "Aditya",
    role: "Backend Developer",
    description: "Building the backend architecture, database integration and real-time emergency data flow.",
    icon: <ServerIcon />
  },
  {
    number: "02",
    name: "Rishi",
    role: "Frontend Developer",
    description: "Designing the user interface and building an intuitive, responsive authority dashboard.",
    icon: <CodeIcon />
  },
  {
    number: "03",
    name: "Piyush",
    role: "IoT Developer",
    description: "Working on ESP32, sensor integration and hardware communication for smart safety systems.",
    icon: <Cpu className="w-8 h-8 stroke-[2.2] text-black" />
  },
  {
    number: "04",
    name: "Kanika",
    role: "Research & Development",
    description: "Researching safety solutions, system requirements and innovative approaches for SmartSuraksha.",
    icon: <Lightbulb className="w-8 h-8 stroke-[2.2] text-black" />
  }
];

export const TeamSection: React.FC = () => {
  return (
    <section 
      id="team" 
      className="relative w-full py-24 lg:py-32 overflow-hidden bg-[#07080A] text-white selection:bg-[#b5ff4d] selection:text-black"
    >
      {/* Subtle Background Ambience */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-15"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 40%, transparent 85%)",
        }}
      />

      <div className="max-w-[1360px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Outlined Pill Label */}
          <div className="inline-block px-4 py-1 rounded-full border border-[#b5ff4d] text-[#b5ff4d] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(181,255,77,0.2)]">
            TEAM
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3">
            The Minds Behind <span className="text-[#b5ff4d]">SmartSuraksha</span>
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-400 font-normal max-w-xl mx-auto">
            Four minds. One mission. Making streets safer through intelligent technology.
          </p>
        </div>

        {/* ================= 4 TEAM CARDS (1 HORIZONTAL ROW ON DESKTOP) ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-7 items-stretch">
          {teamMembers.map((member) => (
            <div 
              key={member.name}
              className="relative bg-white text-black rounded-[22px] p-6 sm:p-7 border-2 border-black flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "7px 7px 0px #b5ff4d"
              }}
            >
              {/* Overlapping Number Badge */}
              <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full border-2 border-black bg-[#b5ff4d] font-black text-xs text-black tracking-wide">
                {member.number}
              </div>

              {/* Top Details */}
              <div>
                <div className="flex items-center gap-4 mb-5">
                  {/* Icon Box */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-black bg-[#b5ff4d] flex items-center justify-center shrink-0 text-black shadow-[1px_1px_0px_#000]">
                    {member.icon}
                  </div>

                  {/* Name & Role */}
                  <div className="min-w-0">
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-none mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs sm:text-sm italic font-medium text-gray-500">
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
