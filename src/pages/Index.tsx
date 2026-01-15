import { Link } from "react-router-dom";
import { Tv, Film, BookOpen, Heart } from "lucide-react";
import heroImage from "@/assets/hero-afghanistan.jpg";
import headerTv from "@/assets/header-tv.jpg";
import movieCover from "@/assets/movie-cover.jpg";
import bookCover from "@/assets/book-cover.jpg";

const Index = () => {
  const features = [
    {
      icon: Tv,
      title: "تلویزیون زنده",
      titleNl: "Live TV",
      description: "بیش از ۳۰ کانال را زنده تماشا کنید",
      path: "/tv",
      image: headerTv,
    },
    {
      icon: Film,
      title: "فیلم و سریال",
      titleNl: "Movies & Series",
      description: "فیلم‌ها و سریال‌های بین‌المللی",
      path: "/movies",
      image: movieCover,
    },
    {
      icon: BookOpen,
      title: "کتابخانه",
      titleNl: "Books",
      description: "دانلود رایگان کتاب‌ها",
      path: "/books",
      image: bookCover,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-24">
      {/* Hero Section with Image */}
      <section className="relative">
        {/* Hero Image */}
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img 
            src={heroImage} 
            alt="Afghanistan landscape" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
          
          {/* Text overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4" dir="rtl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground drop-shadow-lg">
                به <span className="text-gradient">OLIPTV</span> خوش آمدید
              </h1>
              <p className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
                بهترین منبع سرگرمی شما
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 px-4 gradient-hero">
        <div className="container mx-auto max-w-4xl text-center" dir="rtl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            ما بیش از ۳۰ کانال تلویزیونی زنده، صدها فیلم و سریال، و مجموعه‌ای غنی از کتاب‌های فارسی و پشتو را برای شما فراهم کرده‌ایم. از اخبار روز گرفته تا ورزش، از فیلم‌های کلاسیک تا سریال‌های جدید، همه چیز در یک جا برای شما آماده است.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-14" dir="rtl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              خدمات <span className="text-gradient">ما</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              محتوای متنوع برای همه سلیقه‌ها
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Link
                key={feature.path}
                to={feature.path}
                className="gradient-card rounded-2xl border border-border hover:border-primary transition-all duration-300 group overflow-hidden"
                dir="rtl"
              >
                {/* Feature Image */}
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={feature.image} 
                    alt={feature.titleNl}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all">
                      <feature.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {feature.titleNl}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="gradient-card p-10 rounded-3xl border border-border text-center" dir="rtl">
            <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">درباره ما</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              OLIPTV با هدف حفظ و ترویج فرهنگ غنی افغانستان تأسیس شده است. ما تلاش می‌کنیم تا بهترین محتوای سرگرمی را برای هموطنان عزیز در سراسر جهان فراهم کنیم. از تلویزیون زنده گرفته تا کتاب‌های کلاسیک، همه چیز در اینجا برای شما آماده است.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              با حمایت شما، می‌توانیم این خدمات را گسترش دهیم و محتوای بیشتری اضافه کنیم. از حمایت شما سپاسگزاریم.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;