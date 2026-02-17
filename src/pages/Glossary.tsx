import { useState, useMemo } from "react";
import { chapters, Term } from "@/data/chapters";
import { Search, BookOpen, Filter, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface GlossaryTerm extends Term {
  chapterId: number;
  chapterTitle: string;
  chapterIcon: string;
}

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChapter, setSelectedChapter] = useState<number | null>(null);

  // جمع كل المصطلحات من جميع الفصول
  const allTerms: GlossaryTerm[] = useMemo(() => {
    const terms: GlossaryTerm[] = [];
    chapters.forEach((chapter) => {
      if (chapter.terms) {
        chapter.terms.forEach((term) => {
          terms.push({
            ...term,
            chapterId: chapter.id,
            chapterTitle: chapter.titleAr,
            chapterIcon: chapter.icon,
          });
        });
      }
    });
    return terms;
  }, []);

  // تصفية المصطلحات حسب البحث والفصل المحدد
  const filteredTerms = useMemo(() => {
    return allTerms.filter((term) => {
      const matchesSearch =
        searchQuery === "" ||
        term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.termAr.includes(searchQuery) ||
        term.definition.includes(searchQuery);

      const matchesChapter =
        selectedChapter === null || term.chapterId === selectedChapter;

      return matchesSearch && matchesChapter;
    });
  }, [allTerms, searchQuery, selectedChapter]);

  // الفصول التي تحتوي على مصطلحات
  const chaptersWithTerms = useMemo(() => {
    return chapters.filter((ch) => ch.terms && ch.terms.length > 0);
  }, []);

  // تجميع المصطلحات حسب الحرف الأول
  const groupedTerms = useMemo(() => {
    const groups: { [key: string]: GlossaryTerm[] } = {};
    filteredTerms.forEach((term) => {
      const firstLetter = term.term[0].toUpperCase();
      if (!groups[firstLetter]) {
        groups[firstLetter] = [];
      }
      groups[firstLetter].push(term);
    });
    // ترتيب المجموعات أبجدياً
    return Object.keys(groups)
      .sort()
      .reduce((acc, key) => {
        acc[key] = groups[key].sort((a, b) => a.term.localeCompare(b.term));
        return acc;
      }, {} as { [key: string]: GlossaryTerm[] });
  }, [filteredTerms]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 right-0 left-0 z-50 glass-card rounded-none border-t-0 border-x-0">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Pictoblox</h1>
              <p className="text-xs text-muted-foreground">قاموس المصطلحات</p>
            </div>
          </Link>

          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <span>العودة للرئيسية</span>
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* العنوان والوصف */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              📚 قاموس المصطلحات
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              جميع المصطلحات التقنية المستخدمة في الكتاب مجمعة في مكان واحد مع
              شرح مفصل وإمكانية البحث
            </p>
          </div>

          {/* إحصائيات */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">
                  {allTerms.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  إجمالي المصطلحات
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">
                  {chaptersWithTerms.length}
                </div>
                <div className="text-sm text-muted-foreground">فصول</div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">
                  {Object.keys(groupedTerms).length}
                </div>
                <div className="text-sm text-muted-foreground">
                  حروف مختلفة
                </div>
              </CardContent>
            </Card>
            <Card className="glass-card text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary">
                  {filteredTerms.length}
                </div>
                <div className="text-sm text-muted-foreground">نتائج البحث</div>
              </CardContent>
            </Card>
          </div>

          {/* البحث والفلترة */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ابحث عن مصطلح..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pr-10 h-12 text-lg"
              />
            </div>

            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedChapter === null ? "default" : "outline"}
                onClick={() => setSelectedChapter(null)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                الكل
              </Button>
              {chaptersWithTerms.map((chapter) => (
                <Button
                  key={chapter.id}
                  variant={selectedChapter === chapter.id ? "default" : "outline"}
                  onClick={() => setSelectedChapter(chapter.id)}
                  className="gap-2"
                >
                  <span>{chapter.icon}</span>
                  <span className="hidden sm:inline">{chapter.titleAr}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* عرض المصطلحات */}
          {filteredTerms.length === 0 ? (
            <Card className="glass-card text-center py-12">
              <CardContent>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">
                  لم يتم العثور على نتائج
                </h3>
                <p className="text-muted-foreground">
                  جرب البحث بكلمات مختلفة أو قم بإزالة الفلتر
                </p>
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedTerms).map(([letter, terms]) => (
                <div key={letter}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                      {letter}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
                    <Badge variant="secondary">{terms.length} مصطلح</Badge>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    {terms.map((term, index) => (
                      <Card
                        key={`${term.chapterId}-${term.term}-${index}`}
                        className="glass-card hover:border-primary/50 transition-all duration-300"
                      >
                        <CardHeader className="pb-2">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <CardTitle className="text-lg text-primary">
                                {term.term}
                              </CardTitle>
                              <p className="text-sm text-muted-foreground font-medium">
                                {term.termAr}
                              </p>
                            </div>
                            <Badge
                              variant="outline"
                              className="shrink-0 gap-1"
                            >
                              <span>{term.chapterIcon}</span>
                              <span className="hidden sm:inline text-xs">
                                {term.chapterTitle}
                              </span>
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-foreground/80 text-sm leading-relaxed">
                            {term.definition}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* روابط سريعة للحروف */}
          {Object.keys(groupedTerms).length > 3 && (
            <div className="fixed left-4 top-1/2 transform -translate-y-1/2 hidden lg:flex flex-col gap-1 bg-card/80 backdrop-blur-lg rounded-xl p-2 border border-border/50">
              {Object.keys(groupedTerms).map((letter) => (
                <button
                  key={letter}
                  onClick={() => {
                    const element = document.getElementById(`letter-${letter}`);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-8 h-8 rounded-lg hover:bg-primary/20 text-sm font-medium transition-colors"
                >
                  {letter}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Glossary;
