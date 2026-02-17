import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle, Trophy, RotateCcw, Lightbulb, Star } from "lucide-react";
import confetti from "canvas-confetti";

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ChapterQuizProps {
  chapterId: number;
  onComplete?: (score: number, total: number) => void;
}

// Quiz questions for each chapter
const chapterQuizzes: Record<number, QuizQuestion[]> = {
  3: [ // Face Detection
    {
      id: "fd-1",
      question: "ما هو البلوك المستخدم لتشغيل الكاميرا في Pictoblox؟",
      options: [
        "start camera",
        "turn video on stage",
        "open webcam",
        "enable face detection"
      ],
      correctAnswer: 1,
      explanation: "نستخدم turn video on stage لتشغيل الكاميرا مع إمكانية التحكم بالشفافية"
    },
    {
      id: "fd-2",
      question: "أي بلوك يجب استخدامه قبل الحصول على معلومات الوجه؟",
      options: [
        "get face info",
        "detect faces",
        "analyse image from",
        "scan for faces"
      ],
      correctAnswer: 2,
      explanation: "يجب استخدام analyse image from لتحليل الصورة أولاً قبل أي عملية كشف"
    },
    {
      id: "fd-3",
      question: "ما هي التعبيرات التي يمكن لـ Pictoblox التعرف عليها؟",
      options: [
        "فقط السعادة والحزن",
        "السعادة، الحزن، الغضب، الدهشة، الخوف، الاشمئزاز، المحايد",
        "فقط الابتسامة",
        "لا يمكنه التعرف على التعبيرات"
      ],
      correctAnswer: 1,
      explanation: "يمكن التعرف على 7 تعبيرات: happy, sad, angry, surprised, fear, disgust, neutral"
    },
    {
      id: "fd-4",
      question: "ماذا يعيد البلوك 'get # faces'؟",
      options: [
        "اسم الوجه",
        "موقع الوجه",
        "عدد الوجوه المكتشفة",
        "تعبير الوجه"
      ],
      correctAnswer: 2,
      explanation: "يعيد هذا البلوك عدد الوجوه المكتشفة في الصورة كرقم صحيح"
    },
    {
      id: "fd-5",
      question: "ما هو الـ Bounding Box؟",
      options: [
        "نوع من الكاميرات",
        "إطار مستطيل يحيط بالوجه المكتشف",
        "خلفية للمسرح",
        "نوع من البلوكات"
      ],
      correctAnswer: 1,
      explanation: "Bounding Box هو مستطيل يحدد موقع وحجم الوجه المكتشف في الصورة"
    }
  ],
  4: [ // Object Detection
    {
      id: "od-1",
      question: "كم عدد الفئات التي يمكن لـ COCO Dataset التعرف عليها؟",
      options: [
        "أكثر من 10 فئات",
        "أكثر من 50 فئة",
        "أكثر من 80 فئة",
        "أكثر من 200 فئة"
      ],
      correctAnswer: 2,
      explanation: "مجموعة بيانات COCO تحتوي على أكثر من 80 فئة من الأشياء الشائعة"
    },
    {
      id: "od-2",
      question: "ما هي درجة الثقة (Confidence Score)؟",
      options: [
        "سرعة الكشف",
        "نسبة تأكد النموذج من صحة الكشف",
        "عدد الأجسام",
        "حجم الجسم"
      ],
      correctAnswer: 1,
      explanation: "درجة الثقة هي نسبة مئوية تعبر عن مدى تأكد النموذج من صحة الكشف"
    },
    {
      id: "od-3",
      question: "أي بلوك يستخدم للحصول على اسم الجسم المكتشف؟",
      options: [
        "get object name",
        "() of object ()",
        "detect object",
        "object class"
      ],
      correctAnswer: 1,
      explanation: "نستخدم () of object () للحصول على خصائص الجسم مثل الاسم والموقع"
    },
    {
      id: "od-4",
      question: "ماذا يعني رفع عتبة الكشف (Detection Threshold)؟",
      options: [
        "زيادة سرعة الكشف",
        "تقليل الأخطاء لكن قد يفوت بعض الأشياء",
        "زيادة عدد الأجسام المكتشفة",
        "تغيير لون الإطار"
      ],
      correctAnswer: 1,
      explanation: "رفع العتبة يقلل الأخطاء الإيجابية الخاطئة لكن قد يفوت بعض الأشياء الحقيقية"
    },
    {
      id: "od-5",
      question: "ما الفرق بين 'is () detected?' و 'get # objects'؟",
      options: [
        "لا يوجد فرق",
        "الأول يتحقق من وجود جسم معين، والثاني يعيد عدد جميع الأجسام",
        "الأول أسرع",
        "الثاني أدق"
      ],
      correctAnswer: 1,
      explanation: "is () detected? يتحقق من وجود جسم محدد، بينما get # objects يعيد العدد الكلي"
    }
  ],
  5: [ // Body Detection
    {
      id: "bd-1",
      question: "ما هو الـ Keypoint في كشف الجسم؟",
      options: [
        "زر في لوحة المفاتيح",
        "نقطة محددة على الجسم مثل الكوع أو الركبة",
        "نوع من الكاميرات",
        "إعداد في البرنامج"
      ],
      correctAnswer: 1,
      explanation: "Keypoint هي نقاط رئيسية على الجسم يتم تتبعها مثل المفاصل والأطراف"
    },
    {
      id: "bd-2",
      question: "كم عدد نقاط الجسم التي يتتبعها Pictoblox؟",
      options: [
        "10 نقاط",
        "17 نقطة",
        "25 نقطة",
        "50 نقطة"
      ],
      correctAnswer: 1,
      explanation: "يتتبع Pictoblox 17 نقطة رئيسية على الجسم البشري"
    },
    {
      id: "bd-3",
      question: "ما هو استخدام 'is leaning ()?'",
      options: [
        "قياس طول الشخص",
        "التحقق من اتجاه ميلان الجسم",
        "كشف الوجه",
        "تشغيل الكاميرا"
      ],
      correctAnswer: 1,
      explanation: "يستخدم للتحقق من اتجاه ميلان الجسم (يمين، يسار، أمام، خلف)"
    },
    {
      id: "bd-4",
      question: "أي بلوك يستخدم لحساب الزاوية بين ثلاث نقاط؟",
      options: [
        "get angle",
        "angle () () ()",
        "measure angle",
        "calculate angle"
      ],
      correctAnswer: 1,
      explanation: "نستخدم angle () () () لحساب الزاوية بين ثلاث نقاط مثل زاوية الكوع"
    },
    {
      id: "bd-5",
      question: "ما هي أفضل طريقة لتتبع حركة اليد؟",
      options: [
        "استخدام الكاميرا فقط",
        "استخدام () of body () مع تحديد نقطة اليد",
        "استخدام الماوس",
        "لا يمكن تتبع اليد"
      ],
      correctAnswer: 1,
      explanation: "نستخدم () of body () مع تحديد النقطة المطلوبة مثل left wrist أو right wrist"
    }
  ],
  6: [ // Card Recognition
    {
      id: "cr-1",
      question: "ما هو الـ Marker في سياق Card Recognition؟",
      options: [
        "قلم للكتابة",
        "صورة أو رمز فريد يمكن للبرنامج التعرف عليه",
        "نوع من الأصوات",
        "زر في البرنامج"
      ],
      correctAnswer: 1,
      explanation: "Marker هو صورة أو رمز فريد يستخدمه البرنامج كعلامة للتعرف"
    },
    {
      id: "cr-2",
      question: "ما هو الواقع المعزز (AR)؟",
      options: [
        "ألعاب الفيديو",
        "دمج عناصر افتراضية مع العالم الحقيقي",
        "تصوير الفيديو",
        "برنامج رسم"
      ],
      correctAnswer: 1,
      explanation: "الواقع المعزز هو تقنية تدمج العناصر الرقمية مع البيئة الحقيقية"
    },
    {
      id: "cr-3",
      question: "أي بلوك يستخدم لإضافة بطاقة جديدة للتعرف عليها؟",
      options: [
        "create marker",
        "add marker ()",
        "new card",
        "register marker"
      ],
      correctAnswer: 1,
      explanation: "نستخدم add marker () لإضافة صورة كـ marker جديد"
    },
    {
      id: "cr-4",
      question: "ماذا يعيد 'total markers detected'؟",
      options: [
        "اسم البطاقة",
        "موقع البطاقة",
        "عدد البطاقات المكتشفة حالياً",
        "حجم البطاقة"
      ],
      correctAnswer: 2,
      explanation: "يعيد العدد الكلي للـ markers المكتشفة في الإطار الحالي"
    },
    {
      id: "cr-5",
      question: "ما هي استخدامات Card Recognition؟",
      options: [
        "فقط الألعاب",
        "البطاقات التعليمية، الواقع المعزز، التحكم بالروبوتات",
        "فقط التصوير",
        "فقط الرسم"
      ],
      correctAnswer: 1,
      explanation: "تستخدم في التعليم التفاعلي والواقع المعزز والتحكم بالأجهزة"
    }
  ],
  7: [ // Virtual Doctor with NLP
    {
      id: "vd-1",
      question: "ما هو الـ NLP؟",
      options: [
        "نوع من الكاميرات",
        "معالجة اللغة الطبيعية",
        "برنامج تحرير",
        "نوع من الروبوتات"
      ],
      correctAnswer: 1,
      explanation: "NLP تعني Natural Language Processing - معالجة اللغة الطبيعية"
    },
    {
      id: "vd-2",
      question: "ما هو تحليل المشاعر (Sentiment Analysis)؟",
      options: [
        "قراءة الأفكار",
        "تحديد المشاعر الإيجابية أو السلبية من النص",
        "ترجمة اللغات",
        "تشغيل الصوت"
      ],
      correctAnswer: 1,
      explanation: "تحليل المشاعر هو تحديد ما إذا كان النص يحمل مشاعر إيجابية أو سلبية أو محايدة"
    },
    {
      id: "vd-3",
      question: "أي بلوك يستخدم لتحويل الكلام إلى نص؟",
      options: [
        "text to speech",
        "speech to text",
        "translate",
        "speak"
      ],
      correctAnswer: 1,
      explanation: "نستخدم speech to text لتحويل الكلام المنطوق إلى نص مكتوب"
    },
    {
      id: "vd-4",
      question: "ما هو الـ Intent في معالجة اللغة؟",
      options: [
        "لغة البرمجة",
        "القصد أو الهدف من كلام المستخدم",
        "نوع من الأصوات",
        "إعداد في البرنامج"
      ],
      correctAnswer: 1,
      explanation: "Intent هو الهدف أو القصد من كلام المستخدم مثل السؤال أو الطلب"
    },
    {
      id: "vd-5",
      question: "ما الفرق بين 'speak' و 'speak and wait'؟",
      options: [
        "لا يوجد فرق",
        "'speak and wait' ينتظر حتى انتهاء الكلام",
        "'speak' أعلى صوتاً",
        "'speak and wait' أسرع"
      ],
      correctAnswer: 1,
      explanation: "speak and wait يوقف البرنامج حتى ينتهي النطق، بينما speak يستمر فوراً"
    }
  ],
  8: [ // Machine Learning
    {
      id: "ml-1",
      question: "ما هو التعلم الآلي؟",
      options: [
        "برمجة الروبوتات",
        "تدريب الكمبيوتر على التعلم من البيانات",
        "تصميم المواقع",
        "تحرير الفيديو"
      ],
      correctAnswer: 1,
      explanation: "التعلم الآلي هو تدريب الكمبيوتر على التعلم من الأمثلة بدلاً من البرمجة المباشرة"
    },
    {
      id: "ml-2",
      question: "ما هو الـ Training في التعلم الآلي؟",
      options: [
        "تشغيل البرنامج",
        "عملية تعليم النموذج من خلال الأمثلة",
        "حذف البيانات",
        "رسم الصور"
      ],
      correctAnswer: 1,
      explanation: "Training هي عملية تغذية النموذج بالأمثلة ليتعلم الأنماط"
    },
    {
      id: "ml-3",
      question: "ما هي الـ Class في التعلم الآلي؟",
      options: [
        "غرفة الدراسة",
        "فئة أو تصنيف للبيانات",
        "نوع من الكاميرات",
        "لغة برمجة"
      ],
      correctAnswer: 1,
      explanation: "Class هي فئة أو تصنيف تُجمع فيه البيانات المتشابهة"
    },
    {
      id: "ml-4",
      question: "لماذا نحتاج عدة صور لكل فئة؟",
      options: [
        "لملء الذاكرة",
        "ليتعلم النموذج التنوع في كل فئة",
        "لتزيين البرنامج",
        "لا نحتاج عدة صور"
      ],
      correctAnswer: 1,
      explanation: "نحتاج صور متعددة ومتنوعة ليتعلم النموذج التعرف على الفئة من زوايا مختلفة"
    },
    {
      id: "ml-5",
      question: "ما هي درجة الثقة (Confidence) في التصنيف؟",
      options: [
        "سرعة التصنيف",
        "مدى تأكد النموذج من التصنيف",
        "عدد الفئات",
        "حجم الصورة"
      ],
      correctAnswer: 1,
      explanation: "درجة الثقة هي نسبة مئوية تعبر عن مدى تأكد النموذج من صحة التصنيف"
    }
  ]
};

