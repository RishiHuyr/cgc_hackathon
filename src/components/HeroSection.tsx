import React from "react";
import { Play } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full pt-24 pb-28 sm:pb-32 lg:pb-36 overflow-visible bg-[#07080A] text-white selection:bg-[#b5ff4d] selection:text-black"
    >
      {/* Subtle Grid Texture Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.07) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse at 50% 45%, black 45%, transparent 85%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 45%, black 45%, transparent 85%)",
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 left-1/12 w-[28rem] h-[28rem] bg-[#b5ff4d]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-[32rem] h-[32rem] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full overflow-visible">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center overflow-visible">
          
          {/* ================= LEFT SIDE: TYPOGRAPHY, BUTTONS & STATS ================= */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-7">
            
            {/* Hero Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs sm:text-sm font-medium text-white/90 shadow-inner backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#b5ff4d] shadow-[0_0_10px_#b5ff4d] animate-pulse" />
              <span className="tracking-wide text-white/80">AI Powered • IoT Enabled • 24/7 Monitoring</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Safer Streets.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b5ff4d] via-[#d4ff70] to-[#8fe620]">
                Smarter Cities.
              </span><br />
              Faster Response.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-xl font-normal">
              An intelligent IoT-powered street safety system designed to detect emergencies, capture evidence, track real-time locations, and connect authorities for faster response. Making every street safer, day and night.
            </p>

            {/* Main Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-1">
              <a 
                href="#explore"
                className="px-8 py-4 rounded-xl bg-[#b5ff4d] hover:bg-[#c8ff6e] text-[#0a0a0a] font-bold text-base transition-all duration-300 shadow-[0_0_30px_rgba(181,255,77,0.35)] hover:shadow-[0_0_45px_rgba(181,255,77,0.6)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 group"
              >
                <span>Explore System →</span>
              </a>

              <a 
                href="#how-it-works"
                className="px-7 py-4 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.12] text-white font-semibold text-base transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-3 group"
              >
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#b5ff4d] group-hover:text-black transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <span>How It Works</span>
              </a>
            </div>

            {/* Bottom Statistics */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-3 gap-6 w-full max-w-lg">
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">24/7</p>
                <p className="text-xs text-white/50 mt-0.5">Continuous Monitoring</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#b5ff4d] tracking-tight">REAL-TIME</p>
                <p className="text-xs text-white/50 mt-0.5">Emergency Alerts</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white tracking-tight">GPS</p>
                <p className="text-xs text-white/50 mt-0.5">Location Tracking</p>
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE: HERO VISUAL WITH OVERLAPPING BOTTOM-LEFT 3-ROW DASHBOARD ================= */}
          <div className="lg:col-span-6 relative mt-12 lg:mt-0 flex items-center justify-center overflow-visible">
            
            {/* Relatively positioned wrapper with overflow-visible to let dashboard extend outside */}
            <div className="relative w-full max-w-[540px] overflow-visible">
              
              {/* Ambient Glow */}
              <div className="absolute -inset-2 rounded-[34px] bg-gradient-to-tr from-[#b5ff4d]/25 via-white/5 to-emerald-500/15 blur-2xl opacity-60 pointer-events-none" />

              {/* Main Visual Frame with Neon-Lime-Green Border */}
              <div className="relative w-full rounded-[28px] sm:rounded-[32px] overflow-hidden border-2 border-[#b5ff4d] bg-[#0c0d12] shadow-2xl shadow-black/90 aspect-[16/11] sm:aspect-[4/3] lg:aspect-[16/11]">
                
                {/* Top-left window dots from reference image */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 opacity-60 pointer-events-none">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/70" />
                </div>

                {/* Smart Street Safety Pole Video (Pole, CCTV, sensors, sunset sky background) */}
                <video
                  src="/cgc.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/cgc.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* ================= EXACT DASHBOARD OVERLAY (ONLY 3 ROWS, EXACT REFERENCE) ================= */}
              {/* Overlaps bottom-left corner of the video frame, extending slightly beyond left and bottom */}
              <div className="relative sm:absolute sm:-bottom-[55px] sm:-left-[35px] mt-4 sm:mt-0 z-30 w-full sm:w-[440px] lg:w-[455px] bg-[#07090c]/98 backdrop-blur-xl rounded-[26px] px-6 py-5 sm:px-7 sm:py-6 border-2 border-[#b5ff4d] shadow-[0_20px_50px_rgba(0,0,0,0.95)] transition-transform duration-300 hover:scale-[1.01]">
                
                {/* ONLY 3 STATUS ROWS */}
                <div className="space-y-4">
                  {/* Row 1: Camera Monitoring */}
                  <div>
                    <div className="flex justify-between items-center text-sm sm:text-[15px] mb-2">
                      <span className="font-bold text-white tracking-tight">Camera Monitoring</span>
                      <span className="font-bold text-[#b5ff4d] text-xs sm:text-[13px] font-mono tracking-wider">
                        ACTIVE &nbsp;|&nbsp; 100%
                      </span>
                    </div>
                    <div className="w-full h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#b5ff4d] rounded-full w-full shadow-[0_0_8px_#b5ff4d]" />
                    </div>
                  </div>

                  {/* Row 2: GPS Tracking */}
                  <div>
                    <div className="flex justify-between items-center text-sm sm:text-[15px] mb-2">
                      <span className="font-bold text-white tracking-tight">GPS Tracking</span>
                      <span className="font-bold text-[#b5ff4d] text-xs sm:text-[13px] font-mono tracking-wider">
                        ENABLED &nbsp;|&nbsp; 100%
                      </span>
                    </div>
                    <div className="w-full h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#b5ff4d] rounded-full w-full shadow-[0_0_8px_#b5ff4d]" />
                    </div>
                  </div>

                  {/* Row 3: System Status */}
                  <div>
                    <div className="flex justify-between items-center text-sm sm:text-[15px] mb-2">
                      <span className="font-bold text-white tracking-tight">System Status</span>
                      <span className="font-bold text-[#b5ff4d] text-xs sm:text-[13px] font-mono tracking-wider">
                        OPERATIONAL &nbsp;|&nbsp; 100%
                      </span>
                    </div>
                    <div className="w-full h-2 sm:h-2.5 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-[#b5ff4d] rounded-full w-full shadow-[0_0_8px_#b5ff4d]" />
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
