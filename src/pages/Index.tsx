import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { HeroSection } from "@/components/HeroSection";
import { ChaptersGrid } from "@/components/ChaptersGrid";
import { ChapterContent } from "@/components/ChapterContent";

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(0);
  const [showChapterContent, setShowChapterContent] = useState(false);

  const handleChapterSelect = (chapterId: number) => {
    setCurrentChapter(chapterId);
    setShowChapterContent(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleStartLearning = () => {
    handleChapterSelect(1);
  };

  const handleBackToHome = () => {
    setShowChapterContent(false);
    setCurrentChapter(0);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} 
        isSidebarOpen={isSidebarOpen} 
      />
      
      {showChapterContent && (
        <Sidebar
          isOpen={isSidebarOpen}
          currentChapter={currentChapter}
          onChapterSelect={handleChapterSelect}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      <main className={`pt-16 transition-all duration-300 ${showChapterContent ? "lg:pr-80" : ""}`}>
        {!showChapterContent ? (
          <>
            <HeroSection onStartLearning={handleStartLearning} />
            <ChaptersGrid onChapterSelect={handleChapterSelect} />
            
            {/* Footer */}
            <footer className="py-12 px-4 border-t border-border">
              <div className="container mx-auto text-center">
                <p className="text-muted-foreground">
                  كتاب تعليمي شامل عن Pictoblox والذكاء الاصطناعي
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  © 2024 - جميع الحقوق محفوظة
                </p>
              </div>
            </footer>
          </>
        ) : (
          <div className="container mx-auto max-w-4xl px-4 py-8">
            <button
              onClick={handleBackToHome}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <span>←</span>
              <span>العودة للرئيسية</span>
            </button>
            
            <ChapterContent
              chapterId={currentChapter}
              onNextChapter={() => handleChapterSelect(Math.min(currentChapter + 1, 8))}
              onPrevChapter={() => handleChapterSelect(Math.max(currentChapter - 1, 1))}
            />
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