export const ChapterQuiz = ({ chapterId, onComplete }: ChapterQuizProps) => {
  const questions = chapterQuizzes[chapterId] || [];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [showExplanation, setShowExplanation] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  if (questions.length === 0) {
    return null;
  }

  const question = questions[currentQuestion];

  const handleSelectAnswer = (index: number) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    setShowResult(true);
    setShowExplanation(true);
    
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = selectedAnswer;
    setAnswers(newAnswers);
    
    if (selectedAnswer === question.correctAnswer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
      const finalScore = score + (selectedAnswer === question.correctAnswer ? 1 : 0);
      onComplete?.(finalScore, questions.length);
      
      // Confetti for good scores
      if (finalScore >= questions.length * 0.8) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setShowExplanation(false);
    setScore(0);
    setAnswers(new Array(questions.length).fill(null));
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / questions.length) * 100);
    const isPassing = percentage >= 60;
    
    return (
      <div className="glass-card p-8 text-center animate-scale-in">
        <div className={cn(
          "w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center",
          isPassing ? "bg-green-500/20" : "bg-orange-500/20"
        )}>
          {isPassing ? (
            <Trophy className="w-12 h-12 text-green-500" />
          ) : (
            <RotateCcw className="w-12 h-12 text-orange-500" />
          )}
        </div>
        
        <h3 className="text-2xl font-bold mb-2">
          {isPassing ? "أحسنت! 🎉" : "حاول مرة أخرى"}
        </h3>
        
        <p className="text-muted-foreground mb-6">
          حصلت على {score} من {questions.length} ({percentage}%)
        </p>
        
        <div className="flex justify-center gap-4 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "w-8 h-8 transition-all duration-300",
                i < Math.ceil((score / questions.length) * 5)
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-gray-600"
              )}
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        
        <Button onClick={handleRestart} variant="hero" className="gap-2">
          <RotateCcw className="w-4 h-4" />
          أعد الاختبار
        </Button>
      </div>
    );
  }

  return (
    <div className="glass-card p-6">
      {/* Progress */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground">
          السؤال {currentQuestion + 1} من {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                i === currentQuestion
                  ? "w-6 bg-primary"
                  : i < currentQuestion
                    ? answers[i] === questions[i].correctAnswer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      {/* Question */}
      <h4 className="text-xl font-bold mb-6">{question.question}</h4>

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(index)}
            disabled={showResult}
            className={cn(
              "w-full p-4 rounded-xl text-right transition-all duration-300 border-2",
              "hover:scale-[1.02] active:scale-[0.98]",
              selectedAnswer === index
                ? showResult
                  ? index === question.correctAnswer
                    ? "border-green-500 bg-green-500/20"
                    : "border-red-500 bg-red-500/20"
                  : "border-primary bg-primary/20"
                : showResult && index === question.correctAnswer
                  ? "border-green-500 bg-green-500/20"
                  : "border-border bg-secondary/50 hover:bg-secondary",
              showResult && "cursor-default"
            )}
          >
            <div className="flex items-center gap-3">
              <span className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold",
                selectedAnswer === index
                  ? showResult
                    ? index === question.correctAnswer
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              )}>
                {showResult ? (
                  index === question.correctAnswer ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : selectedAnswer === index ? (
                    <XCircle className="w-5 h-5" />
                  ) : (
                    String.fromCharCode(65 + index)
                  )
                ) : (
                  String.fromCharCode(65 + index)
                )}
              </span>
              <span className="flex-1">{option}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Explanation */}
      {showExplanation && (
        <div className={cn(
          "p-4 rounded-xl mb-6 animate-fade-in",
          selectedAnswer === question.correctAnswer
            ? "bg-green-500/10 border border-green-500/30"
            : "bg-orange-500/10 border border-orange-500/30"
        )}>
          <div className="flex items-start gap-3">
            <Lightbulb className={cn(
              "w-5 h-5 mt-0.5",
              selectedAnswer === question.correctAnswer ? "text-green-500" : "text-orange-500"
            )} />
            <div>
              <p className="font-semibold mb-1">
                {selectedAnswer === question.correctAnswer ? "إجابة صحيحة! ✨" : "ليست الإجابة الصحيحة"}
              </p>
              <p className="text-sm text-muted-foreground">{question.explanation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex justify-end gap-3">
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={selectedAnswer === null}
            variant="hero"
          >
            تحقق من الإجابة
          </Button>
        ) : (
          <Button onClick={handleNext} variant="hero">
            {currentQuestion < questions.length - 1 ? "السؤال التالي" : "عرض النتيجة"}
          </Button>
        )}
      </div>
    </div>
  );
};
