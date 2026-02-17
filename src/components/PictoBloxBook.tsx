import { useState, useMemo } from "react";

// ============================================================
// PictoBlox AI Book — Single Embeddable Component
// ============================================================

// ---------- data types ----------
interface Block {
  id: string;
  nameEn: string;
  nameAr: string;
  description: string;
  inputs: string[];
  outputs: string[];
  codeExample: string;
}

interface Term {
  term: string;
  termAr: string;
  definition: string;
}

interface ProjectStep {
  step: number;
  title: string;
  description: string;
  code?: string;
}

interface Project {
  title: string;
  description: string;
  objectives: string[];
  steps: ProjectStep[];
  fullCode: string;
}

interface Chapter {
  id: number;
  titleAr: string;
  titleEn: string;
  icon: string;
  description: string;
  color: string;
  terms?: Term[];
  blocks?: Block[];
  project?: Project;
}

// ---------- chapter data ----------
const chapters: Chapter[] = [
  {
    id: 1,
    titleAr: "مقدمة عن Pictoblox",
    titleEn: "Introduction to Pictoblox",
    icon: "🚀",
    description: "تعريف البرنامج وأهميته في التعليم ولمحة عن استخداماته في البرمجة والذكاء الاصطناعي",
    color: "from-blue-500 to-cyan-500",
    terms: [
      { term: "PictoBlox", termAr: "بيكتوبلوكس", definition: "بيئة برمجة رسومية مبنية على Scratch طورتها شركة STEMpedia الهندية، تدمج تقنيات الذكاء الاصطناعي والتعلم الآلي بطريقة مبسطة." },
      { term: "Scratch", termAr: "سكراتش", definition: "لغة برمجة رسومية للمبتدئين طُورت في MIT." },
      { term: "Sprite", termAr: "الكائن", definition: "الشخصية أو الكائن الذي يتم برمجته على المسرح." },
      { term: "Stage", termAr: "المسرح", definition: "منطقة العرض حيث تُنفذ البرامج وتظهر النتائج." },
      { term: "Block", termAr: "البلوك", definition: "الأمر البرمجي الرسومي الذي يُسحب ويُلصق لبناء البرنامج." },
      { term: "Extension", termAr: "الإضافة", definition: "مكتبة بلوكات إضافية مثل Face Detection أو Machine Learning." },
    ],
    project: {
      title: "قط يقول مرحباً - أول برنامج لك!",
      description: "مشروع بسيط للمبتدئين يجعل القط يتحرك ويقول مرحباً.",
      objectives: [
        "فهم واجهة Pictoblox الأساسية",
        "استخدام بلوكات الأحداث والمظهر والحركة",
        "تشغيل البرنامج واختباره",
      ],
      steps: [
        { step: 1, title: "فتح Pictoblox", description: "افتح البرنامج وتأكد من وجود القط على المسرح.", code: "// افتح البرنامج" },
        { step: 2, title: "إضافة بلوك الحدث", description: "اسحب 'when green flag clicked' إلى منطقة الأكواد.", code: "when green flag clicked" },
        { step: 3, title: "جعل القط يقول مرحباً", description: "أضف بلوك say من قسم Looks.", code: 'when green flag clicked\nsay [مرحباً! 👋] for [2] seconds' },
        { step: 4, title: "إضافة حركة", description: "أضف بلوكات حركة من Motion.", code: 'when green flag clicked\nsay [مرحباً! 👋] for [2] seconds\nmove [100] steps' },
        { step: 5, title: "تفاعل عند النقر", description: "أضف when this sprite clicked.", code: 'when this sprite clicked\nsay [نقرت علي! 😸] for [2] seconds' },
        { step: 6, title: "إضافة صوت", description: "شغّل صوت Meow.", code: 'when this sprite clicked\nplay sound [Meow]' },
        { step: 7, title: "تشغيل واختبار", description: "اضغط العلم الأخضر واختبر!", code: "// اضغط العلم الأخضر ▶️" },
      ],
      fullCode: `when green flag clicked
say [مرحباً! أنا القط توبي 🐱] for [2] seconds
glide [1] secs to x: [100] y: [0]
turn right [360] degrees
glide [1] secs to x: [0] y: [0]

when this sprite clicked
play sound [Meow]
say [مياو! 🐱] for [1] seconds`,
    },
  },
  {
    id: 2,
    titleAr: "البدء مع Pictoblox",
    titleEn: "Getting Started with Pictoblox",
    icon: "⚙️",
    description: "تثبيت البرنامج وإعداد البيئة والتعرف على واجهة البرنامج وأهم الأدوات",
    color: "from-green-500 to-emerald-500",
    terms: [
      { term: "IDE", termAr: "بيئة التطوير", definition: "البيئة المتكاملة للبرمجة التي تحتوي على أدوات الكتابة والتنفيذ والتصحيح." },
      { term: "Script", termAr: "السكريبت", definition: "مجموعة البلوكات المتصلة التي تشكل برنامجاً واحداً." },
      { term: "Costume", termAr: "المظهر", definition: "الصورة أو الشكل الخارجي للـ Sprite، يمكن تغييره لإنشاء رسوم متحركة." },
      { term: "Backdrop", termAr: "الخلفية", definition: "صورة خلفية المسرح التي تُعرض خلف الـ Sprites." },
      { term: "Variable", termAr: "المتغير", definition: "حاوية لتخزين بيانات مثل النقاط أو الاسم يمكن تغيير قيمتها." },
      { term: "Loop", termAr: "الحلقة", definition: "بلوك يُكرر تنفيذ مجموعة أوامر عدداً محدداً أو غير محدود من المرات." },
    ],
    project: {
      title: "لعبة التقاط النجوم",
      description: "لعبة تحرك فيها القط بالأسهم لالتقاط نجوم عشوائية.",
      objectives: [
        "استخدام المتغيرات لحفظ النقاط",
        "برمجة التحكم بالـ Sprite عبر لوحة المفاتيح",
        "استخدام الحلقات والشروط والنسخ",
      ],
      steps: [
        { step: 1, title: "إعداد المتغيرات", description: "أنشئ متغيراً للنقاط.", code: "when green flag clicked\nset [score] to [0]" },
        { step: 2, title: "التحكم بالأسهم", description: "حرك القط بالأسهم.", code: "when [right arrow] key pressed\nchange x by [15]" },
        { step: 3, title: "إنشاء النجوم", description: "أضف Sprite نجمة تظهر عشوائياً.", code: "forever\n  wait (pick random [2] to [3]) seconds\n  create clone of [myself]\nend" },
        { step: 4, title: "ظهور عشوائي", description: "النجمة تظهر في مكان عشوائي.", code: "when I start as a clone\ngo to x: (pick random [-200] to [200]) y: (pick random [-150] to [150])\nshow" },
        { step: 5, title: "التقاط النجمة", description: "عند لمس القط للنجمة تزداد النقاط.", code: "if <touching [Tobi]?> then\n  change [score] by [10]\n  delete this clone\nend" },
        { step: 6, title: "إضافة مؤقت", description: "30 ثانية لجمع أكبر عدد.", code: "set [time] to [30]\nrepeat until <(time) < [1]>\n  wait [1] seconds\n  change [time] by [-1]\nend" },
        { step: 7, title: "اللمسات النهائية", description: "أضف خلفية وأصوات وعرض النقاط.", code: "// أضف تأثيرات وأصوات" },
      ],
      fullCode: `when green flag clicked
set [score] to [0]
set [time] to [30]

when [right arrow] key pressed
change x by [15]

when [left arrow] key pressed
change x by [-15]

// النجمة
when I start as a clone
go to x: (pick random [-200] to [200]) y: (pick random [-130] to [130])
show
repeat until <touching [Tobi]?>
  turn right [5] degrees
end
change [score] by [10]
delete this clone`,
    },
  },
  {
    id: 3,
    titleAr: "كشف الوجه",
    titleEn: "Face Detection",
    icon: "👤",
    description: "التعرف على الوجوه وتحليل التعبيرات باستخدام Face Detection Extension",
    color: "from-orange-500 to-amber-500",
    terms: [
      { term: "Face Detection", termAr: "كشف الوجه", definition: "تقنية ذكاء اصطناعي تكتشف وجود الوجوه في الصور أو الفيديو وتحدد مواقعها." },
      { term: "Bounding Box", termAr: "الإطار المحيط", definition: "مستطيل يُرسم حول الوجه المكتشف يحدد موقعه وأبعاده." },
      { term: "Expression", termAr: "التعبير", definition: "الحالة العاطفية للوجه: سعيد، حزين، غاضب، مندهش، خائف، أو محايد." },
      { term: "Facial Landmarks", termAr: "معالم الوجه", definition: "نقاط محددة على الوجه مثل العينين والأنف والفم تُستخدم لتحليل التعبيرات." },
    ],
    blocks: [
      { id: "turn-video", nameEn: "turn () video on stage with () % transparency", nameAr: "تشغيل الفيديو على المسرح", description: "تفعيل الكاميرا وعرض الفيديو على المسرح مع التحكم في الشفافية.", inputs: ["on/off: حالة الكاميرا", "transparency: نسبة الشفافية (0-100)"], outputs: ["عرض الفيديو على المسرح"], codeExample: "when green flag clicked\nturn [on] video on stage with [50] % transparency" },
      { id: "analyse-image", nameEn: "analyse image from ()", nameAr: "تحليل الصورة من", description: "تحليل الصورة من الكاميرا أو المسرح للبحث عن الوجوه.", inputs: ["camera/stage: مصدر الصورة"], outputs: ["تحليل الصورة وتخزين بيانات الوجوه"], codeExample: "forever\n  analyse image from [camera]\n  if <(get # faces) > [0]> then\n    say [تم اكتشاف وجه!]\n  end\nend" },
      { id: "bounding-box", nameEn: "() bounding box", nameAr: "الإطار المحيط", description: "إحداثيات الإطار المحيط بالوجه المكتشف (x, y, width, height).", inputs: ["x/y/width/height"], outputs: ["قيمة رقمية"], codeExample: "forever\n  analyse image from [camera]\n  go to x: (x bounding box) y: (y bounding box)\nend" },
      { id: "get-faces", nameEn: "get # faces", nameAr: "عدد الوجوه", description: "عدد الوجوه المكتشفة في الصورة.", inputs: [], outputs: ["عدد صحيح"], codeExample: "if <(get # faces) > [0]> then\n  say (join [الوجوه: ] (get # faces))\nend" },
      { id: "get-expression", nameEn: "get expression of face ()", nameAr: "تعبير الوجه", description: "التعبير السائد على الوجه: happy, sad, angry, surprised, neutral.", inputs: ["رقم الوجه"], outputs: ["نص التعبير"], codeExample: "if <(get expression of face [1]) = [happy]> then\n  switch backdrop to [sunny]\nend" },
      { id: "is-expression", nameEn: "is expression of face () ()", nameAr: "هل تعبير الوجه هو", description: "بلوك شرطي يتحقق من تعبير الوجه.", inputs: ["رقم الوجه", "التعبير"], outputs: ["صحيح/خطأ"], codeExample: "if <is expression of face [1] [happy]> then\n  play sound [laugh]\nend" },
    ],
    project: {
      title: "مرآة المشاعر الذكية",
      description: "مرآة سحرية تتعرف على وجهك ومشاعرك وتتفاعل معها.",
      objectives: ["تشغيل الكاميرا واكتشاف الوجوه", "التعرف على تعبيرات الوجه", "إضافة تأثيرات بصرية وصوتية"],
      steps: [
        { step: 1, title: "إعداد الكاميرا", description: "تشغيل الكاميرا وإعداد المتغيرات.", code: "when green flag clicked\nturn [on] video on stage with [30] % transparency\nset [current mood] to [محايد]" },
        { step: 2, title: "اكتشاف الوجه", description: "كشف الوجه وتتبع موقعه.", code: "forever\n  analyse image from [camera]\n  if <(get # faces) > [0]> then\n    go to x: (x bounding box) y: (y bounding box)\n  end\nend" },
        { step: 3, title: "التعرف على التعبيرات", description: "تحليل تعبيرات الوجه.", code: "set [current mood] to (get expression of face [1])\nif <(current mood) = [happy]> then\n  say [😊 سعيد!]\nend" },
        { step: 4, title: "تأثيرات بصرية", description: "تغيير التأثيرات حسب المشاعر.", code: "if <(current mood) = [happy]> then\n  set [brightness] effect to [20]\nend\nif <(current mood) = [sad]> then\n  set [color] effect to [200]\nend" },
        { step: 5, title: "أصوات", description: "تشغيل موسيقى حسب المزاج.", code: "if <(current mood) = [happy]> then\n  play sound [happy music]\nend" },
        { step: 6, title: "إطار للوجه", description: "Sprite يحيط بالوجه.", code: "go to x: (x bounding box) y: (y bounding box)\nset size to ((width bounding box) * [2.5]) %" },
        { step: 7, title: "الكود النهائي", description: "إضافة تحكم وإحصائيات.", code: "when [s] key pressed\nsay (join [ابتسامات: ] (smile count))" },
      ],
      fullCode: `when green flag clicked
turn [on] video on stage with [30] % transparency
set [current mood] to [neutral]
set [smile count] to [0]

forever
  analyse image from [camera]
  if <(get # faces) > [0]> then
    set [current mood] to (get expression of face [1])
    go to x: (x bounding box) y: (y bounding box)
    if <(current mood) = [happy]> then
      say [😊 ابتسامة جميلة!]
    end
    if <(current mood) = [sad]> then
      say [😢 لا تحزن!]
    end
  else
    say [👀 أين أنت؟]
  end
end`,
    },
  },
  {
    id: 4,
    titleAr: "كشف الأشياء",
    titleEn: "Object Detection",
    icon: "📦",
    description: "التعرف على الأجسام المختلفة وعدها وتتبعها",
    color: "from-purple-500 to-violet-500",
    terms: [
      { term: "Object Detection", termAr: "كشف الأشياء", definition: "تقنية ذكاء اصطناعي تكتشف وتصنف الأجسام المختلفة في الصور." },
      { term: "COCO Dataset", termAr: "مجموعة بيانات COCO", definition: "قاعدة بيانات تحتوي على 80 فئة من الأجسام الشائعة." },
      { term: "Confidence Score", termAr: "درجة الثقة", definition: "نسبة تأكد النموذج من صحة الكشف (0-100)." },
      { term: "Threshold", termAr: "العتبة", definition: "الحد الأدنى لدرجة الثقة المطلوبة لقبول الكشف." },
    ],
    blocks: [
      { id: "is-detected", nameEn: "is () detected?", nameAr: "هل تم اكتشاف ()؟", description: "يتحقق من وجود جسم معين في الإطار.", inputs: ["اسم الجسم"], outputs: ["صحيح/خطأ"], codeExample: "if <is [book] detected?> then\n  say [أرى كتاباً! 📚]\nend" },
      { id: "count-objects", nameEn: "count () in frame", nameAr: "عد () في الإطار", description: "عد الأجسام من نوع معين.", inputs: ["اسم الجسم"], outputs: ["عدد صحيح"], codeExample: "set [people count] to (count [person] in frame)" },
      { id: "get-object-property", nameEn: "() of () no. ()", nameAr: "خاصية الجسم", description: "خاصية محددة لجسم معين (x, y, width, height, confidence).", inputs: ["الخاصية", "اسم الجسم", "الرقم"], outputs: ["قيمة رقمية"], codeExample: "glide [0.2] secs to x: ([x] of [person] no. [1]) y: ([y] of [person] no. [1])" },
      { id: "set-threshold", nameEn: "set detection threshold to ()", nameAr: "تعيين عتبة الكشف", description: "تحديد الحد الأدنى لدرجة الثقة.", inputs: ["العتبة (0-100)"], outputs: ["تحديث الإعدادات"], codeExample: "set detection threshold to [75]" },
      { id: "total-objects", nameEn: "total detected objects", nameAr: "إجمالي الأجسام", description: "العدد الإجمالي لجميع الأجسام المكتشفة.", inputs: [], outputs: ["عدد صحيح"], codeExample: "say (join [الأشياء: ] (total detected objects))" },
    ],
    project: {
      title: "عداد ذكي للأجسام",
      description: "تطبيق يعد الأشياء المختلفة أمام الكاميرا مع تغيير الألوان.",
      objectives: ["عد أنواع مختلفة من الأجسام", "تغيير مظهر الـ Sprite حسب نوع الجسم", "إضافة تأثيرات صوتية وبصرية"],
      steps: [
        { step: 1, title: "إعداد المسرح", description: "تشغيل الكاميرا وضبط العتبة.", code: "when green flag clicked\nturn [on] video on stage with [40] % transparency\nset detection threshold to [60]" },
        { step: 2, title: "حلقة التحليل", description: "تحليل مستمر وتحديث العدادات.", code: "forever\n  analyse image from [camera]\n  set [people count] to (count [person] in frame)\n  set [objects count] to (total detected objects)\nend" },
        { step: 3, title: "تغيير الألوان", description: "لون مختلف لكل نوع جسم.", code: "if <is [person] detected?> then\n  set [color] effect to [0]\nend\nif <is [book] detected?> then\n  set [color] effect to [150]\nend" },
        { step: 4, title: "تأثيرات صوتية", description: "صوت عند اكتشاف أجسام جديدة.", code: "when [person] is detected\nplay sound [hello]\nsay [مرحباً!]" },
        { step: 5, title: "عرض الإحصائيات", description: "عرض عدد الأجسام على الشاشة.", code: "say (join [👤 ] (join (people count) (join [ | 📦 ] (objects count))))" },
        { step: 6, title: "نظام التقارير", description: "تقرير مفصل عند الضغط على مفتاح.", code: "when [s] key pressed\nsay (join [الأجسام: ] (get all detected objects))" },
        { step: 7, title: "الكود النهائي", description: "دمج كل شيء مع التحكم.", code: "// الكود النهائي الكامل" },
      ],
      fullCode: `when green flag clicked
set [people count] to [0]
set [objects count] to [0]
turn [on] video on stage with [40] % transparency
set detection threshold to [60]

forever
  analyse image from [camera]
  set [people count] to (count [person] in frame)
  set [objects count] to (total detected objects)
  
  if <is [person] detected?> then
    set [color] effect to [0]
    say (join [👤 أشخاص: ] (people count))
  end
  if <is [book] detected?> then
    set [color] effect to [150]
    say [📚 كتاب!]
  end
end`,
    },
  },
  {
    id: 5,
    titleAr: "كشف جسم الإنسان",
    titleEn: "Human Body Detection",
    icon: "🏃",
    description: "تتبع حركة الجسم والتفاعل مع الأجزاء المختلفة",
    color: "from-red-500 to-orange-500",
    terms: [
      { term: "Pose Estimation", termAr: "تقدير الوضعية", definition: "تقنية تحدد مواقع مفاصل الجسم (17 نقطة) لفهم وضعية الإنسان." },
      { term: "Keypoints", termAr: "النقاط المفتاحية", definition: "17 نقطة تمثل مفاصل الجسم: الأنف، العينين، الأذنين، الكتفين، المرفقين، المعصمين، الوركين، الركبتين، الكاحلين." },
      { term: "Skeleton", termAr: "الهيكل العظمي", definition: "الخطوط الواصلة بين النقاط المفتاحية." },
      { term: "Gesture Recognition", termAr: "التعرف على الإيماءات", definition: "فهم حركات الجسم وتفسيرها كأوامر." },
    ],
    blocks: [
      { id: "is-body-detected", nameEn: "is body detected?", nameAr: "هل تم اكتشاف جسم؟", description: "يتحقق من وجود جسم إنسان.", inputs: [], outputs: ["صحيح/خطأ"], codeExample: "if <is body detected?> then\n  say [مرحباً! 👋]\nend" },
      { id: "body-x-y", nameEn: "() of body part ()", nameAr: "إحداثي جزء الجسم", description: "إحداثي X أو Y لجزء من الجسم.", inputs: ["x/y", "اسم الجزء"], outputs: ["قيمة رقمية"], codeExample: "go to x: ([x] of body part [right_wrist]) y: ([y] of body part [right_wrist])" },
      { id: "distance-between", nameEn: "distance between () and ()", nameAr: "المسافة بين نقطتين", description: "المسافة بين نقطتين من الجسم.", inputs: ["النقطة 1", "النقطة 2"], outputs: ["قيمة رقمية"], codeExample: "if <(distance between [left_wrist] and [right_wrist]) < [50]> then\n  say [تصفيق! 👏]\nend" },
      { id: "angle-of-joint", nameEn: "angle of () joint", nameAr: "زاوية المفصل", description: "زاوية مفصل معين بالدرجات.", inputs: ["اسم المفصل"], outputs: ["قيمة رقمية"], codeExample: "if <(angle of [right_elbow] joint) > [150]> then\n  say [ذراعك مرفوعة! 🙋]\nend" },
      { id: "body-leaning", nameEn: "body leaning ()", nameAr: "ميل الجسم", description: "اتجاه ميل الجسم: left, right, forward, center.", inputs: [], outputs: ["نص"], codeExample: "if <(body leaning) = [left]> then\n  change x by [-10]\nend" },
    ],
    project: {
      title: "لعبة التحكم بالجسم - جمع النجوم",
      description: "لعبة تفاعلية يتحكم فيها اللاعب بحركة جسمه لجمع النجوم وتجنب العوائق.",
      objectives: ["تتبع حركة اليد", "اكتشاف إيماءات الجسم", "نظام نقاط وحياة ومستويات"],
      steps: [
        { step: 1, title: "إعداد المسرح", description: "تشغيل الكاميرا وإعداد المتغيرات.", code: "when green flag clicked\nset [score] to [0]\nset [lives] to [3]\nturn [on] video on stage with [50] % transparency" },
        { step: 2, title: "التحكم بحركة اليد", description: "الـ Sprite يتبع اليد اليمنى.", code: "forever\n  analyse image from [camera]\n  if <is body detected?> then\n    glide [0.1] secs to x: ([x] of body part [right_wrist]) y: ([y] of body part [right_wrist])\n  end\nend" },
        { step: 3, title: "نجوم متساقطة", description: "نجوم تسقط من الأعلى.", code: "when I start as a clone\ngo to x: (pick random [-220] to [220]) y: [180]\nshow\nrepeat until <touching [Player]?>\n  change y by ((speed) * [-1])\nend\nchange [score] by [10]" },
        { step: 4, title: "العوائق", description: "صخور يجب تجنبها.", code: "if <touching [Player]?> then\n  change [lives] by [-1]\n  if <(lives) < [1]> then\n    set [game over] to [true]\n  end\nend" },
        { step: 5, title: "القفز والانحناء", description: "إيماءات الجسم للقفز.", code: "if <<is [left_wrist] above [nose]?> and <is [right_wrist] above [nose]?>> then\n  say [قفز! 🦘]\nend" },
        { step: 6, title: "المستويات", description: "صعوبة متزايدة.", code: "if <(score) >= ((level) * [50])> then\n  change [level] by [1]\n  change [speed] by [1]\nend" },
        { step: 7, title: "الكود النهائي", description: "دمج كل شيء.", code: "// الكود النهائي الكامل" },
      ],
      fullCode: `when green flag clicked
set [score] to [0]
set [lives] to [3]
set [level] to [1]
set [speed] to [3]
turn [on] video on stage with [50] % transparency

forever
  analyse image from [camera]
  if <is body detected?> then
    glide [0.1] secs to x: ([x] of body part [right_wrist]) y: ([y] of body part [right_wrist])
  end
end`,
    },
  },
  {
    id: 6,
    titleAr: "التعرف على البطاقات",
    titleEn: "Card Recognition",
    icon: "🃏",
    description: "التعرف على البطاقات وتفاعل Sprite معها بتقنية الواقع المعزز",
    color: "from-indigo-500 to-purple-500",
    terms: [
      { term: "Marker", termAr: "العلامة/الماركر", definition: "بطاقة يتم تدريب البرنامج على التعرف عليها." },
      { term: "Augmented Reality", termAr: "الواقع المعزز", definition: "تقنية تدمج عناصر افتراضية مع العالم الحقيقي من خلال الكاميرا." },
      { term: "Pattern Recognition", termAr: "التعرف على الأنماط", definition: "قدرة البرنامج على التمييز بين البطاقات المختلفة." },
    ],
    blocks: [
      { id: "add-marker", nameEn: "add marker ()", nameAr: "إضافة ماركر", description: "تسجيل بطاقة جديدة للتعرف عليها.", inputs: ["اسم الماركر"], outputs: ["تسجيل البطاقة"], codeExample: "when [a] key pressed\nadd marker [بطاقة_القلب]\nsay [تم التسجيل! ❤️]" },
      { id: "is-marker-detected", nameEn: "is marker detected?", nameAr: "هل تم اكتشاف ماركر؟", description: "يتحقق من وجود بطاقة مسجلة.", inputs: [], outputs: ["صحيح/خطأ"], codeExample: "if <is marker detected?> then\n  say [أرى بطاقة! 🎴]\nend" },
      { id: "get-marker-name", nameEn: "get marker name", nameAr: "اسم الماركر", description: "اسم البطاقة المكتشفة حالياً.", inputs: [], outputs: ["نص"], codeExample: "say (join [البطاقة: ] (get marker name))" },
      { id: "marker-x-y", nameEn: "() of marker", nameAr: "إحداثي الماركر", description: "موقع البطاقة على المسرح.", inputs: ["x/y"], outputs: ["قيمة رقمية"], codeExample: "go to x: ([x] of marker) y: ([y] of marker)" },
      { id: "marker-size", nameEn: "size of marker", nameAr: "حجم الماركر", description: "حجم البطاقة (يعتمد على بُعدها عن الكاميرا).", inputs: [], outputs: ["قيمة رقمية"], codeExample: "set size to ((size of marker) * [2]) %" },
    ],
    project: {
      title: "بطاقات الحيوانات التعليمية",
      description: "عند إظهار بطاقة حيوان أمام الكاميرا يظهر الحيوان وينطق اسمه مع معلومات تعليمية.",
      objectives: ["تسجيل بطاقات مختلفة", "إنشاء تجربة واقع معزز", "بناء نظام تعليمي تفاعلي"],
      steps: [
        { step: 1, title: "إعداد وتسجيل البطاقات", description: "تشغيل الكاميرا وتسجيل 4 بطاقات حيوانات.", code: "when [1] key pressed\nadd marker [lion]\nsay [تم تسجيل الأسد! 🦁]" },
        { step: 2, title: "كشف البطاقات", description: "التعرف المستمر على البطاقات.", code: "forever\n  analyse image from [camera]\n  if <is marker detected?> then\n    say (get marker name)\n  end\nend" },
        { step: 3, title: "عرض الحيوانات", description: "ظهور Sprite الحيوان فوق البطاقة.", code: "if <is [lion] marker detected?> then\n  go to x: ([x] of marker) y: ([y] of marker)\n  show\nend" },
        { step: 4, title: "معلومات تعليمية", description: "عرض معلومات عند رؤية البطاقة لفترة.", code: "say [🦁 الأسد من الثدييات آكلة اللحوم] for [3] seconds" },
        { step: 5, title: "اختبار تفاعلي", description: "اختبار يطلب من الطفل إظهار بطاقة محددة.", code: "say (join [أرني بطاقة: ] (target animal))" },
        { step: 6, title: "تأثيرات", description: "نجوم متساقطة عند الإجابة الصحيحة.", code: "// تأثيرات بصرية" },
        { step: 7, title: "الكود النهائي", description: "التحكم والإحصائيات.", code: "// الكود النهائي" },
      ],
      fullCode: `when green flag clicked
turn [on] video on stage with [10] % transparency

when [1] key pressed
add marker [lion]
say [تم! 🦁]

forever
  analyse image from [camera]
  if <is [lion] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    show
  else
    hide
  end
end`,
    },
  },
  {
    id: 7,
    titleAr: "الطبيب الافتراضي",
    titleEn: "Virtual Doctor with NLP",
    icon: "🩺",
    description: "إنشاء طبيب افتراضي باستخدام معالجة اللغة الطبيعية",
    color: "from-teal-500 to-green-500",
    terms: [
      { term: "NLP", termAr: "معالجة اللغة الطبيعية", definition: "فرع من الذكاء الاصطناعي يُمكّن الحاسوب من فهم اللغة البشرية." },
      { term: "Intent Recognition", termAr: "التعرف على النية", definition: "فهم ما يريده المستخدم من خلال تحليل جملته." },
      { term: "Text-to-Speech", termAr: "تحويل النص إلى كلام", definition: "تقنية تُحوّل النص المكتوب إلى صوت مسموع." },
      { term: "Speech-to-Text", termAr: "تحويل الكلام إلى نص", definition: "تقنية تُحوّل الكلام المنطوق إلى نص مكتوب." },
      { term: "Chatbot", termAr: "روبوت المحادثة", definition: "برنامج يُحاكي المحادثة البشرية ويستجيب تلقائياً." },
    ],
    blocks: [
      { id: "set-language", nameEn: "set language to ()", nameAr: "تعيين اللغة", description: "تحديد لغة التعرف على الكلام.", inputs: ["اللغة"], outputs: ["تغيير الإعدادات"], codeExample: "set language to [Arabic]" },
      { id: "listen-and-wait", nameEn: "listen () and wait", nameAr: "استمع وانتظر", description: "تفعيل الميكروفون للاستماع.", inputs: ["المدة"], outputs: ["تخزين النص"], codeExample: "listen [5] and wait\nset [complaint] to (speech)" },
      { id: "speak", nameEn: "speak ()", nameAr: "تحدث", description: "تحويل النص إلى كلام مسموع.", inputs: ["النص"], outputs: ["صوت مسموع"], codeExample: "speak [مرحباً بك في العيادة]" },
      { id: "classify-text", nameEn: "classify ()", nameAr: "تصنيف النص", description: "تصنيف النص وتحديد الفئة الأقرب.", inputs: ["النص"], outputs: ["اسم الفئة"], codeExample: "set [symptom] to (classify (answer))\nif <(symptom) = [صداع]> then\n  speak [يبدو صداع]\nend" },
      { id: "train-nlp", nameEn: "train NLP model", nameAr: "تدريب نموذج NLP", description: "تدريب النموذج على البيانات المُدخلة.", inputs: [], outputs: ["نموذج مُدرب"], codeExample: "train NLP model\nsay [الطبيب جاهز! ✅]" },
    ],
    project: {
      title: "عيادة الدكتور الذكي",
      description: "طبيب افتراضي يستمع للشكوى ويُحلل الأعراض ويُعطي تشخيصاً ونصائح.",
      objectives: ["بناء نموذج تصنيف للأعراض", "استخدام التعرف على الكلام", "إنشاء حوار تفاعلي ذكي"],
      steps: [
        { step: 1, title: "إعداد الشخصية", description: "إنشاء شخصية الطبيب وتعيين اللغة.", code: "when green flag clicked\nset language to [Arabic]\nspeak [مرحباً بك في العيادة]" },
        { step: 2, title: "تدريب النموذج", description: "إنشاء فئات للأعراض وتدريب النموذج.", code: "create class [صداع] in NLP model\nadd [رأسي يؤلمني] to class [صداع]\ntrain NLP model" },
        { step: 3, title: "الاستماع والتحليل", description: "استماع لكلام المريض وتحليله.", code: "speak [صف لي ما تشعر به]\nlisten [10] and wait\nset [symptom] to (classify (speech))" },
        { step: 4, title: "أسئلة متابعة", description: "أسئلة متخصصة لكل عرض.", code: "if <(symptom) = [صداع]> then\n  ask [هل الصداع في مكان محدد؟] and wait\nend" },
        { step: 5, title: "التشخيص", description: "تشخيص مبدئي ونصائح.", code: "speak (join [أنت تعاني من ] (symptom))\nspeak [نصيحتي: أكثر من الراحة]" },
        { step: 6, title: "النصائح الصحية", description: "قاعدة نصائح لكل حالة.", code: "// نصائح متخصصة لكل عرض" },
        { step: 7, title: "الكود النهائي", description: "الكود الكامل مع التحكم.", code: "// الكود النهائي" },
      ],
      fullCode: `when green flag clicked
set language to [Arabic]
create class [صداع] in NLP model
create class [حمى] in NLP model
create class [سعال] in NLP model
add [رأسي يؤلمني] to class [صداع]
add [عندي حرارة] to class [حمى]
add [عندي كحة] to class [سعال]
train NLP model

speak [مرحباً بك في العيادة]
ask [ما اسمك؟] and wait
set [patient name] to (answer)
speak (join [أهلاً ] (patient name))

ask [ما شكواك؟] and wait
set [symptom] to (classify (answer))
speak (join [فهمت! تشكو من ] (symptom))
speak [تذكر: راجع طبيباً حقيقياً للحالات الخطيرة]`,
    },
  },
  {
    id: 8,
    titleAr: "التعلم الآلي",
    titleEn: "Machine Learning",
    icon: "🧠",
    description: "بناء نماذج التعلم الآلي وتصديرها واستخدامها في مشاريع مختلفة",
    color: "from-yellow-500 to-orange-500",
    terms: [
      { term: "Machine Learning", termAr: "التعلم الآلي", definition: "فرع من الذكاء الاصطناعي يُمكّن الحاسوب من التعلم من البيانات." },
      { term: "Classification", termAr: "التصنيف", definition: "مهمة تصنيف المدخلات إلى فئات محددة مسبقاً." },
      { term: "Training", termAr: "التدريب", definition: "عملية تعليم النموذج باستخدام أمثلة معروفة." },
      { term: "Confidence Score", termAr: "درجة الثقة", definition: "نسبة تأكد النموذج من التصنيف (0-100)." },
      { term: "Overfitting", termAr: "الإفراط في التكيف", definition: "حالة يحفظ فيها النموذج الأمثلة بدلاً من تعلم الأنماط." },
    ],
    blocks: [
      { id: "create-class-ml", nameEn: "create class ()", nameAr: "إنشاء فئة", description: "إنشاء فئة جديدة في النموذج.", inputs: ["اسم الفئة"], outputs: ["إضافة فئة"], codeExample: "create class [Rock]\ncreate class [Paper]\ncreate class [Scissors]" },
      { id: "add-sample-image", nameEn: "add image to class ()", nameAr: "إضافة صورة للفئة", description: "إضافة صورة تدريبية (20-50 لكل فئة).", inputs: ["الصورة", "الفئة"], outputs: ["إضافة للتدريب"], codeExample: "add image from camera to class [Rock]" },
      { id: "train-model", nameEn: "train model", nameAr: "تدريب النموذج", description: "بدء التدريب على الصور المُضافة.", inputs: [], outputs: ["نموذج مُدرب"], codeExample: "train model\nsay [تم التدريب! ✅]" },
      { id: "classify-image", nameEn: "classify image from ()", nameAr: "تصنيف الصورة", description: "تصنيف صورة باستخدام النموذج المُدرب.", inputs: ["مصدر الصورة"], outputs: ["اسم الفئة"], codeExample: "classify image from [camera]\nsay (get classification)" },
      { id: "get-confidence-ml", nameEn: "get confidence", nameAr: "نسبة الثقة", description: "نسبة ثقة النموذج في آخر تصنيف.", inputs: [], outputs: ["نسبة مئوية"], codeExample: "if <(get confidence) > [80]> then\n  say [متأكد!]\nend" },
      { id: "export-model", nameEn: "export model", nameAr: "تصدير النموذج", description: "حفظ النموذج المُدرب كملف.", inputs: [], outputs: ["ملف النموذج"], codeExample: "export model\nsay [تم التصدير! 💾]" },
    ],
    project: {
      title: "لعبة حجر ورقة مقص بالذكاء الاصطناعي",
      description: "لعبة يتعرف فيها الحاسوب على إشارة يدك ثم يختار ردّه ويُحدد الفائز!",
      objectives: ["إنشاء نموذج تعرف على إشارات اليد", "تطبيق التعلم الآلي في لعبة", "استخدام درجة الثقة"],
      steps: [
        { step: 1, title: "إعداد المشروع", description: "تشغيل الكاميرا والمتغيرات.", code: "when green flag clicked\nset [player score] to [0]\nset [computer score] to [0]\nturn [on] video on stage with [30] % transparency" },
        { step: 2, title: "تدريب النموذج", description: "إنشاء 3 فئات والتقاط 30 صورة لكل منها.", code: "create class [Rock]\ncreate class [Paper]\ncreate class [Scissors]\n// التقط 30 صورة لكل فئة\ntrain model" },
        { step: 3, title: "التقاط إشارة اللاعب", description: "تصنيف إشارة اللاعب.", code: "classify image from [camera]\nset [player choice] to (get classification)\nif <(get confidence) < [60]> then\n  say [أعد المحاولة!]\nend" },
        { step: 4, title: "اختيار الكمبيوتر", description: "اختيار عشوائي وتحديد الفائز.", code: "set [r] to (pick random [1] to [3])\nif <(r) = [1]> then set [computer choice] to [Rock] end" },
        { step: 5, title: "نهاية اللعبة", description: "عرض النتائج.", code: "if <(player score) > (computer score)> then\n  say [مبروك! فزت! 🎊]\nend" },
        { step: 6, title: "تأثيرات بصرية", description: "كونفيتي ومؤشر ثقة.", code: "// تأثيرات" },
        { step: 7, title: "الكود النهائي", description: "التحكم الكامل.", code: "// تصدير واستيراد النموذج" },
      ],
      fullCode: `when green flag clicked
set [player score] to [0]
set [computer score] to [0]
set [rounds] to [0]
turn [on] video on stage with [30] % transparency

when [p] key pressed
// جولة جديدة
say [3️⃣] for [1] seconds
say [2️⃣] for [1] seconds
say [1️⃣] for [1] seconds
classify image from [camera]
set [player choice] to (get classification)

set [r] to (pick random [1] to [3])
if <(r) = [1]> then set [computer choice] to [Rock] end
if <(r) = [2]> then set [computer choice] to [Paper] end
if <(r) = [3]> then set [computer choice] to [Scissors] end

if <(player choice) = (computer choice)> then
  say [تعادل! 🤝]
else
  if <<<(player choice) = [Rock]> and <(computer choice) = [Scissors]>> or ...> then
    change [player score] by [1]
    say [فزت! 🎉]
  else
    change [computer score] by [1]
    say [خسرت! 😔]
  end
end`,
    },
  },
];

