import { Chapter } from "@/data/chapters";
import { ArrowLeft } from "lucide-react";

interface ChapterCardProps {
  chapter: Chapter;
  onClick: () => void;
  index: number;
}

export const ChapterCard = ({ chapter, onClick, index }: ChapterCardProps) => {
  return (
    <div
      onClick={onClick}
      className="chapter-card group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          {chapter.icon}
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-primary/20 text-primary">
              الفصل {chapter.id}
            </span>
            <span className="text-xs text-muted-foreground">{chapter.titleEn}</span>
          </div>
          
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {chapter.titleAr}
          </h3>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {chapter.description}
          </p>
          
          <div className="flex items-center gap-2 mt-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-sm font-medium">ابدأ القراءة</span>
            <ArrowLeft className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
