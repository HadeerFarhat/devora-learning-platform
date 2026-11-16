const yt = (q) =>
  "https://www.youtube.com/results?search_query=" + encodeURIComponent(q);
const TYPES = {
  video: ["play_circle", "فيديوهات"],
  drive: ["folder", "ملفات ودرايف"],
  article: ["article", "مقالات وتمارين"],
};

const STAGES = [
  {
    icon: "devices",
    title: "الكمبيوتر والإنترنت",
    desc: "إزاي الأجهزة بتفكر وبتتبادل البيانات من تحت الغطاء، من غير تعقيد.",
    intro: "إنت بتستخدمهم كل يوم.. دلوقتي هتفهم إزاي بيشتغلوا.",
    img: "",
    items: [
      {
        t: "video",
        title: "كيف يعمل الإنترنت؟ شرح للمبتدئين",
        src: "YouTube",
        url: yt("كيف يعمل الانترنت شرح للمبتدئين"),
      },
      {
        t: "video",
        title: "كيف يعمل الكمبيوتر من الداخل",
        src: "YouTube",
        url: yt("كيف يعمل الكمبيوتر شرح بالعربي"),
      },
      {
        t: "article",
        title: "How does the Internet work",
        src: "Cloudflare",
        url: "https://www.cloudflare.com/learning/network-layer/how-does-the-internet-work/",
      },
      { t: "drive", title: "ملخصات الجزء ده", src: "Google Drive", url: "" },
    ],
  },
  {
    icon: "extension",
    title: "التفكير البرمجي",
    desc: "تفكّك أي مشكلة كبيرة لخطوات بسيطة يقدر الكمبيوتر يفهمها.",
    intro:
      "إزاي تفكك أي مشكلة معقدة لخطوات بسيطة.. من غير كتابة سطر كود واحد لسه.",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvV9LEngfHj-7cNMLAMGNtxs9o2GRwP_O4NuimBx0Cv_KTnlnvDonpOTFgZ6c0zlIpIEj-GRzyg5RphYG_XR_77SDXWFxO1LSeuv_4StFJ1s7kULLM3EOjDtXJAzbE1rl-qP_RwzRZP5Wxb9AQ4-QO4CEdhja4W5rBb_HfcNYb8t7rXZ6WkE_0CeXN92REvQm3ad-sQMDtCBvI_YCsAgo6NR3NOoAJONN6CKnJUvlP",
    items: [
      {
        t: "video",
        title: "أساسيات التفكير البرمجي وحل المشكلات",
        src: "YouTube",
        url: yt("اساسيات التفكير البرمجي problem solving بالعربي"),
      },
      {
        t: "video",
        title: "الخوارزميات والـ Flowchart للمبتدئين",
        src: "YouTube",
        url: yt("الخوارزميات و flowchart للمبتدئين"),
      },
      {
        t: "article",
        title: "جرّب البرمجة بالسحب والإفلات",
        src: "Scratch",
        url: "https://scratch.mit.edu/",
      },
      { t: "drive", title: "تمارين تفكير", src: "Google Drive", url: "" },
    ],
  },
  {
    icon: "code",
    title: "أول لغة برمجة",
    desc: "المتغيرات والشروط، وأول سكريبت عملي تكتبه بإيدك.",
    intro: "أول برنامج يشتغل معاك هتفتكره طول عمرك.",
    img: "",
    items: [
      {
        t: "video",
        title: "تعلم بايثون من الصفر",
        src: "YouTube",
        url: yt("تعلم بايثون من الصفر بالعربي"),
      },
      {
        t: "article",
        title: "Python Tutorial",
        src: "W3Schools",
        url: "https://www.w3schools.com/python/",
      },
      { t: "drive", title: "تمارين وحلولها", src: "Google Drive", url: "" },
    ],
  },
  {
    icon: "sync",
    title: "التكرار والدوال",
    desc: "Loops و Functions: خلّي الكود ينفذ آلاف المهام ويعيد استخدام نفسه.",
    intro: "هنا الكود يبدأ يشتغل بدالك.",
    img: "",
    items: [
      {
        t: "video",
        title: "Loops و Functions في بايثون",
        src: "YouTube",
        url: yt("Loops و Functions بايثون شرح بالعربي"),
      },
      {
        t: "article",
        title: "Python Functions",
        src: "W3Schools",
        url: "https://www.w3schools.com/python/python_functions.asp",
      },
      {
        t: "drive",
        title: "مشاريع صغيرة للتطبيق",
        src: "Google Drive",
        url: "",
      },
    ],
  },
  {
    icon: "fork_right",
    title: "Git و GitHub",
    desc: "احفظ مشاريعك في السحابة، وارجع في أي غلطة، واشتغل مع غيرك.",
    intro: "كل مبرمج محترف بيستخدمهم كل يوم.",
    img: "",
    items: [
      {
        t: "video",
        title: "Git و GitHub للمبتدئين",
        src: "YouTube",
        url: yt("Git و GitHub للمبتدئين بالعربي"),
      },
      {
        t: "article",
        title: "تعلّم الـ Git بشكل تفاعلي",
        src: "Learn Git Branching",
        url: "https://learngitbranching.js.org/",
      },
      {
        t: "article",
        title: "Hello World على GitHub",
        src: "GitHub Docs",
        url: "https://docs.github.com/en/get-started/start-your-journey/hello-world",
      },
      { t: "drive", title: "ورقة أوامر Git", src: "Google Drive", url: "" },
    ],
  },
];

const TRACKS = [
  {
    icon: "web",
    n: "Front-end",
    d: "واجهات المواقع اللي الناس بتشوفها",
    u: "https://roadmap.sh/frontend",
  },
  {
    icon: "dns",
    n: "Back-end",
    d: "السيرفرات وقواعد البيانات",
    u: "https://roadmap.sh/backend",
  },
  {
    icon: "smartphone",
    n: "تطبيقات الموبايل",
    d: "تطبيقات أندرويد و iOS",
    u: "https://roadmap.sh/android",
  },
  {
    icon: "psychology",
    n: "ذكاء اصطناعي وبيانات",
    d: "خلّي الكمبيوتر يتعلم",
    u: "https://roadmap.sh/ai-data-scientist",
  },
  {
    icon: "shield",
    n: "أمن المعلومات",
    d: "احمي الأنظمة من الاختراق",
    u: "https://roadmap.sh/cyber-security",
  },
  {
    icon: "sports_esports",
    n: "تطوير الألعاب",
    d: "اعمل لعبتك بنفسك",
    u: "https://roadmap.sh/game-developer",
  },
  {
    icon: "brush",
    n: "UI / UX",
    d: "تصميم تجربة المستخدم",
    u: "https://roadmap.sh/ux-design",
  },
];

const COMMUNITY = [
  { icon: "send", n: "تيليجرام", u: "#" },
  { icon: "chat", n: "واتساب", u: "#" },
  { icon: "forum", n: "ديسكورد", u: "#" },
];
