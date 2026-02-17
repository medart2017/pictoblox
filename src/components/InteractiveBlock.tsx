import { cn } from "@/lib/utils";
import { useState } from "react";
import { Volume2, Play, Sparkles } from "lucide-react";

interface InteractiveBlockProps {
  name: string;
  category?: string;
  className?: string;
  onPlay?: () => void;
}

// Category colors matching PictoBlox/Scratch block colors
const categoryColors: Record<string, { bg: string; border: string; glow: string }> = {
  motion: { bg: "bg-[#4C97FF]", border: "border-[#3373CC]", glow: "shadow-[0_0_20px_rgba(76,151,255,0.6)]" },
  looks: { bg: "bg-[#9966FF]", border: "border-[#774DCB]", glow: "shadow-[0_0_20px_rgba(153,102,255,0.6)]" },
  sound: { bg: "bg-[#CF63CF]", border: "border-[#A63FA6]", glow: "shadow-[0_0_20px_rgba(207,99,207,0.6)]" },
  events: { bg: "bg-[#FFBF00]", border: "border-[#CC9900]", glow: "shadow-[0_0_20px_rgba(255,191,0,0.6)]" },
  control: { bg: "bg-[#FFAB19]", border: "border-[#CF8B17]", glow: "shadow-[0_0_20px_rgba(255,171,25,0.6)]" },
  sensing: { bg: "bg-[#5CB1D6]", border: "border-[#2E8EB8]", glow: "shadow-[0_0_20px_rgba(92,177,214,0.6)]" },
  operators: { bg: "bg-[#59C059]", border: "border-[#389438]", glow: "shadow-[0_0_20px_rgba(89,192,89,0.6)]" },
  variables: { bg: "bg-[#FF8C1A]", border: "border-[#DB6E00]", glow: "shadow-[0_0_20px_rgba(255,140,26,0.6)]" },
  ai: { bg: "bg-[#00B4A0]", border: "border-[#008577]", glow: "shadow-[0_0_20px_rgba(0,180,160,0.6)]" },
  face: { bg: "bg-[#FF6B6B]", border: "border-[#D64545]", glow: "shadow-[0_0_20px_rgba(255,107,107,0.6)]" },
  object: { bg: "bg-[#6366F1]", border: "border-[#4F46E5]", glow: "shadow-[0_0_20px_rgba(99,102,241,0.6)]" },
  text: { bg: "bg-[#06B6D4]", border: "border-[#0891B2]", glow: "shadow-[0_0_20px_rgba(6,182,212,0.6)]" },
  body: { bg: "bg-[#F43F5E]", border: "border-[#BE123C]", glow: "shadow-[0_0_20px_rgba(244,63,94,0.6)]" },
  card: { bg: "bg-[#F59E0B]", border: "border-[#D97706]", glow: "shadow-[0_0_20px_rgba(245,158,11,0.6)]" },
  ml: { bg: "bg-[#8B5CF6]", border: "border-[#7C3AED]", glow: "shadow-[0_0_20px_rgba(139,92,246,0.6)]" },
  default: { bg: "bg-[#4C97FF]", border: "border-[#3373CC]", glow: "shadow-[0_0_20px_rgba(76,151,255,0.6)]" },
};

const detectCategory = (name: string): string => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes("face") || lowerName.includes("expression") || lowerName.includes("age") || lowerName.includes("gender")) return "face";
  if (lowerName.includes("object") || lowerName.includes("bounding") || lowerName.includes("detect")) return "object";
  if (lowerName.includes("speech") || lowerName.includes("speak") || lowerName.includes("text") || lowerName.includes("translate") || lowerName.includes("nlp") || lowerName.includes("sentiment") || lowerName.includes("question")) return "text";
  if (lowerName.includes("body") || lowerName.includes("pose") || lowerName.includes("keypoint") || lowerName.includes("joint") || lowerName.includes("leaning")) return "body";
  if (lowerName.includes("marker") || lowerName.includes("card")) return "card";
  if (lowerName.includes("train") || lowerName.includes("model") || lowerName.includes("class") || lowerName.includes("learn") || lowerName.includes("classify") || lowerName.includes("confidence")) return "ml";
  if (lowerName.includes("video") || lowerName.includes("camera") || lowerName.includes("stage") || lowerName.includes("image") || lowerName.includes("analyse")) return "sensing";
  if (lowerName.includes("wait") || lowerName.includes("when") || lowerName.includes("if")) return "control";
  if (lowerName.includes("count") || lowerName.includes("distance") || lowerName.includes("angle") || lowerName.includes("size") || lowerName.includes("rotation")) return "operators";
  return "ai";
};

