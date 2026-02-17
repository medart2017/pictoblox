import { cn } from "@/lib/utils";

interface ScratchBlockProps {
  name: string;
  category?: string;
  className?: string;
}

// Category colors matching PictoBlox/Scratch block colors
const categoryColors: Record<string, { bg: string; border: string; shadow: string }> = {
  // Motion - Blue
  motion: { bg: "bg-[#4C97FF]", border: "border-[#3373CC]", shadow: "shadow-[#3373CC]/30" },
  // Looks - Purple
  looks: { bg: "bg-[#9966FF]", border: "border-[#774DCB]", shadow: "shadow-[#774DCB]/30" },
  // Sound - Pink/Magenta
  sound: { bg: "bg-[#CF63CF]", border: "border-[#A63FA6]", shadow: "shadow-[#A63FA6]/30" },
  // Events - Yellow/Orange
  events: { bg: "bg-[#FFBF00]", border: "border-[#CC9900]", shadow: "shadow-[#CC9900]/30" },
  // Control - Orange
  control: { bg: "bg-[#FFAB19]", border: "border-[#CF8B17]", shadow: "shadow-[#CF8B17]/30" },
  // Sensing - Light Blue
  sensing: { bg: "bg-[#5CB1D6]", border: "border-[#2E8EB8]", shadow: "shadow-[#2E8EB8]/30" },
  // Operators - Green
  operators: { bg: "bg-[#59C059]", border: "border-[#389438]", shadow: "shadow-[#389438]/30" },
  // Variables - Orange/Red
  variables: { bg: "bg-[#FF8C1A]", border: "border-[#DB6E00]", shadow: "shadow-[#DB6E00]/30" },
  // AI/ML - Teal
  ai: { bg: "bg-[#00B4A0]", border: "border-[#008577]", shadow: "shadow-[#008577]/30" },
  // Face Detection - Coral
  face: { bg: "bg-[#FF6B6B]", border: "border-[#D64545]", shadow: "shadow-[#D64545]/30" },
  // Object Detection - Indigo
  object: { bg: "bg-[#6366F1]", border: "border-[#4F46E5]", shadow: "shadow-[#4F46E5]/30" },
  // Text/Speech - Cyan
  text: { bg: "bg-[#06B6D4]", border: "border-[#0891B2]", shadow: "shadow-[#0891B2]/30" },
  // Body Detection - Rose
  body: { bg: "bg-[#F43F5E]", border: "border-[#BE123C]", shadow: "shadow-[#BE123C]/30" },
  // Card Recognition - Amber
  card: { bg: "bg-[#F59E0B]", border: "border-[#D97706]", shadow: "shadow-[#D97706]/30" },
  // Machine Learning - Violet
  ml: { bg: "bg-[#8B5CF6]", border: "border-[#7C3AED]", shadow: "shadow-[#7C3AED]/30" },
  // Default
  default: { bg: "bg-[#4C97FF]", border: "border-[#3373CC]", shadow: "shadow-[#3373CC]/30" },
};

// Detect category from block name
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

export const ScratchBlock = ({ name, category, className }: ScratchBlockProps) => {
  const detectedCategory = category || detectCategory(name);
  const colors = categoryColors[detectedCategory] || categoryColors.default;

  // Parse the block name to highlight parameters
  const renderBlockContent = (blockName: string) => {
    // Match patterns like (), (something), or [] 
    const parts = blockName.split(/(\([^)]*\)|\[[^\]]*\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\([^)]*\)$/)) {
        // Parameter slot - rounded
        return (
          <span 
            key={index} 
            className="inline-flex items-center mx-1 px-2 py-0.5 bg-white/30 rounded-full text-xs min-w-[40px] justify-center border border-white/20"
          >
            {part.slice(1, -1) || "▼"}
          </span>
        );
      } else if (part.match(/^\[[^\]]*\]$/)) {
        // Dropdown slot - rectangular
        return (
          <span 
            key={index} 
            className="inline-flex items-center mx-1 px-2 py-0.5 bg-white/30 rounded text-xs min-w-[40px] justify-center border border-white/20"
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
        "relative inline-flex items-center gap-1 px-3 py-2 rounded-lg font-mono text-sm text-white font-medium",
        "border-b-4 shadow-lg transition-transform hover:scale-105",
        colors.bg,
        colors.border,
        colors.shadow,
        className
      )}
      style={{
        clipPath: "polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))"
      }}
    >
      {/* Notch on top */}
      <div 
        className={cn("absolute top-0 left-4 w-8 h-1 rounded-b", colors.bg)}
        style={{ transform: "translateY(-100%)" }}
      />
      
      {renderBlockContent(name)}
    </div>
  );
};

// Reporter block (rounded, for values)
export const ReporterBlock = ({ name, category, className }: ScratchBlockProps) => {
  const detectedCategory = category || detectCategory(name);
  const colors = categoryColors[detectedCategory] || categoryColors.default;

  const renderBlockContent = (blockName: string) => {
    const parts = blockName.split(/(\([^)]*\)|\[[^\]]*\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\([^)]*\)$/)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center mx-1 px-2 py-0.5 bg-white/30 rounded-full text-xs min-w-[30px] justify-center"
          >
            {part.slice(1, -1) || "▼"}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1 px-4 py-1.5 rounded-full font-mono text-sm text-white font-medium",
        "border-b-2 shadow-md transition-transform hover:scale-105",
        colors.bg,
        colors.border,
        colors.shadow,
        className
      )}
    >
      {renderBlockContent(name)}
    </div>
  );
};

// Boolean block (hexagonal, for conditions)
export const BooleanBlock = ({ name, category, className }: ScratchBlockProps) => {
  const detectedCategory = category || detectCategory(name);
  const colors = categoryColors[detectedCategory] || categoryColors.default;

  const renderBlockContent = (blockName: string) => {
    const parts = blockName.split(/(\([^)]*\)|\[[^\]]*\])/g);
    
    return parts.map((part, index) => {
      if (part.match(/^\([^)]*\)$/) || part.match(/^\[[^\]]*\]$/)) {
        return (
          <span 
            key={index} 
            className="inline-flex items-center mx-1 px-2 py-0.5 bg-white/30 rounded text-xs min-w-[30px] justify-center"
          >
            {part.slice(1, -1) || "▼"}
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1 px-4 py-1.5 font-mono text-sm text-white font-medium",
        "shadow-md transition-transform hover:scale-105",
        colors.bg,
        className
      )}
      style={{
        clipPath: "polygon(10px 0%, calc(100% - 10px) 0%, 100% 50%, calc(100% - 10px) 100%, 10px 100%, 0% 50%)"
      }}
    >
      {renderBlockContent(name)}
    </div>
  );
};
