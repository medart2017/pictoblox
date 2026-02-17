import { Block } from "@/data/chapters";
import { ArrowLeftRight, Lightbulb, Play, Volume2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { InteractiveBlock, InteractiveReporterBlock, InteractiveBooleanBlock } from "./InteractiveBlock";

interface BlockCardProps {
  block: Block;
  index: number;
}

// Detect block type from name
const getBlockType = (name: string): "stack" | "reporter" | "boolean" => {
  const lowerName = name.toLowerCase();
  // Boolean blocks - conditions
  if (lowerName.includes("is ") || lowerName.includes("is_") || lowerName.includes("detected?") || lowerName.includes("above?") || lowerName.includes("?")) {
    return "boolean";
  }
  // Reporter blocks - values
  if (lowerName.includes(" of ") || lowerName.includes("get ") || lowerName.includes("count") || lowerName.includes("distance") || lowerName.includes("angle") || lowerName.includes("size") || lowerName.includes("name") || lowerName.includes("total") || lowerName.includes("confidence")) {
    return "reporter";
  }
  // Stack blocks - actions
  return "stack";
};

export const BlockCard = ({ block, index }: BlockCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const blockType = getBlockType(block.nameEn);

  const handleBlockPlay = () => {
    setIsPlaying(true);
    // Play a subtle click sound effect simulation
    const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdH+Onp+fnp2dm56en5+goKGhoaGhoaKioqKioqKioqKioqKioqKioqKioaGhoaGhoaCgoKCgoKCgoKCfoJ+fn5+fn5+fn56enp6enp6enp6dnZ2dnZ2dnZ2dnZycnJycnJycnJycnJubm5ubm5ubm5ubm5qampqampqampqampqamZmZmZmZmZmZmZmZmZmZl5eXl5eXl5eXl5eXl5eXlpaWlpaWlpaWlpaWlpaWlZWVlZWVlZWVlZWVlZWVlJSUlJSUlJSUlJSUlJSUk5OTk5OTk5OTk5OTk5OT');
    audio.volume = 0.3;
    audio.play().catch(() => {}); // Ignore errors
    setTimeout(() => setIsPlaying(false), 300);
  };

  return (
    <div 
      className={cn(
        "block-card animate-slide-up cursor-pointer transition-all duration-300",
        isPlaying && "ring-2 ring-primary ring-offset-2 ring-offset-background"
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Visual Block Representation */}
      <div className="mb-4 overflow-x-auto pb-2">
        <div className="flex items-center gap-3">
          {blockType === "boolean" ? (
            <InteractiveBooleanBlock name={block.nameEn} onPlay={handleBlockPlay} />
          ) : blockType === "reporter" ? (
            <InteractiveReporterBlock name={block.nameEn} onPlay={handleBlockPlay} />
          ) : (
            <InteractiveBlock name={block.nameEn} onPlay={handleBlockPlay} />
          )}
          <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full flex items-center gap-1">
            <Volume2 className="w-3 h-3" />
            اضغط للتجربة
          </span>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <h4 className="text-lg font-bold text-foreground">{block.nameAr}</h4>
        </div>
      </div>

      {/* Description */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {block.description}
      </p>

      {/* Expandable Content */}
      <div className={cn(
        "space-y-4 overflow-hidden transition-all duration-300",
        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}>
        {/* Inputs & Outputs */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
            <div className="flex items-center gap-2 mb-2">
              <ArrowLeftRight className="h-4 w-4 text-green-500" />
              <span className="font-semibold text-green-400">المدخلات</span>
            </div>
            <ul className="space-y-1">
              {block.inputs.length > 0 ? (
                block.inputs.map((input, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    {input}
                  </li>
                ))
              ) : (
                <li className="text-sm text-muted-foreground">لا توجد مدخلات</li>
              )}
            </ul>
          </div>

          <div className="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
            <div className="flex items-center gap-2 mb-2">
              <ArrowLeftRight className="h-4 w-4 text-blue-500" />
              <span className="font-semibold text-blue-400">المخرجات</span>
            </div>
            <ul className="space-y-1">
              {block.outputs.map((output, i) => (
                <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {output}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-accent" />
            <span className="font-semibold text-accent">متى وكيف نستخدمه؟</span>
          </div>
          <p className="text-sm text-muted-foreground">{block.usage}</p>
        </div>

        {/* Example */}
        <div className="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
          <div className="flex items-center gap-2 mb-2">
            <Play className="h-4 w-4 text-purple-500" />
            <span className="font-semibold text-purple-400">مثال عملي</span>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{block.example}</p>
          <div className="code-block">
            <pre className="text-code-text whitespace-pre-wrap">{block.codeExample}</pre>
          </div>
        </div>
      </div>

      {/* Toggle indicator */}
      <div className="flex justify-center mt-4">
        <span className="text-xs text-muted-foreground">
          {isExpanded ? "اضغط للإغلاق ▲" : "اضغط للمزيد ▼"}
        </span>
      </div>
    </div>
  );
};
