// Translation content for different languages
export const translations = {
  en: {
    greeting: "Hi, I'm Osama Ahmaro",
    title: "Senior Full Stack Engineer",
    description: "Experienced Full Stack Software Engineer with 6+ years delivering user-centric applications that scale. Led development of core products adopted by thousands of users. Expert in React ecosystem and modern web technologies, passionate about building efficient, scalable solutions that drive business impact.",
    experience: {
      title: "Experience",
      subtitle: "I have worked with some of the most innovative industry leaders to help build their top-notch products.",
      positions: {
        senior: "Senior Full Stack Engineer",
        fullstack: "Full Stack Engineer"
      },
      companies: {
        mavens: "@Mavens, a Zynga company",
        khealth: "@KHealth", 
        hyperguest: "@HyperGuest",
        sakani: "@Sakani"
      }
    },
    languages: {
      title: "Languages",
      subtitle: "Multilingual communication skills that help me connect with diverse teams and clients worldwide.",
      levels: {
        native: "(Native)",
        fluent: "(Fluent)", 
        foundation: "(Foundation)"
      },
      languageNames: {
        arabic: "Arabic",
        english: "English",
        hebrew: "Hebrew"
      }
    }
  },
  ar: {
    greeting: "مرحباً، أنا أسامة أحمرو",
    title: "مهندس برمجيات متقدم",
    description: "مهندس برمجيات متقدم ذو خبرة تزيد عن 6 سنوات في تطوير التطبيقات التي تركز على المستخدم وتتوسع. قمت بقيادة تطوير المنتجات الأساسية التي تم اعتمادها من قبل آلاف المستخدمين. خبير في نظام React والتقنيات الحديثة للويب، شغوف ببناء حلول فعالة وقابلة للتوسع تحقق تأثيراً تجارياً.",
    experience: {
      title: "الخبرة",
      subtitle: "لقد عملت مع بعض من أكثر قادة الصناعة ابتكاراً لمساعدتهم في بناء منتجاتهم عالية الجودة.",
      positions: {
        senior: "مهندس برمجيات متقدم",
        fullstack: "مهندس برمجيات"
      },
      companies: {
        mavens: "@Mavens، شركة Zynga",
        khealth: "@KHealth",
        hyperguest: "@HyperGuest", 
        sakani: "@Sakani"
      }
    },
    languages: {
      title: "اللغات",
      subtitle: "مهارات التواصل متعددة اللغات التي تساعدني في التواصل مع الفرق والعملاء المتنوعين حول العالم.",
      levels: {
        native: "(أم)",
        fluent: "(بطلاقة)",
        foundation: "(أساسي)"
      },
      languageNames: {
        arabic: "العربية",
        english: "الإنجليزية",
        hebrew: "العبرية"
      }
    }
  },
  he: {
    greeting: "שלום, אני אוסמה אחמרו",
    title: "מהנדס תוכנה בכיר",
    description: "מהנדס תוכנה בכיר עם ניסיון של יותר מ-6 שנים בפיתוח יישומים המתמקדים במשתמש ומתרחבים. הובלתי פיתוח מוצרי ליבה שאומצו על ידי אלפי משתמשים. מומחה במערכת React ובטכנולוגיות אינטרנט מודרניות, נלהב לבנות פתרונות יעילים וניתנים להרחבה שמניבים השפעה עסקית.",
    experience: {
      title: "ניסיון",
      subtitle: "עבדתי עם כמה מהמנהיגים החדשניים ביותר בתעשייה כדי לעזור להם לבנות את המוצרים הטובים ביותר שלהם.",
      positions: {
        senior: "מהנדס תוכנה בכיר",
        fullstack: "מהנדס תוכנה"
      },
      companies: {
        mavens: "@Mavens, חברת Zynga",
        khealth: "@KHealth",
        hyperguest: "@HyperGuest",
        sakani: "@Sakani"
      }
    },
    languages: {
      title: "שפות",
      subtitle: "כישורי תקשורת רב-לשוניים שעוזרים לי להתחבר עם צוותים ולקוחות מגוונים ברחבי העולם.",
      levels: {
        native: "(שפת אם)",
        fluent: "(שוטף)",
        foundation: "(יסודי)"
      },
      languageNames: {
        arabic: "ערבית",
        english: "אנגלית",
        hebrew: "עברית"
      }
    }
  }
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.en;
