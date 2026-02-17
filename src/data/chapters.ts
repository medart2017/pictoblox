export interface Block {
  id: string;
  nameEn: string;
  nameAr: string;
  description: string;
  inputs: string[];
  outputs: string[];
  usage: string;
  example: string;
  codeExample: string;
}

export interface Term {
  term: string;
  termAr: string;
  definition: string;
}

export interface ProjectStep {
  step: number;
  title: string;
  description: string;
  code?: string;
}

export interface Project {
  title: string;
  description: string;
  objectives: string[];
  steps: ProjectStep[];
  fullCode: string;
}

export interface Chapter {
  id: number;
  titleAr: string;
  titleEn: string;
  icon: string;
  description: string;
  color: string;
  terms?: Term[];
  blocks?: Block[];
  project?: Project;
  content?: string;
}

export const chapters: Chapter[] = [
  {
    id: 1,
    titleAr: "مقدمة عن Pictoblox",
    titleEn: "Introduction to Pictoblox",
    icon: "🚀",
    description: "تعريف البرنامج وأهميته في التعليم ولمحة عن استخداماته في البرمجة والذكاء الاصطناعي",
    color: "from-blue-500 to-cyan-500",
    project: {
      title: "قط يقول مرحباً - أول برنامج لك!",
      description: "مشروع بسيط للمبتدئين! سنبني برنامجاً يجعل القط يتحرك ويقول مرحباً عند النقر عليه. مثالي للتعرف على أساسيات Pictoblox والبرمجة بالبلوكات.",
      objectives: [
        "فهم واجهة Pictoblox الأساسية",
        "التعرف على منطقة البلوكات والمسرح",
        "استخدام بلوكات الأحداث (Events)",
        "استخدام بلوكات المظهر (Looks)",
        "استخدام بلوكات الحركة (Motion)",
        "تشغيل البرنامج واختباره"
      ],
      steps: [
        {
          step: 1,
          title: "فتح Pictoblox وإنشاء مشروع جديد",
          description: "افتح برنامج Pictoblox. ستجد القط (Tobi) جاهزاً على المسرح. هذا هو الـ Sprite الافتراضي الذي سنبرمجه!",
          code: `// لا يوجد كود في هذه الخطوة
// فقط افتح البرنامج وتأكد من وجود القط على المسرح`
        },
        {
          step: 2,
          title: "إضافة بلوك الحدث الأول",
          description: "من قسم Events (البلوكات الصفراء)، اسحب بلوك 'when green flag clicked' إلى منطقة الأكواد. هذا البلوك يحدد متى يبدأ برنامجك.",
          code: `when green flag clicked`
        },
        {
          step: 3,
          title: "جعل القط يقول مرحباً",
          description: "من قسم Looks (البلوكات البنفسجية)، اسحب بلوك 'say' وألصقه تحت بلوك الحدث. اكتب 'مرحباً!' في الفراغ.",
          code: `when green flag clicked
say [مرحباً! 👋] for [2] seconds`
        },
        {
          step: 4,
          title: "إضافة حركة للقط",
          description: "من قسم Motion (البلوكات الزرقاء)، أضف بلوكات لتحريك القط. سنجعله يتحرك للأمام ثم يستدير!",
          code: `when green flag clicked
say [مرحباً! 👋] for [2] seconds
move [100] steps
turn right [90] degrees
move [50] steps`
        },
        {
          step: 5,
          title: "إضافة تفاعل عند النقر",
          description: "لنجعل القط يتفاعل عندما ننقر عليه! أضف بلوك حدث جديد 'when this sprite clicked' وأضف له تأثيرات.",
          code: `when this sprite clicked
say [أوه! لقد نقرت علي! 😸] for [2] seconds
change size by [10]
wait [0.5] seconds
change size by [-10]`
        },
        {
          step: 6,
          title: "إضافة صوت",
          description: "من قسم Sound (البلوكات الوردية)، أضف بلوك لتشغيل صوت. اختر صوت 'Meow' لجعل القط يموء!",
          code: `when this sprite clicked
play sound [Meow]
say [مياو! 🐱] for [2] seconds`
        },
        {
          step: 7,
          title: "تشغيل واختبار البرنامج",
          description: "اضغط على العلم الأخضر لتشغيل برنامجك! جرب النقر على القط أيضاً. تهانينا، لقد أكملت أول برنامج لك!",
          code: `// الكود النهائي الكامل موجود في الأسفل
// جرب تعديله وإضافة المزيد من التأثيرات!`
        }
      ],
      fullCode: `// ===== برنامج: قط يقول مرحباً =====

// عند النقر على العلم الأخضر
when green flag clicked
// تحية وتعريف
say [مرحباً! أنا القط توبي 🐱] for [2] seconds
say [مرحباً بك في عالم البرمجة!] for [2] seconds

// حركة تمهيدية
glide [1] secs to x: [100] y: [0]
turn right [360] degrees
glide [1] secs to x: [0] y: [0]

say [انقر علي لأموء! 😸] for [2] seconds

// عند النقر على القط
when this sprite clicked
play sound [Meow]
say [مياو! 🐱] for [1] seconds
// تأثير القفز
repeat [2]
  change y by [20]
  wait [0.1] seconds
  change y by [-20]
  wait [0.1] seconds
end
change [color] effect by [25]

// عند الضغط على مفتاح المسافة
when [space] key pressed
say [ها! ضغطت مسافة! 🎉] for [2] seconds
turn right [360] degrees

// عند الضغط على الأسهم
when [right arrow] key pressed
change x by [20]
point in direction [90]

when [left arrow] key pressed
change x by [-20]
point in direction [-90]

when [up arrow] key pressed
change y by [20]

when [down arrow] key pressed
change y by [-20]`
    }
  },
  {
    id: 2,
    titleAr: "البدء مع Pictoblox",
    titleEn: "Getting Started with Pictoblox",
    icon: "⚙️",
    description: "تثبيت البرنامج وإعداد البيئة والتعرف على واجهة البرنامج وأهم الأدوات",
    color: "from-green-500 to-emerald-500",
    project: {
      title: "لعبة التقاط النجوم - أساسيات الألعاب",
      description: "لعبة بسيطة وممتعة! تحرك القط بالأسهم لالتقاط النجوم الظاهرة عشوائياً واجمع أكبر عدد من النقاط. تعلم أساسيات بناء الألعاب والتحكم بالـ Sprites.",
      objectives: [
        "استخدام المتغيرات (Variables) لحفظ النقاط",
        "برمجة التحكم بالـ Sprite عبر لوحة المفاتيح",
        "استخدام الحلقات (Loops) والشروط (Conditions)",
        "إنشاء نسخ (Clones) من الـ Sprites",
        "اكتشاف التلامس بين الـ Sprites",
        "إضافة أصوات وتأثيرات بصرية"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد المشروع والمتغيرات",
          description: "أنشئ مشروعاً جديداً وأضف متغيراً للنقاط. المتغيرات تحفظ البيانات مثل عدد النقاط أو الوقت.",
          code: `when green flag clicked
// إعادة تعيين النقاط
set [score] to [0]
// وضع القط في المنتصف
go to x: [0] y: [0]
// رسالة ترحيب
say [استخدم الأسهم لالتقاط النجوم! ⭐] for [2] seconds`
        },
        {
          step: 2,
          title: "برمجة التحكم بالقط",
          description: "اجعل القط يتحرك بأسهم لوحة المفاتيح. كل سهم يحرك القط في اتجاه مختلف.",
          code: `// التحكم بالأسهم
when [right arrow] key pressed
change x by [15]
point in direction [90]

when [left arrow] key pressed
change x by [-15]
point in direction [-90]

when [up arrow] key pressed
change y by [15]

when [down arrow] key pressed
change y by [-15]`
        },
        {
          step: 3,
          title: "إضافة الـ Sprite النجمة",
          description: "أضف Sprite جديد للنجمة من مكتبة الـ Sprites. ستظهر النجوم بشكل عشوائي على المسرح.",
          code: `// كود الـ Sprite: النجمة ⭐
when green flag clicked
hide
set size to [50] %

forever
  // إنشاء نجمة جديدة كل 2-3 ثواني
  wait (pick random [2] to [3]) seconds
  create clone of [myself]
end`
        },
        {
          step: 4,
          title: "برمجة ظهور النجوم العشوائي",
          description: "عند إنشاء نسخة من النجمة، تظهر في مكان عشوائي وتختفي بعد فترة إذا لم تُلتقط.",
          code: `when I start as a clone
// الظهور في مكان عشوائي
go to x: (pick random [-200] to [200]) y: (pick random [-150] to [150])
show
// تأثير اللمعان
repeat [20]
  change [brightness] effect by [5]
  wait [0.1] seconds
  change [brightness] effect by [-5]
  wait [0.1] seconds
end
// اختفاء إذا لم تُلتقط
delete this clone`
        },
        {
          step: 5,
          title: "اكتشاف التقاط النجمة",
          description: "عندما يلمس القط النجمة، تزداد النقاط ويُشغل صوت وتختفي النجمة.",
          code: `when I start as a clone
go to x: (pick random [-200] to [200]) y: (pick random [-150] to [150])
show
repeat until <touching [Tobi]?>
  // الدوران للجاذبية البصرية
  turn right [5] degrees
  // التحقق من اللمس
  if <touching [Tobi]?> then
    // التقاط النجمة!
    change [score] by [10]
    play sound [collect]
    delete this clone
  end
end
delete this clone`
        },
        {
          step: 6,
          title: "إضافة مؤقت وتحدي",
          description: "أضف مؤقتاً لجعل اللعبة أكثر تحدياً. اللاعب لديه 30 ثانية لجمع أكبر عدد من النجوم!",
          code: `// كود القط - إضافة المؤقت
when green flag clicked
set [score] to [0]
set [time] to [30]
go to x: [0] y: [0]
say [لديك 30 ثانية! 🏃] for [2] seconds

// سكريبت منفصل للعد التنازلي
when green flag clicked
repeat until <(time) < [1]>
  wait [1] seconds
  change [time] by [-1]
end
// انتهاء اللعبة
say (join [🎉 انتهى الوقت! نقاطك: ] (score)) for [5] seconds
stop [all]`
        },
        {
          step: 7,
          title: "اللمسات النهائية والتأثيرات",
          description: "أضف خلفية جميلة، تأثيرات صوتية، وعرض النقاط والوقت بشكل واضح.",
          code: `// عرض النقاط باستمرار على القط
when green flag clicked
forever
  say (join [⭐ ] (join (score) (join [  ⏱️ ] (time))))
end

// تأثير عند الوصول لـ 100 نقطة
when green flag clicked
forever
  if <(score) > [99]> then
    say [🎉 رائع! وصلت لـ 100 نقطة!] for [3] seconds
    repeat [5]
      change [color] effect by [25]
    end
    set [color] effect to [0]
  end
end`
        }
      ],
      fullCode: `// ===== لعبة التقاط النجوم =====

// ===== الـ Sprite: القط (Tobi) =====
when green flag clicked
set [score] to [0]
set [time] to [30]
go to x: [0] y: [0]
set size to [80] %
say [استخدم الأسهم لالتقاط النجوم! ⭐] for [2] seconds

// العد التنازلي
when green flag clicked
repeat until <(time) < [1]>
  wait [1] seconds
  change [time] by [-1]
end
say (join [🎉 انتهى! نقاطك: ] (score)) for [5] seconds
stop [all]

// عرض النقاط
when green flag clicked
forever
  say (join [⭐ ] (join (score) (join [  ⏱️ ] (time))))
end

// التحكم
when [right arrow] key pressed
change x by [15]
point in direction [90]

when [left arrow] key pressed
change x by [-15]
point in direction [-90]

when [up arrow] key pressed
change y by [15]

when [down arrow] key pressed
change y by [-15]

// ===== الـ Sprite: النجمة =====
when green flag clicked
hide
set size to [40] %
forever
  wait (pick random [1] to [2]) seconds
  create clone of [myself]
end

when I start as a clone
go to x: (pick random [-200] to [200]) y: (pick random [-130] to [130])
set [ghost] effect to [0]
show
set [timer] to [0]
repeat until <<touching [Tobi]?> or <(timer) > [50]>>
  turn right [5] degrees
  change [timer] by [1]
  wait [0.05] seconds
end
if <touching [Tobi]?> then
  change [score] by [10]
  play sound [pop]
  repeat [5]
    change [ghost] effect by [20]
    change size by [5]
  end
end
delete this clone

// ===== الـ Sprite: نجمة ذهبية (مكافأة) =====
when green flag clicked
hide
set size to [60] %
forever
  wait (pick random [8] to [12]) seconds
  create clone of [myself]
end

when I start as a clone
go to x: (pick random [-180] to [180]) y: (pick random [-100] to [100])
set [color] effect to [30]
show
set [timer] to [0]
repeat until <<touching [Tobi]?> or <(timer) > [30]>>
  turn right [10] degrees
  change size by ((5) * ([sin] of ((timer) * [10])))
  change [timer] by [1]
  wait [0.05] seconds
end
if <touching [Tobi]?> then
  change [score] by [50]
  play sound [collect]
  say [+50! ⭐] for [0.5] seconds
end
delete this clone`
    }
  },
  {
    id: 3,
    titleAr: "كشف الوجه",
    titleEn: "Face Detection",
    icon: "👤",
    description: "التعرف على الوجوه وتحليل التعبيرات باستخدام Face Detection Extension",
    color: "from-orange-500 to-amber-500",
    blocks: [
      {
        id: "turn-video",
        nameEn: "turn () video on stage with () % transparency",
        nameAr: "تشغيل الفيديو على المسرح",
        description: "يقوم هذا البلوك بتفعيل الكاميرا وعرض الفيديو على المسرح مع إمكانية التحكم في درجة الشفافية. يمكنك اختيار تشغيل أو إيقاف الكاميرا وتحديد نسبة الشفافية من 0% (معتم تمامًا) إلى 100% (شفاف تمامًا).",
        inputs: ["on/off: حالة الكاميرا (تشغيل/إيقاف)", "transparency: نسبة الشفافية (0-100)"],
        outputs: ["عرض الفيديو على المسرح"],
        usage: "استخدم هذا البلوك في بداية أي مشروع يتطلب استخدام الكاميرا للتعرف على الوجوه أو الأجسام",
        example: "قم بتشغيل الكاميرا بشفافية 50% لرؤية الـ Sprite فوق صورة الكاميرا",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency`
      },
      {
        id: "analyse-image",
        nameEn: "analyse image from ()",
        nameAr: "تحليل الصورة من",
        description: "يقوم هذا البلوك بتحليل الصورة الملتقطة من الكاميرا أو المسرح للبحث عن الوجوه. يجب تنفيذ هذا البلوك قبل استخدام أي بلوكات أخرى للحصول على معلومات الوجه.",
        inputs: ["camera/stage: مصدر الصورة (الكاميرا أو المسرح)"],
        outputs: ["تحليل الصورة وتخزين بيانات الوجوه المكتشفة"],
        usage: "استخدمه داخل حلقة forever للتحليل المستمر للصورة والكشف عن الوجوه في الوقت الحقيقي",
        example: "تحليل الصورة من الكاميرا للكشف عن الوجوه الموجودة",
        codeExample: `forever
  analyse image from [camera]
  if <(get # faces) > [0]> then
    say [تم اكتشاف وجه!]
  end
end`
      },
      {
        id: "bounding-box",
        nameEn: "() bounding box",
        nameAr: "الإطار المحيط",
        description: "يعيد هذا البلوك إحداثيات الإطار المحيط بالوجه المكتشف. يمكنك الحصول على x, y (موقع الوجه) وكذلك العرض والارتفاع.",
        inputs: ["x/y/width/height: نوع البيانات المطلوبة"],
        outputs: ["قيمة رقمية للإحداثي أو البُعد المحدد"],
        usage: "استخدمه لتحريك الـ Sprite لمتابعة موقع الوجه أو رسم إطار حول الوجه",
        example: "تحريك الـ Sprite إلى موقع الوجه المكتشف",
        codeExample: `forever
  analyse image from [camera]
  go to x: (x bounding box) y: (y bounding box)
end`
      },
      {
        id: "get-faces",
        nameEn: "get # faces",
        nameAr: "عدد الوجوه",
        description: "يعيد هذا البلوك عدد الوجوه المكتشفة في الصورة. مفيد للتحقق من وجود أشخاص أمام الكاميرا.",
        inputs: [],
        outputs: ["عدد صحيح يمثل عدد الوجوه المكتشفة"],
        usage: "استخدمه للتحقق من وجود وجوه قبل تنفيذ أي إجراءات أو لعد الأشخاص",
        example: "عرض رسالة ترحيب إذا تم اكتشاف وجه واحد على الأقل",
        codeExample: `if <(get # faces) > [0]> then
  say (join [مرحباً! أراك يا صديقي عدد الوجوه: ] (get # faces))
else
  say [أين أنت؟ لا أرى أحداً!]
end`
      },
      {
        id: "get-face-property",
        nameEn: "get () of face ()",
        nameAr: "الحصول على خاصية الوجه",
        description: "يعيد هذا البلوك خصائص محددة للوجه مثل موقع العين اليمنى، الأنف، الفم، وغيرها من نقاط الوجه.",
        inputs: ["property: الخاصية المطلوبة (عين يمنى، فم، أنف...)", "face number: رقم الوجه"],
        outputs: ["إحداثيات النقطة المحددة"],
        usage: "استخدمه لتتبع حركات الوجه الدقيقة أو إضافة تأثيرات على نقاط محددة من الوجه",
        example: "إضافة نظارة افتراضية على العينين",
        codeExample: `forever
  analyse image from [camera]
  go to x: (get [nose x] of face [1]) y: (get [nose y] of face [1])
end`
      },
      {
        id: "get-expression",
        nameEn: "get expression of face ()",
        nameAr: "الحصول على تعبير الوجه",
        description: "يعيد هذا البلوك التعبير السائد على الوجه مثل: سعيد، حزين، غاضب، مندهش، خائف، مقرف، أو محايد.",
        inputs: ["face number: رقم الوجه المراد تحليل تعبيره"],
        outputs: ["نص يصف التعبير: happy, sad, angry, surprised, fear, disgust, neutral"],
        usage: "استخدمه لإنشاء تفاعلات بناءً على مشاعر المستخدم",
        example: "تغيير الخلفية بناءً على تعبير الوجه",
        codeExample: `forever
  analyse image from [camera]
  if <(get expression of face [1]) = [happy]> then
    switch backdrop to [sunny]
    play sound [celebration]
  end
end`
      },
      {
        id: "is-expression",
        nameEn: "is expression of face () ()",
        nameAr: "هل تعبير الوجه هو",
        description: "بلوك شرطي يتحقق مما إذا كان تعبير الوجه المحدد يطابق التعبير المختار. يعيد صحيح أو خطأ.",
        inputs: ["face number: رقم الوجه", "expression: التعبير المراد التحقق منه"],
        outputs: ["قيمة منطقية (صحيح/خطأ)"],
        usage: "استخدمه داخل بلوكات الشرط للتحقق من تعبير معين",
        example: "تشغيل صوت ضحك عندما يبتسم المستخدم",
        codeExample: `forever
  analyse image from [camera]
  if <is expression of face [1] [happy]> then
    play sound [laugh] until done
    wait [2] seconds
  end
end`
      },
      {
        id: "add-class",
        nameEn: "addClassFromStage()",
        nameAr: "إضافة فئة من المسرح",
        description: "يضيف صورة الوجه الحالية كفئة جديدة لتدريب نموذج التعرف على الوجوه. يستخدم في التعلم الآلي للتعرف على أشخاص محددين.",
        inputs: ["اسم الفئة (الشخص)"],
        outputs: ["إضافة الصورة إلى قاعدة بيانات التدريب"],
        usage: "استخدمه لتسجيل وجوه أشخاص محددين ليتمكن البرنامج من التعرف عليهم لاحقًا",
        example: "تسجيل وجه المستخدم باسمه لتعريفه لاحقًا",
        codeExample: `when [space] key pressed
ask [ما اسمك؟] and wait
add class (answer) from stage
say (join [تم تسجيل وجهك يا ] (answer))`
      },
      {
        id: "delete-classes",
        nameEn: "deleteAllClass()",
        nameAr: "حذف جميع الفئات",
        description: "يحذف جميع الفئات المسجلة في نموذج التعرف على الوجوه. يستخدم لإعادة تعيين قاعدة بيانات التدريب.",
        inputs: [],
        outputs: ["حذف جميع البيانات المسجلة"],
        usage: "استخدمه لبدء تسجيل جديد أو مسح البيانات القديمة",
        example: "مسح جميع الوجوه المسجلة وبدء من جديد",
        codeExample: `when [d] key pressed
delete all classes
say [تم مسح جميع الوجوه المسجلة]`
      },
      {
        id: "recognise-camera",
        nameEn: "recogniseFromCamera()",
        nameAr: "التعرف من الكاميرا",
        description: "يقوم بالتعرف على الوجه الحالي من الكاميرا ومقارنته بالفئات المسجلة مسبقًا.",
        inputs: [],
        outputs: ["اسم الشخص المتعرف عليه أو 'unknown'"],
        usage: "استخدمه بعد تسجيل الوجوه للتعرف على الأشخاص المارين أمام الكاميرا",
        example: "الترحيب بالشخص باسمه عند التعرف عليه",
        codeExample: `forever
  recognise from camera
  if <not <(get class name) = [unknown]>> then
    say (join [مرحباً ] (get class name))
  end
end`
      },
      {
        id: "recognise-stage",
        nameEn: "recogniseFromStage()",
        nameAr: "التعرف من المسرح",
        description: "يقوم بالتعرف على الوجه من صورة المسرح بدلاً من الكاميرا المباشرة.",
        inputs: [],
        outputs: ["اسم الشخص المتعرف عليه"],
        usage: "استخدمه للتعرف على الوجوه من صور ثابتة أو خلفيات",
        example: "التعرف على شخص من صورة محملة",
        codeExample: `when backdrop switches to [photo1]
recognise from stage
say (join [هذا ] (get class name))`
      },
      {
        id: "is-class-detected",
        nameEn: "isClassDetected()",
        nameAr: "هل تم اكتشاف الفئة",
        description: "يتحقق مما إذا تم اكتشاف فئة (شخص) معينة من الفئات المسجلة.",
        inputs: ["اسم الفئة المراد التحقق منها"],
        outputs: ["قيمة منطقية (صحيح/خطأ)"],
        usage: "استخدمه للتحقق من وجود شخص محدد أمام الكاميرا",
        example: "فتح الباب فقط إذا كان الشخص مسجلاً",
        codeExample: `forever
  recognise from camera
  if <is class [أحمد] detected> then
    broadcast [فتح الباب]
    say [مرحباً أحمد! تم فتح الباب]
  else
    say [عذراً، أنت غير مصرح لك]
  end
end`
      },
      {
        id: "get-class-name",
        nameEn: "getClassName()",
        nameAr: "الحصول على اسم الفئة",
        description: "يعيد اسم الفئة (الشخص) الذي تم التعرف عليه من آخر عملية تعرف.",
        inputs: [],
        outputs: ["نص يحتوي على اسم الشخص أو 'unknown'"],
        usage: "استخدمه للحصول على اسم الشخص المتعرف عليه للتفاعل معه",
        example: "عرض رسالة ترحيب شخصية",
        codeExample: `recognise from camera
set [اسم الزائر] to (get class name)
if <(اسم الزائر) = [unknown]> then
  say [مرحباً بالزائر الجديد!]
else
  say (join [أهلاً وسهلاً ] (اسم الزائر))
end`
      },
      {
        id: "count-faces",
        nameEn: "Count faces",
        nameAr: "عد الوجوه",
        description: "بلوك reporter يعيد العدد الإجمالي للوجوه المكتشفة في الإطار الحالي.",
        inputs: [],
        outputs: ["عدد صحيح"],
        usage: "استخدمه في أي مكان تحتاج فيه لمعرفة عدد الأشخاص الموجودين",
        example: "إنشاء عداد للأشخاص الداخلين لغرفة",
        codeExample: `set [عدد الزوار] to [0]
forever
  analyse image from [camera]
  if <(count faces) > (عدد الزوار)> then
    change [عدد الزوار] by [1]
    play sound [ding]
  end
end`
      }
    ],
    project: {
      title: "مرآة المشاعر الذكية",
      description: "اصنع مرآة سحرية تتعرف على وجهك ومشاعرك! ستُظهر تعبيرات مختلفة وتتفاعل مع ابتسامتك أو حزنك مع موسيقى وتأثيرات بصرية رائعة.",
      objectives: [
        "تشغيل الكاميرا واكتشاف الوجوه",
        "التعرف على تعبيرات الوجه المختلفة",
        "تتبع موقع الوجه وأجزائه",
        "إضافة تأثيرات بصرية بناءً على المشاعر",
        "تشغيل أصوات وموسيقى حسب التعبير"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد الكاميرا والمسرح",
          description: "نبدأ بتشغيل الكاميرا وإعداد المتغيرات الأساسية لتخزين معلومات الوجه والتعبيرات.",
          code: `when green flag clicked
// تشغيل الكاميرا
turn [on] video on stage with [30] % transparency

// إعداد المتغيرات
set [current mood] to [محايد]
set [smile count] to [0]
set [face detected] to [false]

// رسالة ترحيب
say [مرحباً! أنا المرآة الذكية 🪞] for [2] seconds
say [سأتعرف على مشاعرك!] for [2] seconds`
        },
        {
          step: 2,
          title: "اكتشاف الوجه وتتبعه",
          description: "نُضيف كود للكشف عن الوجه وجعل الـ Sprite يتبع موقع الوجه على المسرح.",
          code: `when green flag clicked
forever
  analyse image from [camera]
  
  if <(get # faces) > [0]> then
    set [face detected] to [true]
    // تتبع موقع الوجه
    glide [0.1] secs to x: (x bounding box) y: (y bounding box)
    // تغيير الحجم حسب قرب الوجه
    set size to ((width bounding box) * [2]) %
  else
    set [face detected] to [false]
    say [أين أنت؟ تعال أمام الكاميرا! 👀] for [1] seconds
  end
end`
        },
        {
          step: 3,
          title: "التعرف على التعبيرات",
          description: "نُضيف نظام للتعرف على تعبيرات الوجه المختلفة وتخزينها.",
          code: `when green flag clicked
forever
  analyse image from [camera]
  
  if <(get # faces) > [0]> then
    // الحصول على التعبير الحالي
    set [current mood] to (get expression of face [1])
    
    // عرض التعبير
    if <(current mood) = [happy]> then
      say [😊 أراك سعيداً! رائع!] for [1] seconds
    end
    if <(current mood) = [sad]> then
      say [😢 لماذا أنت حزين؟] for [1] seconds
    end
    if <(current mood) = [angry]> then
      say [😠 هدئ أعصابك!] for [1] seconds
    end
    if <(current mood) = [surprised]> then
      say [😲 ماذا حدث؟!] for [1] seconds
    end
  end
  wait [0.5] seconds
end`
        },
        {
          step: 4,
          title: "إضافة تأثيرات بصرية",
          description: "نُضيف تأثيرات لونية وبصرية تتغير حسب التعبير المكتشف.",
          code: `when green flag clicked
forever
  analyse image from [camera]
  
  if <(face detected) = [true]> then
    // تأثيرات حسب المشاعر
    if <(current mood) = [happy]> then
      set [color] effect to [0]
      set [brightness] effect to [20]
      change [whirl] effect by [2]
    end
    
    if <(current mood) = [sad]> then
      set [color] effect to [200]
      set [brightness] effect to [-20]
      set [whirl] effect to [0]
    end
    
    if <(current mood) = [angry]> then
      set [color] effect to [0]
      change [color] effect by [10]
      set [brightness] effect to [0]
    end
    
    if <(current mood) = [surprised]> then
      set [fisheye] effect to [50]
      wait [0.2] seconds
      set [fisheye] effect to [0]
    end
    
    if <(current mood) = [neutral]> then
      clear graphic effects
    end
  end
end`
        },
        {
          step: 5,
          title: "إضافة الموسيقى والأصوات",
          description: "نُضيف أصوات وموسيقى تتغير حسب مزاج الشخص.",
          code: `when green flag clicked
forever
  analyse image from [camera]
  
  // تشغيل موسيقى حسب المزاج
  if <(current mood) = [happy]> then
    play sound [happy music] until done
  end
  
  if <(current mood) = [sad]> then
    play sound [sad music] until done
  end
  
  wait [3] seconds
end

// صوت عند الابتسام
when green flag clicked
forever
  analyse image from [camera]
  if <is expression of face [1] [happy]> then
    change [smile count] by [1]
    if <((smile count) mod [10]) = [0]> then
      play sound [cheer]
      say (join [😊 ابتسمت ] (join (smile count) [ مرة!])) for [2] seconds
    end
    wait [1] seconds
  end
end`
        },
        {
          step: 6,
          title: "إضافة إطار للوجه",
          description: "نُضيف Sprite يعمل كإطار يحيط بالوجه المكتشف مع تأثيرات متحركة.",
          code: `// Sprite: الإطار
when green flag clicked
set [ghost] effect to [50]
forever
  analyse image from [camera]
  
  if <(get # faces) > [0]> then
    show
    // تتبع الوجه
    go to x: (x bounding box) y: (y bounding box)
    // ضبط الحجم
    set size to ((width bounding box) * [2.5]) %
    // دوران خفيف
    turn right [1] degrees
    
    // تغيير لون الإطار حسب التعبير
    if <(current mood) = [happy]> then
      set [color] effect to [50]  // أخضر
    end
    if <(current mood) = [sad]> then
      set [color] effect to [200]  // أزرق
    end
    if <(current mood) = [angry]> then
      set [color] effect to [0]  // أحمر
    end
  else
    hide
  end
end`
        },
        {
          step: 7,
          title: "الكود النهائي مع التحكم",
          description: "الكود الكامل مع أزرار التحكم وعرض الإحصائيات.",
          code: `// التحكم بلوحة المفاتيح
when [s] key pressed
// عرض الإحصائيات
say (join [😊 عدد الابتسامات: ] (smile count)) for [2] seconds
say (join [🎭 المزاج الحالي: ] (current mood)) for [2] seconds

when [r] key pressed
// إعادة تعيين العداد
set [smile count] to [0]
say [تم إعادة تعيين العداد! 🔄] for [2] seconds

when [h] key pressed
// المساعدة
say [S: إحصائيات | R: إعادة تعيين | H: مساعدة] for [3] seconds`
        }
      ],
      fullCode: `// ===== مرآة المشاعر الذكية =====

// ===== الـ Sprite: المرآة الرئيسية =====
when green flag clicked
turn [on] video on stage with [30] % transparency
set [current mood] to [neutral]
set [smile count] to [0]
set [face detected] to [false]

say [مرحباً! أنا المرآة الذكية 🪞] for [2] seconds
say [ابتسم لي وسأتفاعل معك!] for [2] seconds

// الحلقة الرئيسية
forever
  analyse image from [camera]
  
  if <(get # faces) > [0]> then
    set [face detected] to [true]
    set [current mood] to (get expression of face [1])
    
    // تتبع الوجه
    glide [0.1] secs to x: (x bounding box) y: (y bounding box)
    set size to ((width bounding box) * [1.5]) %
    
    // التفاعل مع التعبيرات
    if <(current mood) = [happy]> then
      say [😊 ابتسامة جميلة!]
      set [color] effect to [0]
      set [brightness] effect to [20]
    end
    
    if <(current mood) = [sad]> then
      say [😢 لا تحزن!]
      set [color] effect to [200]
      set [brightness] effect to [-10]
    end
    
    if <(current mood) = [angry]> then
      say [😠 خذ نفساً عميقاً!]
      change [color] effect by [5]
    end
    
    if <(current mood) = [surprised]> then
      say [😲 واو!]
      set [fisheye] effect to [30]
    end
    
    if <(current mood) = [neutral]> then
      say [🙂 مرحباً!]
      clear graphic effects
    end
  else
    set [face detected] to [false]
    say [👀 أين أنت؟]
    clear graphic effects
  end
end

// عداد الابتسامات
when green flag clicked
forever
  analyse image from [camera]
  if <is expression of face [1] [happy]> then
    change [smile count] by [1]
    if <((smile count) mod [5]) = [0]> then
      play sound [pop]
    end
    wait [1] seconds
  end
end

// ===== الـ Sprite: الإطار =====
when green flag clicked
go to [front] layer
set [ghost] effect to [40]
forever
  analyse image from [camera]
  if <(get # faces) > [0]> then
    show
    go to x: (x bounding box) y: (y bounding box)
    set size to ((width bounding box) * [2.2]) %
    turn right [1] degrees
    
    if <(current mood) = [happy]> then
      set [color] effect to [80]
    end
    if <(current mood) = [sad]> then
      set [color] effect to [200]
    end
    if <(current mood) = [angry]> then
      set [color] effect to [0]
    end
  else
    hide
  end
end

// ===== التحكم =====
when [s] key pressed
say (join [😊 ] (join (smile count) (join [ ابتسامة | 🎭 ] (current mood)))) for [3] seconds

when [r] key pressed
set [smile count] to [0]
say [🔄 تم الإعادة!] for [2] seconds

when [space] key pressed
// التقاط صورة (محاكاة)
play sound [camera shutter]
say [📸 تم التقاط الصورة!] for [2] seconds
set [pixelate] effect to [20]
wait [0.3] seconds
clear graphic effects`
    }
  },
  {
    id: 4,
    titleAr: "كشف الأشياء",
    titleEn: "Object Detection",
    icon: "📦",
    description: "التعرف على الأجسام والأشياء المختلفة وتصنيفها باستخدام Object Detection",
    color: "from-purple-500 to-pink-500",
    terms: [
      {
        term: "COCO Dataset",
        termAr: "مجموعة بيانات COCO",
        definition: "مجموعة بيانات ضخمة تحتوي على أكثر من 80 فئة من الأشياء الشائعة مثل الأشخاص، السيارات، الحيوانات، الأثاث وغيرها. تُستخدم لتدريب نماذج كشف الأشياء."
      },
      {
        term: "Confidence Score",
        termAr: "درجة الثقة",
        definition: "نسبة مئوية تُعبر عن مدى تأكد النموذج من صحة الكشف. كلما ارتفعت النسبة، زادت دقة الكشف."
      },
      {
        term: "Detection Threshold",
        termAr: "عتبة الكشف",
        definition: "الحد الأدنى لدرجة الثقة المطلوبة لاعتبار الكشف صحيحاً. رفع العتبة يقلل الأخطاء لكن قد يفوت بعض الأشياء."
      },
      {
        term: "Object Class",
        termAr: "فئة الجسم",
        definition: "تصنيف الجسم المكتشف مثل: person (شخص)، car (سيارة)، dog (كلب)، chair (كرسي) وغيرها."
      },
      {
        term: "Bounding Box",
        termAr: "صندوق الإحاطة",
        definition: "مستطيل يُحيط بالجسم المكتشف ويُحدد موقعه (x, y) وأبعاده (width, height) في الصورة."
      },
      {
        term: "Real-time Detection",
        termAr: "الكشف في الوقت الفعلي",
        definition: "القدرة على كشف الأشياء بشكل فوري ومستمر أثناء بث الفيديو من الكاميرا."
      },
      {
        term: "Frame",
        termAr: "الإطار",
        definition: "صورة واحدة من سلسلة صور الفيديو. يتم تحليل كل إطار على حدة للكشف عن الأشياء."
      },
      {
        term: "Model",
        termAr: "النموذج",
        definition: "برنامج ذكاء اصطناعي مُدرب على التعرف على الأشياء. Pictoblox يستخدم نماذج مُدربة مسبقاً."
      }
    ],
    blocks: [
      {
        id: "turn-video-od",
        nameEn: "turn () video on stage with () % transparency",
        nameAr: "تشغيل الفيديو على المسرح",
        description: "يقوم بتشغيل أو إيقاف عرض الفيديو من الكاميرا على المسرح مع التحكم في الشفافية. البلوك الأساسي لأي مشروع يستخدم الكاميرا. ضعه في بداية البرنامج.",
        inputs: ["on/off: تشغيل أو إيقاف الفيديو", "transparency: نسبة الشفافية من 0% (واضح) إلى 100% (مخفي)"],
        outputs: ["عرض فيديو الكاميرا على المسرح"],
        usage: "استخدم شفافية 0% لرؤية الكاميرا بوضوح، أو 50% لرؤية الـ Sprites بشكل أفضل فوق الفيديو",
        example: "بدء تشغيل الكاميرا مع شفافية متوسطة لرؤية الـ Sprite",
        codeExample: `when green flag clicked
turn [on] video on stage with [40] % transparency`
      },
      {
        id: "analyse-od",
        nameEn: "analyse image from ()",
        nameAr: "تحليل الصورة من",
        description: "يقوم بتحليل الصورة من المصدر المحدد (كاميرا أو مسرح) للبحث عن الأجسام. هذا البلوك ضروري ويجب استدعاؤه قبل أي عملية كشف أخرى لتحديث البيانات. بدونه لن تتحدث بيانات الكشف.",
        inputs: ["source: مصدر الصورة (camera أو stage)"],
        outputs: ["تحديث قائمة الأجسام المكتشفة في الذاكرة"],
        usage: "يجب وضعه داخل حلقة forever في بداية كل دورة لضمان تحليل أحدث إطار",
        example: "التحليل المستمر للكاميرا للكشف عن الأجسام",
        codeExample: `forever
  analyse image from [camera]
  // باقي أوامر الكشف هنا
  wait [0.1] seconds
end`
      },
      {
        id: "is-detected",
        nameEn: "is () detected?",
        nameAr: "هل تم اكتشاف ()؟",
        description: "بلوك شرطي يتحقق مما إذا كان جسم معين موجوداً في الإطار الحالي. يُرجع true إذا تم اكتشاف الجسم المحدد، و false إذا لم يتم اكتشافه. الأجسام المتاحة تشمل: person, car, dog, cat, chair, bottle, cell phone, book, cup وغيرها من فئات COCO.",
        inputs: ["object name: اسم الجسم المراد البحث عنه (مثل: person, car, dog, cat, chair, bottle, cell phone, book)"],
        outputs: ["قيمة منطقية: true إذا تم الكشف، false خلاف ذلك"],
        usage: "يُستخدم داخل شروط if أو wait until للتفاعل عند ظهور جسم معين أمام الكاميرا. مثالي لألعاب البحث عن الأشياء أو تطبيقات الأمان",
        example: "عندما يظهر كتاب أمام الكاميرا، يقول الـ Sprite رسالة ترحيبية",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency
forever
  analyse image from [camera]
  if <is [book] detected?> then
    say [أهلاً! أرى كتاباً! 📚] for [2] seconds
    wait [3] seconds
  end
end`
      },
      {
        id: "count-objects",
        nameEn: "count () in frame",
        nameAr: "عد () في الإطار",
        description: "يقوم بعد عدد الأجسام من نوع معين الموجودة في الإطار الحالي. مفيد جداً لتطبيقات العد التلقائي والإحصاءات. يُرجع صفر إذا لم يتم العثور على أي جسم من النوع المحدد.",
        inputs: ["object name: اسم الجسم المراد عده (يمكن اختيار 'all' لعد جميع الأجسام)"],
        outputs: ["رقم صحيح: عدد الأجسام المكتشفة من النوع المحدد"],
        usage: "يُستخدم في تطبيقات المخزون، عد الحضور، ألعاب جمع الأشياء، أو أي سيناريو يتطلب معرفة كمية الأجسام",
        example: "عد عدد الأشخاص في الغرفة وعرض النتيجة على الشاشة",
        codeExample: `when green flag clicked
turn [on] video on stage with [40] % transparency
forever
  analyse image from [camera]
  set [people count] to (count [person] in frame)
  say (join [عدد الأشخاص: ] (people count))
  wait [0.5] seconds
end`
      },
      {
        id: "get-object-property",
        nameEn: "() of () no. ()",
        nameAr: "() للجسم () رقم ()",
        description: "يُرجع خاصية محددة لجسم معين برقمه. الخصائص المتاحة: x (الموقع الأفقي)، y (الموقع الرأسي)، width (العرض)، height (الارتفاع)، confidence (درجة الثقة). يتيح تتبع موقع وحجم كل جسم بدقة.",
        inputs: ["property: الخاصية المطلوبة (x, y, width, height, confidence)", "object name: اسم الجسم", "object number: رقم الجسم (يبدأ من 1)"],
        outputs: ["رقم: قيمة الخاصية المطلوبة"],
        usage: "يُستخدم لتحريك Sprites لتتبع الأجسام، تغيير أحجامها بناءً على المسافة، أو فلترة النتائج حسب درجة الثقة",
        example: "جعل القطة تتبع موقع الكرة المكتشفة وتتحرك نحوها",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency
forever
  analyse image from [camera]
  if <is [sports ball] detected?> then
    glide [0.2] secs to x: ([x] of [sports ball] no. [1]) y: ([y] of [sports ball] no. [1])
  end
end`
      },
      {
        id: "set-threshold",
        nameEn: "set detection threshold to ()",
        nameAr: "تعيين عتبة الكشف إلى ()",
        description: "يُحدد الحد الأدنى لدرجة الثقة المطلوبة لاعتبار الكشف صالحاً. القيمة من 0 إلى 100. قيمة أعلى = دقة أعلى لكن قد يُفوت بعض الأجسام. قيمة أقل = حساسية أعلى لكن قد تظهر أخطاء.",
        inputs: ["threshold: نسبة الثقة المطلوبة (0-100)"],
        outputs: ["تحديث إعدادات الكشف"],
        usage: "استخدم قيمة عالية (70-90) للتطبيقات التي تتطلب دقة عالية، وقيمة منخفضة (30-50) للتطبيقات التي تتطلب حساسية أكبر",
        example: "ضبط عتبة عالية للتأكد من دقة الكشف في تطبيق أمني",
        codeExample: `when green flag clicked
set detection threshold to [75]
turn [on] video on stage with [40] % transparency
forever
  analyse image from [camera]
  if <is [person] detected?> then
    say [شخص مؤكد بدقة عالية!]
  end
end`
      },
      {
        id: "show-hide-detection",
        nameEn: "() object detection",
        nameAr: "() كشف الأشياء",
        description: "يُظهر أو يُخفي صناديق الإحاطة والتسميات حول الأجسام المكتشفة. مفيد للتصحيح أثناء التطوير أو لإخفاء التفاصيل التقنية في التطبيق النهائي.",
        inputs: ["show/hide: إظهار أو إخفاء عناصر الكشف المرئية"],
        outputs: ["تغيير العرض المرئي للكشف"],
        usage: "استخدم 'show' أثناء التطوير لرؤية ما يكتشفه البرنامج، و 'hide' في النسخة النهائية للحصول على مظهر نظيف",
        example: "إظهار صناديق الكشف عند الضغط على مفتاح D وإخفائها عند الضغط على H",
        codeExample: `when green flag clicked
[hide] object detection

when [d] key pressed
[show] object detection
say [وضع التصحيح مفعل]

when [h] key pressed
[hide] object detection
say [وضع العرض النظيف]`
      },
      {
        id: "when-detected",
        nameEn: "when () is detected",
        nameAr: "عندما يتم اكتشاف ()",
        description: "بلوك حدث (Event Block) يُنفذ الكود المرفق به تلقائياً عند اكتشاف الجسم المحدد. لا يحتاج لحلقة forever لأنه يعمل كمستمع للأحداث. أكثر كفاءة من استخدام حلقة مع شرط.",
        inputs: ["object name: اسم الجسم الذي يُفعّل الحدث"],
        outputs: ["تنفيذ الكود عند الكشف"],
        usage: "مثالي للتفاعلات الفورية مثل إطلاق تأثيرات صوتية أو بصرية عند ظهور جسم معين",
        example: "تشغيل صوت عند اكتشاف قطة وعرض رسالة ترحيب",
        codeExample: `when [cat] is detected
play sound [meow]
say [مرحباً يا قطة! 🐱] for [2] seconds
change [brightness] effect by [20]
wait [0.5] seconds
change [brightness] effect by [-20]`
      },
      {
        id: "get-object-name",
        nameEn: "get detected object () name",
        nameAr: "الحصول على اسم الجسم المكتشف رقم ()",
        description: "يُرجع اسم الجسم المكتشف برقمه في قائمة الكشف. مفيد عندما تريد معرفة نوع الجسم الأول أو الثاني المكتشف دون تحديد نوع مسبق.",
        inputs: ["object number: رقم الجسم في قائمة الكشف (يبدأ من 1)"],
        outputs: ["نص: اسم الجسم (مثل: person, car, dog)"],
        usage: "يُستخدم في سيناريوهات اللعبة حيث لا نعرف مسبقاً ما سيظهر، أو لإنشاء قائمة ديناميكية بالأجسام",
        example: "معرفة ما هو أول جسم مكتشف وعرض اسمه للمستخدم",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency
forever
  analyse image from [camera]
  if <(count [all] in frame) > [0]> then
    set [first object] to (get detected object [1] name)
    say (join [أول جسم أراه هو: ] (first object))
  end
  wait [1] seconds
end`
      },
      {
        id: "total-objects",
        nameEn: "total detected objects",
        nameAr: "إجمالي الأجسام المكتشفة",
        description: "يُرجع العدد الإجمالي لجميع الأجسام المكتشفة في الإطار الحالي بغض النظر عن نوعها. مختلف عن 'count () in frame' الذي يعد نوعاً واحداً فقط.",
        inputs: [],
        outputs: ["رقم: إجمالي عدد الأجسام من جميع الأنواع"],
        usage: "يُستخدم لمعرفة مدى 'ازدحام' المشهد أو للتحقق من وجود أي أجسام قبل معالجة تفصيلية",
        example: "عرض عدد جميع الأشياء في المشهد وتنبيه إذا كان مزدحماً",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency
forever
  analyse image from [camera]
  set [total] to (total detected objects)
  if <(total) > [5]> then
    say [المشهد مزدحم جداً! 😮]
  else
    say (join [عدد الأشياء: ] (total))
  end
  wait [0.5] seconds
end`
      },
      {
        id: "get-confidence",
        nameEn: "confidence of () no. ()",
        nameAr: "درجة ثقة () رقم ()",
        description: "يُرجع درجة الثقة (0-100) للكشف عن جسم محدد. درجة الثقة تُعبر عن مدى تأكد النموذج من صحة الكشف. قيمة أعلى تعني تأكد أكبر من صحة النتيجة.",
        inputs: ["object name: اسم الجسم", "object number: رقم الجسم"],
        outputs: ["رقم: درجة الثقة من 0 إلى 100"],
        usage: "يُستخدم لفلترة النتائج غير الموثوقة أو لعرض مستوى الدقة للمستخدم. مفيد في التطبيقات التي تتطلب موثوقية عالية",
        example: "عرض الكشف فقط إذا كانت درجة الثقة عالية (أكثر من 80%)",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency
forever
  analyse image from [camera]
  if <is [person] detected?> then
    set [conf] to (confidence of [person] no. [1])
    if <(conf) > [80]> then
      say (join [شخص مؤكد! الثقة: ] (join (conf) [%]))
    else
      say [ربما هناك شخص... غير متأكد]
    end
  end
  wait [0.5] seconds
end`
      },
      {
        id: "get-all-detected",
        nameEn: "get all detected objects",
        nameAr: "الحصول على جميع الأجسام المكتشفة",
        description: "يُرجع قائمة بأسماء جميع الأجسام المكتشفة في الإطار الحالي كنص واحد. مفيد لمعرفة ماذا يوجد في المشهد بشكل عام دون تحديد نوع معين.",
        inputs: [],
        outputs: ["قائمة نصية: أسماء جميع الأجسام المكتشفة مفصولة بفواصل"],
        usage: "يُستخدم لعرض محتويات المشهد، إنشاء وصف للصورة، أو التحقق من وجود أي أجسام قبل البحث عن نوع محدد",
        example: "عرض قائمة بجميع الأشياء الموجودة أمام الكاميرا عند الضغط على مفتاح",
        codeExample: `when [space] key pressed
analyse image from [camera]
if <(total detected objects) > [0]> then
  say (join [الأجسام المكتشفة: ] (get all detected objects)) for [3] seconds
else
  say [لم يتم اكتشاف أي أجسام] for [2] seconds
end`
      }
    ],
    project: {
      title: "عداد ذكي للأجسام مع تغيير الألوان",
      description: "سنبني تطبيقاً ذكياً يعد الأشياء المختلفة أمام الكاميرا، يُغير لون الـ Sprite بناءً على نوع الجسم المكتشف، ويُظهر إحصائيات حية على الشاشة مع تأثيرات صوتية وبصرية!",
      objectives: [
        "تشغيل الكاميرا وضبط إعدادات الكشف المثلى",
        "عد أنواع مختلفة من الأجسام وعرض الإحصائيات",
        "تغيير مظهر الـ Sprite بناءً على نوع الجسم المكتشف",
        "إضافة تأثيرات صوتية وبصرية للتفاعل",
        "التحكم بالتطبيق عبر لوحة المفاتيح"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد المسرح والكاميرا والمتغيرات",
          description: "نبدأ بتشغيل الكاميرا وضبط عتبة الكشف لضمان دقة عالية. نُنشئ المتغيرات اللازمة لتخزين البيانات ونُظهر صناديق الكشف للمساعدة في التطوير.",
          code: `when green flag clicked
// إعداد المتغيرات الأساسية
set [people count] to [0]
set [objects count] to [0]
set [current object] to [لا شيء]

// تشغيل الكاميرا وإعداد الكشف
turn [on] video on stage with [40] % transparency
set detection threshold to [60]
[show] object detection

say [مرحباً! أنا عداد الأجسام الذكي 🤖] for [2] seconds`
        },
        {
          step: 2,
          title: "إنشاء حلقة التحليل الرئيسية وتحديث العدادات",
          description: "نُنشئ حلقة forever تحلل الصورة باستمرار وتُحدث عدادات الأجسام. هذه الحلقة هي قلب البرنامج وتعمل طوال تشغيل التطبيق.",
          code: `forever
  // تحليل الصورة من الكاميرا - ضروري في كل دورة!
  analyse image from [camera]
  
  // تحديث العدادات
  set [people count] to (count [person] in frame)
  set [objects count] to (total detected objects)
  
  // ... باقي الكود يأتي هنا
  
  wait [0.1] seconds
end`
        },
        {
          step: 3,
          title: "تغيير لون الـ Sprite حسب نوع الجسم المكتشف",
          description: "نُضيف منطق لتغيير لون الـ Sprite بناءً على نوع الجسم الأول المكتشف. كل نوع جسم له لون مميز ورمز تعبيري خاص.",
          code: `  // داخل حلقة forever - التحقق من الأجسام وتغيير اللون
  if <is [person] detected?> then
    set [color] effect to [0]
    set [current object] to [شخص 👤]
  else
    if <is [cell phone] detected?> then
      set [color] effect to [50]
      set [current object] to [هاتف 📱]
    else
      if <is [bottle] detected?> then
        set [color] effect to [100]
        set [current object] to [زجاجة 🍼]
      else
        if <is [book] detected?> then
          set [color] effect to [150]
          set [current object] to [كتاب 📚]
        else
          if <is [cup] detected?> then
            set [color] effect to [200]
            set [current object] to [كوب ☕]
          else
            set [color] effect to [25]
            if <(objects count) > [0]> then
              set [current object] to (get detected object [1] name)
            else
              set [current object] to [لا شيء]
            end
          end
        end
      end
    end
  end`
        },
        {
          step: 4,
          title: "عرض الإحصائيات الحية على الشاشة",
          description: "نعرض معلومات مفيدة للمستخدم تشمل عدد الأشخاص، إجمالي الأجسام، والجسم الحالي المكتشف بتنسيق جميل وواضح.",
          code: `  // داخل حلقة forever - عرض الإحصائيات
  say (join [👥 أشخاص: ] (join (people count) (join [  |  📦 أجسام: ] (join (objects count) (join [  |  🎯 ] (current object))))))`
        },
        {
          step: 5,
          title: "تحريك الـ Sprite لتتبع الجسم المكتشف",
          description: "نُضيف حركة للـ Sprite ليتبع موقع أول جسم مكتشف، مما يجعل التطبيق أكثر حيوية وتفاعلية. نستخدم glide للحركة السلسة.",
          code: `  // داخل حلقة forever - تتبع موقع الجسم
  if <(objects count) > [0]> then
    set [target x] to ([x] of (get detected object [1] name) no. [1])
    set [target y] to ([y] of (get detected object [1] name) no. [1])
    glide [0.3] secs to x: (target x) y: (target y)
  end`
        },
        {
          step: 6,
          title: "إضافة تأثيرات صوتية وبصرية للأحداث",
          description: "نُضيف سكريبتات منفصلة تعمل عند اكتشاف أجسام معينة. هذه الأحداث تُشغل تأثيرات صوتية وبصرية لجعل التجربة أكثر تفاعلية.",
          code: `// سكريبت منفصل - عند اكتشاف شخص
when [person] is detected
play sound [pop]
change size by [10]
wait [0.2] seconds
change size by [-10]

// سكريبت منفصل - عند اكتشاف هاتف
when [cell phone] is detected
play sound [ding]
repeat [3]
  change [brightness] effect by [25]
  wait [0.1] seconds
  change [brightness] effect by [-25]
end

// سكريبت منفصل - عند اكتشاف كتاب
when [book] is detected
play sound [magic]
repeat [2]
  change [ghost] effect by [30]
  wait [0.2] seconds
  change [ghost] effect by [-30]
end`
        },
        {
          step: 7,
          title: "إضافة التحكم بلوحة المفاتيح",
          description: "نُضيف أزرار تحكم لإظهار/إخفاء صناديق الكشف، تغيير الشفافية، وعرض قائمة الأجسام المكتشفة. هذا يمنح المستخدم تحكماً كاملاً بالتطبيق.",
          code: `// التحكم بعرض صناديق الكشف
when [d] key pressed
[show] object detection
say [وضع التصحيح مفعل 🔧] for [1] seconds

when [h] key pressed
[hide] object detection
say [وضع العرض النظيف ✨] for [1] seconds

// التحكم بشفافية الفيديو
when [up arrow] key pressed
change [video transparency] by [-10]
say [شفافية أقل] for [0.5] seconds

when [down arrow] key pressed
change [video transparency] by [10]
say [شفافية أكثر] for [0.5] seconds

// عرض قائمة الأجسام
when [space] key pressed
if <(total detected objects) > [0]> then
  say (join [🔍 الأجسام المكتشفة: ] (get all detected objects)) for [3] seconds
else
  say [لم يتم اكتشاف أي أجسام 🤷] for [2] seconds
end`
        }
      ],
      fullCode: `// ===== السكريبت الرئيسي =====
when green flag clicked

// إعداد المتغيرات
set [people count] to [0]
set [objects count] to [0]
set [current object] to [لا شيء]
set [target x] to [0]
set [target y] to [0]

// تشغيل الكاميرا وإعداد الكشف
turn [on] video on stage with [40] % transparency
set detection threshold to [60]
[show] object detection

say [مرحباً! أنا عداد الأجسام الذكي 🤖] for [2] seconds

// الحلقة الرئيسية للتحليل
forever
  // تحليل الصورة
  analyse image from [camera]
  
  // تحديث العدادات
  set [people count] to (count [person] in frame)
  set [objects count] to (total detected objects)
  
  // تغيير اللون حسب نوع الجسم
  if <is [person] detected?> then
    set [color] effect to [0]
    set [current object] to [شخص 👤]
  else
    if <is [cell phone] detected?> then
      set [color] effect to [50]
      set [current object] to [هاتف 📱]
    else
      if <is [bottle] detected?> then
        set [color] effect to [100]
        set [current object] to [زجاجة 🍼]
      else
        if <is [book] detected?> then
          set [color] effect to [150]
          set [current object] to [كتاب 📚]
        else
          if <is [cup] detected?> then
            set [color] effect to [200]
            set [current object] to [كوب ☕]
          else
            set [color] effect to [25]
            if <(objects count) > [0]> then
              set [current object] to (get detected object [1] name)
            else
              set [current object] to [لا شيء]
            end
          end
        end
      end
    end
  end
  
  // عرض الإحصائيات
  say (join [👥 أشخاص: ] (join (people count) (join [  |  📦 أجسام: ] (join (objects count) (join [  |  🎯 ] (current object))))))
  
  // تتبع موقع الجسم
  if <(objects count) > [0]> then
    glide [0.3] secs to x: ([x] of (get detected object [1] name) no. [1]) y: ([y] of (get detected object [1] name) no. [1])
  end
  
  wait [0.1] seconds
end

// ===== أحداث اكتشاف الأجسام =====
when [person] is detected
play sound [pop]
change size by [10]
wait [0.2] seconds
change size by [-10]

when [cell phone] is detected
play sound [ding]
repeat [3]
  change [brightness] effect by [25]
  wait [0.1] seconds
  change [brightness] effect by [-25]
end

when [book] is detected
play sound [magic]
repeat [2]
  change [ghost] effect by [30]
  wait [0.2] seconds
  change [ghost] effect by [-30]
end

// ===== التحكم بلوحة المفاتيح =====
when [d] key pressed
[show] object detection
say [وضع التصحيح مفعل 🔧] for [1] seconds

when [h] key pressed
[hide] object detection
say [وضع العرض النظيف ✨] for [1] seconds

when [up arrow] key pressed
change [video transparency] by [-10]

when [down arrow] key pressed
change [video transparency] by [10]

when [space] key pressed
if <(total detected objects) > [0]> then
  say (join [🔍 الأجسام: ] (get all detected objects)) for [3] seconds
else
  say [لم يتم اكتشاف أي أجسام 🤷] for [2] seconds
end`
    }
  },
  {
    id: 5,
    titleAr: "كشف جسم الإنسان",
    titleEn: "Human Body Detection",
    icon: "🏃",
    description: "تتبع حركة الجسم والتفاعل مع الأجزاء المختلفة",
    color: "from-red-500 to-orange-500",
    terms: [
      {
        term: "Pose Estimation",
        termAr: "تقدير الوضعية",
        definition: "تقنية ذكاء اصطناعي تحدد مواقع مفاصل الجسم (17 نقطة) مثل الرأس والكتفين والمرفقين والركبتين لفهم وضعية الإنسان."
      },
      {
        term: "Keypoints",
        termAr: "النقاط المفتاحية",
        definition: "النقاط الـ 17 التي تُمثل مفاصل الجسم: الأنف، العينين، الأذنين، الكتفين، المرفقين، المعصمين، الوركين، الركبتين، والكاحلين."
      },
      {
        term: "Skeleton",
        termAr: "الهيكل العظمي",
        definition: "الخطوط التي تربط بين النقاط المفتاحية لتشكيل شكل يُشبه الهيكل العظمي للإنسان."
      },
      {
        term: "Body Part",
        termAr: "جزء الجسم",
        definition: "أي نقطة من النقاط المفتاحية مثل: nose, left_eye, right_shoulder, left_knee, right_ankle وغيرها."
      },
      {
        term: "Pose Detection",
        termAr: "كشف الوضعية",
        definition: "عملية تحليل الصورة للكشف عن وجود جسم إنسان وتحديد وضعيته في الفراغ."
      },
      {
        term: "Real-time Tracking",
        termAr: "التتبع الفوري",
        definition: "القدرة على تتبع حركة الجسم بشكل مستمر وفوري مع كل إطار من الفيديو."
      },
      {
        term: "Body Detection Model",
        termAr: "نموذج كشف الجسم",
        definition: "نموذج ذكاء اصطناعي مُدرب على التعرف على أجسام البشر وتحديد مواقع مفاصلهم."
      },
      {
        term: "Gesture Recognition",
        termAr: "التعرف على الإيماءات",
        definition: "القدرة على فهم حركات الجسم وتفسيرها كأوامر مثل رفع اليد أو القفز."
      }
    ],
    blocks: [
      {
        id: "turn-video-hb",
        nameEn: "turn () video on stage with () % transparency",
        nameAr: "تشغيل الفيديو على المسرح",
        description: "يقوم بتشغيل أو إيقاف عرض الفيديو من الكاميرا على المسرح. ضروري لأي مشروع يستخدم كاميرا لكشف الجسم. الشفافية تُحدد مدى وضوح الفيديو.",
        inputs: ["on/off: تشغيل أو إيقاف الفيديو", "transparency: نسبة الشفافية من 0% إلى 100%"],
        outputs: ["عرض فيديو الكاميرا على المسرح"],
        usage: "ضع هذا البلوك في بداية البرنامج عند الضغط على العلم الأخضر لتفعيل الكاميرا",
        example: "تشغيل الكاميرا بشفافية 30% لرؤية الـ Sprite فوق الفيديو",
        codeExample: `when green flag clicked
turn [on] video on stage with [30] % transparency`
      },
      {
        id: "analyse-hb",
        nameEn: "analyse image from ()",
        nameAr: "تحليل الصورة من",
        description: "يقوم بتحليل الصورة من الكاميرا أو المسرح للكشف عن جسم الإنسان وتحديد مواقع المفاصل. هذا البلوك أساسي ويجب استدعاؤه قبل أي عملية للحصول على بيانات الجسم.",
        inputs: ["source: مصدر الصورة (camera أو stage)"],
        outputs: ["تحديث بيانات الجسم المكتشف ومواقع المفاصل"],
        usage: "يجب وضعه داخل حلقة forever لتحليل كل إطار جديد من الفيديو",
        example: "التحليل المستمر للكاميرا لتتبع حركة الجسم",
        codeExample: `forever
  analyse image from [camera]
  // استخدام بيانات الجسم هنا
  wait [0.05] seconds
end`
      },
      {
        id: "is-body-detected",
        nameEn: "is body detected?",
        nameAr: "هل تم اكتشاف جسم؟",
        description: "بلوك شرطي يُعيد 'صحيح' إذا تم اكتشاف جسم إنسان في الإطار الحالي، و'خطأ' إذا لم يُكتشف أي جسم. مفيد للتحقق قبل محاولة الوصول لبيانات الجسم.",
        inputs: [],
        outputs: ["قيمة منطقية: true إذا تم اكتشاف جسم، false إذا لم يُكتشف"],
        usage: "استخدمه داخل بلوك if للتحقق من وجود شخص قبل تنفيذ أي إجراءات تعتمد على الجسم",
        example: "عرض رسالة ترحيب عند اكتشاف شخص",
        codeExample: `forever
  analyse image from [camera]
  if <is body detected?> then
    say [مرحباً! أراك 👋]
  else
    say [أين أنت؟ لا أرى أحداً!]
  end
end`
      },
      {
        id: "body-x-y",
        nameEn: "() of body part ()",
        nameAr: "إحداثي جزء الجسم",
        description: "يُعيد إحداثي X أو Y لجزء محدد من الجسم. يمكنك اختيار أي نقطة من النقاط الـ 17: nose, left_eye, right_eye, left_ear, right_ear, left_shoulder, right_shoulder, left_elbow, right_elbow, left_wrist, right_wrist, left_hip, right_hip, left_knee, right_knee, left_ankle, right_ankle.",
        inputs: ["x/y: نوع الإحداثي المطلوب", "body part: اسم جزء الجسم بالإنجليزية"],
        outputs: ["قيمة رقمية تُمثل الإحداثي (-240 إلى 240 لـ x، -180 إلى 180 لـ y)"],
        usage: "استخدمه لتحريك الـ Sprite لتتبع جزء معين من الجسم أو لرسم نقاط على المفاصل",
        example: "تحريك الـ Sprite ليتبع حركة اليد اليمنى",
        codeExample: `forever
  analyse image from [camera]
  if <is body detected?> then
    go to x: ([x] of body part [right_wrist]) y: ([y] of body part [right_wrist])
  end
end`
      },
      {
        id: "show-hide-body",
        nameEn: "() body detection",
        nameAr: "إظهار/إخفاء كشف الجسم",
        description: "يُظهر أو يُخفي رسم الهيكل العظمي والنقاط المفتاحية على الشاشة. مفيد أثناء التطوير لرؤية كيف يتتبع البرنامج الجسم، ويمكن إخفاؤه في النسخة النهائية.",
        inputs: ["show/hide: إظهار أو إخفاء"],
        outputs: ["تغيير عرض الهيكل العظمي على المسرح"],
        usage: "استخدم show أثناء التطوير للتأكد من صحة الكشف، ثم hide للعرض النهائي",
        example: "إظهار الهيكل العظمي عند بداية البرنامج",
        codeExample: `when green flag clicked
[show] body detection
say [يمكنك رؤية نقاط الجسم الآن!] for [2] seconds`
      },
      {
        id: "count-bodies",
        nameEn: "count bodies",
        nameAr: "عدد الأجسام المكتشفة",
        description: "يُعيد عدد الأجسام البشرية المكتشفة في الإطار الحالي. مفيد للتحقق من عدد الأشخاص أمام الكاميرا.",
        inputs: [],
        outputs: ["عدد صحيح يُمثل عدد الأجسام المكتشفة"],
        usage: "استخدمه لعد الأشخاص أو التحقق من وجود شخص واحد على الأقل",
        example: "عرض عدد الأشخاص الموجودين أمام الكاميرا",
        codeExample: `forever
  analyse image from [camera]
  say (join [عدد الأشخاص: ] (count bodies))
  wait [0.5] seconds
end`
      },
      {
        id: "distance-between",
        nameEn: "distance between () and ()",
        nameAr: "المسافة بين نقطتين",
        description: "يحسب المسافة بين نقطتين من نقاط الجسم. مفيد لاكتشاف إيماءات مثل التصفيق (المسافة بين اليدين) أو القفز (ارتفاع الكاحلين).",
        inputs: ["body part 1: النقطة الأولى", "body part 2: النقطة الثانية"],
        outputs: ["قيمة رقمية تُمثل المسافة بالبكسل"],
        usage: "استخدمه للكشف عن إيماءات تعتمد على المسافة بين أجزاء الجسم",
        example: "اكتشاف التصفيق عندما تقترب اليدين من بعضهما",
        codeExample: `forever
  analyse image from [camera]
  if <(distance between [left_wrist] and [right_wrist]) < [50]> then
    play sound [clap]
    say [تصفيق! 👏] for [1] seconds
    wait [0.5] seconds
  end
end`
      },
      {
        id: "angle-of-joint",
        nameEn: "angle of () joint",
        nameAr: "زاوية المفصل",
        description: "يحسب زاوية مفصل معين بالدرجات (0-180). المفاصل المتاحة: left_elbow, right_elbow, left_knee, right_knee, left_shoulder, right_shoulder. مفيد لاكتشاف وضعيات محددة.",
        inputs: ["joint: اسم المفصل"],
        outputs: ["قيمة رقمية تُمثل الزاوية بالدرجات"],
        usage: "استخدمه للكشف عن ثني الذراع أو الركبة أو وضعيات التمارين الرياضية",
        example: "اكتشاف رفع الذراع (الكوع ممدود)",
        codeExample: `forever
  analyse image from [camera]
  if <(angle of [right_elbow] joint) > [150]> then
    say [ذراعك مرفوعة! 🙋]
  else
    say [اثنِ ذراعك]
  end
end`
      },
      {
        id: "body-part-above",
        nameEn: "is () above ()?",
        nameAr: "هل النقطة فوق الأخرى؟",
        description: "يتحقق مما إذا كانت نقطة من الجسم أعلى من نقطة أخرى في الشاشة. مفيد لاكتشاف إيماءات مثل رفع اليدين فوق الرأس.",
        inputs: ["body part 1: النقطة الأولى", "body part 2: النقطة الثانية"],
        outputs: ["قيمة منطقية: true إذا كانت النقطة الأولى أعلى"],
        usage: "استخدمه للكشف عن وضعيات تعتمد على ترتيب أجزاء الجسم عمودياً",
        example: "اكتشاف رفع اليدين فوق الرأس",
        codeExample: `forever
  analyse image from [camera]
  if <<is [left_wrist] above [nose]?> and <is [right_wrist] above [nose]?>> then
    say [يداك مرفوعتان! 🙌]
    play sound [cheer]
    wait [1] seconds
  end
end`
      },
      {
        id: "body-leaning",
        nameEn: "body leaning ()",
        nameAr: "اتجاه ميل الجسم",
        description: "يكتشف اتجاه ميل الجسم: left (يسار)، right (يمين)، forward (أمام)، أو center (متوسط). مفيد لألعاب التحكم بالحركة.",
        inputs: [],
        outputs: ["نص يصف اتجاه الميل: left, right, forward, center"],
        usage: "استخدمه للتحكم بالألعاب أو التطبيقات بحركة الجسم بدلاً من لوحة المفاتيح",
        example: "التحكم بالـ Sprite بميل الجسم يميناً ويساراً",
        codeExample: `forever
  analyse image from [camera]
  if <(body leaning) = [left]> then
    change x by [-10]
  end
  if <(body leaning) = [right]> then
    change x by [10]
  end
end`
      }
    ],
    project: {
      title: "لعبة التحكم بالجسم - جمع النجوم",
      description: "سنبني لعبة تفاعلية حيث يتحكم اللاعب بالـ Sprite باستخدام حركة جسمه! يتحرك الـ Sprite مع اليد اليمنى، ويجمع النجوم المتساقطة، ويتجنب العوائق. اللعبة تتضمن نظام نقاط وحياة ومستويات صعوبة متزايدة!",
      objectives: [
        "تتبع حركة اليد اليمنى للتحكم بالـ Sprite الرئيسي",
        "اكتشاف إيماءات الجسم للقفز والانحناء",
        "إنشاء نظام نقاط وحياة تفاعلي",
        "إضافة نجوم متساقطة وعوائق متحركة",
        "تصميم مستويات صعوبة متزايدة",
        "إضافة تأثيرات صوتية وبصرية جذابة"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد المسرح والـ Sprite الرئيسي",
          description: "نبدأ بتشغيل الكاميرا وإعداد المتغيرات الأساسية للعبة: النقاط، الحياة، المستوى، وسرعة اللعبة. نُظهر كشف الجسم للمساعدة في التطوير.",
          code: `when green flag clicked
// إعداد المتغيرات الأساسية
set [score] to [0]
set [lives] to [3]
set [level] to [1]
set [speed] to [3]
set [game over] to [false]

// تشغيل الكاميرا وإعداد كشف الجسم
turn [on] video on stage with [50] % transparency
[show] body detection

// رسالة ترحيب
say [مرحباً! حرك يدك اليمنى للتحكم بالنجمة 🌟] for [3] seconds
say [اجمع النجوم الذهبية وتجنب الصخور! 🪨] for [2] seconds`
        },
        {
          step: 2,
          title: "التحكم بالـ Sprite بحركة اليد",
          description: "نُنشئ حلقة رئيسية تتتبع موقع اليد اليمنى وتُحرك الـ Sprite الرئيسي (اللاعب) ليتبعها بحركة سلسة باستخدام glide.",
          code: `// حلقة التحكم الرئيسية للـ Sprite الرئيسي (Player)
forever
  if <(game over) = [false]> then
    // تحليل الصورة للكشف عن الجسم
    analyse image from [camera]
    
    if <is body detected?> then
      // تتبع اليد اليمنى بحركة سلسة
      set [hand x] to ([x] of body part [right_wrist])
      set [hand y] to ([y] of body part [right_wrist])
      glide [0.1] secs to x: (hand x) y: (hand y)
      
      // تغيير حجم الـ Sprite حسب ارتفاع اليد
      set size to ((100) + (([y] of body part [right_wrist]) / [3])) %
    else
      say [لا أراك! قف أمام الكاميرا] for [1] seconds
    end
  end
end`
        },
        {
          step: 3,
          title: "إنشاء النجوم المتساقطة",
          description: "نُنشئ Sprite للنجوم الذهبية التي تسقط من أعلى الشاشة. عند لمسها، يحصل اللاعب على نقاط. نستخدم clones لإنشاء عدة نجوم.",
          code: `// سكريبت الـ Sprite: Star (نجمة)
when green flag clicked
hide
set size to [40] %
forever
  if <(game over) = [false]> then
    wait (pick random [0.5] to [2]) seconds
    create clone of [myself]
  end
end

// عند إنشاء نسخة من النجمة
when I start as a clone
go to x: (pick random [-220] to [220]) y: [180]
show
repeat until <<touching [Player]?> or <(y position) < [-170]>>
  change y by ((speed) * [-1])
  turn right [5] degrees
end
if <touching [Player]?> then
  // تم جمع النجمة!
  change [score] by [10]
  play sound [collect]
  repeat [5]
    change [ghost] effect by [20]
  end
end
delete this clone`
        },
        {
          step: 4,
          title: "إضافة العوائق (الصخور)",
          description: "نُنشئ Sprite للصخور التي يجب تجنبها. لمس الصخرة يُفقد اللاعب حياة. إذا نفدت الحياة، تنتهي اللعبة.",
          code: `// سكريبت الـ Sprite: Rock (صخرة)
when green flag clicked
hide
set size to [50] %
forever
  if <(game over) = [false]> then
    wait (pick random [2] to [4]) seconds
    create clone of [myself]
  end
end

// عند إنشاء نسخة من الصخرة
when I start as a clone
go to x: (pick random [-200] to [200]) y: [180]
show
repeat until <<touching [Player]?> or <(y position) < [-170]>>
  change y by ((speed) * [-1.5])
end
if <touching [Player]?> then
  // اصطدام بالصخرة!
  change [lives] by [-1]
  play sound [hit]
  // تأثير الاصطدام
  repeat [3]
    set [brightness] effect to [50]
    wait [0.1] seconds
    set [brightness] effect to [0]
  end
  // التحقق من نهاية اللعبة
  if <(lives) < [1]> then
    set [game over] to [true]
    broadcast [game over]
  end
end
delete this clone`
        },
        {
          step: 5,
          title: "إضافة القفز والانحناء بإيماءات الجسم",
          description: "نُضيف القدرة على القفز برفع اليدين فوق الرأس، والانحناء بخفض الرأس. هذه الإيماءات تُتيح تجنب العوائق بطريقة ممتعة.",
          code: `// سكريبت منفصل في الـ Sprite: Player - للقفز والانحناء
when green flag clicked
forever
  if <(game over) = [false]> then
    analyse image from [camera]
    
    // اكتشاف القفز - رفع اليدين فوق الرأس
    if <<is [left_wrist] above [nose]?> and <is [right_wrist] above [nose]?>> then
      // قفز!
      play sound [jump]
      repeat [10]
        change y by [8]
      end
      repeat [10]
        change y by [-8]
      end
      wait [0.3] seconds
    end
    
    // اكتشاف الانحناء - المسافة بين الرأس والوسط قليلة
    if <([y] of body part [nose]) < ([y] of body part [left_hip])> then
      // انحناء!
      set size to [30] %
      wait [0.5] seconds
      set size to [80] %
    end
  end
end`
        },
        {
          step: 6,
          title: "نظام المستويات والصعوبة المتزايدة",
          description: "نُضيف نظام مستويات يزيد الصعوبة كلما حقق اللاعب نقاطاً أكثر. كل مستوى يزيد سرعة سقوط الأجسام.",
          code: `// سكريبت منفصل لإدارة المستويات
when green flag clicked
forever
  if <(game over) = [false]> then
    // الانتقال للمستوى التالي كل 50 نقطة
    if <(score) >= ((level) * [50])> then
      change [level] by [1]
      change [speed] by [1]
      // تأثير الانتقال للمستوى الجديد
      play sound [level up]
      say (join [🎉 مستوى ] (level)) for [2] seconds
      // تغيير لون الخلفية
      change [color] effect by [25]
    end
    wait [0.5] seconds
  end
end

// عرض الإحصائيات باستمرار
when green flag clicked
forever
  say (join [⭐ ] (join (score) (join [  ❤️ ] (join (lives) (join [  📊 مستوى: ] (level))))))`
        },
        {
          step: 7,
          title: "شاشة نهاية اللعبة والتحكم بلوحة المفاتيح",
          description: "نُضيف شاشة نهاية اللعبة مع عرض النتيجة النهائية، وأزرار للتحكم مثل إعادة اللعبة وإظهار/إخفاء كشف الجسم.",
          code: `// عند انتهاء اللعبة
when I receive [game over]
stop [other scripts in sprite]
go to x: [0] y: [0]
set size to [100] %
say (join [انتهت اللعبة! 🎮] (join [النتيجة النهائية: ] (join (score) (join [ نقطة | المستوى: ] (level))))) for [5] seconds
say [اضغط مسافة لإعادة اللعب] for [99] seconds

// إعادة اللعب
when [space] key pressed
if <(game over) = [true]> then
  set [game over] to [false]
  set [score] to [0]
  set [lives] to [3]
  set [level] to [1]
  set [speed] to [3]
  clear graphic effects
  broadcast [restart game]
end

// التحكم بعرض كشف الجسم
when [d] key pressed
[show] body detection
say [وضع التصحيح 🔧] for [1] seconds

when [h] key pressed
[hide] body detection
say [اللعب النظيف ✨] for [1] seconds

// إيقاف مؤقت
when [p] key pressed
say [⏸️ إيقاف مؤقت - اضغط P للمتابعة]
stop [all]`
        }
      ],
      fullCode: `// ===== Sprite: Player (اللاعب - نجمة) =====
when green flag clicked
// إعداد المتغيرات
set [score] to [0]
set [lives] to [3]
set [level] to [1]
set [speed] to [3]
set [game over] to [false]
set [hand x] to [0]
set [hand y] to [0]

// تشغيل الكاميرا
turn [on] video on stage with [50] % transparency
[show] body detection

// رسائل ترحيب
say [مرحباً! حرك يدك اليمنى للتحكم بالنجمة 🌟] for [3] seconds
say [اجمع النجوم الذهبية وتجنب الصخور! 🪨] for [2] seconds

// حلقة التحكم الرئيسية
forever
  if <(game over) = [false]> then
    analyse image from [camera]
    
    if <is body detected?> then
      set [hand x] to ([x] of body part [right_wrist])
      set [hand y] to ([y] of body part [right_wrist])
      glide [0.1] secs to x: (hand x) y: (hand y)
      set size to ((100) + (([y] of body part [right_wrist]) / [3])) %
    else
      say [قف أمام الكاميرا!] for [1] seconds
    end
  end
end

// سكريبت القفز والانحناء
when green flag clicked
forever
  if <(game over) = [false]> then
    analyse image from [camera]
    
    if <<is [left_wrist] above [nose]?> and <is [right_wrist] above [nose]?>> then
      play sound [jump]
      repeat [10]
        change y by [8]
      end
      repeat [10]
        change y by [-8]
      end
      wait [0.3] seconds
    end
  end
end

// عرض الإحصائيات
when green flag clicked
forever
  say (join [⭐ ] (join (score) (join [  ❤️ ] (join (lives) (join [  📊 Lv.] (level))))))
end

// نظام المستويات
when green flag clicked
forever
  if <(game over) = [false]> then
    if <(score) >= ((level) * [50])> then
      change [level] by [1]
      change [speed] by [1]
      play sound [level up]
      say (join [🎉 مستوى ] (level)) for [2] seconds
    end
    wait [0.5] seconds
  end
end

// نهاية اللعبة
when I receive [game over]
stop [other scripts in sprite]
go to x: [0] y: [0]
say (join [انتهت اللعبة! 🎮 النتيجة: ] (join (score) [ نقطة])) for [5] seconds

// ===== Sprite: Star (نجمة ذهبية) =====
when green flag clicked
hide
set size to [40] %
forever
  if <(game over) = [false]> then
    wait (pick random [0.5] to [2]) seconds
    create clone of [myself]
  end
end

when I start as a clone
go to x: (pick random [-220] to [220]) y: [180]
show
repeat until <<touching [Player]?> or <(y position) < [-170]>>
  change y by ((speed) * [-1])
  turn right [5] degrees
end
if <touching [Player]?> then
  change [score] by [10]
  play sound [collect]
  repeat [5]
    change [ghost] effect by [20]
  end
end
delete this clone

// ===== Sprite: Rock (صخرة) =====
when green flag clicked
hide
set size to [50] %
forever
  if <(game over) = [false]> then
    wait (pick random [2] to [4]) seconds
    create clone of [myself]
  end
end

when I start as a clone
go to x: (pick random [-200] to [200]) y: [180]
show
repeat until <<touching [Player]?> or <(y position) < [-170]>>
  change y by ((speed) * [-1.5])
end
if <touching [Player]?> then
  change [lives] by [-1]
  play sound [hit]
  if <(lives) < [1]> then
    set [game over] to [true]
    broadcast [game over]
  end
end
delete this clone

// ===== التحكم بلوحة المفاتيح =====
when [space] key pressed
if <(game over) = [true]> then
  set [game over] to [false]
  set [score] to [0]
  set [lives] to [3]
  set [level] to [1]
  set [speed] to [3]
  broadcast [restart game]
end

when [d] key pressed
[show] body detection

when [h] key pressed
[hide] body detection`
    }
  },
  {
    id: 6,
    titleAr: "التعرف على البطاقات",
    titleEn: "Card Recognition",
    icon: "🃏",
    description: "التعرف على البطاقات وتفاعل Sprite معها",
    color: "from-indigo-500 to-purple-500",
    terms: [
      {
        term: "Marker",
        termAr: "العلامة/الماركر",
        definition: "صورة أو بطاقة محددة يتم تدريب البرنامج على التعرف عليها. عند ظهورها أمام الكاميرا، يمكن للبرنامج اكتشافها والتفاعل معها."
      },
      {
        term: "Augmented Reality (AR)",
        termAr: "الواقع المعزز",
        definition: "تقنية تدمج عناصر افتراضية (مثل الـ Sprites) مع العالم الحقيقي من خلال الكاميرا. تظهر العناصر كأنها موجودة في البيئة الحقيقية."
      },
      {
        term: "Card Tracking",
        termAr: "تتبع البطاقة",
        definition: "عملية متابعة موقع وحركة البطاقة في الوقت الحقيقي أثناء تحريكها أمام الكاميرا."
      },
      {
        term: "Pattern Recognition",
        termAr: "التعرف على الأنماط",
        definition: "قدرة البرنامج على التمييز بين البطاقات المختلفة بناءً على أشكالها وألوانها وأنماطها الفريدة."
      },
      {
        term: "Training Data",
        termAr: "بيانات التدريب",
        definition: "الصور التي يتم التقاطها للبطاقة من زوايا مختلفة لتدريب النموذج على التعرف عليها بدقة."
      },
      {
        term: "Detection Confidence",
        termAr: "ثقة الاكتشاف",
        definition: "نسبة مئوية تُعبر عن مدى تأكد النموذج من أن البطاقة المكتشفة تطابق إحدى البطاقات المُدربة."
      },
      {
        term: "Overlay",
        termAr: "التراكب",
        definition: "عرض عناصر افتراضية (Sprites، نصوص، تأثيرات) فوق موقع البطاقة المكتشفة في الكاميرا."
      },
      {
        term: "Interactive Cards",
        termAr: "البطاقات التفاعلية",
        definition: "بطاقات مادية تُحدث تفاعلات في البرنامج عند إظهارها، مثل تشغيل رسوم متحركة أو أصوات أو ألعاب."
      }
    ],
    blocks: [
      {
        id: "turn-video-cr",
        nameEn: "turn () video on stage with () % transparency",
        nameAr: "تشغيل الفيديو على المسرح",
        description: "يقوم بتشغيل أو إيقاف عرض الفيديو من الكاميرا على المسرح. البلوك الأساسي لأي مشروع يستخدم التعرف على البطاقات. الشفافية المنخفضة (0-30%) تُظهر الكاميرا بوضوح لرؤية البطاقات.",
        inputs: ["on/off: تشغيل أو إيقاف الفيديو", "transparency: نسبة الشفافية من 0% إلى 100%"],
        outputs: ["عرض فيديو الكاميرا على المسرح"],
        usage: "ضع هذا البلوك في بداية البرنامج. استخدم شفافية منخفضة (0-20%) لرؤية البطاقات بوضوح",
        example: "تشغيل الكاميرا بشفافية 10% للتعرف على البطاقات",
        codeExample: `when green flag clicked
turn [on] video on stage with [10] % transparency`
      },
      {
        id: "add-marker",
        nameEn: "add marker ()",
        nameAr: "إضافة ماركر/بطاقة",
        description: "يقوم بإضافة بطاقة جديدة لقاعدة بيانات التعرف. يلتقط صورة للبطاقة الموجودة أمام الكاميرا ويُسجلها بالاسم المحدد. يجب تسجيل البطاقة قبل أن يتمكن البرنامج من التعرف عليها.",
        inputs: ["marker name: اسم البطاقة/الماركر الذي تريد تسجيله"],
        outputs: ["تسجيل صورة البطاقة في قاعدة البيانات"],
        usage: "استخدمه لتسجيل بطاقات جديدة. ضع البطاقة أمام الكاميرا واضغط على الزر لتسجيلها",
        example: "تسجيل بطاقة جديدة باسم 'بطاقة_القلب' عند الضغط على مفتاح",
        codeExample: `when [a] key pressed
say [ضع البطاقة أمام الكاميرا...] for [2] seconds
add marker [بطاقة_القلب]
say [تم تسجيل البطاقة بنجاح! ❤️] for [2] seconds`
      },
      {
        id: "delete-all-markers",
        nameEn: "delete all markers",
        nameAr: "حذف جميع الماركرات",
        description: "يحذف جميع البطاقات المسجلة من قاعدة البيانات. مفيد عند الرغبة في البدء من جديد أو تحديث البطاقات المسجلة.",
        inputs: [],
        outputs: ["مسح جميع البطاقات المسجلة"],
        usage: "استخدمه لإعادة تعيين النظام وتسجيل بطاقات جديدة من الصفر",
        example: "حذف جميع البطاقات عند الضغط على مفتاح D",
        codeExample: `when [d] key pressed
delete all markers
say [تم حذف جميع البطاقات المسجلة 🗑️] for [2] seconds`
      },
      {
        id: "analyse-cr",
        nameEn: "analyse image from ()",
        nameAr: "تحليل الصورة من",
        description: "يقوم بتحليل الصورة من الكاميرا أو المسرح للبحث عن البطاقات المسجلة. يجب استدعاء هذا البلوك بشكل متكرر داخل حلقة للكشف المستمر عن البطاقات.",
        inputs: ["source: مصدر الصورة (camera أو stage)"],
        outputs: ["تحديث بيانات البطاقات المكتشفة"],
        usage: "ضعه داخل حلقة forever في بداية كل دورة لتحليل الإطار الحالي",
        example: "التحليل المستمر للكاميرا للكشف عن البطاقات",
        codeExample: `forever
  analyse image from [camera]
  if <is marker detected?> then
    say (join [تم اكتشاف: ] (get marker name))
  end
end`
      },
      {
        id: "is-marker-detected",
        nameEn: "is marker detected?",
        nameAr: "هل تم اكتشاف ماركر؟",
        description: "بلوك شرطي يُعيد 'صحيح' إذا تم اكتشاف أي بطاقة مسجلة في الإطار الحالي، و'خطأ' إذا لم تُكتشف أي بطاقة.",
        inputs: [],
        outputs: ["قيمة منطقية: true إذا تم اكتشاف بطاقة، false إذا لم تُكتشف"],
        usage: "استخدمه للتحقق من وجود بطاقة قبل محاولة الوصول لبياناتها",
        example: "التحقق من وجود بطاقة وعرض رسالة",
        codeExample: `forever
  analyse image from [camera]
  if <is marker detected?> then
    say [أرى بطاقة! 🎴]
  else
    say [أرني بطاقة...]
  end
end`
      },
      {
        id: "is-specific-marker",
        nameEn: "is () marker detected?",
        nameAr: "هل تم اكتشاف ماركر محدد؟",
        description: "بلوك شرطي يتحقق مما إذا تم اكتشاف بطاقة محددة بالاسم. مفيد عندما يكون لديك عدة بطاقات مسجلة وتريد التفاعل مع بطاقة معينة.",
        inputs: ["marker name: اسم البطاقة المراد التحقق منها"],
        outputs: ["قيمة منطقية: true إذا تم اكتشاف البطاقة المحددة"],
        usage: "استخدمه للتحقق من بطاقة محددة وتنفيذ تفاعل مخصص لها",
        example: "تشغيل صوت عند اكتشاف بطاقة القلب",
        codeExample: `forever
  analyse image from [camera]
  if <is [بطاقة_القلب] marker detected?> then
    play sound [heart beat]
    say [أحبك! ❤️] for [2] seconds
  end
  if <is [بطاقة_النجمة] marker detected?> then
    play sound [twinkle]
    say [أنت نجم! ⭐] for [2] seconds
  end
end`
      },
      {
        id: "get-marker-name",
        nameEn: "get marker name",
        nameAr: "الحصول على اسم الماركر",
        description: "يُعيد اسم البطاقة المكتشفة حالياً. إذا لم تُكتشف أي بطاقة، يُعيد قيمة فارغة.",
        inputs: [],
        outputs: ["نص يحتوي على اسم البطاقة المكتشفة"],
        usage: "استخدمه لمعرفة البطاقة المكتشفة والتفاعل معها ديناميكياً",
        example: "عرض اسم البطاقة المكتشفة",
        codeExample: `forever
  analyse image from [camera]
  if <is marker detected?> then
    say (join [البطاقة: ] (get marker name)) for [1] seconds
  end
end`
      },
      {
        id: "marker-x-y",
        nameEn: "() of marker",
        nameAr: "إحداثي الماركر",
        description: "يُعيد إحداثي X أو Y لموقع البطاقة المكتشفة على المسرح. مفيد لتحريك الـ Sprite ليتبع موقع البطاقة.",
        inputs: ["x/y: نوع الإحداثي المطلوب"],
        outputs: ["قيمة رقمية تُمثل إحداثي البطاقة"],
        usage: "استخدمه لتحريك الـ Sprites لتظهر فوق موقع البطاقة (الواقع المعزز)",
        example: "تحريك Sprite ليظهر فوق البطاقة",
        codeExample: `forever
  analyse image from [camera]
  if <is marker detected?> then
    glide [0.1] secs to x: ([x] of marker) y: ([y] of marker)
    show
  else
    hide
  end
end`
      },
      {
        id: "marker-size",
        nameEn: "size of marker",
        nameAr: "حجم الماركر",
        description: "يُعيد حجم البطاقة المكتشفة بناءً على بُعدها عن الكاميرا. كلما اقتربت البطاقة زاد الحجم، وكلما ابتعدت قل الحجم.",
        inputs: [],
        outputs: ["قيمة رقمية تُمثل حجم البطاقة النسبي"],
        usage: "استخدمه لتغيير حجم الـ Sprite ليتناسب مع بُعد البطاقة عن الكاميرا",
        example: "تغيير حجم الـ Sprite بناءً على بُعد البطاقة",
        codeExample: `forever
  analyse image from [camera]
  if <is marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [2]) %
    show
  else
    hide
  end
end`
      },
      {
        id: "marker-rotation",
        nameEn: "rotation of marker",
        nameAr: "دوران الماركر",
        description: "يُعيد زاوية دوران البطاقة بالدرجات. مفيد لتدوير الـ Sprite ليتبع دوران البطاقة الفعلي.",
        inputs: [],
        outputs: ["قيمة رقمية تُمثل زاوية دوران البطاقة (0-360)"],
        usage: "استخدمه لجعل الـ Sprite يدور مع دوران البطاقة في يد المستخدم",
        example: "تدوير Sprite مع دوران البطاقة",
        codeExample: `forever
  analyse image from [camera]
  if <is marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    point in direction (rotation of marker)
    show
  else
    hide
  end
end`
      },
      {
        id: "when-marker-detected",
        nameEn: "when () is detected",
        nameAr: "عند اكتشاف ماركر",
        description: "بلوك حدث يُنفذ الكود عند اكتشاف بطاقة محددة لأول مرة. لا يتكرر طالما البطاقة ظاهرة، فقط عند ظهورها الأول.",
        inputs: ["marker name: اسم البطاقة التي تُفعّل الحدث"],
        outputs: ["تنفيذ الكود المرفق عند اكتشاف البطاقة"],
        usage: "استخدمه لتشغيل تأثيرات أو أصوات عند ظهور بطاقة محددة",
        example: "تشغيل رسالة ترحيب عند ظهور بطاقة الترحيب",
        codeExample: `when [بطاقة_مرحبا] is detected
say [مرحباً بك في عالم البطاقات السحرية! 🎩✨] for [3] seconds
play sound [magic]
repeat [10]
  change [color] effect by [25]
  wait [0.1] seconds
end
clear graphic effects`
      },
      {
        id: "total-markers",
        nameEn: "total markers detected",
        nameAr: "عدد الماركرات المكتشفة",
        description: "يُعيد العدد الإجمالي للبطاقات المكتشفة في الإطار الحالي. مفيد عند استخدام عدة بطاقات في نفس الوقت.",
        inputs: [],
        outputs: ["عدد صحيح يُمثل عدد البطاقات المكتشفة"],
        usage: "استخدمه لمعرفة كم بطاقة ظاهرة أو للتفاعل مع عدة بطاقات",
        example: "عرض عدد البطاقات المكتشفة",
        codeExample: `forever
  analyse image from [camera]
  say (join [البطاقات المرئية: ] (total markers detected))
  
  if <(total markers detected) = [2]> then
    say [رائع! لديك بطاقتين! 🎴🎴] for [1] seconds
  end
end`
      }
    ],
    project: {
      title: "بطاقات الحيوانات التعليمية الناطقة",
      description: "مشروع تعليمي تفاعلي يستخدم بطاقات الحيوانات الفعلية. عند إظهار بطاقة أمام الكاميرا، يظهر الحيوان المقابل على الشاشة وينطق اسمه ويُصدر صوته مع معلومات تعليمية.",
      objectives: [
        "تعلم تسجيل البطاقات المختلفة وتمييزها",
        "إنشاء تجربة واقع معزز للحيوانات",
        "استخدام الأصوات والرسوم المتحركة للتفاعل",
        "بناء نظام تعليمي تفاعلي للأطفال",
        "التحكم في موقع وحجم ودوران الـ Sprites",
        "إنشاء اختبار تفاعلي باستخدام البطاقات"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد المشروع وتسجيل البطاقات",
          description: "نبدأ بإعداد الكاميرا وإنشاء نظام لتسجيل بطاقات الحيوانات. كل بطاقة تحتوي على صورة حيوان مختلف.",
          code: `// الـ Sprite: مدير البطاقات
when green flag clicked
// تشغيل الكاميرا بشفافية منخفضة لرؤية البطاقات
turn [on] video on stage with [10] % transparency

// إعداد المتغيرات
set [current animal] to [لا شيء]
set [score] to [0]
set [cards registered] to [0]

say [مرحباً! هذا برنامج تعلم الحيوانات بالبطاقات 🦁] for [3] seconds
say [اضغط الأرقام 1-4 لتسجيل بطاقات الحيوانات] for [3] seconds

// تسجيل البطاقات بالأرقام
when [1] key pressed
say [ضع بطاقة الأسد أمام الكاميرا 🦁] for [2] seconds
add marker [lion]
change [cards registered] by [1]
say [تم تسجيل الأسد! ✅] for [2] seconds

when [2] key pressed
say [ضع بطاقة الفيل أمام الكاميرا 🐘] for [2] seconds
add marker [elephant]
change [cards registered] by [1]
say [تم تسجيل الفيل! ✅] for [2] seconds

when [3] key pressed
say [ضع بطاقة القط أمام الكاميرا 🐱] for [2] seconds
add marker [cat]
change [cards registered] by [1]
say [تم تسجيل القط! ✅] for [2] seconds

when [4] key pressed
say [ضع بطاقة الطائر أمام الكاميرا 🐦] for [2] seconds
add marker [bird]
change [cards registered] by [1]
say [تم تسجيل الطائر! ✅] for [2] seconds

// حذف جميع البطاقات
when [d] key pressed
delete all markers
set [cards registered] to [0]
say [تم حذف جميع البطاقات 🗑️] for [2] seconds`
        },
        {
          step: 2,
          title: "إنشاء Sprites الحيوانات",
          description: "نُنشئ Sprite لكل حيوان. كل Sprite يظهر عند اكتشاف بطاقته ويتبع موقعها وحجمها ودورانها.",
          code: `// الـ Sprite: الأسد 🦁
when green flag clicked
hide
set size to [80] %

forever
  analyse image from [camera]
  if <is [lion] marker detected?> then
    // الظهور في موقع البطاقة
    go to x: ([x] of marker) y: ([y] of marker)
    // تغيير الحجم حسب قرب البطاقة
    set size to ((size of marker) * [1.5]) %
    // الدوران مع البطاقة
    point in direction (rotation of marker)
    show
    set [current animal] to [الأسد]
  else
    // الاختفاء إذا لم تكن البطاقة ظاهرة
    if <(current animal) = [الأسد]> then
      hide
      set [current animal] to [لا شيء]
    end
  end
end

// حدث اكتشاف بطاقة الأسد
when [lion] is detected
play sound [roar]
say [أنا الأسد! ملك الغابة 🦁] for [3] seconds
// رسوم متحركة
repeat [5]
  change size by [10]
  wait [0.1] seconds
  change size by [-10]
  wait [0.1] seconds
end`
        },
        {
          step: 3,
          title: "إضافة باقي الحيوانات",
          description: "نُكرر نفس الخطوات لباقي الحيوانات (الفيل، القط، الطائر) مع تخصيص الأصوات والرسائل لكل حيوان.",
          code: `// الـ Sprite: الفيل 🐘
when green flag clicked
hide
set size to [100] %

forever
  analyse image from [camera]
  if <is [elephant] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [2]) %
    point in direction (rotation of marker)
    show
    set [current animal] to [الفيل]
  else
    if <(current animal) = [الفيل]> then
      hide
      set [current animal] to [لا شيء]
    end
  end
end

when [elephant] is detected
play sound [trumpet]
say [أنا الفيل! أكبر حيوان على الأرض 🐘] for [3] seconds

// الـ Sprite: القط 🐱
when green flag clicked
hide
set size to [60] %

forever
  analyse image from [camera]
  if <is [cat] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [1.2]) %
    point in direction (rotation of marker)
    show
    set [current animal] to [القط]
  else
    if <(current animal) = [القط]> then
      hide
      set [current animal] to [لا شيء]
    end
  end
end

when [cat] is detected
play sound [meow]
say [مياو! أنا القط الجميل 🐱] for [3] seconds

// الـ Sprite: الطائر 🐦
when green flag clicked
hide
set size to [50] %

forever
  analyse image from [camera]
  if <is [bird] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [1]) %
    point in direction (rotation of marker)
    show
    set [current animal] to [الطائر]
  else
    if <(current animal) = [الطائر]> then
      hide
      set [current animal] to [لا شيء]
    end
  end
end

when [bird] is detected
play sound [chirp]
say [زقزق! أنا أستطيع الطيران! 🐦] for [3] seconds`
        },
        {
          step: 4,
          title: "إضافة معلومات تعليمية",
          description: "نُضيف معلومات تعليمية لكل حيوان تظهر عند رؤية بطاقته لفترة معينة.",
          code: `// سكريبت إضافي للـ Sprite: الأسد - معلومات تعليمية
when green flag clicked
forever
  analyse image from [camera]
  if <is [lion] marker detected?> then
    wait [3] seconds
    if <is [lion] marker detected?> then
      say [🦁 معلومات عن الأسد:] for [2] seconds
      say [1. الأسد من الثدييات آكلة اللحوم] for [3] seconds
      say [2. يعيش في أفريقيا وآسيا] for [3] seconds
      say [3. يُسمى صوته بالزئير] for [3] seconds
      say [4. اللبؤة تصطاد أكثر من الأسد!] for [3] seconds
      wait [5] seconds
    end
  end
end

// سكريبت إضافي للـ Sprite: الفيل - معلومات تعليمية
when green flag clicked
forever
  analyse image from [camera]
  if <is [elephant] marker detected?> then
    wait [3] seconds
    if <is [elephant] marker detected?> then
      say [🐘 معلومات عن الفيل:] for [2] seconds
      say [1. أكبر حيوان يعيش على اليابسة] for [3] seconds
      say [2. يزن حتى 6000 كيلوغرام!] for [3] seconds
      say [3. له ذاكرة قوية جداً] for [3] seconds
      say [4. يستخدم خرطومه للشرب والتنفس] for [3] seconds
      wait [5] seconds
    end
  end
end`
        },
        {
          step: 5,
          title: "إنشاء اختبار تفاعلي",
          description: "نُنشئ نظام اختبار يطلب من الطفل إظهار بطاقة حيوان محدد. إذا أظهر الصحيح يحصل على نقاط!",
          code: `// الـ Sprite: مدير الاختبار
when [q] key pressed
// بدء الاختبار
set [quiz mode] to [true]
set [quiz score] to [0]
set [questions] to [0]

repeat [5]
  // اختيار حيوان عشوائي للسؤال
  set [target animal] to (item (pick random [1] to [4]) of [animals list])
  
  // طرح السؤال
  say (join [أرني بطاقة: ] (target animal)) for [1] seconds
  say [لديك 5 ثواني!] for [1] seconds
  
  // الانتظار للإجابة
  set [timer] to [5]
  set [answered] to [false]
  
  repeat until <<(timer) < [1]> or <(answered) = [true]>>
    analyse image from [camera]
    
    // التحقق من الإجابة
    if <is marker detected?> then
      if <(get marker name) = (target animal)> then
        // إجابة صحيحة!
        set [answered] to [true]
        change [quiz score] by [10]
        play sound [correct]
        say [أحسنت! ✅ +10 نقاط] for [2] seconds
      else
        // إجابة خاطئة
        set [answered] to [true]
        play sound [wrong]
        say (join [خطأ! هذا ] (get marker name)) for [2] seconds
      end
    end
    
    change [timer] by [-0.1]
    wait [0.1] seconds
  end
  
  // إذا انتهى الوقت
  if <(answered) = [false]> then
    play sound [timeout]
    say [انتهى الوقت! ⏰] for [2] seconds
  end
  
  change [questions] by [1]
  wait [1] seconds
end

// نهاية الاختبار
set [quiz mode] to [false]
say (join [🎉 انتهى الاختبار! نتيجتك: ] (join (quiz score) [ من 50])) for [5] seconds`
        },
        {
          step: 6,
          title: "تأثيرات بصرية وتفاعلية",
          description: "نُضيف تأثيرات بصرية ممتعة مثل النجوم المتساقطة عند الإجابة الصحيحة وتغيير ألوان الخلفية.",
          code: `// الـ Sprite: تأثيرات النجوم
when I receive [correct answer]
repeat [10]
  create clone of [myself]
end

when I start as a clone
go to x: (pick random [-200] to [200]) y: [180]
set [color] effect to (pick random [0] to [200])
set size to (pick random [20] to [50]) %
show
repeat [30]
  change y by [-8]
  turn right [15] degrees
  change [ghost] effect by [3]
end
delete this clone

// تأثير تغيير الخلفية
when green flag clicked
forever
  analyse image from [camera]
  
  // تغيير لون الخلفية حسب الحيوان
  if <is [lion] marker detected?> then
    set [color] effect to [30]  // برتقالي
  end
  if <is [elephant] marker detected?> then
    set [color] effect to [180]  // رمادي/أزرق
  end
  if <is [cat] marker detected?> then
    set [color] effect to [0]  // طبيعي
  end
  if <is [bird] marker detected?> then
    set [color] effect to [90]  // أخضر
  end
  
  // إظهار عدد البطاقات المرئية
  if <(total markers detected) > [1]> then
    say (join [رائع! لديك ] (join (total markers detected) [ بطاقات!])) for [1] seconds
  end
end`
        },
        {
          step: 7,
          title: "الكود النهائي والتحسينات",
          description: "الكود النهائي الكامل مع التحكم بلوحة المفاتيح وعرض الإحصائيات.",
          code: `// التحكم بلوحة المفاتيح
when [h] key pressed
say [=== المساعدة ===] for [1] seconds
say [1-4: تسجيل بطاقات الحيوانات] for [2] seconds
say [Q: بدء الاختبار] for [2] seconds
say [D: حذف جميع البطاقات] for [2] seconds
say [S: عرض الإحصائيات] for [2] seconds

when [s] key pressed
say (join [📊 البطاقات المسجلة: ] (cards registered)) for [2] seconds
say (join [🎯 النتيجة: ] (score)) for [2] seconds
say (join [🎴 البطاقات المرئية الآن: ] (total markers detected)) for [2] seconds

// عرض الحالة باستمرار
when green flag clicked
forever
  analyse image from [camera]
  
  if <is marker detected?> then
    say (join [🎴 ] (join (get marker name) (join [ | الحجم: ] (join (round (size of marker)) (join [ | الدوران: ] (round (rotation of marker)))))))
  else
    say [أرني بطاقة حيوان! 🃏]
  end
  
  wait [0.3] seconds
end`
        }
      ],
      fullCode: `// ===== الـ Sprite: مدير البطاقات =====
when green flag clicked
turn [on] video on stage with [10] % transparency
set [current animal] to [لا شيء]
set [score] to [0]
set [cards registered] to [0]
set [quiz mode] to [false]

say [مرحباً! برنامج تعلم الحيوانات بالبطاقات 🦁] for [3] seconds

// تسجيل البطاقات
when [1] key pressed
say [ضع بطاقة الأسد 🦁] for [2] seconds
add marker [lion]
change [cards registered] by [1]
say [تم! ✅] for [1] seconds

when [2] key pressed
say [ضع بطاقة الفيل 🐘] for [2] seconds
add marker [elephant]
change [cards registered] by [1]
say [تم! ✅] for [1] seconds

when [3] key pressed
say [ضع بطاقة القط 🐱] for [2] seconds
add marker [cat]
change [cards registered] by [1]
say [تم! ✅] for [1] seconds

when [4] key pressed
say [ضع بطاقة الطائر 🐦] for [2] seconds
add marker [bird]
change [cards registered] by [1]
say [تم! ✅] for [1] seconds

when [d] key pressed
delete all markers
set [cards registered] to [0]
say [تم حذف البطاقات 🗑️] for [2] seconds

// ===== الـ Sprite: الأسد =====
when green flag clicked
hide
forever
  analyse image from [camera]
  if <is [lion] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [1.5]) %
    point in direction (rotation of marker)
    show
    set [current animal] to [الأسد]
  else
    if <(current animal) = [الأسد]> then
      hide
      set [current animal] to [لا شيء]
    end
  end
end

when [lion] is detected
play sound [roar]
say [أنا الأسد! ملك الغابة 🦁] for [3] seconds

// ===== الـ Sprite: الفيل =====
when green flag clicked
hide
forever
  analyse image from [camera]
  if <is [elephant] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [2]) %
    show
    set [current animal] to [الفيل]
  else
    if <(current animal) = [الفيل]> then
      hide
    end
  end
end

when [elephant] is detected
play sound [trumpet]
say [أنا الفيل! 🐘] for [3] seconds

// ===== الـ Sprite: القط =====
when green flag clicked
hide
forever
  analyse image from [camera]
  if <is [cat] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [1.2]) %
    show
    set [current animal] to [القط]
  else
    if <(current animal) = [القط]> then
      hide
    end
  end
end

when [cat] is detected
play sound [meow]
say [مياو! 🐱] for [3] seconds

// ===== الـ Sprite: الطائر =====
when green flag clicked
hide
forever
  analyse image from [camera]
  if <is [bird] marker detected?> then
    go to x: ([x] of marker) y: ([y] of marker)
    set size to ((size of marker) * [1]) %
    show
    set [current animal] to [الطائر]
  else
    if <(current animal) = [الطائر]> then
      hide
    end
  end
end

when [bird] is detected
play sound [chirp]
say [زقزق! 🐦] for [3] seconds

// ===== نظام الاختبار =====
when [q] key pressed
set [quiz score] to [0]
repeat [5]
  set [target] to (item (pick random [1] to [4]) of [lion,elephant,cat,bird])
  say (join [أرني: ] (target)) for [3] seconds
  wait [3] seconds
  analyse image from [camera]
  if <(get marker name) = (target)> then
    change [quiz score] by [10]
    play sound [correct]
    say [صحيح! ✅] for [1] seconds
  else
    say [خطأ! ❌] for [1] seconds
  end
end
say (join [النتيجة: ] (join (quiz score) [/50])) for [3] seconds

// ===== عرض الحالة =====
when green flag clicked
forever
  analyse image from [camera]
  if <is marker detected?> then
    say (join [🎴 ] (join (get marker name) (join [ | بطاقات: ] (total markers detected))))
  else
    say [أرني بطاقة! 🃏]
  end
  wait [0.3] seconds
end`
    }
  },
  {
    id: 7,
    titleAr: "الطبيب الافتراضي",
    titleEn: "Virtual Doctor with NLP",
    icon: "🩺",
    description: "إنشاء طبيب افتراضي باستخدام معالجة اللغة الطبيعية",
    color: "from-teal-500 to-green-500",
    terms: [
      {
        term: "Natural Language Processing (NLP)",
        termAr: "معالجة اللغة الطبيعية",
        definition: "فرع من الذكاء الاصطناعي يُمكّن الحاسوب من فهم وتحليل اللغة البشرية المكتوبة أو المنطوقة."
      },
      {
        term: "Intent Recognition",
        termAr: "التعرف على النية",
        definition: "قدرة النظام على فهم ما يريده المستخدم من خلال تحليل جملته. مثل: 'رأسي يؤلمني' = نية إبلاغ عن صداع."
      },
      {
        term: "Entity Extraction",
        termAr: "استخراج الكيانات",
        definition: "استخلاص المعلومات المهمة من النص مثل أسماء الأعضاء، الأعراض، الأرقام، والتواريخ."
      },
      {
        term: "Sentiment Analysis",
        termAr: "تحليل المشاعر",
        definition: "تحديد النبرة العاطفية في النص: إيجابية، سلبية، أو محايدة. مفيد لفهم حالة المريض النفسية."
      },
      {
        term: "Text-to-Speech (TTS)",
        termAr: "تحويل النص إلى كلام",
        definition: "تقنية تُحوّل النص المكتوب إلى صوت مسموع، تُستخدم لجعل الطبيب الافتراضي يتحدث."
      },
      {
        term: "Speech-to-Text (STT)",
        termAr: "تحويل الكلام إلى نص",
        definition: "تقنية تُحوّل الكلام المنطوق إلى نص مكتوب، تُتيح للمريض التحدث بدلاً من الكتابة."
      },
      {
        term: "Chatbot",
        termAr: "روبوت المحادثة",
        definition: "برنامج يُحاكي المحادثة البشرية ويستجيب لأسئلة المستخدم بشكل تلقائي."
      },
      {
        term: "Training Data",
        termAr: "بيانات التدريب",
        definition: "مجموعة من الأمثلة تُستخدم لتعليم النموذج فهم أنماط اللغة والاستجابة بشكل صحيح."
      }
    ],
    blocks: [
      {
        id: "set-language",
        nameEn: "set language to ()",
        nameAr: "تعيين اللغة إلى",
        description: "يُحدد لغة التعرف على الكلام ومعالجة النص. يدعم Pictoblox عدة لغات منها الإنجليزية والعربية. مهم جداً لضمان فهم صحيح للمدخلات.",
        inputs: ["language: اللغة المختارة (English, Arabic, French, Spanish...)"],
        outputs: ["تغيير إعدادات اللغة للتعرف والتحليل"],
        usage: "ضعه في بداية البرنامج لتحديد اللغة التي سيتحدث بها المستخدم",
        example: "تعيين اللغة العربية للتعرف على كلام المريض",
        codeExample: `when green flag clicked
set language to [Arabic]
say [مرحباً! أنا طبيبك الافتراضي] for [2] seconds`
      },
      {
        id: "listen-and-wait",
        nameEn: "listen () and wait",
        nameAr: "استمع وانتظر",
        description: "يُفعّل الميكروفون للاستماع إلى كلام المستخدم وتحويله إلى نص. ينتظر حتى ينتهي المستخدم من الكلام ثم يُخزّن النص للمعالجة.",
        inputs: ["duration: مدة الاستماع (اختياري)"],
        outputs: ["تخزين النص المُتعرف عليه في متغير speech"],
        usage: "استخدمه عندما تريد أن يتحدث المستخدم بدلاً من الكتابة",
        example: "الاستماع لشكوى المريض",
        codeExample: `say [أخبرني ماذا تشعر؟] for [2] seconds
listen [5] and wait
set [patient complaint] to (speech)
say (join [سمعت: ] (patient complaint)) for [2] seconds`
      },
      {
        id: "speech-recognition",
        nameEn: "speech recognition result",
        nameAr: "نتيجة التعرف على الكلام",
        description: "يُعيد النص الذي تم التعرف عليه من آخر عملية استماع. يُستخدم للحصول على ما قاله المستخدم ومعالجته.",
        inputs: [],
        outputs: ["النص المُتعرف عليه من الكلام"],
        usage: "استخدمه بعد بلوك listen للحصول على كلام المستخدم",
        example: "الحصول على شكوى المريض وتحليلها",
        codeExample: `listen [5] and wait
if <(speech recognition result) contains [صداع]?> then
  say [يبدو أنك تعاني من صداع] for [2] seconds
end`
      },
      {
        id: "speak",
        nameEn: "speak ()",
        nameAr: "تحدث",
        description: "يُحوّل النص المُدخل إلى كلام مسموع باستخدام تقنية Text-to-Speech. يجعل الـ Sprite يتحدث بصوت واضح.",
        inputs: ["text: النص المراد نطقه"],
        outputs: ["صوت مسموع يقرأ النص"],
        usage: "استخدمه لجعل الطبيب الافتراضي يتحدث للمريض بدلاً من عرض نص فقط",
        example: "الطبيب يُعطي تشخيصاً صوتياً",
        codeExample: `speak [مرحباً بك في عيادتنا الافتراضية]
wait [2] seconds
speak [كيف يمكنني مساعدتك اليوم؟]`
      },
      {
        id: "set-voice",
        nameEn: "set voice to ()",
        nameAr: "تعيين الصوت إلى",
        description: "يُغيّر نوع الصوت المُستخدم في التحدث. يمكنك اختيار صوت ذكوري أو أنثوي أو أصوات مختلفة حسب الشخصية.",
        inputs: ["voice: نوع الصوت (Male, Female, Robot...)"],
        outputs: ["تغيير صوت التحدث"],
        usage: "اختر صوتاً مناسباً لشخصية الطبيب الافتراضي",
        example: "تعيين صوت طبيب هادئ",
        codeExample: `when green flag clicked
set voice to [Male]
set pitch to [90]
speak [أنا الدكتور أحمد، طبيبك الافتراضي]`
      },
      {
        id: "analyse-sentiment",
        nameEn: "analyse sentiment of ()",
        nameAr: "تحليل مشاعر النص",
        description: "يُحلل النص لتحديد المشاعر السائدة فيه: إيجابية، سلبية، أو محايدة. مفيد لفهم الحالة النفسية للمريض.",
        inputs: ["text: النص المراد تحليل مشاعره"],
        outputs: ["positive/negative/neutral: نوع المشاعر"],
        usage: "استخدمه لتكييف ردود الطبيب بناءً على حالة المريض النفسية",
        example: "التحقق من قلق المريض",
        codeExample: `listen [5] and wait
set [sentiment] to (analyse sentiment of (speech))
if <(sentiment) = [negative]> then
  speak [أفهم أنك قلق. لا تقلق، سأساعدك]
else
  speak [جيد! دعني أفحص الأعراض]
end`
      },
      {
        id: "contains-word",
        nameEn: "() contains ()?",
        nameAr: "هل يحتوي على",
        description: "يتحقق مما إذا كان النص يحتوي على كلمة أو عبارة معينة. أساسي لتحليل شكوى المريض وفهم الأعراض.",
        inputs: ["text: النص الأصلي", "word: الكلمة المبحوث عنها"],
        outputs: ["قيمة منطقية (صحيح/خطأ)"],
        usage: "استخدمه للبحث عن أعراض محددة في كلام المريض",
        example: "البحث عن أعراض الحمى",
        codeExample: `if <(patient complaint) contains [حرارة]?> then
  ask [هل قست درجة حرارتك؟] and wait
  if <(answer) contains [نعم]?> then
    ask [كم كانت درجة الحرارة؟] and wait
    set [temperature] to (answer)
  end
end`
      },
      {
        id: "create-class-nlp",
        nameEn: "create class () in NLP model",
        nameAr: "إنشاء فئة في نموذج NLP",
        description: "يُنشئ فئة جديدة في نموذج معالجة اللغة الطبيعية. كل فئة تُمثل نوعاً من الأعراض أو المشاكل الصحية.",
        inputs: ["class name: اسم الفئة (مثل: صداع، حمى، سعال)"],
        outputs: ["إضافة فئة جديدة للنموذج"],
        usage: "استخدمه لتعريف أنواع الأعراض التي سيتعرف عليها الطبيب",
        example: "إنشاء فئات للأعراض الشائعة",
        codeExample: `when green flag clicked
create class [صداع] in NLP model
create class [حمى] in NLP model
create class [سعال] in NLP model
create class [آلام معدة] in NLP model
create class [تعب عام] in NLP model`
      },
      {
        id: "add-sample",
        nameEn: "add () to class ()",
        nameAr: "إضافة عينة للفئة",
        description: "يُضيف جملة نموذجية لفئة معينة لتدريب النموذج. كلما أضفت عينات أكثر، أصبح الفهم أدق.",
        inputs: ["sample: الجملة النموذجية", "class: اسم الفئة"],
        outputs: ["إضافة العينة لقاعدة التدريب"],
        usage: "أضف عدة طرق للتعبير عن نفس العرض لتحسين الدقة",
        example: "تدريب النموذج على فهم الصداع",
        codeExample: `// تدريب فئة الصداع
add [رأسي يؤلمني] to class [صداع]
add [عندي صداع شديد] to class [صداع]
add [أحس بألم في رأسي] to class [صداع]
add [رأسي ثقيل] to class [صداع]
add [عندي وجع راس] to class [صداع]`
      },
      {
        id: "train-nlp",
        nameEn: "train NLP model",
        nameAr: "تدريب نموذج NLP",
        description: "يبدأ عملية تدريب النموذج على البيانات المُدخلة. بعد التدريب يُصبح النموذج قادراً على تصنيف الجمل الجديدة.",
        inputs: [],
        outputs: ["نموذج مُدرب جاهز للاستخدام"],
        usage: "نفّذه بعد إضافة جميع العينات وقبل بدء التصنيف",
        example: "تدريب نموذج الطبيب",
        codeExample: `when green flag clicked
// إنشاء الفئات وإضافة العينات
...
// بدء التدريب
say [جاري تدريب الطبيب الافتراضي...] for [2] seconds
train NLP model
say [تم التدريب! الطبيب جاهز] for [2] seconds`
      },
      {
        id: "classify-text",
        nameEn: "classify ()",
        nameAr: "تصنيف النص",
        description: "يُصنف النص المُدخل ويُحدد الفئة الأقرب له. يُعيد اسم الفئة التي ينتمي إليها النص.",
        inputs: ["text: النص المراد تصنيفه"],
        outputs: ["اسم الفئة المُطابقة"],
        usage: "استخدمه لفهم شكوى المريض وتحديد نوع العرض",
        example: "تصنيف شكوى المريض",
        codeExample: `ask [ما هي شكواك اليوم؟] and wait
set [symptom type] to (classify (answer))

if <(symptom type) = [صداع]> then
  speak [يبدو أنك تعاني من صداع. هل هو مستمر أم متقطع؟]
end
if <(symptom type) = [حمى]> then
  speak [هل قست درجة حرارتك؟ ما هي القراءة؟]
end`
      },
      {
        id: "get-confidence",
        nameEn: "classification confidence",
        nameAr: "نسبة ثقة التصنيف",
        description: "يُعيد نسبة ثقة النموذج في آخر تصنيف. نسبة عالية تعني تطابق قوي، ونسبة منخفضة تعني غموض.",
        inputs: [],
        outputs: ["نسبة مئوية (0-100)"],
        usage: "استخدمه للتأكد من صحة الفهم قبل إعطاء تشخيص",
        example: "التأكد من فهم الشكوى",
        codeExample: `set [symptom] to (classify (patient complaint))
if <(classification confidence) > [70]> then
  speak (join [فهمت! أنت تشكو من ] (symptom))
else
  speak [لم أفهم جيداً. هل يمكنك توضيح المزيد؟]
  ask [أعد صياغة شكواك] and wait
end`
      }
    ],
    project: {
      title: "عيادة الدكتور الذكي",
      description: "طبيب افتراضي يستمع لشكوى المريض بالصوت أو النص، يُحلل الأعراض باستخدام معالجة اللغة الطبيعية، يُعطي تشخيصاً مبدئياً ونصائح صحية، ويتحدث بصوت واضح.",
      objectives: [
        "فهم أساسيات معالجة اللغة الطبيعية NLP",
        "بناء نموذج تصنيف للأعراض الصحية",
        "استخدام التعرف على الكلام والتحدث",
        "إنشاء حوار تفاعلي ذكي",
        "تحليل مشاعر المريض والتعامل معها"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد البيئة والشخصية",
          description: "نُنشئ شخصية الطبيب ونُعد البيئة الأساسية مع تعيين اللغة والصوت.",
          code: `// الـ Sprite: الدكتور الذكي 👨‍⚕️
when green flag clicked
// إعداد المظهر
switch costume to [doctor]
go to x: [-100] y: [-50]
set size to [150] %

// إعداد اللغة والصوت
set language to [Arabic]
set voice to [Male]
set pitch to [95]

// المتغيرات الأساسية
set [patient name] to []
set [symptoms list] to []
set [diagnosis] to []
set [consultation started] to [false]

// الترحيب
speak [مرحباً بك في عيادة الدكتور الذكي]
wait [1] seconds
speak [أنا هنا لمساعدتك في فهم أعراضك]
ask [ما اسمك؟] and wait
set [patient name] to (answer)
speak (join [أهلاً ] (join (patient name) [! كيف يمكنني مساعدتك اليوم؟]))`
        },
        {
          step: 2,
          title: "بناء نموذج تصنيف الأعراض",
          description: "نُنشئ نموذج NLP ونُدربه على التعرف على الأعراض الشائعة بطرق مختلفة للتعبير.",
          code: `// تدريب النموذج
when green flag clicked
// إنشاء فئات الأعراض
create class [صداع] in NLP model
create class [حمى] in NLP model
create class [سعال] in NLP model
create class [آلام معدة] in NLP model
create class [تعب عام] in NLP model
create class [آلام ظهر] in NLP model
create class [حساسية] in NLP model
create class [أرق] in NLP model

// تدريب فئة الصداع
add [رأسي يؤلمني] to class [صداع]
add [عندي صداع] to class [صداع]
add [أحس بألم في رأسي] to class [صداع]
add [رأسي يصدع] to class [صداع]
add [صداع شديد] to class [صداع]
add [وجع راس] to class [صداع]
add [ألم في الرأس] to class [صداع]

// تدريب فئة الحمى
add [عندي حرارة] to class [حمى]
add [جسمي حار] to class [حمى]
add [درجة حرارتي مرتفعة] to class [حمى]
add [أشعر بسخونة] to class [حمى]
add [عندي سخونة] to class [حمى]
add [حرارة عالية] to class [حمى]

// تدريب فئة السعال
add [عندي كحة] to class [سعال]
add [أسعل كثيراً] to class [سعال]
add [عندي سعال] to class [سعال]
add [كحة مستمرة] to class [سعال]
add [صدري يؤلمني من الكحة] to class [سعال]

// تدريب فئة آلام المعدة
add [بطني يؤلمني] to class [آلام معدة]
add [عندي مغص] to class [آلام معدة]
add [معدتي تؤلمني] to class [آلام معدة]
add [ألم في البطن] to class [آلام معدة]
add [عندي إسهال] to class [آلام معدة]

// تدريب فئة التعب
add [أشعر بتعب] to class [تعب عام]
add [جسمي متعب] to class [تعب عام]
add [لا أستطيع النهوض] to class [تعب عام]
add [إرهاق شديد] to class [تعب عام]
add [أشعر بخمول] to class [تعب عام]

// تدريب فئة آلام الظهر
add [ظهري يؤلمني] to class [آلام ظهر]
add [عندي ألم في الظهر] to class [آلام ظهر]
add [وجع في ظهري] to class [آلام ظهر]

// تدريب فئة الحساسية
add [عندي عطاس] to class [حساسية]
add [أنفي مسدود] to class [حساسية]
add [عيني تدمع] to class [حساسية]
add [حكة في الجلد] to class [حساسية]

// تدريب فئة الأرق
add [لا أستطيع النوم] to class [أرق]
add [عندي أرق] to class [أرق]
add [نومي متقطع] to class [أرق]
add [صعوبة في النوم] to class [أرق]

// بدء التدريب
say [جاري إعداد الطبيب الذكي...] for [2] seconds
train NLP model
say [الطبيب جاهز للاستشارة! ✅] for [2] seconds`
        },
        {
          step: 3,
          title: "نظام الاستماع والتحليل",
          description: "نُنشئ نظاماً يستمع لكلام المريض ويُحلل الأعراض باستخدام النموذج المُدرب.",
          code: `// بدء الاستشارة
when I receive [start consultation]
set [consultation started] to [true]
set [symptoms list] to []
set [questions asked] to [0]

repeat until <(questions asked) > [5]>
  // الاستماع للمريض
  speak [صف لي ما تشعر به]
  listen [10] and wait
  set [patient input] to (speech recognition result)
  
  // تحليل المشاعر أولاً
  set [patient mood] to (analyse sentiment of (patient input))
  
  if <(patient mood) = [negative]> then
    speak [أفهم أنك متعب. لا تقلق، سأساعدك]
    wait [1] seconds
  end
  
  // تصنيف الأعراض
  set [detected symptom] to (classify (patient input))
  set [confidence] to (classification confidence)
  
  if <(confidence) > [60]> then
    // فهم واضح
    speak (join [فهمت! أنت تشكو من ] (detected symptom))
    add (detected symptom) to [symptoms list]
    
    // أسئلة متابعة حسب العرض
    broadcast (join [followup-] (detected symptom))
  else
    // الحاجة للتوضيح
    speak [لم أفهم جيداً. هل يمكنك توضيح المزيد؟]
  end
  
  change [questions asked] by [1]
  
  // سؤال المتابعة
  ask [هل لديك أعراض أخرى تريد ذكرها؟] and wait
  if <(answer) contains [لا]?> then
    broadcast [give diagnosis]
    stop [this script]
  end
end

broadcast [give diagnosis]`
        },
        {
          step: 4,
          title: "أسئلة المتابعة الذكية",
          description: "نُضيف أسئلة متابعة متخصصة لكل نوع من الأعراض للحصول على تفاصيل أكثر.",
          code: `// أسئلة متابعة الصداع
when I receive [followup-صداع]
ask [هل الصداع في مكان محدد؟ (الجبهة، الخلف، الجانب)] and wait
set [headache location] to (answer)
ask [منذ متى بدأ الصداع؟] and wait
set [headache duration] to (answer)
ask [هل يزداد مع الضوء أو الصوت؟] and wait
if <(answer) contains [نعم]?> then
  add [حساسية للضوء] to [symptoms list]
end

// أسئلة متابعة الحمى
when I receive [followup-حمى]
ask [هل قست درجة حرارتك؟ كم كانت؟] and wait
set [temperature] to (answer)
ask [هل تعاني من قشعريرة أو تعرق؟] and wait
if <(answer) contains [نعم]?> then
  add [قشعريرة] to [symptoms list]
end
ask [منذ متى بدأت الحرارة؟] and wait
set [fever duration] to (answer)

// أسئلة متابعة السعال
when I receive [followup-سعال]
ask [هل السعال جاف أم مع بلغم؟] and wait
set [cough type] to (answer)
ask [هل تشعر بضيق في التنفس؟] and wait
if <(answer) contains [نعم]?> then
  add [ضيق تنفس] to [symptoms list]
  speak [هذا مهم. قد تحتاج لمراجعة طبيب]
end

// أسئلة متابعة آلام المعدة
when I receive [followup-آلام معدة]
ask [هل الألم بعد الأكل أم قبله؟] and wait
set [stomach pain timing] to (answer)
ask [هل لديك غثيان أو قيء؟] and wait
if <(answer) contains [نعم]?> then
  add [غثيان] to [symptoms list]
end`
        },
        {
          step: 5,
          title: "نظام التشخيص والنصائح",
          description: "نُنشئ نظام تشخيص مبدئي يُعطي نصائح صحية بناءً على الأعراض المُكتشفة.",
          code: `// إعطاء التشخيص
when I receive [give diagnosis]
speak [لحظة من فضلك، جاري تحليل الأعراض...]
wait [2] seconds

// عرض ملخص الأعراض
speak (join [حسب ما فهمت، أنت تعاني من: ] (symptoms list))
wait [2] seconds

// تشخيص وتصائح حسب الأعراض
if <(symptoms list) contains [صداع]?> then
  if <(symptoms list) contains [حمى]?> then
    speak [قد تكون مصاباً بإنفلونزا أو عدوى فيروسية]
    set [diagnosis] to [احتمال إنفلونزا]
    call [advice-flu]
  else
    speak [يبدو أنه صداع توتري أو صداع نصفي]
    set [diagnosis] to [صداع توتري]
    call [advice-headache]
  end
end

if <(symptoms list) contains [سعال]?> then
  if <(symptoms list) contains [حمى]?> then
    speak [قد يكون التهاب في الجهاز التنفسي]
    set [diagnosis] to [التهاب تنفسي]
    call [advice-respiratory]
  else
    speak [قد يكون سعال تحسسي أو بسبب الجو]
    set [diagnosis] to [سعال تحسسي]
    call [advice-allergy]
  end
end

if <(symptoms list) contains [آلام معدة]?> then
  speak [قد تكون مشكلة في الجهاز الهضمي]
  set [diagnosis] to [اضطراب هضمي]
  call [advice-stomach]
end

if <(symptoms list) contains [تعب عام]?> then
  if <(length of (symptoms list)) = [1]> then
    speak [التعب قد يكون بسبب الإرهاق أو نقص الفيتامينات]
    call [advice-fatigue]
  end
end

// التحذير الطبي
wait [2] seconds
speak [تذكر: هذا تشخيص مبدئي. للحالات الخطيرة راجع طبيباً حقيقياً]
broadcast [show summary]`
        },
        {
          step: 6,
          title: "قاعدة النصائح الصحية",
          description: "نُنشئ قاعدة بيانات للنصائح الصحية المتخصصة لكل حالة.",
          code: `// نصائح الإنفلونزا
define [advice-flu]
speak [نصائح للإنفلونزا:]
wait [1] seconds
speak [أولاً: أكثر من شرب السوائل الدافئة]
speak [ثانياً: خذ قسطاً كافياً من الراحة]
speak [ثالثاً: يمكنك تناول خافض حرارة مثل الباراسيتامول]
speak [رابعاً: إذا استمرت الحرارة أكثر من 3 أيام، راجع الطبيب]

// نصائح الصداع
define [advice-headache]
speak [نصائح للصداع:]
wait [1] seconds
speak [أولاً: ابتعد عن الشاشات وأرح عينيك]
speak [ثانياً: اشرب كمية كافية من الماء]
speak [ثالثاً: حاول النوم في غرفة مظلمة وهادئة]
speak [رابعاً: إذا تكرر الصداع، قم بفحص النظر]

// نصائح الجهاز التنفسي
define [advice-respiratory]
speak [نصائح لالتهاب الجهاز التنفسي:]
wait [1] seconds
speak [أولاً: تناول مشروبات دافئة مع عسل وليمون]
speak [ثانياً: استخدم بخار الماء لتخفيف الاحتقان]
speak [ثالثاً: تجنب الهواء البارد والتدخين]
speak [رابعاً: إذا صعب التنفس، راجع الطبيب فوراً]

// نصائح الحساسية
define [advice-allergy]
speak [نصائح للحساسية:]
wait [1] seconds
speak [أولاً: حاول تحديد مسبب الحساسية وتجنبه]
speak [ثانياً: نظف المكان من الغبار]
speak [ثالثاً: يمكن استخدام مضادات الهيستامين]

// نصائح المعدة
define [advice-stomach]
speak [نصائح لآلام المعدة:]
wait [1] seconds
speak [أولاً: تناول وجبات خفيفة وسهلة الهضم]
speak [ثانياً: تجنب الأطعمة الحارة والدهنية]
speak [ثالثاً: اشرب النعناع أو الزنجبيل]
speak [رابعاً: إذا استمر الألم، راجع الطبيب]

// نصائح التعب
define [advice-fatigue]
speak [نصائح للتعب العام:]
wait [1] seconds
speak [أولاً: نم 7-8 ساعات يومياً]
speak [ثانياً: مارس رياضة خفيفة]
speak [ثالثاً: تناول غذاء متوازن غني بالفيتامينات]
speak [رابعاً: قم بفحص دم للتأكد من مستوى الحديد]`
        },
        {
          step: 7,
          title: "الكود النهائي والتحسينات",
          description: "إضافة ملخص الاستشارة وإمكانية طباعة تقرير وبدء استشارة جديدة.",
          code: `// عرض الملخص النهائي
when I receive [show summary]
// إنشاء تقرير
set [report] to (join [📋 تقرير الاستشارة الطبية] [newline])
set [report] to (join (report) (join [👤 المريض: ] (patient name)))
set [report] to (join (report) (join [newline] [🔍 الأعراض: ]))
set [report] to (join (report) (symptoms list))
set [report] to (join (report) (join [newline] [💊 التشخيص المبدئي: ]))
set [report] to (join (report) (diagnosis))

// عرض التقرير
say (report) for [10] seconds

// سؤال عن استشارة جديدة
wait [2] seconds
speak [هل تريد استشارة جديدة أو لديك أسئلة أخرى؟]
ask [اكتب "جديد" لاستشارة جديدة أو سؤالك] and wait

if <(answer) contains [جديد]?> then
  broadcast [start consultation]
else
  // الإجابة على سؤال
  speak (join [سؤال جيد! ] (answer))
  speak [للأسف معلوماتي محدودة. أنصحك بالبحث أو سؤال طبيب متخصص]
end

// التحكم بلوحة المفاتيح
when [s] key pressed
broadcast [start consultation]

when [r] key pressed
speak (report)

when [h] key pressed
speak [المساعدة:]
speak [اضغط S لبدء استشارة جديدة]
speak [اضغط R لقراءة التقرير]
speak [اضغط H للمساعدة]`
        }
      ],
      fullCode: `// ===== الـ Sprite: الدكتور الذكي 👨‍⚕️ =====
when green flag clicked
// إعداد الشخصية
switch costume to [doctor]
go to x: [-100] y: [-50]
set size to [150] %
set language to [Arabic]
set voice to [Male]
set pitch to [95]

// المتغيرات
set [patient name] to []
set [symptoms list] to []
set [diagnosis] to []
set [consultation started] to [false]

// تدريب النموذج
create class [صداع] in NLP model
create class [حمى] in NLP model
create class [سعال] in NLP model
create class [آلام معدة] in NLP model
create class [تعب عام] in NLP model
create class [آلام ظهر] in NLP model
create class [حساسية] in NLP model
create class [أرق] in NLP model

// عينات التدريب
add [رأسي يؤلمني] to class [صداع]
add [عندي صداع] to class [صداع]
add [عندي حرارة] to class [حمى]
add [جسمي حار] to class [حمى]
add [عندي كحة] to class [سعال]
add [أسعل كثيراً] to class [سعال]
add [بطني يؤلمني] to class [آلام معدة]
add [عندي مغص] to class [آلام معدة]
add [أشعر بتعب] to class [تعب عام]
add [جسمي متعب] to class [تعب عام]
add [ظهري يؤلمني] to class [آلام ظهر]
add [عندي عطاس] to class [حساسية]
add [لا أستطيع النوم] to class [أرق]

train NLP model

// الترحيب
speak [مرحباً بك في عيادة الدكتور الذكي]
ask [ما اسمك؟] and wait
set [patient name] to (answer)
speak (join [أهلاً ] (join (patient name) [!]))
broadcast [start consultation]

// ===== نظام الاستشارة =====
when I receive [start consultation]
set [symptoms list] to []
speak [صف لي ما تشعر به]
listen [10] and wait
set [patient input] to (speech recognition result)

// تحليل المشاعر
if <(analyse sentiment of (patient input)) = [negative]> then
  speak [أفهم أنك متعب. سأساعدك]
end

// تصنيف الأعراض
set [detected symptom] to (classify (patient input))
if <(classification confidence) > [60]> then
  speak (join [فهمت! أنت تشكو من ] (detected symptom))
  add (detected symptom) to [symptoms list]
else
  speak [هل يمكنك توضيح المزيد؟]
end

ask [هل لديك أعراض أخرى؟] and wait
if <(answer) contains [لا]?> then
  broadcast [give diagnosis]
end

// ===== التشخيص =====
when I receive [give diagnosis]
speak [جاري تحليل الأعراض...]
wait [2] seconds
speak (join [أعراضك: ] (symptoms list))

if <(symptoms list) contains [صداع]?> then
  if <(symptoms list) contains [حمى]?> then
    speak [قد تكون إنفلونزا. أكثر من السوائل والراحة]
  else
    speak [صداع توتري. أرح عينيك واشرب ماء]
  end
end

if <(symptoms list) contains [سعال]?> then
  speak [تناول مشروبات دافئة وتجنب الهواء البارد]
end

speak [تذكر: للحالات الخطيرة راجع طبيباً حقيقياً]

// ===== التحكم =====
when [s] key pressed
broadcast [start consultation]

when [h] key pressed
speak [S: استشارة جديدة | H: مساعدة]`
    }
  },
  {
    id: 8,
    titleAr: "التعلم الآلي",
    titleEn: "Machine Learning",
    icon: "🧠",
    description: "بناء نماذج التعلم الآلي وتصديرها واستخدامها في مشاريع مختلفة",
    color: "from-yellow-500 to-orange-500",
    terms: [
      {
        term: "Machine Learning",
        termAr: "التعلم الآلي",
        definition: "فرع من الذكاء الاصطناعي يُمكّن الحاسوب من التعلم من البيانات واتخاذ قرارات دون برمجة صريحة لكل حالة."
      },
      {
        term: "Classification",
        termAr: "التصنيف",
        definition: "مهمة تعلم آلي تهدف لتصنيف المدخلات إلى فئات محددة مسبقاً. مثل: تصنيف صورة كقط أو كلب."
      },
      {
        term: "Training",
        termAr: "التدريب",
        definition: "عملية تعليم النموذج باستخدام أمثلة معروفة ليتعلم الأنماط ويستطيع التعميم على بيانات جديدة."
      },
      {
        term: "Model",
        termAr: "النموذج",
        definition: "البرنامج الناتج عن التدريب والذي يستطيع التنبؤ أو التصنيف بناءً على ما تعلمه."
      },
      {
        term: "Class/Label",
        termAr: "الفئة/التسمية",
        definition: "اسم المجموعة التي ينتمي إليها العنصر. مثل: 'قط'، 'كلب'، 'حجر'، 'ورقة' في لعبة."
      },
      {
        term: "Sample/Example",
        termAr: "العينة/المثال",
        definition: "صورة أو صوت أو نص واحد يُستخدم لتدريب النموذج. كلما زادت العينات، تحسنت الدقة."
      },
      {
        term: "Confidence Score",
        termAr: "درجة الثقة",
        definition: "نسبة مئوية تُعبر عن مدى تأكد النموذج من التصنيف. 95% تعني ثقة عالية."
      },
      {
        term: "Overfitting",
        termAr: "الإفراط في التكيف",
        definition: "حالة يحفظ فيها النموذج أمثلة التدريب بدلاً من تعلم الأنماط، فيفشل مع بيانات جديدة."
      }
    ],
    blocks: [
      {
        id: "open-ml-environment",
        nameEn: "open Machine Learning environment",
        nameAr: "فتح بيئة التعلم الآلي",
        description: "يفتح واجهة بيئة التعلم الآلي في Pictoblox حيث يمكنك إنشاء وتدريب النماذج. هذه الخطوة الأولى لأي مشروع تعلم آلي.",
        inputs: [],
        outputs: ["فتح نافذة بيئة ML"],
        usage: "استخدمه لبدء إنشاء نموذج جديد أو تعديل نموذج موجود",
        example: "الدخول لبيئة التعلم الآلي لإنشاء مصنف صور",
        codeExample: `// من قائمة الإضافات
// اختر Machine Learning Environment
// أو اضغط على أيقونة ML في الشريط العلوي`
      },
      {
        id: "create-class-ml",
        nameEn: "create class ()",
        nameAr: "إنشاء فئة",
        description: "يُنشئ فئة (تصنيف) جديدة في النموذج. كل فئة تُمثل شيئاً تريد من النموذج التعرف عليه مثل: حجر، ورقة، مقص.",
        inputs: ["class name: اسم الفئة الجديدة"],
        outputs: ["إضافة فئة للنموذج"],
        usage: "أنشئ فئة لكل شيء تريد من النموذج تصنيفه",
        example: "إنشاء فئات للعبة حجر ورقة مقص",
        codeExample: `// في بيئة ML:
// 1. اضغط "Add Class"
// 2. سمِّ الفئة (مثلاً: Rock)
// 3. كرر لإضافة فئات أخرى

// أو برمجياً:
when green flag clicked
create class [Rock]
create class [Paper]
create class [Scissors]`
      },
      {
        id: "add-sample-image",
        nameEn: "add image to class ()",
        nameAr: "إضافة صورة للفئة",
        description: "يُضيف صورة تدريبية لفئة محددة. يُوصى بإضافة 20-50 صورة على الأقل لكل فئة من زوايا وإضاءات مختلفة.",
        inputs: ["image: الصورة من الكاميرا أو ملف", "class: اسم الفئة"],
        outputs: ["إضافة الصورة لبيانات التدريب"],
        usage: "التقط صوراً متعددة لكل فئة مع تغيير الزاوية والموقع",
        example: "تصوير اليد بوضعية حجر من عدة زوايا",
        codeExample: `// في بيئة ML:
// 1. اختر الفئة (مثلاً: Rock)
// 2. اضغط على أيقونة الكاميرا
// 3. التقط صوراً متعددة (20+)
// 4. غيّر الزاوية والإضاءة

// أو:
when [r] key pressed
// التقاط صورة وإضافتها لفئة Rock
add image from camera to class [Rock]
say [تم إضافة صورة للحجر!]`
      },
      {
        id: "train-model",
        nameEn: "train model",
        nameAr: "تدريب النموذج",
        description: "يبدأ عملية تدريب النموذج على الصور المُضافة. قد يستغرق بعض الوقت حسب عدد الصور. بعد التدريب يكون النموذج جاهزاً للاستخدام.",
        inputs: [],
        outputs: ["نموذج مُدرب جاهز للتصنيف"],
        usage: "نفّذه بعد إضافة صور كافية لجميع الفئات (20+ لكل فئة)",
        example: "تدريب نموذج التعرف على إشارات اليد",
        codeExample: `// في بيئة ML:
// 1. تأكد من وجود صور كافية لكل فئة
// 2. اضغط "Train Model"
// 3. انتظر اكتمال التدريب
// 4. اختبر النموذج

when [t] key pressed
say [جاري التدريب...] for [2] seconds
train model
say [تم التدريب بنجاح! ✅] for [2] seconds`
      },
      {
        id: "classify-image",
        nameEn: "classify image from ()",
        nameAr: "تصنيف الصورة من",
        description: "يأخذ صورة من المصدر المحدد ويُصنفها باستخدام النموذج المُدرب. يُعيد اسم الفئة الأكثر تطابقاً.",
        inputs: ["source: مصدر الصورة (camera/stage/file)"],
        outputs: ["اسم الفئة المُكتشفة"],
        usage: "استخدمه في حلقة forever للتصنيف المستمر في الوقت الحقيقي",
        example: "تصنيف إشارة اليد أمام الكاميرا",
        codeExample: `when green flag clicked
turn [on] video on stage with [50] % transparency
forever
  classify image from [camera]
  say (join [أراك تُظهر: ] (get classification)) for [0.5] seconds
end`
      },
      {
        id: "get-classification",
        nameEn: "get classification",
        nameAr: "الحصول على التصنيف",
        description: "يُعيد اسم الفئة التي صُنفت إليها آخر صورة. استخدمه بعد بلوك classify للحصول على النتيجة.",
        inputs: [],
        outputs: ["اسم الفئة (نص)"],
        usage: "استخدمه للتحقق من التصنيف واتخاذ إجراءات بناءً عليه",
        example: "التحقق من إشارة اللاعب في لعبة",
        codeExample: `classify image from [camera]
set [player choice] to (get classification)

if <(player choice) = [Rock]> then
  say [اخترت الحجر! 🪨]
end
if <(player choice) = [Paper]> then
  say [اخترت الورقة! 📄]
end
if <(player choice) = [Scissors]> then
  say [اخترت المقص! ✂️]
end`
      },
      {
        id: "get-confidence-ml",
        nameEn: "get confidence",
        nameAr: "الحصول على نسبة الثقة",
        description: "يُعيد نسبة ثقة النموذج في آخر تصنيف كنسبة مئوية (0-100). نسبة عالية تعني تصنيف أكيد.",
        inputs: [],
        outputs: ["نسبة مئوية (0-100)"],
        usage: "استخدمه لرفض التصنيفات غير الأكيدة وطلب إعادة المحاولة",
        example: "قبول التصنيف فقط إذا كانت الثقة عالية",
        codeExample: `classify image from [camera]
if <(get confidence) > [80]> then
  say (join [متأكد ] (join (get confidence) [%]))
  set [choice] to (get classification)
else
  say [غير واضح! أعد المحاولة]
  set [choice] to [unknown]
end`
      },
      {
        id: "is-class-ml",
        nameEn: "is class ()?",
        nameAr: "هل الفئة هي",
        description: "بلوك شرطي يتحقق مما إذا كان التصنيف الحالي يُطابق فئة محددة. أسهل للاستخدام في الشروط.",
        inputs: ["class name: اسم الفئة المراد التحقق منها"],
        outputs: ["قيمة منطقية (صحيح/خطأ)"],
        usage: "استخدمه في بلوكات if للتفرع حسب التصنيف",
        example: "التحقق من إشارة محددة",
        codeExample: `classify image from [camera]
if <is class [Thumbs Up]?> then
  play sound [cheer]
  say [أحسنت! 👍] for [2] seconds
end
if <is class [Thumbs Down]?> then
  play sound [sad]
  say [حاول مرة أخرى 👎] for [2] seconds
end`
      },
      {
        id: "export-model",
        nameEn: "export model",
        nameAr: "تصدير النموذج",
        description: "يُصدّر النموذج المُدرب كملف يمكن حفظه واستخدامه لاحقاً أو مشاركته. مفيد للحفاظ على النموذج.",
        inputs: [],
        outputs: ["ملف النموذج (.pickle أو .h5)"],
        usage: "صدّر النموذج بعد التدريب الناجح لاستخدامه في مشاريع أخرى",
        example: "حفظ نموذج التعرف على الإشارات",
        codeExample: `// في بيئة ML:
// 1. بعد التدريب الناجح
// 2. اضغط "Export Model"
// 3. اختر مكان الحفظ
// 4. سمِّ الملف (مثلاً: hand_gestures_model)

// لاستخدام النموذج لاحقاً:
// 1. اضغط "Import Model"
// 2. اختر الملف المحفوظ`
      },
      {
        id: "import-model",
        nameEn: "import model from ()",
        nameAr: "استيراد نموذج من",
        description: "يُحمّل نموذجاً مُدرباً مسبقاً من ملف. يُتيح استخدام نماذج جاهزة دون إعادة التدريب.",
        inputs: ["file path: مسار ملف النموذج"],
        outputs: ["تحميل النموذج للاستخدام"],
        usage: "استخدمه لتحميل نموذج درّبته سابقاً أو حصلت عليه من مصدر آخر",
        example: "تحميل نموذج جاهز للتعرف على الوجوه",
        codeExample: `when green flag clicked
import model from [hand_gestures_model.pickle]
say [تم تحميل النموذج!] for [2] seconds
// الآن يمكنك استخدام classify`
      },
      {
        id: "delete-class",
        nameEn: "delete class ()",
        nameAr: "حذف فئة",
        description: "يحذف فئة وجميع صورها من النموذج. مفيد لإعادة البناء أو إزالة فئات غير مطلوبة.",
        inputs: ["class name: اسم الفئة المراد حذفها"],
        outputs: ["إزالة الفئة من النموذج"],
        usage: "استخدمه لحذف فئة بها أخطاء أو لم تعد مطلوبة",
        example: "حذف فئة وإعادة إضافتها بصور أفضل",
        codeExample: `when [d] key pressed
delete class [Rock]
say [تم حذف فئة الحجر] for [2] seconds
say [أعد إضافة الصور] for [2] seconds`
      },
      {
        id: "reset-model",
        nameEn: "reset model",
        nameAr: "إعادة تعيين النموذج",
        description: "يحذف جميع الفئات والصور ويُعيد النموذج لحالته الأولية. استخدمه للبدء من جديد.",
        inputs: [],
        outputs: ["مسح جميع بيانات النموذج"],
        usage: "استخدمه عندما تريد البدء من الصفر أو تغيير المشروع",
        example: "مسح النموذج القديم لإنشاء مشروع جديد",
        codeExample: `when [x] key pressed
ask [هل أنت متأكد من مسح كل شيء؟] and wait
if <(answer) = [نعم]> then
  reset model
  say [تم مسح النموذج بالكامل] for [2] seconds
end`
      }
    ],
    project: {
      title: "لعبة حجر ورقة مقص بالذكاء الاصطناعي",
      description: "لعبة تفاعلية يتعرف فيها الحاسوب على إشارة يدك (حجر/ورقة/مقص) باستخدام الكاميرا والتعلم الآلي، ثم يختار ردّه ويُحدد الفائز!",
      objectives: [
        "فهم مفهوم التعلم الآلي والتصنيف",
        "إنشاء نموذج تعرف على إشارات اليد",
        "جمع وتنظيم بيانات التدريب",
        "تطبيق التعلم الآلي في لعبة تفاعلية",
        "استخدام درجة الثقة لتحسين الدقة"
      ],
      steps: [
        {
          step: 1,
          title: "إعداد المشروع وبيئة التعلم",
          description: "نُعد المشروع ونفتح بيئة التعلم الآلي لإنشاء النموذج.",
          code: `// الـ Sprite: الحكم (Referee) 🤖
when green flag clicked
// إعداد المشروع
switch costume to [robot]
go to x: [0] y: [50]
set size to [80] %

// المتغيرات
set [player score] to [0]
set [computer score] to [0]
set [rounds] to [0]
set [game status] to [ready]

// تشغيل الكاميرا
turn [on] video on stage with [30] % transparency

// رسالة ترحيب
say [مرحباً بك في لعبة حجر ورقة مقص! 🎮] for [3] seconds
say [هل النموذج مُدرب؟ اضغط T للتدريب أو P للعب] for [3] seconds

// التحكم
when [t] key pressed
broadcast [open training]

when [p] key pressed
broadcast [start game]`
        },
        {
          step: 2,
          title: "إنشاء وتدريب النموذج",
          description: "نُنشئ ثلاث فئات (حجر، ورقة، مقص) ونجمع صور التدريب لكل منها.",
          code: `// نظام التدريب
when I receive [open training]
set [game status] to [training]
say [=== وضع التدريب ===] for [2] seconds
say [سنُدرب النموذج على 3 إشارات] for [2] seconds

// إنشاء الفئات
create class [Rock]
create class [Paper]
create class [Scissors]

say [الفئات جاهزة! لنبدأ جمع الصور] for [2] seconds
broadcast [collect rock]

// جمع صور الحجر ✊
when I receive [collect rock]
say [أظهر إشارة الحجر ✊ واضغط R] for [3] seconds
say [التقط 30 صورة من زوايا مختلفة] for [2] seconds

when [r] key pressed
if <(game status) = [training]> then
  add image from camera to class [Rock]
  change [rock samples] by [1]
  say (join [حجر: ] (join (rock samples) [ صورة])) for [0.3] seconds
  if <(rock samples) > [29]> then
    broadcast [collect paper]
  end
end

// جمع صور الورقة ✋
when I receive [collect paper]
say [ممتاز! الآن إشارة الورقة ✋ واضغط P] for [3] seconds

when [o] key pressed
if <(game status) = [training]> then
  add image from camera to class [Paper]
  change [paper samples] by [1]
  say (join [ورقة: ] (join (paper samples) [ صورة])) for [0.3] seconds
  if <(paper samples) > [29]> then
    broadcast [collect scissors]
  end
end

// جمع صور المقص ✌️
when I receive [collect scissors]
say [رائع! أخيراً إشارة المقص ✌️ واضغط S] for [3] seconds

when [s] key pressed
if <(game status) = [training]> then
  add image from camera to class [Scissors]
  change [scissors samples] by [1]
  say (join [مقص: ] (join (scissors samples) [ صورة])) for [0.3] seconds
  if <(scissors samples) > [29]> then
    broadcast [start training]
  end
end

// بدء التدريب
when I receive [start training]
say [جاري تدريب النموذج... ⏳] for [2] seconds
train model
say [تم التدريب بنجاح! ✅] for [2] seconds
say [اضغط P لبدء اللعب] for [2] seconds
set [game status] to [ready]`
        },
        {
          step: 3,
          title: "نظام اللعب الأساسي",
          description: "نُنشئ نظام اللعب الذي يقرأ إشارة اللاعب ويختار الكمبيوتر ردّه.",
          code: `// بدء اللعبة
when I receive [start game]
set [game status] to [playing]
set [player score] to [0]
set [computer score] to [0]
set [rounds] to [0]

say [لنبدأ اللعبة! أفضل من 5 جولات] for [2] seconds
broadcast [new round]

// جولة جديدة
when I receive [new round]
change [rounds] by [1]
say (join [الجولة ] (join (rounds) [ من 5])) for [1] seconds

// العد التنازلي
say [3️⃣] for [1] seconds
say [2️⃣] for [1] seconds
say [1️⃣] for [1] seconds
say [أظهر إشارتك الآن! 🖐️] for [0.5] seconds

// التقاط اختيار اللاعب
broadcast [capture player]

when I receive [capture player]
classify image from [camera]
set [player choice] to (get classification)
set [player confidence] to (get confidence)

// التحقق من الثقة
if <(player confidence) < [60]> then
  say [لم أفهم الإشارة جيداً! أعد المحاولة] for [2] seconds
  broadcast [new round]
  stop [this script]
end

// إظهار اختيار اللاعب
if <(player choice) = [Rock]> then
  say [أنت: حجر ✊] for [1] seconds
end
if <(player choice) = [Paper]> then
  say [أنت: ورقة ✋] for [1] seconds
end
if <(player choice) = [Scissors]> then
  say [أنت: مقص ✌️] for [1] seconds
end

// اختيار الكمبيوتر
broadcast [computer choice]`
        },
        {
          step: 4,
          title: "ذكاء الكمبيوتر والمنافسة",
          description: "نُنشئ نظام اختيار الكمبيوتر وتحديد الفائز.",
          code: `// اختيار الكمبيوتر
when I receive [computer choice]
// اختيار عشوائي
set [random] to (pick random [1] to [3])

if <(random) = [1]> then
  set [computer choice] to [Rock]
end
if <(random) = [2]> then
  set [computer choice] to [Paper]
end
if <(random) = [3]> then
  set [computer choice] to [Scissors]
end

// إظهار اختيار الكمبيوتر مع تشويق
say [الكمبيوتر يختار...] for [1] seconds
say [🔄] for [0.5] seconds

if <(computer choice) = [Rock]> then
  say [الكمبيوتر: حجر ✊] for [1] seconds
end
if <(computer choice) = [Paper]> then
  say [الكمبيوتر: ورقة ✋] for [1] seconds
end
if <(computer choice) = [Scissors]> then
  say [الكمبيوتر: مقص ✌️] for [1] seconds
end

broadcast [determine winner]

// تحديد الفائز
when I receive [determine winner]
// التعادل
if <(player choice) = (computer choice)> then
  say [تعادل! 🤝] for [2] seconds
  play sound [tie]
else
  // الحجر يكسر المقص
  if <<(player choice) = [Rock]> and <(computer choice) = [Scissors]>> then
    broadcast [player wins round]
  end
  // المقص يقص الورقة
  if <<(player choice) = [Scissors]> and <(computer choice) = [Paper]>> then
    broadcast [player wins round]
  end
  // الورقة تلف الحجر
  if <<(player choice) = [Paper]> and <(computer choice) = [Rock]>> then
    broadcast [player wins round]
  end
  
  // الكمبيوتر يفوز في باقي الحالات
  if <<(player choice) = [Rock]> and <(computer choice) = [Paper]>> then
    broadcast [computer wins round]
  end
  if <<(player choice) = [Scissors]> and <(computer choice) = [Rock]>> then
    broadcast [computer wins round]
  end
  if <<(player choice) = [Paper]> and <(computer choice) = [Scissors]>> then
    broadcast [computer wins round]
  end
end

// التحقق من نهاية اللعبة
wait [1] seconds
if <(rounds) < [5]> then
  broadcast [new round]
else
  broadcast [game over]
end

// فوز اللاعب بالجولة
when I receive [player wins round]
change [player score] by [1]
play sound [win]
say [فزت بهذه الجولة! 🎉] for [2] seconds
say (join [النتيجة: أنت ] (join (player score) (join [ - الكمبيوتر ] (computer score)))) for [2] seconds

// فوز الكمبيوتر بالجولة
when I receive [computer wins round]
change [computer score] by [1]
play sound [lose]
say [الكمبيوتر فاز! 😔] for [2] seconds
say (join [النتيجة: أنت ] (join (player score) (join [ - الكمبيوتر ] (computer score)))) for [2] seconds`
        },
        {
          step: 5,
          title: "نهاية اللعبة والإحصائيات",
          description: "نُضيف شاشة نهاية اللعبة مع الإحصائيات وخيار اللعب مجدداً.",
          code: `// نهاية اللعبة
when I receive [game over]
set [game status] to [ended]

if <(player score) > (computer score)> then
  // فوز اللاعب
  switch costume to [happy robot]
  play sound [celebration]
  say [🎊 مبروك! فزت باللعبة! 🎊] for [3] seconds
  say (join [النتيجة النهائية: ] (join (player score) (join [ - ] (computer score)))) for [2] seconds
  broadcast [show confetti]
else
  if <(player score) < (computer score)> then
    // فوز الكمبيوتر
    switch costume to [cool robot]
    play sound [computer win]
    say [الكمبيوتر فاز هذه المرة! 🤖] for [3] seconds
    say [حظاً أوفر في المرة القادمة!] for [2] seconds
  else
    // تعادل نهائي
    switch costume to [thinking robot]
    say [تعادل! أنتما متساويان! 🤝] for [3] seconds
  end
end

// عرض الإحصائيات
say [=== إحصائيات المباراة ===] for [2] seconds
say (join [عدد الجولات: ] (rounds)) for [2] seconds
say (join [انتصاراتك: ] (player score)) for [2] seconds
say (join [انتصارات الكمبيوتر: ] (computer score)) for [2] seconds

// اللعب مرة أخرى
ask [هل تريد اللعب مرة أخرى؟ (نعم/لا)] and wait
if <(answer) contains [نعم]?> then
  broadcast [start game]
else
  say [شكراً للعب! إلى اللقاء 👋] for [3] seconds
end`
        },
        {
          step: 6,
          title: "تحسينات بصرية وتأثيرات",
          description: "نُضيف تأثيرات بصرية مثل الكونفيتي ومؤشر الثقة وأيقونات الإشارات.",
          code: `// الـ Sprite: تأثير الكونفيتي 🎉
when I receive [show confetti]
repeat [20]
  create clone of [myself]
end

when I start as a clone
go to x: (pick random [-200] to [200]) y: [180]
set [color] effect to (pick random [0] to [200])
set size to (pick random [30] to [60]) %
show
repeat [40]
  change y by [-6]
  turn right (pick random [-10] to [10]) degrees
  change [ghost] effect by [2]
end
delete this clone

// الـ Sprite: مؤشر الثقة
when green flag clicked
go to x: [180] y: [150]
forever
  if <(game status) = [playing]> then
    classify image from [camera]
    set [confidence display] to (round (get confidence))
    
    // تغيير اللون حسب الثقة
    if <(confidence display) > [80]> then
      set [color] effect to [120]  // أخضر
      say (join [✅ ] (join (confidence display) [%]))
    else
      if <(confidence display) > [50]> then
        set [color] effect to [40]  // برتقالي
        say (join [⚠️ ] (join (confidence display) [%]))
      else
        set [color] effect to [0]  // أحمر
        say (join [❌ ] (join (confidence display) [%]))
      end
    end
  end
  wait [0.2] seconds
end

// الـ Sprite: أيقونات الإشارات
when I receive [capture player]
// إظهار الأيقونة المناسبة
if <(player choice) = [Rock]> then
  switch costume to [rock icon]
end
if <(player choice) = [Paper]> then
  switch costume to [paper icon]
end
if <(player choice) = [Scissors]> then
  switch costume to [scissors icon]
end
go to x: [-150] y: [100]
set size to [0] %
show
repeat [10]
  change size by [10]
end
wait [2] seconds
repeat [10]
  change size by [-10]
  change [ghost] effect by [10]
end
hide`
        },
        {
          step: 7,
          title: "الكود النهائي مع التحكم الكامل",
          description: "الكود النهائي الكامل مع جميع التحكمات والتحسينات.",
          code: `// === التحكم بلوحة المفاتيح ===
when [h] key pressed
say [=== المساعدة ===] for [2] seconds
say [T: فتح وضع التدريب] for [2] seconds
say [P: بدء اللعبة] for [2] seconds
say [R: إضافة صورة حجر (في التدريب)] for [2] seconds
say [O: إضافة صورة ورقة (في التدريب)] for [2] seconds
say [S: إضافة صورة مقص (في التدريب)] for [2] seconds
say [E: تصدير النموذج] for [2] seconds
say [I: استيراد النموذج] for [2] seconds
say [X: إعادة تعيين النموذج] for [2] seconds

when [e] key pressed
export model
say [تم تصدير النموذج! 💾] for [2] seconds

when [i] key pressed
import model
say [تم استيراد النموذج! ✅] for [2] seconds

when [x] key pressed
ask [هل تريد مسح النموذج؟ اكتب "نعم" للتأكيد] and wait
if <(answer) = [نعم]> then
  reset model
  say [تم مسح النموذج] for [2] seconds
end

// === عرض المعلومات ===
when green flag clicked
forever
  set [info] to (join [👤 ] (join (player score) (join [ | 🤖 ] (join (computer score) (join [ | 🎯 الجولة ] (rounds))))))
  // يمكن عرضها في متغير على المسرح
  wait [1] seconds
end`
        }
      ],
      fullCode: `// ===== لعبة حجر ورقة مقص بالذكاء الاصطناعي =====

// ===== الـ Sprite: الحكم 🤖 =====
when green flag clicked
switch costume to [robot]
go to x: [0] y: [50]
set size to [80] %
set [player score] to [0]
set [computer score] to [0]
set [rounds] to [0]
set [game status] to [ready]
turn [on] video on stage with [30] % transparency
say [مرحباً! T للتدريب | P للعب] for [3] seconds

// === نظام التدريب ===
when [t] key pressed
set [game status] to [training]
set [rock samples] to [0]
set [paper samples] to [0]
set [scissors samples] to [0]
create class [Rock]
create class [Paper]
create class [Scissors]
say [R: حجر | O: ورقة | S: مقص | 30 صورة لكل] for [3] seconds

when [r] key pressed
if <(game status) = [training]> then
  add image from camera to class [Rock]
  change [rock samples] by [1]
  say (join [حجر: ] (rock samples))
  if <<(rock samples) > [29]> and <(paper samples) > [29]> and <(scissors samples) > [29]>> then
    train model
    say [تم التدريب! ✅ اضغط P للعب]
  end
end

when [o] key pressed
if <(game status) = [training]> then
  add image from camera to class [Paper]
  change [paper samples] by [1]
  say (join [ورقة: ] (paper samples))
end

when [s] key pressed
if <(game status) = [training]> then
  add image from camera to class [Scissors]
  change [scissors samples] by [1]
  say (join [مقص: ] (scissors samples))
end

// === نظام اللعب ===
when [p] key pressed
set [game status] to [playing]
set [player score] to [0]
set [computer score] to [0]
set [rounds] to [0]
broadcast [new round]

when I receive [new round]
change [rounds] by [1]
say [3️⃣] for [1] seconds
say [2️⃣] for [1] seconds
say [1️⃣] for [1] seconds
say [الآن! 🖐️] for [0.5] seconds

classify image from [camera]
set [player choice] to (get classification)

if <(get confidence) < [60]> then
  say [أعد المحاولة!]
  broadcast [new round]
  stop [this script]
end

// اختيار الكمبيوتر
set [r] to (pick random [1] to [3])
if <(r) = [1]> then set [computer choice] to [Rock] end
if <(r) = [2]> then set [computer choice] to [Paper] end
if <(r) = [3]> then set [computer choice] to [Scissors] end

say (join [أنت: ] (join (player choice) (join [ | الكمبيوتر: ] (computer choice)))) for [2] seconds

// تحديد الفائز
if <(player choice) = (computer choice)> then
  say [تعادل! 🤝]
else
  if <<<(player choice) = [Rock]> and <(computer choice) = [Scissors]>> or <<<(player choice) = [Scissors]> and <(computer choice) = [Paper]>> or <<(player choice) = [Paper]> and <(computer choice) = [Rock]>>>> then
    change [player score] by [1]
    say [فزت! 🎉]
  else
    change [computer score] by [1]
    say [خسرت! 😔]
  end
end

wait [2] seconds
say (join (player score) (join [ - ] (computer score))) for [1] seconds

if <(rounds) < [5]> then
  broadcast [new round]
else
  if <(player score) > (computer score)> then
    say [🎊 مبروك! فزت باللعبة!] for [3] seconds
  else
    if <(player score) < (computer score)> then
      say [الكمبيوتر فاز! 🤖] for [3] seconds
    else
      say [تعادل نهائي! 🤝] for [3] seconds
    end
  end
end

// === التحكم ===
when [h] key pressed
say [T:تدريب | P:لعب | R:حجر | O:ورقة | S:مقص]`
    }
  },
];
