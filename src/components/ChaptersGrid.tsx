import { chapters } from "@/data/chapters";
import { ChapterCard } from "./ChapterCard";

interface ChaptersGridProps {
  onChapterSelect: (chapterId: number) => void;
}

export const ChaptersGrid = ({ onChapterSelect }: ChaptersGridProps) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">فصول الكتاب</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            رحلة متكاملة من المقدمة حتى التعلم الآلي المتقدم، مع شرح تفصيلي لكل خطوة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.id}
              chapter={chapter}
              onClick={() => onChapterSelect(chapter.id)}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
