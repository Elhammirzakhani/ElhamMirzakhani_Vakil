import { BusinessConfig } from '../types';

const rawPhone = "09131803538";
const internationalPhone = "+989131803538";
const whatsappDigits = "989131803538";
const whatsappMessage = "سلام، برای دریافت مشاوره حقوقی با شما تماس می‌گیرم.";

export const businessConfig: BusinessConfig = {
  attorney: {
    fullName: "الهام میرزاخانی",
    englishName: "Elham Mirzakhani",
    title: "وکیل پایه یک دادگستری",
    barAssociation: "کانون وکلای دادگستری",
    licenseNumber: "۴۳۱",
    avatarUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB2-rPRWGTXCh4c0mVsPtv-KOuO0y7tW5LJzs6xMLYKA1iKjIYlk1wCfFmaiWGWgp771sFUwWzJ2Wps57oyTWO34HS8SDi0tUPQ_1g2gKI71G6XhVgKGOzuyP-MZZ9i2fNvptzTZix-WrL8MRv8dXcPhSMji0Rnvm_OBTmumDr2tP-eLR6m4XjGn2HVEU0W0QxDw_MtAptSdhaBBBNdiCJloXydEZ1R5auxq4C1WMTBC-zgNvdpOUzdpk1mZQCP_ldDJw",
    licenseImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlDWL5iOpgWETq4QWpCY4kQa4NgUnjCxv5MOzBzO43QNzd90HklIlMLCy02VFWXRWUyC9sIxvXaUNHzy6jJLELCmnBFTTU5L3jX7-ANt6szSfUt_H9uBAryBK4dd7WgIRfHqM_baHXYSeSD7BWIDJHZ5wFvZOPZMVQhSpJ1-_6IeFXCjcjWKTgyxKzwuB0NCAo2kvZUwoHU4Soi0rmq_27Syo_7yHQEGR3biT-JN6hdFAFSVgcQCZKdFo8Hm5tUbA0Mg",
    biography: {
      headline: "تعهد، شفافیت و پیگیری حرفه‌ای حقوقی",
      lead: "ارائه خدمات حقوقی و پیگیری دعاوی در حوزه‌های حقوقی، کیفری، خانواده و ثبتی، با رویکردی مبتنی بر دقت، مسئولیت‌پذیری و رعایت اصول حرفه‌ای وکالت.",
      fullText: "دفتر وکالت الهام میرزاخانی، وکیل پایه یک دادگستری با پروانه شماره ۴۳۱ در شهرکرد، با تمرکز بر تعهد اخلاقی، دقت نظر در مطالعه اسناد و پیگیری مستمر دعاوی مراجعین فعالیت می‌نماید. اصول بنیادین این دفتر، شفافیت در ارائه مشاوره حقوقی، رازداری حرفه‌ای، و پرهیز از دادن وعده‌های غیرواقعی بوده و تمامی اقدامات با اتکا به موازین قانونی و منافع مشروع موکل صورت می‌پذیرد.",
      coreValues: [
        {
          title: "رازداری و امانتداری",
          desc: "حفظ کامل محرمانگی اطلاعات، اسناد و اسرار حقوقی موکلین در تمامی مراحل رسیدگی.",
          icon: "confidentiality"
        },
        {
          title: "شفافیت و صداقت حقوقی",
          desc: "تبیین شفاف مسیر قانونی، شانس موفقیت و پرهیز از وعده‌های غیرواقعی و غیرحقوقی.",
          icon: "transparency"
        },
        {
          title: "دقت در مطالعه اسناد",
          desc: "بررسی جامع پرونده‌ها، تدوین لوایح تخصصی و دفاع مستدل در محاکم دادگستری.",
          icon: "documents"
        },
        {
          title: "پیگیری مستمر دعاوی",
          desc: "حضور مؤثر در جلسات دادگاه و اطلاع‌رسانی منظم به موکل از روند پیشرفت پرونده.",
          icon: "followup"
        }
      ]
    }
  },
  contact: {
    phoneDisplay: "۰۹۱۳ ۱۸۰ ۳۵۳۸",
    phoneInternational: "+98 913 180 3538",
    telUri: `tel:${internationalPhone}`,
    whatsappNumber: "۰۹۱۳ ۱۸۰ ۳۵۳۸",
    whatsappDigits,
    whatsappPrefillMessage: whatsappMessage,
    whatsappUrl: `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(whatsappMessage)}`,
    email: "contact@elham-mirzakhani.ir",
    emailUri: "mailto:contact@elham-mirzakhani.ir",
    address: "استان چهارمحال و بختیاری، شهرکرد، چهارراه فصیحی، ساختمان امام حسین، طبقه اول",
    city: "شهرکرد",
    province: "چهارمحال و بختیاری",
    workingHours: "عصرها از ساعت ۱۷:۰۰ الی ۲۰:۰۰",
    workingDays: "شنبه تا چهارشنبه",
    workingHoursShort: "۱۷:۰۰ تا ۲۰:۰۰",
    appointmentNote: "مراجعات حضوری صرفاً با هماهنگی تلفنی قبلی جهت مطالعه دقیق پرونده و مدارک انجام می‌گردد.",
    mapsCoordinates: {
      lat: 32.3276,
      lng: 50.8596
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=32.3276,50.8596",
    mapsEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=50.8520%2C32.3240%2C50.8670%2C32.3310&layer=mapnik&marker=32.3276%2C50.8596",
    social: {
      instagramHandle: "@ellham.mirzakhani",
      instagramUrl: "https://instagram.com/ellham.mirzakhani"
    }
  },
  services: [
    {
      id: "civil",
      title: "دعاوی حقوقی",
      icon: "civil",
      description: "رسیدگی به اختلافات مالی، دعاوی ملکی و سرقفلی، دعاوی قراردادی، مطالبه وجه چک، سفته و اسناد تعهدآور، جبران خسارت و الزام به ایفای تعهدات.",
      details: [
        "دعاوی ملکی، تصرف عدوانی، خلع ید و الزام به تنظیم سند رسمی",
        "مطالبه مطالبات مالی، چک، سفته و اسناد تجاری و تعهدآور",
        "تفسیر، فسخ، ابطال و تنظیم قراردادهای مدنی و تجاری",
        "مطالبه خسارت‌های قراردادی، عدم‌النفع و جبران ضرر و زیان"
      ],
      scope: "قبول وکالت و مشاوره"
    },
    {
      id: "criminal",
      title: "دعاوی کیفری",
      icon: "criminal",
      description: "مشاوره و وکالت در دعاوی و شکایات کیفری از قبیل کلاهبرداری، خیانت در امانت، انتقال مال غیر، جعل و استفاده از سند مجعول و جرایم مالی.",
      details: [
        "وکالت در پرونده‌های کلاهبرداری، تحصیل مال نامشروع و انتقال مال غیر",
        "رسیدگی به جرایم خیانت در امانت، سرقت و تخریب اموال",
        "جعل اسناد عادی و رسمی و استفاده از سند مجعول",
        "تنظیم دقیق شکواییه، لوایح دفاعیه و اعتراض به قرارها و آرای دادگاه"
      ],
      scope: "قبول وکالت و مشاوره"
    },
    {
      id: "family",
      title: "دعاوی خانواده",
      icon: "family",
      description: "مشاوره تخصصی و پیگیری امور حقوقی خانواده، طلاق، مهریه، نفقه، حضانت فرزندان، امور حجر و سرپرستی و ترکه و تقسیم ارث.",
      details: [
        "مطالبه مهریه، نفقه زوجه و فرزندان، و اجرت‌المثل ایام زوجیت",
        "دعاوی طلاق (توافقی، به درخواست زوج یا زوجه) و فسخ نکاح",
        "تعیین حضانت، ملاقات فرزندان و سلب حضانت قانونی",
        "انحصار وراثت، تحریر و تقسیم ماترک و تصفیه ترکه متوفی"
      ],
      scope: "قبول وکالت و مشاوره"
    },
    {
      id: "registration",
      title: "دعاوی ثبتی",
      icon: "registration",
      description: "پیگیری دعاوی مربوط به اسناد مالکیت، ثبت املاک، اجرای مفاد اسناد رسمی لازم‌الاجرا، تحدید حدود و حل اختلافات و تعارضات ثبتی.",
      details: [
        "پیگیری اجرای اسناد رسمی لازم‌الاجرا از طریق اجرای ثبت",
        "اعتراض به ثبت ملک، تحدید حدود و افراز و تفکیک املاک مشاع",
        "ابطال اسناد رسمی مالکیت معارض و اسناد انتقال باطل",
        "حل اختلافات ثبتی در هیئت‌های نظارت و شورای عالی ثبت"
      ],
      scope: "قبول وکالت و مشاوره"
    }
  ]
};
