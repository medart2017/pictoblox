import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowDown, Sparkles, Cpu, Eye, Bot, FolderOpen, BookA } from "lucide-react";
import { PDFExport } from "./PDFExport";

interface HeroSectionProps {
  onStartLearning: () => void;
}

export const HeroSection = ({ onStartLearning }: HeroSectionProps) => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      {/* Floating Icons */}
      <div className="absolute top-32 right-20 glass-card p-4 rounded-2xl animate-float opacity-60">
        <Eye className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute top-48 left-32 glass-card p-4 rounded-2xl animate-float opacity-60" style={{ animationDelay: "-2s" }}>
        <Cpu className="h-8 w-8 text-accent" />
      </div>
      <div className="absolute bottom-32 right-32 glass-card p-4 rounded-2xl animate-float opacity-60" style={{ animationDelay: "-4s" }}>
        <Bot className="h-8 w-8 text-green-500" />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm text-muted-foreground">الكتاب التعليمي الشامل</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Pictoblox</span>
          <br />
          <span className="text-foreground">والذكاء الاصطناعي</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          تعلم البرمجة والذكاء الاصطناعي خطوة بخطوة مع شرح تفصيلي لكل Block
          ومشاريع عملية تطبيقية من الصفر حتى الاحتراف
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up flex-wrap" style={{ animationDelay: "0.4s" }}>
          <Button variant="hero" size="xl" onClick={onStartLearning}>
            ابدأ رحلة التعلم
            <ArrowDown className="h-5 w-5 mr-2 animate-bounce" />
          </Button>
          <Link to="/projects">
            <Button variant="glass" size="xl" className="gap-2">
              <FolderOpen className="h-5 w-5" />
              المشاريع التطبيقية
            </Button>
          </Link>
          <Link to="/glossary">
            <Button variant="glass" size="xl" className="gap-2">
              <BookA className="h-5 w-5" />
              قاموس المصطلحات
            </Button>
          </Link>
          <PDFExport />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
          {[
            { value: "8", label: "فصول تعليمية" },
            { value: "+50", label: "Block مشروح" },
            { value: "+15", label: "مشروع عملي" },
            { value: "∞", label: "إمكانيات" },
          ].map((stat, index) => (
            <div key={index} className="glass-card p-4 rounded-xl">
              <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
