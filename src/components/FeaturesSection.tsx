import React, { useState, useRef } from "react";
import { 
  Flame, 
  X, 
  Play, 
  Pause, 
  Maximize, 
  ArrowRight,
  Volume2,
  VolumeX
} from "lucide-react";

// CCTV Camera Custom Icon
const CctvIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="9" width="12" height="6.5" rx="1.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M15 10.5l5-3v9l-5-3v-3z" fill="currentColor" fillOpacity="0.2" />
    <circle cx="6.5" cy="12.2" r="1.3" fill="currentColor" />
    <path d="M7 15.5v3.5M4 19h6" />
  </svg>
);

// SOS Shield with User Silhouette Icon
const SosShieldIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor" fillOpacity="0.2" />
    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
    <path d="M8 16c0-2 1.8-3 4-3s4 1 4 3" />
  </svg>
);

// Accident Detection Car with Alert Beacon Icon
const AccidentCarIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 11 7 5.5h10l2 5.5" />
    <rect x="3" y="11" width="18" height="6.5" rx="2" fill="currentColor" fillOpacity="0.2" />
    <circle cx="7" cy="14.5" r="1.4" fill="currentColor" />
    <circle cx="17" cy="14.5" r="1.4" fill="currentColor" />
    <path d="M12 2v2M9.5 2.5l.5 1.5M14.5 2.5l-.5 1.5" />
  </svg>
);

interface FeatureData {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detailedInfo: string;
  accentColor: string;
  shadowColor: string;
  icon: React.ReactNode;
}

const features: FeatureData[] = [
  {
    id: "cctv",
    number: "01",
    title: "CCTV Camera",
    subtitle: "Intelligent street surveillance",
    description: "Monitors street surroundings and captures visual evidence during incidents.",
    detailedInfo: "High-definition 360-degree street surveillance with AI vision. Continuously buffers video footage and automatically isolates and saves high-resolution evidence clips whenever an emergency or anomaly occurs.",
    accentColor: "#b5ff4d",
    shadowColor: "#b5ff4d",
    icon: <CctvIcon />
  },
  {
    id: "fire",
    number: "02",
    title: "Fire Detection",
    subtitle: "Early fire warning",
    description: "Detects possible fire using a flame sensor and immediately generates an emergency alert.",
    detailedInfo: "Industrial-grade optical flame sensor combined with thermal anomaly detection. Instantly flags fire outbreaks, activates the high-decibel beacon, and transmits GPS coordinates directly to emergency responders.",
    accentColor: "#facc15",
    shadowColor: "#facc15",
    icon: <Flame className="w-8 h-8 stroke-[2.2] text-black fill-black/15" />
  },
  {
    id: "sos",
    number: "03",
    title: "Women Safety SOS",
    subtitle: "Instant emergency assistance",
    description: "Allows individuals to trigger an SOS alert and share their location with authorities.",
    detailedInfo: "Physical high-visibility emergency push button with immediate haptic response. Dispatches an encrypted SOS beacon to local authorities, turns on pole floodlights, and establishes a prioritized video/audio link.",
    accentColor: "#ff69b4",
    shadowColor: "#ff69b4",
    icon: <SosShieldIcon />
  },
  {
    id: "accident",
    number: "04",
    title: "Accident Detection",
    subtitle: "Smart accident monitoring",
    description: "Identifies potential road accidents and sends incident details and available camera evidence.",
    detailedInfo: "Acoustic and computer vision collision detection algorithms. Captures the moment of vehicular impact, tags lane coordinates, and forwards actionable incident telemetry to the nearest trauma hospital.",
    accentColor: "#38bdf8",
    shadowColor: "#38bdf8",
    icon: <AccidentCarIcon />
  }
];

