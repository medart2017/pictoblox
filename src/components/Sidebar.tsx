import { chapters } from "@/data/chapters";
import { cn } from "@/lib/utils";
import { CheckCircle, Circle, ChevronLeft } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  currentChapter: number;
  onChapterSelect: (chapterId: number) => void;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, currentChapter, onChapterSelect, onClose }: SidebarProps) => {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <aside
        className={cn(
          "fixed top-16 right-0 h-[calc(100vh-4rem)] w-80 bg-sidebar border-l border-sidebar-border z-50 transition-transform duration-300 overflow-y-auto",
          isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-sidebar-foreground">فهرس الكتاب</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-sidebar-accent rounded-lg transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-2">
            {chapters.map((chapter) => (
              <button
                key={chapter.id}
                onClick={() => {
                  onChapterSelect(chapter.id);
                  onClose();
                }}
                className={cn(
                  "w-full text-right p-4 rounded-xl transition-all duration-300 group",
                  currentChapter === chapter.id
                    ? "bg-gradient-to-l from-primary/20 to-transparent border border-primary/30"
                    : "hover:bg-sidebar-accent"
                )}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{chapter.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={cn(
                        "text-sm font-semibold",
                        currentChapter === chapter.id ? "text-primary" : "text-sidebar-foreground"
                      )}>
                        الفصل {chapter.id}
                      </span>
                      {currentChapter > chapter.id ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : currentChapter === chapter.id ? (
                        <Circle className="h-4 w-4 text-primary fill-primary" />
                      ) : (
                        <Circle className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    <h3 className={cn(
                      "font-medium mt-1",
                      currentChapter === chapter.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {chapter.titleAr}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                      {chapter.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 p-4 glass-card">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-2 flex-1 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-l from-primary to-blue-500 transition-all duration-500"
                  style={{ width: `${(currentChapter / chapters.length) * 100}%` }}
                />
              </div>
              <span className="text-sm font-medium text-primary">
                {Math.round((currentChapter / chapters.length) * 100)}%
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              الفصل {currentChapter} من {chapters.length}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};