export const InteractiveBlock = ({ name, category, className, onPlay }: InteractiveBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [showSparkles, setShowSparkles] = useState(false);
  
  const detectedCategory = category || detectCategory(name);
  const colors = categoryColors[detectedCategory] || categoryColors.default;

  const handleClick = () => {
    setIsClicked(true);
    setShowSparkles(true);
    onPlay?.();
    
    setTimeout(() => setIsClicked(false), 200);
    setTimeout(() => setShowSparkles(false), 600);
  };

  const renderBlockContent = (blockName: string) => {
    const parts = blockName.split(/(\([^)]*\)|\[[^\]]*\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\([^)]*\)$/)) {
        return (
          <span 
            key={index} 
            className={cn(
              "inline-flex items-center mx-1 px-2 py-0.5 rounded-full text-xs min-w-[40px] justify-center border transition-all duration-300",
              isHovered ? "bg-white/50 border-white/40 scale-105" : "bg-white/30 border-white/20"
            )}
          >
            {part.slice(1, -1) || "▼"}
          </span>
        );
      } else if (part.match(/^\[[^\]]*\]$/)) {
        return (
          <span 
            key={index} 
            className={cn(
              "inline-flex items-center mx-1 px-2 py-0.5 rounded text-xs min-w-[40px] justify-center border transition-all duration-300",
              isHovered ? "bg-white/50 border-white/40 scale-105" : "bg-white/30 border-white/20"
            )}
          >
            {part.slice(1, -1) || "▼"} ▾
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div 
      className={cn(
        "relative inline-flex items-center gap-1 px-3 py-2 rounded-lg font-mono text-sm text-white font-medium cursor-pointer select-none",
        "border-b-4 transition-all duration-300",
        colors.bg,
        colors.border,
        isHovered && colors.glow,
        isClicked && "scale-95",
        isHovered && "scale-105 -translate-y-1",
        className
      )}
      style={{
        clipPath: "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Sparkle Effects */}
      {showSparkles && (
        <>
          <Sparkles className="absolute -top-2 -left-2 w-4 h-4 text-yellow-300 animate-ping" />
          <Sparkles className="absolute -top-1 -right-3 w-3 h-3 text-yellow-300 animate-ping" style={{ animationDelay: '0.1s' }} />
          <Sparkles className="absolute -bottom-2 left-1/2 w-3 h-3 text-yellow-300 animate-ping" style={{ animationDelay: '0.2s' }} />
        </>
      )}
      
      {/* Play indicator */}
      {isHovered && (
        <div className="absolute -right-2 -top-2 w-6 h-6 rounded-full bg-white/90 flex items-center justify-center animate-bounce">
          <Play className="w-3 h-3 text-gray-800 fill-current" />
        </div>
      )}
      
      {/* Notch on top */}
      <div 
        className={cn("absolute top-0 left-4 w-8 h-1 rounded-b transition-all duration-300", colors.bg)}
        style={{ transform: "translateY(-100%)" }}
      />
      
      {renderBlockContent(name)}
    </div>
  );
};

// Interactive Reporter block
export const InteractiveReporterBlock = ({ name, category, className, onPlay }: InteractiveBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [displayValue, setDisplayValue] = useState<string | null>(null);
  
  const detectedCategory = category || detectCategory(name);
  const colors = categoryColors[detectedCategory] || categoryColors.default;

  const handleClick = () => {
    setIsClicked(true);
    // Simulate returning a value
    const randomValues = ["42", "100", "صحيح", "3.14", "مرحباً"];
    setDisplayValue(randomValues[Math.floor(Math.random() * randomValues.length)]);
    onPlay?.();
    
    setTimeout(() => setIsClicked(false), 200);
    setTimeout(() => setDisplayValue(null), 2000);
  };

  const renderBlockContent = (blockName: string) => {
    const parts = blockName.split(/(\([^)]*\)|\[[^\]]*\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\([^)]*\)$/)) {
        return (
          <span 
            key={index} 
            className={cn(
              "inline-flex items-center mx-1 px-2 py-0.5 rounded-full text-xs min-w-[30px] justify-center transition-all duration-300",
              isHovered ? "bg-white/50 scale-105" : "bg-white/30"
            )}
          >
            {part.slice(1, -1) || "▼"}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="relative inline-block">
      <div 
        className={cn(
          "inline-flex items-center gap-1 px-4 py-1.5 rounded-full font-mono text-sm text-white font-medium cursor-pointer select-none",
          "border-b-2 transition-all duration-300",
          colors.bg,
          colors.border,
          isHovered && colors.glow,
          isClicked && "scale-95",
          isHovered && "scale-105",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {renderBlockContent(name)}
      </div>
      
      {/* Value popup */}
      {displayValue && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-800 px-3 py-1 rounded-lg shadow-lg text-sm font-bold animate-bounce">
          {displayValue}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-white" />
        </div>
      )}
    </div>
  );
};

// Interactive Boolean block
export const InteractiveBooleanBlock = ({ name, category, className, onPlay }: InteractiveBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [boolValue, setBoolValue] = useState<boolean | null>(null);
  
  const detectedCategory = category || detectCategory(name);
  const colors = categoryColors[detectedCategory] || categoryColors.default;

  const handleClick = () => {
    setIsClicked(true);
    setBoolValue(Math.random() > 0.5);
    onPlay?.();
    
    setTimeout(() => setIsClicked(false), 200);
    setTimeout(() => setBoolValue(null), 2000);
  };

  const renderBlockContent = (blockName: string) => {
    const parts = blockName.split(/(\([^)]*\)|\[[^\]]*\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\([^)]*\)$/) || part.match(/^\[[^\]]*\]$/)) {
        return (
          <span 
            key={index} 
            className={cn(
              "inline-flex items-center mx-1 px-2 py-0.5 rounded text-xs min-w-[30px] justify-center transition-all duration-300",
              isHovered ? "bg-white/50 scale-105" : "bg-white/30"
            )}
          >
            {part.slice(1, -1) || "▼"}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="relative inline-block">
      <div 
        className={cn(
          "inline-flex items-center gap-1 px-4 py-1.5 font-mono text-sm text-white font-medium cursor-pointer select-none",
          "transition-all duration-300",
          colors.bg,
          isHovered && colors.glow,
          isClicked && "scale-95",
          isHovered && "scale-105",
          className
        )}
        style={{
          clipPath: "polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {renderBlockContent(name)}
      </div>
      
      {/* Boolean value popup */}
      {boolValue !== null && (
        <div className={cn(
          "absolute -top-8 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg shadow-lg text-sm font-bold animate-bounce",
          boolValue ? "bg-green-500 text-white" : "bg-red-500 text-white"
        )}>
          {boolValue ? "✓ صحيح" : "✗ خطأ"}
          <div className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2",
            boolValue ? "bg-green-500" : "bg-red-500"
          )} />
        </div>
      )}
    </div>
  );
};
