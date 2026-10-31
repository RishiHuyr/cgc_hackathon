import React from "react";
import { 
  AlertTriangle, 
  Search, 
  Cpu, 
  MapPin, 
  Cloud, 
  ShieldCheck 
} from "lucide-react";

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: WorkflowStep[] = [
  {
    number: "01",
    title: "Emergency Occurs",
    description: "Accident, fire or SOS activation.",
    icon: <AlertTriangle className="w-6 h-6 stroke-[2.2] text-black" />
  },
  {
    number: "02",
    title: "Detection",
    description: "Sensors or AI identify the emergency.",
    icon: <Search className="w-6 h-6 stroke-[2.2] text-black" />
  },
  {
    number: "03",
    title: "ESP32 Processing",
    description: "Processes the trigger and initiates evidence capture.",
    icon: <Cpu className="w-6 h-6 stroke-[2.2] text-black" />
  },
  {
    number: "04",
    title: "Location & Evidence",
    description: "Attach pole GPS location and available camera evidence.",
    icon: <MapPin className="w-6 h-6 stroke-[2.2] text-black" />
  },
  {
    number: "05",
    title: "Firebase & Dashboard",
    description: "Send incident information to the cloud and display a live alert.",
    icon: <Cloud className="w-6 h-6 stroke-[2.2] text-black" />
  },
  {
    number: "06",
    title: "Emergency Response",
    description: "Authorities review the alert and coordinate assistance.",
    icon: <ShieldCheck className="w-6 h-6 stroke-[2.2] text-black" />
  }
];

