import { useState } from "react";
import { Button } from "./ui/button";
import { FileDown, Loader2, CheckCircle } from "lucide-react";
import { chapters } from "@/data/chapters";
import jsPDF from "jspdf";

export const PDFExport = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    setProgress(0);
    setIsComplete(false);

    try {
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - 2 * margin;
      let yPosition = margin;

      // Helper function to add new page if needed
      const checkNewPage = (requiredHeight: number) => {
        if (yPosition + requiredHeight > pageHeight - margin) {
          pdf.addPage();
          yPosition = margin;
          return true;
        }
        return false;
      };

      // Add Arabic font support - using built-in Helvetica for now
      // Title Page
      pdf.setFontSize(32);
      pdf.setTextColor(99, 102, 241); // Primary color
      pdf.text("Pictoblox", pageWidth / 2, 80, { align: "center" });
      
      pdf.setFontSize(24);
      pdf.setTextColor(0, 0, 0);
      pdf.text("AI & Machine Learning Guide", pageWidth / 2, 100, { align: "center" });
      
      pdf.setFontSize(14);
      pdf.setTextColor(100, 100, 100);
      pdf.text("Complete Educational Book", pageWidth / 2, 120, { align: "center" });
      pdf.text("8 Chapters | 50+ Blocks | 15+ Projects", pageWidth / 2, 130, { align: "center" });

      // Table of Contents
      pdf.addPage();
      yPosition = margin;
      pdf.setFontSize(20);
      pdf.setTextColor(99, 102, 241);
      pdf.text("Table of Contents", margin, yPosition);
      yPosition += 15;

      chapters.forEach((chapter, index) => {
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        pdf.text(`${chapter.icon} Chapter ${chapter.id}: ${chapter.titleEn}`, margin, yPosition);
        yPosition += 8;
        setProgress(Math.floor(((index + 1) / chapters.length) * 20));
      });

      // Chapters Content
      for (let i = 0; i < chapters.length; i++) {
        const chapter = chapters[i];
        pdf.addPage();
        yPosition = margin;

        // Chapter Header
        pdf.setFillColor(99, 102, 241);
        pdf.rect(0, 0, pageWidth, 40, "F");
        
        pdf.setFontSize(24);
        pdf.setTextColor(255, 255, 255);
        pdf.text(`${chapter.icon} ${chapter.titleEn}`, margin, 25);

        yPosition = 55;

        // Description
        pdf.setFontSize(11);
        pdf.setTextColor(80, 80, 80);
        const descLines = pdf.splitTextToSize(chapter.description, contentWidth);
        pdf.text(descLines, margin, yPosition);
        yPosition += descLines.length * 6 + 10;

        // Terms Section
        if (chapter.terms && chapter.terms.length > 0) {
          checkNewPage(30);
          pdf.setFontSize(14);
          pdf.setTextColor(99, 102, 241);
          pdf.text("Key Terms", margin, yPosition);
          yPosition += 10;

          chapter.terms.forEach((term) => {
            checkNewPage(20);
            pdf.setFontSize(11);
            pdf.setTextColor(0, 0, 0);
            pdf.setFont("helvetica", "bold");
            pdf.text(`• ${term.term}`, margin + 5, yPosition);
            yPosition += 6;
            
            pdf.setFont("helvetica", "normal");
            pdf.setTextColor(80, 80, 80);
            const defLines = pdf.splitTextToSize(term.definition, contentWidth - 10);
            pdf.text(defLines, margin + 10, yPosition);
            yPosition += defLines.length * 5 + 5;
          });
        }

        // Blocks Section
        if (chapter.blocks && chapter.blocks.length > 0) {
          checkNewPage(30);
          pdf.setFontSize(14);
          pdf.setTextColor(99, 102, 241);
          pdf.text("Blocks Reference", margin, yPosition);
          yPosition += 10;

          chapter.blocks.forEach((block) => {
            checkNewPage(50);
            
            // Block name box
            pdf.setFillColor(245, 245, 255);
            pdf.roundedRect(margin, yPosition - 5, contentWidth, 12, 2, 2, "F");
            
            pdf.setFontSize(10);
            pdf.setTextColor(99, 102, 241);
            pdf.setFont("helvetica", "bold");
            pdf.text(block.nameEn, margin + 5, yPosition + 3);
            yPosition += 15;

            // Description
            pdf.setFont("helvetica", "normal");
            pdf.setTextColor(60, 60, 60);
            pdf.setFontSize(9);
            const blockDescLines = pdf.splitTextToSize(block.description, contentWidth - 10);
            pdf.text(blockDescLines, margin + 5, yPosition);
            yPosition += blockDescLines.length * 4 + 5;

            // Inputs
            if (block.inputs.length > 0) {
              pdf.setTextColor(100, 100, 100);
              pdf.setFont("helvetica", "italic");
              pdf.text("Inputs: " + block.inputs.join(", "), margin + 5, yPosition);
              yPosition += 5;
            }

            // Code Example
            if (block.codeExample) {
              checkNewPage(25);
              pdf.setFillColor(40, 40, 50);
              const codeLines = block.codeExample.split("\n");
              const codeHeight = codeLines.length * 4 + 8;
              pdf.roundedRect(margin + 5, yPosition, contentWidth - 10, codeHeight, 2, 2, "F");
              
              pdf.setFontSize(8);
              pdf.setTextColor(200, 200, 200);
              pdf.setFont("courier", "normal");
              codeLines.forEach((line, lineIndex) => {
                pdf.text(line, margin + 10, yPosition + 6 + lineIndex * 4);
              });
              yPosition += codeHeight + 10;
            }

            yPosition += 5;
          });
        }

        // Project Section
        if (chapter.project) {
          pdf.addPage();
          yPosition = margin;
          
          pdf.setFontSize(14);
          pdf.setTextColor(99, 102, 241);
          pdf.text("Project: " + chapter.project.title, margin, yPosition);
          yPosition += 10;

          pdf.setFontSize(10);
          pdf.setTextColor(60, 60, 60);
          const projDescLines = pdf.splitTextToSize(chapter.project.description, contentWidth);
          pdf.text(projDescLines, margin, yPosition);
          yPosition += projDescLines.length * 5 + 10;

          // Objectives
          if (chapter.project.objectives.length > 0) {
            pdf.setFontSize(11);
            pdf.setTextColor(99, 102, 241);
            pdf.text("Objectives:", margin, yPosition);
            yPosition += 7;

            chapter.project.objectives.forEach((obj) => {
              checkNewPage(10);
              pdf.setFontSize(9);
              pdf.setTextColor(60, 60, 60);
              pdf.text("✓ " + obj, margin + 5, yPosition);
              yPosition += 5;
            });
            yPosition += 5;
          }

          // Steps
          if (chapter.project.steps.length > 0) {
            checkNewPage(20);
            pdf.setFontSize(11);
            pdf.setTextColor(99, 102, 241);
            pdf.text("Implementation Steps:", margin, yPosition);
            yPosition += 10;

            chapter.project.steps.forEach((step) => {
              checkNewPage(30);
              pdf.setFillColor(250, 250, 255);
              pdf.roundedRect(margin, yPosition - 3, contentWidth, 20, 2, 2, "F");
              
              pdf.setFontSize(10);
              pdf.setTextColor(99, 102, 241);
              pdf.setFont("helvetica", "bold");
              pdf.text(`Step ${step.step}: ${step.title}`, margin + 5, yPosition + 3);
              
              pdf.setFont("helvetica", "normal");
              pdf.setTextColor(80, 80, 80);
              pdf.setFontSize(9);
              const stepDescLines = pdf.splitTextToSize(step.description, contentWidth - 15);
              pdf.text(stepDescLines, margin + 5, yPosition + 10);
              yPosition += 25;
            });
          }

          // Full Code
          if (chapter.project.fullCode) {
            checkNewPage(40);
            pdf.setFontSize(11);
            pdf.setTextColor(99, 102, 241);
            pdf.text("Complete Code:", margin, yPosition);
            yPosition += 8;

            pdf.setFillColor(30, 30, 40);
            const fullCodeLines = chapter.project.fullCode.split("\n");
            const fullCodeHeight = Math.min(fullCodeLines.length * 4 + 10, 100);
            pdf.roundedRect(margin, yPosition, contentWidth, fullCodeHeight, 2, 2, "F");
            
            pdf.setFontSize(7);
            pdf.setTextColor(180, 180, 180);
            pdf.setFont("courier", "normal");
            
            const maxLines = Math.floor((fullCodeHeight - 10) / 4);
            fullCodeLines.slice(0, maxLines).forEach((line, lineIndex) => {
              pdf.text(line.substring(0, 80), margin + 5, yPosition + 6 + lineIndex * 4);
            });
            
            if (fullCodeLines.length > maxLines) {
              pdf.text("... (see full code in the app)", margin + 5, yPosition + fullCodeHeight - 5);
            }
          }
        }

        setProgress(20 + Math.floor(((i + 1) / chapters.length) * 80));
      }

      // Save PDF
      pdf.save("Pictoblox-AI-Guide.pdf");
      setIsComplete(true);
      
      setTimeout(() => {
        setIsComplete(false);
      }, 3000);

    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsGenerating(false);
      setProgress(100);
    }
  };

  return (
    <Button
      variant="glass"
      size="xl"
      onClick={generatePDF}
      disabled={isGenerating}
      className="gap-2 min-w-[200px]"
    >
      {isGenerating ? (
        <>
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>جاري التصدير... {progress}%</span>
        </>
      ) : isComplete ? (
        <>
          <CheckCircle className="h-5 w-5 text-green-500" />
          <span>تم التحميل!</span>
        </>
      ) : (
        <>
          <FileDown className="h-5 w-5" />
          <span>تصدير PDF</span>
        </>
      )}
    </Button>
  );
};
