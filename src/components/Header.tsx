import { BookOpen, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

export const Header = ({ onMenuClick, isSidebarOpen }: HeaderProps) => {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 glass-card rounded-none border-t-0 border-x-0">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden"
          >
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center glow-effect">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold gradient-text">Pictoblox</h1>
              <p className="text-xs text-muted-foreground">دليل الذكاء الاصطناعي</p>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm">الرئيسية</Button>
          <Button variant="ghost" size="sm">الفصول</Button>
          <Button variant="ghost" size="sm">المشاريع</Button>
          <Button variant="hero" size="sm">ابدأ التعلم</Button>
        </nav>
      </div>
    </header>
  );
};