export const FeaturesSection: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(3);
  const [duration, setDuration] = useState<number>(10);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Toggle Video Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Audio Mute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (timeInSeconds: number) => {
    const mins = Math.floor(timeInSeconds / 60);
    const secs = Math.floor(timeInSeconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section 
      id="features" 
      className="relative w-full py-20 lg:py-28 overflow-hidden bg-[#07080a] text-white selection:bg-[#b5ff4d] selection:text-black"
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
        
        {/* ================= SECTION HEADING ================= */}
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            One Pole. Four <span className="text-[#b5ff4d]">Powerful Safety Features.</span>
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-gray-400 font-normal max-w-2xl mx-auto">
            An intelligent safety network designed to detect emergencies and protect lives.
          </p>
        </div>

        {/* ================= MAIN 3-COLUMN DESKTOP / RESPONSIVE LAYOUT ================= */}
        <div className="relative">
          
          {/* CONNECTING LINES SVG (Desktop View: clean, solid, thin neon-green lines linking cards to central pole) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
            <svg 
              className="w-full h-full"
              viewBox="0 0 1300 700" 
              fill="none" 
              preserveAspectRatio="none"
            >
              {/* Line 1: Card 01 (Top-Left) -> CCTV Camera on Pole */}
              <path 
                d="M 420 150 L 470 150 L 560 235 L 615 235" 
                stroke="#b5ff4d" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle cx="420" cy="150" r="4" fill="#b5ff4d" />
              <circle cx="615" cy="235" r="4" fill="#b5ff4d" />

              {/* Line 2: Card 02 (Top-Right) -> Fire Beacon on Pole */}
              <path 
                d="M 880 150 L 830 150 L 740 230 L 685 230" 
                stroke="#b5ff4d" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle cx="880" cy="150" r="4" fill="#b5ff4d" />
              <circle cx="685" cy="230" r="4" fill="#b5ff4d" />

              {/* Line 3: Card 03 (Bottom-Left) -> SOS Button on Pole */}
              <path 
                d="M 420 520 L 485 520 L 565 385 L 630 385" 
                stroke="#b5ff4d" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle cx="420" cy="520" r="4" fill="#b5ff4d" />
              <circle cx="630" cy="385" r="4" fill="#b5ff4d" />

              {/* Line 4: Card 04 (Bottom-Right) -> Accident Sensor on Pole */}
              <path 
                d="M 880 520 L 815 520 L 735 345 L 680 345" 
                stroke="#b5ff4d" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <circle cx="880" cy="520" r="4" fill="#b5ff4d" />
              <circle cx="680" cy="345" r="4" fill="#b5ff4d" />
            </svg>
          </div>

          {/* 3-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            
            {/* ================= LEFT COLUMN: CARD 01 & CARD 03 ================= */}
            <div className="lg:col-span-4 flex flex-col gap-8 z-20">
              
              {/* CARD 01: CCTV CAMERA (Lime Green Accent) */}
              <div 
                className="relative bg-white text-black rounded-[24px] p-6 sm:p-7 border-2 border-black transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "8px 8px 0px #b5ff4d"
                }}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full border-2 border-black bg-[#b5ff4d] font-black text-xs text-black tracking-wide">
                  01
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Box */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 border-black bg-[#b5ff4d] flex items-center justify-center shrink-0 text-black">
                    {features[0].icon}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-none mb-1">
                      {features[0].title}
                    </h3>
                    <p className="text-xs sm:text-sm italic font-medium text-gray-500 mb-2">
                      {features[0].subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                      {features[0].description}
                    </p>

                    {/* Explore Button */}
                    <button 
                      onClick={() => setSelectedFeature(features[0])}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border-2 border-black bg-[#b5ff4d] font-bold text-xs sm:text-sm text-black transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_#000]"
                    >
                      <span>Explore Feature</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 03: WOMEN SAFETY SOS (Pink Accent) */}
              <div 
                className="relative bg-white text-black rounded-[24px] p-6 sm:p-7 border-2 border-black transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "8px 8px 0px #ff69b4"
                }}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full border-2 border-black bg-[#ff69b4] font-black text-xs text-black tracking-wide">
                  03
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Box */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 border-black bg-[#ff69b4] flex items-center justify-center shrink-0 text-black">
                    {features[2].icon}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-none mb-1">
                      {features[2].title}
                    </h3>
                    <p className="text-xs sm:text-sm italic font-medium text-gray-500 mb-2">
                      {features[2].subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                      {features[2].description}
                    </p>

                    {/* Explore Button */}
                    <button 
                      onClick={() => setSelectedFeature(features[2])}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border-2 border-black bg-[#ff69b4] font-bold text-xs sm:text-sm text-black transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_#000]"
                    >
                      <span>Explore Feature</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* ================= CENTER COLUMN: VIDEO PLAYER & POLE BADGE ================= */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center z-20">
              
              {/* Outer Video Frame Container */}
              <div className="relative w-full max-w-[350px] sm:max-w-[380px] rounded-[28px] border-2 border-[#b5ff4d] bg-black p-2 shadow-[0_0_25px_rgba(181,255,77,0.18)]">
                
                {/* Header Window Bar */}
                <div className="flex items-center justify-between px-3.5 py-2 bg-black rounded-t-[22px]">
                  {/* Mac Window Dots */}
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  {/* 3D Overview Title */}
                  <div className="flex items-center gap-1.5 text-[11px] font-black uppercase text-white tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#b5ff4d] animate-pulse" />
                    <span>3D OVERVIEW</span>
                  </div>
                </div>

                {/* Video Area */}
                <div className="relative w-full aspect-[9/13.5] bg-[#0c0d12] rounded-[20px] overflow-hidden">
                  
                  {/* ACTUAL UPLOADED VIDEO */}
                  <video 
                    ref={videoRef}
                    src="/features.mp4" 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    className="w-full h-full object-cover"
                  >
                    <source src="/features.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Clean Bottom Video Controls Bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent flex items-center gap-2.5 z-30">
                    {/* Play / Pause Toggle Button */}
                    <button 
                      onClick={togglePlay}
                      className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black hover:scale-110 transition-transform shrink-0"
                      aria-label={isPlaying ? "Pause video" : "Play video"}
                    >
                      {isPlaying ? (
                        <Pause className="w-3 h-3 fill-black" />
                      ) : (
                        <Play className="w-3 h-3 fill-black ml-0.5" />
                      )}
                    </button>

                    {/* Progress Bar Track */}
                    <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-white rounded-full transition-all duration-150"
                        style={{
                          width: duration > 0 ? `${(currentTime / duration) * 100}%` : "30%"
                        }}
                      />
                    </div>

                    {/* Time Counter */}
                    <span className="text-[10px] font-mono font-medium text-white/90 shrink-0">
                      {formatTime(currentTime)} / {formatTime(duration)}
                    </span>

                    {/* Audio Mute Toggle Button */}
                    <button 
                      onClick={toggleMute}
                      className="text-white/80 hover:text-white shrink-0 p-1"
                      aria-label="Toggle Sound"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>

                    {/* Fullscreen Button */}
                    <button 
                      onClick={toggleFullscreen}
                      className="text-white/80 hover:text-white shrink-0 p-1"
                      aria-label="Toggle Fullscreen"
                    >
                      <Maximize className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Bottom Badge: SMART STREET SAFETY POLE */}
              <div className="mt-4">
                <span className="inline-block px-6 py-2 rounded-full bg-[#b5ff4d] text-black font-black text-xs sm:text-sm tracking-wider uppercase border-2 border-black shadow-[0_0_15px_rgba(181,255,77,0.25)]">
                  SMART STREET SAFETY POLE
                </span>
              </div>

            </div>

            {/* ================= RIGHT COLUMN: CARD 02 & CARD 04 ================= */}
            <div className="lg:col-span-4 flex flex-col gap-8 z-20">
              
              {/* CARD 02: FIRE DETECTION (Yellow Accent) */}
              <div 
                className="relative bg-white text-black rounded-[24px] p-6 sm:p-7 border-2 border-black transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "8px 8px 0px #facc15"
                }}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full border-2 border-black bg-[#facc15] font-black text-xs text-black tracking-wide">
                  02
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Box */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 border-black bg-[#facc15] flex items-center justify-center shrink-0 text-black">
                    {features[1].icon}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-none mb-1">
                      {features[1].title}
                    </h3>
                    <p className="text-xs sm:text-sm italic font-medium text-gray-500 mb-2">
                      {features[1].subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                      {features[1].description}
                    </p>

                    {/* Explore Button */}
                    <button 
                      onClick={() => setSelectedFeature(features[1])}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border-2 border-black bg-[#facc15] font-bold text-xs sm:text-sm text-black transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_#000]"
                    >
                      <span>Explore Feature</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* CARD 04: ACCIDENT DETECTION (Cyan Accent) */}
              <div 
                className="relative bg-white text-black rounded-[24px] p-6 sm:p-7 border-2 border-black transition-all duration-300 hover:-translate-y-1"
                style={{
                  boxShadow: "8px 8px 0px #38bdf8"
                }}
              >
                {/* Number Badge */}
                <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full border-2 border-black bg-[#38bdf8] font-black text-xs text-black tracking-wide">
                  04
                </div>

                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Icon Box */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl border-2 border-black bg-[#38bdf8] flex items-center justify-center shrink-0 text-black">
                    {features[3].icon}
                  </div>

                  {/* Card Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight leading-none mb-1">
                      {features[3].title}
                    </h3>
                    <p className="text-xs sm:text-sm italic font-medium text-gray-500 mb-2">
                      {features[3].subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal mb-4">
                      {features[3].description}
                    </p>

                    {/* Explore Button */}
                    <button 
                      onClick={() => setSelectedFeature(features[3])}
                      className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full border-2 border-black bg-[#38bdf8] font-bold text-xs sm:text-sm text-black transition-all hover:scale-105 active:scale-95 shadow-[2px_2px_0px_#000]"
                    >
                      <span>Explore Feature</span>
                      <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= DETAIL MODAL ================= */}
      {selectedFeature && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedFeature(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-white text-black rounded-[28px] p-7 sm:p-9 border-2 border-black"
            style={{
              boxShadow: `8px 8px 0px ${selectedFeature.accentColor}`
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Badge */}
            <div 
              className="absolute -top-3.5 left-8 px-4 py-1 rounded-full border-2 border-black font-black text-xs text-black"
              style={{ backgroundColor: selectedFeature.accentColor }}
            >
              FEATURE {selectedFeature.number}
            </div>

            {/* Close Button */}
            <button 
              onClick={() => setSelectedFeature(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border-2 border-black bg-gray-100 hover:bg-black hover:text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 stroke-[2.5]" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-4 mb-5 pt-2">
              <div 
                className="w-16 h-16 rounded-2xl border-2 border-black flex items-center justify-center shrink-0 text-black"
                style={{ backgroundColor: selectedFeature.accentColor }}
              >
                {selectedFeature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-black text-black tracking-tight">
                  {selectedFeature.title}
                </h3>
                <p className="text-sm italic font-medium text-gray-500">
                  {selectedFeature.subtitle}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1.5">
                Technical Working
              </h4>
              <p className="text-sm text-gray-700 leading-relaxed font-normal">
                {selectedFeature.detailedInfo}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYSTEM OPERATIONAL</span>
              </div>
              <button 
                onClick={() => setSelectedFeature(null)}
                className="px-5 py-2 rounded-full border-2 border-black font-bold text-xs text-black transition-transform hover:scale-105 active:scale-95 shadow-[2px_2px_0px_#000]"
                style={{ backgroundColor: selectedFeature.accentColor }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default FeaturesSection;
