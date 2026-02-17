import { chapters } from "@/data/chapters";
import { BlockCard } from "./BlockCard";
import { Button } from "./ui/button";
import { ArrowRight, ArrowLeft, BookOpen, Target, Lightbulb, GraduationCap } from "lucide-react";
import { ChapterQuiz } from "./ChapterQuiz";
import { useState } from "react";

interface ChapterContentProps {
  chapterId: number;
  onNextChapter: () => void;
  onPrevChapter: () => void;
}

export const ChapterContent = ({ chapterId, onNextChapter, onPrevChapter }: ChapterContentProps) => {
  const chapter = chapters.find(c => c.id === chapterId);
  const [showQuiz, setShowQuiz] = useState(false);
  
  if (!chapter) return null;

  const hasBlocks = chapter.blocks && chapter.blocks.length > 0;
  const hasQuiz = chapterId >= 3 && chapterId <= 8;

  return (
    <div className="animate-fade-in">
      {/* Chapter Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-4xl shadow-lg`}>
            {chapter.icon}
          </div>
          <div>
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 text-primary">
              الفصل {chapter.id}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-2">{chapter.titleAr}</h1>
            <p className="text-muted-foreground">{chapter.titleEn}</p>
          </div>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          {chapter.description}
        </p>
      </div>

      {/* Chapter Introduction */}
      {chapterId === 1 && (
        <div className="space-y-6 mb-8">
          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold">ما هو Pictoblox؟</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Pictoblox هو بيئة برمجة رسومية مبنية على Scratch، طورتها شركة STEMpedia الهندية. يتميز البرنامج بدمجه القوي لتقنيات الذكاء الاصطناعي والتعلم الآلي بطريقة مبسطة تناسب المبتدئين والطلاب.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              يمكنك من خلاله برمجة الروبوتات، إنشاء مشاريع ذكاء اصطناعي مثل التعرف على الوجوه والأشياء، وبناء تطبيقات تفاعلية بدون الحاجة لكتابة أكواد معقدة.
            </p>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-accent" />
              <h2 className="text-xl font-bold">أهمية Pictoblox في التعليم</h2>
            </div>
            <ul className="space-y-3">
              {[
                "تعلم مفاهيم البرمجة بشكل مرئي وتفاعلي",
                "فهم أساسيات الذكاء الاصطناعي بطريقة عملية",
                "تطوير مهارات التفكير المنطقي وحل المشكلات",
                "إنشاء مشاريع إبداعية تدمج البرمجة مع الفن",
                "التحكم في الروبوتات والأجهزة الإلكترونية"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm flex-shrink-0">
                    {i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              <h2 className="text-xl font-bold">استخدامات البرنامج</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: "التعرف على الوجوه", desc: "اكتشاف الوجوه وتحليل التعبيرات" },
                { title: "كشف الأشياء", desc: "التعرف على الأجسام وتصنيفها" },
                { title: "تتبع الجسم", desc: "تتبع حركات الجسم البشري" },
                { title: "معالجة اللغة", desc: "فهم النصوص والتحدث" },
              ].map((item, i) => (
                <div key={i} className="bg-secondary/50 rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {chapterId === 2 && (
        <div className="space-y-6 mb-8">
          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4">تثبيت البرنامج</h2>
            <ol className="space-y-4">
              {[
                "قم بزيارة الموقع الرسمي: pictoblox.ai",
                "اختر نظام التشغيل المناسب (Windows, Mac, Linux, أو الإصدار Online)",
                "قم بتحميل البرنامج وتثبيته",
                "أنشئ حساباً مجانياً للوصول لجميع المميزات"
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4">واجهة البرنامج</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: "منطقة المسرح", desc: "حيث يتم تنفيذ البرنامج وعرض النتائج" },
                { title: "منطقة البلوكات", desc: "تحتوي على جميع الأوامر والإضافات" },
                { title: "منطقة الأكواد", desc: "حيث يتم تجميع البلوكات وبناء البرنامج" },
              ].map((item, i) => (
                <div key={i} className="bg-secondary/50 rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-xl font-bold mb-4">المصطلحات الأساسية</h2>
            <div className="space-y-3">
              {[
                { term: "Sprite", def: "الشخصية أو الكائن الذي يتم برمجته" },
                { term: "Stage", def: "المسرح أو الخلفية التي يتحرك عليها الـ Sprite" },
                { term: "Block", def: "الأمر البرمجي الرسومي" },
                { term: "Extension", def: "إضافة توفر بلوكات جديدة مثل Face Detection" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-secondary/30 rounded-lg p-3">
                  <code className="text-primary bg-primary/10 px-3 py-1 rounded font-mono">{item.term}</code>
                  <span className="text-muted-foreground">{item.def}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blocks Section */}
      {hasBlocks && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-8 bg-primary rounded-full" />
            <h2 className="text-2xl font-bold">البلوكات التفصيلية</h2>
          </div>
          
          <div className="space-y-4">
            {chapter.blocks.map((block, index) => (
              <BlockCard key={block.id} block={block} index={index} />
            ))}
          </div>
        </div>
      )}

      {/* Project Section for Face Detection */}
      {chapterId === 3 && (
        <div className="glass-card p-6 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center">
              <Target className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">المشروع التطبيقي</h2>
              <p className="text-muted-foreground">روبوت يتفاعل مع الابتسامة ويتابع موقع الوجه</p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-lg mb-3">الهدف من المشروع:</h3>
              <p className="text-muted-foreground">
                إنشاء Sprite يتبع موقع الوجه ويتفاعل مع تعبيرات الوجه المختلفة
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">الخطوات:</h3>
              <ol className="space-y-4">
                {[
                  "أضف Sprite للمشروع (يمكن أن يكون روبوت أو أي شخصية)",
                  "فعّل الكاميرا باستخدام turn video on stage",
                  "استخدم analyse image from camera داخل حلقة forever",
                  "اجعل الـ Sprite يتبع موقع الوجه باستخدام bounding box",
                  "أضف شرطًا للتحقق من الابتسامة وتشغيل صوت أو تغيير المظهر"
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <p className="text-muted-foreground pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-3">الكود الكامل:</h3>
              <div className="code-block">
                <pre className="text-code-text whitespace-pre-wrap">{`when green flag clicked
turn [on] video on stage with [50] % transparency

forever
  analyse image from [camera]
  
  if <(get # faces) > [0]> then
    go to x: (x bounding box) y: (y bounding box)
    
    if <is expression of face [1] [happy]> then
      switch costume to [happy-robot]
      play sound [celebration]
    else
      switch costume to [normal-robot]
    end
  else
    say [أين أنت؟ أظهر أمام الكاميرا!]
  end
end`}</pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Quiz Section */}
      {hasQuiz && (
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="h-1 w-8 bg-accent rounded-full" />
              <h2 className="text-2xl font-bold">اختبر فهمك</h2>
            </div>
            <Button
              variant={showQuiz ? "outline" : "hero"}
              onClick={() => setShowQuiz(!showQuiz)}
              className="gap-2"
            >
              <GraduationCap className="h-4 w-4" />
              {showQuiz ? "إخفاء الاختبار" : "ابدأ الاختبار"}
            </Button>
          </div>
          
          {showQuiz && (
            <ChapterQuiz 
              chapterId={chapterId} 
              onComplete={(score, total) => {
                console.log(`Quiz completed: ${score}/${total}`);
              }}
            />
          )}
        </div>
      )}


      <div className="flex items-center justify-between pt-8 border-t border-border">
        <Button
          variant="outline"
          onClick={onPrevChapter}
          disabled={chapterId === 1}
          className="flex items-center gap-2"
        >
          <ArrowRight className="h-4 w-4" />
          الفصل السابق
        </Button>
        
        <span className="text-muted-foreground">
          {chapterId} / {chapters.length}
        </span>
        
        <Button
          variant="hero"
          onClick={onNextChapter}
          disabled={chapterId === chapters.length}
          className="flex items-center gap-2"
        >
          الفصل التالي
          <ArrowLeft className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
