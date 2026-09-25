import { BusinessConfig } from '../types';

const internationalPhone = "+989131803538";
const whatsappDigits = "989131803538";
const whatsappMessage = "سلام، برای دریافت مشاوره حقوقی با شما تماس می‌گیرم.";

const workingDays = "شنبه تا چهارشنبه";
const workingHoursShort = "۱۷:۰۰ تا ۲۰:۰۰";
const address = "استان چهارمحال و بختیاری، شهرکرد، چهارراه فصیحی، ساختمان امام حسین، طبقه اول";
const appointmentNote = "مراجعات حضوری صرفاً با هماهنگی تلفنی قبلی جهت مطالعه دقیق پرونده و مدارک انجام می‌گردد.";

export const businessConfig: BusinessConfig = {
  siteUrl: "https://www.elhammirzakhani.ir",
  attorney: {
    fullName: "الهام میرزاخانی",
    englishName: "Elham Mirzakhani",
    title: "وکیل پایه یک دادگستری",
    barAssociation: "کانون وکلای دادگستری",
    licenseNumber: "۴۳۱",
    portrait: {
      srcSet: "/images/elham-mirzakhani-480.webp 480w, /images/elham-mirzakhani-768.webp 768w, /images/elham-mirzakhani-1024.webp 1024w",
      fallbackSrc: "/images/elham-mirzakhani-1024.jpg",
      width: 1024,
      height: 1536,
    },
    officeDetailUrl: "/images/office-detail.webp",
    licenseImageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlDWL5iOpgWETq4QWpCY4kQa4NgUnjCxv5MOzBzO43QNzd90HklIlMLCy02VFWXRWUyC9sIxvXaUNHzy6jJLELCmnBFTTU5L3jX7-ANt6szSfUt_H9uBAryBK4dd7WgIRfHqM_baHXYSeSD7BWIDJHZ5wFvZOPZMVQhSpJ1-_6IeFXCjcjWKTgyxKzwuB0NCAo2kvZUwoHU4Soi0rmq_27Syo_7yHQEGR3biT-JN6hdFAFSVgcQCZKdFo8Hm5tUbA0Mg",
    biography: {
      headline: "تعهد، شفافیت و پیگیری حرفه‌ای حقوقی",
      lead: "ارائه خدمات حقوقی و پیگیری دعاوی در حوزه‌های حقوقی، کیفری، خانواده و ثبتی، با رویکردی دقیق، مسئولانه و مبتنی بر اصول حرفه‌ای وکالت.",
      paragraphs: [
        "دفتر وکالت الهام میرزاخانی، وکیل پایه یک دادگستری با پروانه شماره ۴۳۱ در شهرکرد، با تمرکز بر تعهد اخلاقی، دقت در مطالعه اسناد و پیگیری مستمر دعاوی موکلین فعالیت می‌کند.",
        "شفافیت در مشاوره، رازداری حرفه‌ای و پرهیز از وعده‌های غیرواقعی، اصول این دفتر است و همه اقدامات بر پایه موازین قانونی و منافع مشروع موکل انجام می‌شود.",
      ],
      coreValues: [
        {
          title: "رازداری و امانتداری",
          desc: "حفظ کامل محرمانگی اطلاعات و اسناد موکلین در تمامی مراحل رسیدگی.",
          icon: "confidentiality"
        },
        {
          title: "شفافیت در مشاوره",
          desc: "تبیین شفاف مسیر قانونی و پرهیز از وعده‌های غیرواقعی.",
          icon: "transparency"
        },
        {
          title: "بررسی دقیق اسناد",
          desc: "مطالعه جامع پرونده، تدوین لوایح و دفاع مستدل در محاکم.",
          icon: "documents"
        },
        {
          title: "پیگیری مسئولانه پرونده‌ها",
          desc: "حضور در جلسات دادگاه و اطلاع‌رسانی منظم از روند پرونده.",
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
    address,
    shortAddress: "شهرکرد، چهارراه فصیحی",
    city: "شهرکرد",
    province: "چهارمحال و بختیاری",
    workingHours: "عصرها از ساعت ۱۷:۰۰ الی ۲۰:۰۰",
    workingDays,
    workingHoursShort,
    appointmentNote,
    mapsCoordinates: {
      lat: 32.3276,
      lng: 50.8596
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=32.3276,50.8596",
    mapsEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=50.8520%2C32.3240%2C50.8670%2C32.3310&layer=mapnik&marker=32.3276%2C50.8596",
    social: {
      instagramHandle: "@ellham.mirzakhani",
      instagramUrl: "https://www.instagram.com/ellham.mirzakhani/"
    }
  },
  services: [
    {
      id: "civil",
      title: "دعاوی حقوقی",
      icon: "civil",
      summary: "قراردادها، مطالبات مالی و دعاوی ملکی",
      description: "رسیدگی به اختلافات مالی، دعاوی ملکی و سرقفلی، دعاوی قراردادی، مطالبه وجه چک، سفته و اسناد تعهدآور، جبران خسارت و الزام به ایفای تعهدات.",
      detailGroups: [
        {
          items: [
            "دعاوی ملکی، تصرف عدوانی، خلع ید و الزام به تنظیم سند رسمی",
            "مطالبه مطالبات مالی، چک، سفته و اسناد تجاری و تعهدآور",
            "تفسیر، فسخ، ابطال و تنظیم قراردادهای مدنی و تجاری",
            "مطالبه خسارت‌های قراردادی، عدم‌النفع و جبران ضرر و زیان"
          ]
        }
      ],
      scope: "قبول وکالت و مشاوره"
    },
    {
      id: "criminal",
      title: "دعاوی کیفری",
      icon: "criminal",
      summary: "مشاوره و پیگیری شکایات و دعاوی کیفری",
      description: "مشاوره و وکالت در دعاوی و شکایات کیفری از قبیل کلاهبرداری، خیانت در امانت، انتقال مال غیر، جعل و استفاده از سند مجعول و جرایم مالی.",
      detailGroups: [
        {
          items: [
            "وکالت در پرونده‌های کلاهبرداری، تحصیل مال نامشروع و انتقال مال غیر",
            "رسیدگی به جرایم خیانت در امانت، سرقت و تخریب اموال",
            "جعل اسناد عادی و رسمی و استفاده از سند مجعول",
            "تنظیم دقیق شکواییه، لوایح دفاعیه و اعتراض به قرارها و آرای دادگاه"
          ]
        }
      ],
      scope: "قبول وکالت و مشاوره"
    },
    {
      id: "family-registration",
      title: "خانواده و ثبتی",
      icon: "family",
      summary: "طلاق، حضانت، مهریه، ارث و امور ثبتی",
      description: "پیگیری امور حقوقی خانواده شامل طلاق، مهریه، نفقه، حضانت و ترکه، و دعاوی مربوط به اسناد مالکیت، ثبت املاک و اجرای اسناد رسمی لازم‌الاجرا.",
      detailGroups: [
        {
          title: "دعاوی خانواده",
          items: [
            "مطالبه مهریه، نفقه زوجه و فرزندان، و اجرت‌المثل ایام زوجیت",
            "دعاوی طلاق (توافقی، به درخواست زوج یا زوجه) و فسخ نکاح",
            "تعیین حضانت، ملاقات فرزندان و سلب حضانت قانونی",
            "انحصار وراثت، تحریر و تقسیم ماترک و تصفیه ترکه متوفی"
          ]
        },
        {
          title: "دعاوی ثبتی",
          items: [
            "پیگیری اجرای اسناد رسمی لازم‌الاجرا از طریق اجرای ثبت",
            "اعتراض به ثبت ملک، تحدید حدود و افراز و تفکیک املاک مشاع",
            "ابطال اسناد رسمی مالکیت معارض و اسناد انتقال باطل",
            "حل اختلافات ثبتی در هیئت‌های نظارت و شورای عالی ثبت"
          ]
        }
      ],
      scope: "قبول وکالت و مشاوره"
    }
  ],
  faqs: [
    {
      question: "آیا می‌توانم از طریق سایت درخواست مشاوره ثبت کنم؟",
      answer: "خیر. برای حفظ رازداری و امنیت اسناد، در سایت فرم ثبت‌نامی وجود ندارد و درخواست مشاوره فقط از طریق تماس تلفنی مستقیم با وکیل یا ارسال پیام در واتس‌اپ انجام می‌شود."
    },
    {
      question: "آیا در شهرکرد وکیل خانم برای دعاوی خانواده در دسترس است؟",
      answer: "بله. الهام میرزاخانی، وکیل پایه یک دادگستری در شهرکرد، در دعاوی خانواده از جمله طلاق، مهریه، نفقه و حضانت، و همچنین دعاوی حقوقی، کیفری و ثبتی مشاوره می‌دهد و وکالت می‌پذیرد."
    },
    {
      question: "آیا بدون هماهنگی قبلی می‌توانم به دفتر مراجعه کنم؟",
      answer: appointmentNote
    },
    {
      question: "ساعات پذیرش دفتر چه زمانی است؟",
      answer: `${workingDays}، عصرها از ساعت ${workingHoursShort}.`
    },
    {
      question: "وکالت در چه زمینه‌هایی پذیرفته می‌شود؟",
      answer: "دعاوی حقوقی، کیفری، خانواده و ثبتی. جزئیات موضوعات هر حوزه در بخش خدمات حقوقی آمده است."
    },
    {
      question: "نشانی دفتر وکالت کجاست؟",
      answer: address
    }
  ]
};