// ============================================================
// Component
// ============================================================

type View = "home" | "chapters" | "projects" | "glossary";

const PictoBloxBook = () => {
  const [view, setView] = useState<View>("home");
  const [currentChapter, setCurrentChapter] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [glossarySearch, setGlossarySearch] = useState("");
  const [expandedBlock, setExpandedBlock] = useState<string | null>(null);
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const selectChapter = (id: number) => {
    setCurrentChapter(id);
    setView("chapters");
    setSidebarOpen(false);
    setExpandedBlock(null);
    setExpandedStep(null);
  };

  const chapter = chapters.find((c) => c.id === currentChapter);
  const progress = currentChapter > 0 ? Math.round((currentChapter / chapters.length) * 100) : 0;

  // Glossary
  const allTerms = useMemo(() => {
    const terms: { term: string; termAr: string; definition: string; chapter: number; chapterTitle: string }[] = [];
    chapters.forEach((ch) => {
      ch.terms?.forEach((t) => terms.push({ ...t, chapter: ch.id, chapterTitle: ch.titleAr }));
    });
    return terms;
  }, []);

  const filteredTerms = glossarySearch
    ? allTerms.filter(
        (t) =>
          t.term.toLowerCase().includes(glossarySearch.toLowerCase()) ||
          t.termAr.includes(glossarySearch) ||
          t.definition.includes(glossarySearch)
      )
    : allTerms;

  // ---- styles ----
  const navBtn = (active: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
      active
        ? "bg-[hsl(199,89%,48%)] text-[hsl(222,47%,11%)] shadow-lg"
        : "text-[hsl(215,20%,65%)] hover:text-[hsl(210,40%,98%)] hover:bg-[hsl(222,47%,20%)]"
    }`;

  const glass =
    "bg-[hsl(222,47%,14%)]/80 backdrop-blur-xl border border-[hsl(222,47%,22%)]/50 rounded-xl";

  // ============================================================
  // RENDER
  // ============================================================
  return (
    <div
      dir="rtl"
      style={{ fontFamily: "'Cairo', sans-serif" }}
      className="min-h-screen bg-[hsl(222,47%,11%)] text-[hsl(210,40%,98%)]"
    >
      {/* ========== TOP NAV ========== */}
      <header className="sticky top-0 z-50 bg-[hsl(222,47%,9%)]/90 backdrop-blur-xl border-b border-[hsl(222,47%,22%)]">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-14">
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold bg-gradient-to-l from-[hsl(199,89%,48%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">
              Pictoblox
            </span>
            <span className="hidden sm:inline text-xs text-[hsl(215,20%,65%)]">دليل الذكاء الاصطناعي</span>
          </div>

          <nav className="flex items-center gap-1">
            <button className={navBtn(view === "home")} onClick={() => { setView("home"); setCurrentChapter(0); }}>
              الرئيسية
            </button>
            <button className={navBtn(view === "chapters")} onClick={() => { if (currentChapter === 0) selectChapter(1); else setView("chapters"); }}>
              الفصول
            </button>
            <button className={navBtn(view === "projects")} onClick={() => setView("projects")}>
              المشاريع
            </button>
            <button className={navBtn(view === "glossary")} onClick={() => setView("glossary")}>
              فهرس الكتاب
            </button>
            <button
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-l from-[hsl(199,89%,48%)] to-[hsl(217,91%,60%)] text-[hsl(222,47%,11%)] shadow-lg hover:scale-105 transition-transform"
              onClick={() => selectChapter(1)}
            >
              ابدأ التعلم
            </button>
          </nav>

          {/* sidebar toggle for mobile in chapter view */}
          {view === "chapters" && currentChapter > 0 && (
            <button className="lg:hidden p-2 rounded-lg hover:bg-[hsl(222,47%,20%)]" onClick={() => setSidebarOpen(!sidebarOpen)}>
              ☰
            </button>
          )}
        </div>
      </header>

      <div className="flex">
        {/* ========== SIDEBAR ========== */}
        {view === "chapters" && currentChapter > 0 && (
          <>
            {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}
            <aside
              className={`fixed top-14 right-0 h-[calc(100vh-3.5rem)] w-72 bg-[hsl(222,47%,9%)] border-l border-[hsl(222,47%,18%)] z-50 overflow-y-auto transition-transform duration-300 ${
                sidebarOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
              }`}
            >
              <div className="p-4 space-y-2">
                <h2 className="text-sm font-bold text-[hsl(215,20%,65%)] mb-4">فهرس الكتاب</h2>
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => selectChapter(ch.id)}
                    className={`w-full text-right p-3 rounded-xl transition-all ${
                      currentChapter === ch.id
                        ? "bg-[hsl(199,89%,48%)]/15 border border-[hsl(199,89%,48%)]/30"
                        : "hover:bg-[hsl(222,47%,16%)]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{ch.icon}</span>
                      <div className="flex-1">
                        <div className="text-xs text-[hsl(215,20%,65%)]">الفصل {ch.id}</div>
                        <div className={`text-sm font-medium ${currentChapter === ch.id ? "text-[hsl(199,89%,48%)]" : ""}`}>
                          {ch.titleAr}
                        </div>
                      </div>
                      {currentChapter > ch.id && <span className="text-green-500 text-sm">✓</span>}
                      {currentChapter === ch.id && (
                        <span className="w-2 h-2 rounded-full bg-[hsl(199,89%,48%)]" />
                      )}
                    </div>
                  </button>
                ))}

                {/* Progress */}
                <div className={`${glass} p-4 mt-4`}>
                  <div className="flex items-center gap-2 mb-1">
                    <div className="h-2 flex-1 bg-[hsl(222,47%,20%)] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-l from-[hsl(199,89%,48%)] to-[hsl(217,91%,60%)] transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-[hsl(199,89%,48%)]">{progress}%</span>
                  </div>
                  <p className="text-xs text-[hsl(215,20%,65%)]">
                    الفصل {currentChapter} من {chapters.length}
                  </p>
                </div>
              </div>
            </aside>
          </>
        )}

        {/* ========== MAIN CONTENT ========== */}
        <main
          className={`flex-1 pt-4 pb-16 transition-all duration-300 ${
            view === "chapters" && currentChapter > 0 ? "lg:pr-72" : ""
          }`}
        >
          {/* ===== HOME ===== */}
          {view === "home" && (
            <div className="max-w-4xl mx-auto px-4">
              {/* Hero */}
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🤖</div>
                <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                  <span className="bg-gradient-to-l from-[hsl(199,89%,48%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">
                    Pictoblox
                  </span>
                </h1>
                <p className="text-xl text-[hsl(25,95%,53%)] font-bold mb-4"> AI Adventures</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[hsl(199,89%,48%)]/50" />
                  <div className="px-4 py-1.5 rounded-full border border-[hsl(199,89%,48%)]/30 bg-[hsl(217,91%,60%)]/10 text-sm text-[hsl(215,20%,75%)]">
                    <span className="text-[hsl(215,20%,50%)]">تأليف: </span>
                    <span className="font-semibold text-[hsl(199,89%,70%)]">Ghefari Abdelfattah</span>
                    <span className="mx-2 text-[hsl(215,20%,40%)]">·</span>
                    <span className="text-[hsl(215,20%,55%)]">Founder of TomorrowCoders</span>
                  </div>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[hsl(199,89%,48%)]/50" />
                </div>
                <p className="text-[hsl(215,20%,65%)] max-w-xl mx-auto mb-8">
                  كتاب تعليمي شامل لتعلم البرمجة والذكاء الاصطناعي باستخدام Pictoblox. من المبتدئين إلى المتقدمين.
                </p>
                <button
                  className="px-8 py-3 rounded-xl text-lg font-bold bg-gradient-to-l from-[hsl(199,89%,48%)] to-[hsl(217,91%,60%)] text-[hsl(222,47%,11%)] shadow-lg hover:scale-105 transition-transform"
                  onClick={() => selectChapter(1)}
                >
                  🚀 ابدأ التعلم
                </button>
              </div>

              {/* Chapter Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-12">
                {chapters.map((ch) => (
                  <button
                    key={ch.id}
                    onClick={() => selectChapter(ch.id)}
                    className={`${glass} p-5 text-right hover:scale-[1.02] hover:border-[hsl(199,89%,48%)]/50 transition-all duration-300 cursor-pointer`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-2xl shadow-lg`}
                      >
                        {ch.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-[hsl(215,20%,65%)]">الفصل {ch.id}</div>
                        <h3 className="font-bold">{ch.titleAr}</h3>
                        <p className="text-xs text-[hsl(215,20%,65%)] mt-1">{ch.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { icon: "👤", title: "كشف الوجه" },
                  { icon: "📦", title: "كشف الأشياء" },
                  { icon: "🏃", title: "تتبع الجسم" },
                  { icon: "🗣️", title: "معالجة اللغة" },
                ].map((f, i) => (
                  <div key={i} className={`${glass} p-4 text-center`}>
                    <div className="text-3xl mb-2">{f.icon}</div>
                    <div className="text-sm font-medium">{f.title}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== CHAPTER CONTENT ===== */}
          {view === "chapters" && chapter && (
            <div className="max-w-4xl mx-auto px-4">
              {/* Back */}
              <button
                onClick={() => { setView("home"); setCurrentChapter(0); }}
                className="flex items-center gap-2 text-[hsl(215,20%,65%)] hover:text-[hsl(210,40%,98%)] mb-6 transition-colors text-sm"
              >
                ← العودة للرئيسية
              </button>

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${chapter.color} flex items-center justify-center text-3xl shadow-lg`}>
                  {chapter.icon}
                </div>
                <div>
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[hsl(199,89%,48%)]/20 text-[hsl(199,89%,48%)]">
                    الفصل {chapter.id}
                  </span>
                  <h1 className="text-2xl md:text-3xl font-bold mt-1">{chapter.titleAr}</h1>
                  <p className="text-sm text-[hsl(215,20%,65%)]">{chapter.titleEn}</p>
                </div>
              </div>
              <p className="text-[hsl(215,20%,65%)] mb-8">{chapter.description}</p>

              {/* Ch1 special content */}
              {chapter.id === 1 && (
                <div className="space-y-6 mb-8">
                  <div className={`${glass} p-6`}>
                    <h2 className="text-xl font-bold mb-3">📖 ما هو Pictoblox؟</h2>
                    <p className="text-[hsl(215,20%,65%)] leading-relaxed mb-3">
                      Pictoblox هو بيئة برمجة رسومية مبنية على Scratch، طورتها شركة STEMpedia الهندية. يتميز بدمجه القوي لتقنيات الذكاء الاصطناعي والتعلم الآلي بطريقة مبسطة تناسب المبتدئين والطلاب.
                    </p>
                    <p className="text-[hsl(215,20%,65%)] leading-relaxed">
                      يمكنك من خلاله برمجة الروبوتات، إنشاء مشاريع ذكاء اصطناعي مثل التعرف على الوجوه والأشياء، وبناء تطبيقات تفاعلية.
                    </p>
                  </div>
                  <div className={`${glass} p-6`}>
                    <h2 className="text-xl font-bold mb-3">🎯 أهمية Pictoblox في التعليم</h2>
                    <ol className="space-y-2">
                      {[
                        "تعلم مفاهيم البرمجة بشكل مرئي وتفاعلي",
                        "فهم أساسيات الذكاء الاصطناعي بطريقة عملية",
                        "تطوير مهارات التفكير المنطقي وحل المشكلات",
                        "إنشاء مشاريع إبداعية تدمج البرمجة مع الفن",
                        "التحكم في الروبوتات والأجهزة الإلكترونية",
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-[hsl(215,20%,65%)]">
                          <span className="w-6 h-6 rounded-full bg-[hsl(25,95%,53%)]/20 text-[hsl(25,95%,53%)] flex items-center justify-center text-xs flex-shrink-0">
                            {i + 1}
                          </span>
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className={`${glass} p-6`}>
                    <h2 className="text-xl font-bold mb-3">💡 استخدامات البرنامج</h2>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { t: "التعرف على الوجوه", d: "اكتشاف الوجوه وتحليل التعبيرات" },
                        { t: "كشف الأشياء", d: "التعرف على الأجسام وتصنيفها" },
                        { t: "تتبع الجسم", d: "تتبع حركات الجسم البشري" },
                        { t: "معالجة اللغة", d: "فهم النصوص والتحدث" },
                      ].map((item, i) => (
                        <div key={i} className="bg-[hsl(222,47%,20%)]/50 rounded-lg p-3">
                          <h3 className="font-semibold text-sm">{item.t}</h3>
                          <p className="text-xs text-[hsl(215,20%,65%)]">{item.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Ch2 special content */}
              {chapter.id === 2 && (
                <div className="space-y-6 mb-8">
                  <div className={`${glass} p-6`}>
                    <h2 className="text-xl font-bold mb-4">⬇️ تثبيت البرنامج</h2>
                    <ol className="space-y-3">
                      {[
                        "قم بزيارة الموقع الرسمي: pictoblox.ai",
                        "اختر نظام التشغيل المناسب (Windows, Mac, Linux, أو Online)",
                        "قم بتحميل البرنامج وتثبيته",
                        "أنشئ حساباً مجانياً للوصول لجميع المميزات",
                      ].map((step, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-7 h-7 rounded-full bg-[hsl(199,89%,48%)] flex items-center justify-center text-[hsl(222,47%,11%)] font-bold text-sm flex-shrink-0">
                            {i + 1}
                          </span>
                          <p className="text-[hsl(215,20%,65%)] pt-0.5">{step}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className={`${glass} p-6`}>
                    <h2 className="text-xl font-bold mb-4">🖥️ واجهة البرنامج</h2>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { t: "منطقة المسرح", d: "تنفيذ البرنامج وعرض النتائج" },
                        { t: "منطقة البلوكات", d: "الأوامر والإضافات" },
                        { t: "منطقة الأكواد", d: "تجميع البلوكات وبناء البرنامج" },
                      ].map((item, i) => (
                        <div key={i} className="bg-[hsl(222,47%,20%)]/50 rounded-lg p-3 text-center">
                          <h3 className="font-semibold text-sm">{item.t}</h3>
                          <p className="text-xs text-[hsl(215,20%,65%)]">{item.d}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Terms */}
              {chapter.terms && chapter.terms.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="h-1 w-6 bg-[hsl(199,89%,48%)] rounded-full" />
                    المصطلحات
                  </h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {chapter.terms.map((t, i) => (
                      <div key={i} className="bg-[hsl(222,47%,20%)]/50 rounded-lg p-3 border border-[hsl(222,47%,22%)]/30">
                        <div className="flex items-center gap-2 mb-1">
                          <code className="text-[hsl(199,89%,48%)] bg-[hsl(199,89%,48%)]/10 px-2 py-0.5 rounded text-xs font-mono">
                            {t.term}
                          </code>
                          <span className="text-xs text-[hsl(215,20%,65%)]">({t.termAr})</span>
                        </div>
                        <p className="text-xs text-[hsl(215,20%,65%)]">{t.definition}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Blocks */}
              {chapter.blocks && chapter.blocks.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <span className="h-1 w-6 bg-[hsl(25,95%,53%)] rounded-full" />
                    البلوكات التفصيلية
                  </h2>
                  <div className="space-y-3">
                    {chapter.blocks.map((block) => (
                      <div key={block.id} className="bg-[hsl(222,47%,20%)]/50 rounded-lg border border-[hsl(222,47%,22%)]/30 overflow-hidden">
                        <button
                          className="w-full text-right p-4 flex items-center justify-between hover:bg-[hsl(222,47%,20%)]/70 transition-colors"
                          onClick={() => setExpandedBlock(expandedBlock === block.id ? null : block.id)}
                        >
                          <div>
                            <code className="text-[hsl(199,89%,48%)] text-sm font-mono">{block.nameEn}</code>
                            <p className="text-sm text-[hsl(210,40%,98%)] mt-0.5">{block.nameAr}</p>
                          </div>
                          <span className="text-[hsl(215,20%,65%)] text-lg">{expandedBlock === block.id ? "−" : "+"}</span>
                        </button>
                        {expandedBlock === block.id && (
                          <div className="px-4 pb-4 space-y-3 border-t border-[hsl(222,47%,22%)]/30 pt-3">
                            <p className="text-sm text-[hsl(215,20%,65%)]">{block.description}</p>
                            {block.inputs.length > 0 && (
                              <div>
                                <h4 className="text-xs font-bold text-[hsl(25,95%,53%)] mb-1">المدخلات:</h4>
                                <ul className="text-xs text-[hsl(215,20%,65%)] space-y-1">
                                  {block.inputs.map((inp, i) => (
                                    <li key={i}>• {inp}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            <div>
                              <h4 className="text-xs font-bold text-green-400 mb-1">المخرجات:</h4>
                              <ul className="text-xs text-[hsl(215,20%,65%)] space-y-1">
                                {block.outputs.map((out, i) => (
                                  <li key={i}>• {out}</li>
                                ))}
                              </ul>
                            </div>
                            <div
                              dir="ltr"
                              className="bg-[hsl(222,47%,8%)] rounded-lg p-3 font-mono text-xs text-[hsl(180,70%,75%)] whitespace-pre-wrap"
                            >
                              {block.codeExample}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project */}
              {chapter.project && (
                <div className={`${glass} p-6 mb-8`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${chapter.color} flex items-center justify-center`}>
                      🎯
                    </div>
                    <div>
                      <h2 className="text-xl font-bold">المشروع التطبيقي</h2>
                      <p className="text-sm text-[hsl(215,20%,65%)]">{chapter.project.title}</p>
                    </div>
                  </div>
                  <p className="text-[hsl(215,20%,65%)] text-sm mb-4">{chapter.project.description}</p>

                  {/* Objectives */}
                  <div className="mb-4">
                    <h3 className="font-bold text-sm mb-2">الأهداف:</h3>
                    <ul className="space-y-1">
                      {chapter.project.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[hsl(215,20%,65%)]">
                          <span className="text-[hsl(25,95%,53%)]">✦</span> {obj}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Steps */}
                  <div className="space-y-2 mb-4">
                    <h3 className="font-bold text-sm">الخطوات:</h3>
                    {chapter.project.steps.map((step) => (
                      <div key={step.step} className="bg-[hsl(222,47%,20%)]/50 rounded-lg overflow-hidden">
                        <button
                          className="w-full text-right p-3 flex items-center justify-between hover:bg-[hsl(222,47%,20%)]/70 transition-colors"
                          onClick={() => setExpandedStep(expandedStep === step.step ? null : step.step)}
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-full bg-[hsl(199,89%,48%)] flex items-center justify-center text-[hsl(222,47%,11%)] font-bold text-sm flex-shrink-0">
                              {step.step}
                            </span>
                            <span className="text-sm font-medium">{step.title}</span>
                          </div>
                          <span className="text-[hsl(215,20%,65%)]">{expandedStep === step.step ? "−" : "+"}</span>
                        </button>
                        {expandedStep === step.step && (
                          <div className="px-3 pb-3 space-y-2">
                            <p className="text-xs text-[hsl(215,20%,65%)]">{step.description}</p>
                            {step.code && (
                              <div
                                dir="ltr"
                                className="bg-[hsl(222,47%,8%)] rounded-lg p-3 font-mono text-xs text-[hsl(180,70%,75%)] whitespace-pre-wrap"
                              >
                                {step.code}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Full Code */}
                  <details className="bg-[hsl(222,47%,20%)]/50 rounded-lg">
                    <summary className="p-3 cursor-pointer text-sm font-bold text-[hsl(199,89%,48%)] hover:bg-[hsl(222,47%,20%)]/70 rounded-lg">
                      📋 الكود الكامل
                    </summary>
                    <div
                      dir="ltr"
                      className="bg-[hsl(222,47%,8%)] rounded-b-lg p-4 font-mono text-xs text-[hsl(180,70%,75%)] whitespace-pre-wrap max-h-96 overflow-y-auto"
                    >
                      {chapter.project.fullCode}
                    </div>
                  </details>
                </div>
              )}

              {/* Nav buttons */}
              <div className="flex items-center justify-between pt-6 border-t border-[hsl(222,47%,22%)]">
                <button
                  onClick={() => selectChapter(Math.max(currentChapter - 1, 1))}
                  disabled={currentChapter === 1}
                  className="px-4 py-2 rounded-lg border border-[hsl(222,47%,22%)] text-sm disabled:opacity-30 hover:bg-[hsl(222,47%,20%)] transition-colors"
                >
                  → الفصل السابق
                </button>
                <span className="text-sm text-[hsl(215,20%,65%)]">
                  {currentChapter} / {chapters.length}
                </span>
                <button
                  onClick={() => selectChapter(Math.min(currentChapter + 1, chapters.length))}
                  disabled={currentChapter === chapters.length}
                  className="px-4 py-2 rounded-lg bg-gradient-to-l from-[hsl(199,89%,48%)] to-[hsl(217,91%,60%)] text-[hsl(222,47%,11%)] text-sm font-semibold disabled:opacity-30 hover:scale-105 transition-transform"
                >
                  الفصل التالي ←
                </button>
              </div>
            </div>
          )}

          {/* ===== PROJECTS ===== */}
          {view === "projects" && (
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-3xl font-bold mb-6">🎯 المشاريع التطبيقية</h1>
              <div className="grid md:grid-cols-2 gap-4">
                {chapters
                  .filter((ch) => ch.project)
                  .map((ch) => (
                    <button
                      key={ch.id}
                      onClick={() => selectChapter(ch.id)}
                      className={`${glass} p-5 text-right hover:scale-[1.02] transition-all cursor-pointer`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ch.color} flex items-center justify-center text-xl`}>
                          {ch.icon}
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-[hsl(215,20%,65%)]">الفصل {ch.id}</div>
                          <h3 className="font-bold text-sm">{ch.project!.title}</h3>
                        </div>
                      </div>
                      <p className="text-xs text-[hsl(215,20%,65%)]">{ch.project!.description}</p>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* ===== GLOSSARY ===== */}
          {view === "glossary" && (
            <div className="max-w-4xl mx-auto px-4">
              <h1 className="text-3xl font-bold mb-4">📚 فهرس المصطلحات</h1>
              <input
                type="text"
                placeholder="ابحث عن مصطلح..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="w-full mb-6 px-4 py-3 rounded-xl bg-[hsl(222,47%,14%)] border border-[hsl(222,47%,22%)] text-[hsl(210,40%,98%)] placeholder-[hsl(215,20%,50%)] focus:outline-none focus:border-[hsl(199,89%,48%)]"
              />
              <p className="text-sm text-[hsl(215,20%,65%)] mb-4">
                {filteredTerms.length} مصطلح
              </p>
              <div className="space-y-3">
                {filteredTerms.map((t, i) => (
                  <div key={i} className="bg-[hsl(222,47%,20%)]/50 rounded-lg p-4 border border-[hsl(222,47%,22%)]/30">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <code className="text-[hsl(199,89%,48%)] bg-[hsl(199,89%,48%)]/10 px-2 py-0.5 rounded text-sm font-mono">
                        {t.term}
                      </code>
                      <span className="text-sm font-medium">{t.termAr}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[hsl(222,47%,20%)] text-[hsl(215,20%,65%)]">
                        الفصل {t.chapter}
                      </span>
                    </div>
                    <p className="text-sm text-[hsl(215,20%,65%)]">{t.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[hsl(222,47%,22%)] text-center">
        <p className="text-[hsl(215,20%,65%)] text-sm">كتاب تعليمي شامل عن Pictoblox والذكاء الاصطناعي</p>
        <p className="text-xs text-[hsl(215,20%,50%)] mt-1">© 2024 - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default PictoBloxBook;