export const WorkflowSection: React.FC = () => {
  return (
    <section 
      id="workflow" 
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

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 relative z-10 w-full">
        
        {/* ================= HEADER ================= */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Outlined pill label */}
          <div className="inline-block px-4 py-1 rounded-full border border-[#b5ff4d] text-[#b5ff4d] text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_0_12px_rgba(181,255,77,0.2)]">
            WORKFLOW
          </div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-3">
            How <span className="text-[#b5ff4d]">SmartSuraksha</span> Works
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-gray-400 font-normal max-w-xl mx-auto">
            From emergency detection to faster response — every second matters.
          </p>
        </div>

        {/* ================= DESKTOP HORIZONTAL S-WAVE WORKFLOW (Visible on lg+) ================= */}
        <div className="hidden lg:block relative w-full h-[540px]">
          
          {/* SVG WAVE PATH & CONNECTORS */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none z-10" 
            viewBox="0 0 1340 540" 
            fill="none" 
            preserveAspectRatio="none"
          >
            <defs>
              {/* Neon Glow Filter */}
              <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Arrowhead Marker */}
              <marker 
                id="waveArrow" 
                viewBox="0 0 12 12" 
                refX="9" 
                refY="6" 
                markerWidth="9" 
                markerHeight="9" 
                orient="auto-start-reverse"
              >
                <path d="M 1 2 L 11 6 L 1 10 z" fill="#b5ff4d" />
              </marker>
            </defs>

            {/* Dotted Vertical Connector Lines from Cards to Nodes */}
            {/* Step 01: Card bottom (180, 140) -> Node 1 (180, 210) */}
            <line x1="180" y1="140" x2="180" y2="210" stroke="#b5ff4d" strokeWidth="2" strokeDasharray="3 3" />

            {/* Step 02: Node 2 (380, 330) -> Card top (380, 400) */}
            <line x1="380" y1="330" x2="380" y2="400" stroke="#b5ff4d" strokeWidth="2" strokeDasharray="3 3" />

            {/* Step 03: Card bottom (580, 140) -> Node 3 (580, 210) */}
            <line x1="580" y1="140" x2="580" y2="210" stroke="#b5ff4d" strokeWidth="2" strokeDasharray="3 3" />

            {/* Step 04: Node 4 (780, 330) -> Card top (780, 400) */}
            <line x1="780" y1="330" x2="780" y2="400" stroke="#b5ff4d" strokeWidth="2" strokeDasharray="3 3" />

            {/* Step 05: Card bottom (980, 140) -> Node 5 (980, 210) */}
            <line x1="980" y1="140" x2="980" y2="210" stroke="#b5ff4d" strokeWidth="2" strokeDasharray="3 3" />

            {/* Step 06: Node 6 (1180, 330) -> Card top (1180, 400) */}
            <line x1="1180" y1="330" x2="1180" y2="400" stroke="#b5ff4d" strokeWidth="2" strokeDasharray="3 3" />

            {/* Main Smooth Continuous Wave Path */}
            <path 
              id="mainWavePath"
              d="M 30 270 
                 C 80 270, 110 210, 180 210 
                 C 260 210, 300 330, 380 330 
                 C 460 330, 500 210, 580 210 
                 C 660 210, 700 330, 780 330 
                 C 860 330, 900 210, 980 210 
                 C 1060 210, 1100 330, 1180 330 
                 C 1235 330, 1285 240, 1315 190" 
              stroke="#b5ff4d" 
              strokeWidth="3.2" 
              strokeLinecap="round" 
              fill="none" 
              filter="url(#waveGlow)"
              markerEnd="url(#waveArrow)"
            />

            {/* Start Node Dot (Far Left) */}
            <circle cx="30" cy="270" r="5" fill="#b5ff4d" />

            {/* Node 1: Circular node (Crest) */}
            <circle cx="180" cy="210" r="9" stroke="#b5ff4d" strokeWidth="2.5" fill="#07080A" />
            <circle cx="180" cy="210" r="3.5" fill="#b5ff4d" />

            {/* Node 2: Square node (Trough) */}
            <rect x="371" y="321" width="18" height="18" rx="3" stroke="#b5ff4d" strokeWidth="2.5" fill="#07080A" />
            <rect x="377" y="327" width="6" height="6" rx="1" fill="#b5ff4d" />

            {/* Node 3: Circular node (Crest) */}
            <circle cx="580" cy="210" r="9" stroke="#b5ff4d" strokeWidth="2.5" fill="#07080A" />
            <circle cx="580" cy="210" r="3.5" fill="#b5ff4d" />

            {/* Node 4: Square node (Trough) */}
            <rect x="771" y="321" width="18" height="18" rx="3" stroke="#b5ff4d" strokeWidth="2.5" fill="#07080A" />
            <rect x="777" y="327" width="6" height="6" rx="1" fill="#b5ff4d" />

            {/* Node 5: Circular node (Crest) */}
            <circle cx="980" cy="210" r="9" stroke="#b5ff4d" strokeWidth="2.5" fill="#07080A" />
            <circle cx="980" cy="210" r="3.5" fill="#b5ff4d" />

            {/* Node 6: Square node (Trough) */}
            <rect x="1171" y="321" width="18" height="18" rx="3" stroke="#b5ff4d" strokeWidth="2.5" fill="#07080A" />
            <rect x="1177" y="327" width="6" height="6" rx="1" fill="#b5ff4d" />

            {/* Animated Glowing Energy Dot Traveling along Wave */}
            <circle r="4.5" fill="#ffffff" filter="url(#waveGlow)">
              <animateMotion 
                dur="7s" 
                repeatCount="indefinite" 
                path="M 30 270 
                      C 80 270, 110 210, 180 210 
                      C 260 210, 300 330, 380 330 
                      C 460 330, 500 210, 580 210 
                      C 660 210, 700 330, 780 330 
                      C 860 330, 900 210, 980 210 
                      C 1060 210, 1100 330, 1180 330 
                      C 1235 330, 1285 240, 1315 190" 
              />
            </circle>
          </svg>

          {/* ================= CARDS PLACEMENT (ABOVE & BELOW PATH) ================= */}
          {/* Card 01 (Top Row, Center X = ~180px, left: 45px) */}
          <div 
            className="absolute z-20 w-[270px] top-4 left-[45px]"
          >
            <WorkflowCard step={steps[0]} />
          </div>

          {/* Card 02 (Bottom Row, Center X = ~380px, left: 245px) */}
          <div 
            className="absolute z-20 w-[270px] top-[400px] left-[245px]"
          >
            <WorkflowCard step={steps[1]} />
          </div>

          {/* Card 03 (Top Row, Center X = ~580px, left: 445px) */}
          <div 
            className="absolute z-20 w-[270px] top-4 left-[445px]"
          >
            <WorkflowCard step={steps[2]} />
          </div>

          {/* Card 04 (Bottom Row, Center X = ~780px, left: 645px) */}
          <div 
            className="absolute z-20 w-[270px] top-[400px] left-[645px]"
          >
            <WorkflowCard step={steps[3]} />
          </div>

          {/* Card 05 (Top Row, Center X = ~980px, left: 845px) */}
          <div 
            className="absolute z-20 w-[270px] top-4 left-[845px]"
          >
            <WorkflowCard step={steps[4]} />
          </div>

          {/* Card 06 (Bottom Row, Center X = ~1180px, left: 1045px) */}
          <div 
            className="absolute z-20 w-[270px] top-[400px] left-[1045px]"
          >
            <WorkflowCard step={steps[5]} />
          </div>

        </div>

        {/* ================= MOBILE / TABLET VERTICAL TIMELINE (Visible on < lg) ================= */}
        <div className="lg:hidden relative">
          
          {/* Vertical Neon Glowing Timeline Line */}
          <div className="absolute top-6 bottom-6 left-6 w-[3px] bg-[#b5ff4d] shadow-[0_0_12px_#b5ff4d]" />

          <div className="flex flex-col gap-8 pl-14">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div key={step.number} className="relative">
                  {/* Node Icon on Timeline */}
                  <div className="absolute -left-[45px] top-1/2 -translate-y-1/2 z-10">
                    {!isEven ? (
                      /* Circular Node */
                      <div className="w-6 h-6 rounded-full border-2 border-[#b5ff4d] bg-[#07080A] flex items-center justify-center shadow-[0_0_8px_#b5ff4d]">
                        <div className="w-2 h-2 rounded-full bg-[#b5ff4d]" />
                      </div>
                    ) : (
                      /* Square Node */
                      <div className="w-5 h-5 rounded-[4px] border-2 border-[#b5ff4d] bg-[#07080A] flex items-center justify-center shadow-[0_0_8px_#b5ff4d]">
                        <div className="w-1.5 h-1.5 rounded-[1px] bg-[#b5ff4d]" />
                      </div>
                    )}
                  </div>

                  {/* Horizontal dotted connector from timeline node to card */}
                  <div className="absolute -left-[20px] top-1/2 -translate-y-1/2 w-5 border-t-2 border-dashed border-[#b5ff4d]" />

                  {/* The Card */}
                  <div className="w-full max-w-md">
                    <WorkflowCard step={step} />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

/* ================= INDIVIDUAL WORKFLOW CARD COMPONENT ================= */
interface WorkflowCardProps {
  step: WorkflowStep;
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ step }) => {
  return (
    <div 
      className="relative bg-white text-black rounded-[20px] p-4 sm:p-4.5 border-2 border-black transition-all duration-300 hover:-translate-y-1"
      style={{
        boxShadow: "6px 6px 0px #b5ff4d"
      }}
    >
      {/* Overlapping Number Badge on Top-Left */}
      <div className="absolute -top-3 left-4 px-2.5 py-0.5 rounded-full border-2 border-black bg-[#b5ff4d] font-black text-[11px] text-black tracking-wide shadow-[1px_1px_0px_#000]">
        {step.number}
      </div>

      <div className="flex items-center gap-3.5">
        {/* Lime-green square icon container */}
        <div className="w-12 h-12 rounded-2xl border-2 border-black bg-[#b5ff4d] flex items-center justify-center shrink-0 text-black shadow-[1px_1px_0px_#000]">
          {step.icon}
        </div>

        {/* Text Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-black text-black tracking-tight leading-snug truncate">
            {step.title}
          </h4>
          <p className="text-xs text-gray-600 leading-snug font-normal line-clamp-2 mt-0.5">
            {step.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;

