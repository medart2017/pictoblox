import { useState } from "react";
import { Link } from "react-router-dom";
import { chapters } from "@/data/chapters";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight, Code, Target, List } from "lucide-react";

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projectChapters = chapters.filter(chapter => chapter.project);

  const downloadCode = (title: string, code: string) => {
    const blob = new Blob([code], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${title.replace(/\s+/g, "_")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowRight className="h-5 w-5" />
            <span>العودة للرئيسية</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-l from-primary to-purple-600 bg-clip-text text-transparent">
            المشاريع التطبيقية
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎮 مشاريع عملية للتطبيق
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            مجموعة من المشاريع التطبيقية الممتعة لكل فصل، مع إمكانية تحميل الأكواد الكاملة
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {projectChapters.map((chapter) => (
            <Card 
              key={chapter.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className={`bg-gradient-to-l ${chapter.color} text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{chapter.icon}</span>
                    <div>
                      <CardTitle className="text-xl md:text-2xl text-white">
                        {chapter.project?.title}
                      </CardTitle>
                      <CardDescription className="text-white/80">
                        الفصل {chapter.id}: {chapter.titleAr}
                      </CardDescription>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="gap-2"
                    onClick={() => downloadCode(chapter.project?.title || "", chapter.project?.fullCode || "")}
                  >
                    <Download className="h-4 w-4" />
                    <span className="hidden sm:inline">تحميل الكود</span>
                  </Button>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <p className="text-muted-foreground mb-4">
                  {chapter.project?.description}
                </p>

                {/* Objectives */}
                <div className="mb-6">
                  <h4 className="font-semibold flex items-center gap-2 mb-3">
                    <Target className="h-5 w-5 text-primary" />
                    أهداف المشروع
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {chapter.project?.objectives.map((objective, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">✓</span>
                        <span>{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Steps Preview */}
                <div className="mb-6">
                  <button
                    onClick={() => setExpandedProject(expandedProject === chapter.id ? null : chapter.id)}
                    className="font-semibold flex items-center gap-2 mb-3 hover:text-primary transition-colors"
                  >
                    <List className="h-5 w-5 text-primary" />
                    خطوات التنفيذ ({chapter.project?.steps.length} خطوات)
                    <span className={`transition-transform ${expandedProject === chapter.id ? "rotate-90" : ""}`}>
                      ←
                    </span>
                  </button>

                  {expandedProject === chapter.id && (
                    <div className="space-y-4 animate-in slide-in-from-top-2 duration-300">
                      {chapter.project?.steps.map((step) => (
                        <div key={step.step} className="border rounded-lg p-4 bg-muted/30">
                          <h5 className="font-medium mb-2 flex items-center gap-2">
                            <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm">
                              {step.step}
                            </span>
                            {step.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mb-3">
                            {step.description}
                          </p>
                          {step.code && (
                            <pre className="bg-background border rounded-lg p-3 text-xs overflow-x-auto" dir="ltr">
                              <code>{step.code}</code>
                            </pre>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Full Code Section */}
                <div className="border rounded-lg overflow-hidden">
                  <div className="bg-muted px-4 py-3 flex items-center justify-between">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      الكود الكامل
                    </h4>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => copyCode(chapter.project?.fullCode || "")}
                      >
                        نسخ
                      </Button>
                      <Button
                        variant="default"
                        size="sm"
                        className="gap-1"
                        onClick={() => downloadCode(chapter.project?.title || "", chapter.project?.fullCode || "")}
                      >
                        <Download className="h-4 w-4" />
                        تحميل
                      </Button>
                    </div>
                  </div>
                  <pre className="p-4 text-xs overflow-x-auto max-h-64 bg-background" dir="ltr">
                    <code>{chapter.project?.fullCode}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary">{projectChapters.length}</div>
            <div className="text-sm text-muted-foreground">مشروع تطبيقي</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary">
              {projectChapters.reduce((acc, ch) => acc + (ch.project?.steps.length || 0), 0)}
            </div>
            <div className="text-sm text-muted-foreground">خطوة تعليمية</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary">
              {projectChapters.reduce((acc, ch) => acc + (ch.blocks?.length || 0), 0)}
            </div>
            <div className="text-sm text-muted-foreground">بلوك برمجي</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary">∞</div>
            <div className="text-sm text-muted-foreground">إمكانيات للإبداع</div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t mt-12">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>💡 نصيحة: جرب تعديل الأكواد وإضافة ميزات جديدة لتطوير مهاراتك!</p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
