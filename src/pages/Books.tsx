import MediaCard from "@/components/MediaCard";
import { Download } from "lucide-react";
import headerBooks from "@/assets/header-books.jpg";

const Books = () => {
  const books = [
    { title: "De Vliegeraar", author: "Khaled Hosseini", downloadUrl: "https://ourlibrary.us/books/kite-runner.pdf" },
    { title: "Duizend Schitterende Zonnen", author: "Khaled Hosseini", downloadUrl: "https://ourlibrary.us/books/thousand-suns.pdf" },
    { title: "En de Bergen Weergalmden", author: "Khaled Hosseini", downloadUrl: "https://ourlibrary.us/books/mountains-echoed.pdf" },
    { title: "Afghanistan: A Cultural History", author: "Hamid Naweed", downloadUrl: "https://ourlibrary.us/books/cultural-history.pdf" },
    { title: "Dari Literature", author: "Ahmad Shah Durrani", downloadUrl: "https://ourlibrary.us/books/dari-literature.pdf" },
    { title: "Pashto Poetry Collection", author: "Khushal Khan Khattak", downloadUrl: "https://ourlibrary.us/books/pashto-poetry.pdf" },
    { title: "Afghan Folk Tales", author: "Traditional", downloadUrl: "https://ourlibrary.us/books/folk-tales.pdf" },
    { title: "History of Afghanistan", author: "M.H. Kakar", downloadUrl: "https://ourlibrary.us/books/history.pdf" },
    { title: "Rumi - Collected Works", author: "Jalal ad-Din Rumi", downloadUrl: "https://ourlibrary.us/books/rumi.pdf" },
    { title: "Afghan Proverbs", author: "Traditional", downloadUrl: "https://ourlibrary.us/books/proverbs.pdf" },
    { title: "The Pearl of Dari", author: "Maulana Jami", downloadUrl: "https://ourlibrary.us/books/pearl-dari.pdf" },
    { title: "Shahnameh", author: "Ferdowsi", downloadUrl: "https://ourlibrary.us/books/shahnameh.pdf" },
    { title: "Afghan Cuisine", author: "Nafisa Sekandari", downloadUrl: "https://ourlibrary.us/books/cuisine.pdf" },
    { title: "Poetry of Rahman Baba", author: "Rahman Baba", downloadUrl: "https://ourlibrary.us/books/rahman-baba.pdf" },
    { title: "Kabul Beauty School", author: "Deborah Rodriguez", downloadUrl: "https://ourlibrary.us/books/beauty-school.pdf" },
    { title: "The Places in Between", author: "Rory Stewart", downloadUrl: "https://ourlibrary.us/books/places-between.pdf" },
    { title: "West of Kabul", author: "Tamim Ansary", downloadUrl: "https://ourlibrary.us/books/west-kabul.pdf" },
    { title: "Confessions of a Mullah Warrior", author: "Masood Farivar", downloadUrl: "https://ourlibrary.us/books/mullah-warrior.pdf" },
    { title: "An Unexpected Light", author: "Jason Elliot", downloadUrl: "https://ourlibrary.us/books/unexpected-light.pdf" },
    { title: "The Sewing Circles of Herat", author: "Christina Lamb", downloadUrl: "https://ourlibrary.us/books/sewing-circles.pdf" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-28">
      {/* Hero Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={headerBooks} 
          alt="Books Library" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" dir="rtl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground drop-shadow-lg">
              <span className="text-gradient">کتابخانه</span>
            </h1>
            <p className="text-lg text-foreground/80 drop-shadow-md">
              کتاب‌ها را رایگان دانلود کنید
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Download hint */}
        <div className="flex items-center justify-center gap-2 mb-8 text-secondary" dir="rtl">
          <Download className="w-5 h-5" />
          <span className="font-medium">برای دانلود روی کتاب کلیک کنید</span>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {books.map((book, index) => (
            <div key={index} className="relative">
              <MediaCard
                title={book.title}
                type="book"
                downloadUrl={book.downloadUrl}
              />
              <p className="text-xs text-muted-foreground mt-1 text-center truncate px-2">
                {book.author}
              </p>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center">
          <div className="gradient-card p-8 rounded-2xl border border-border max-w-2xl mx-auto" dir="rtl">
            <h2 className="text-xl font-bold mb-4">درباره کتابخانه ما</h2>
            <p className="text-muted-foreground mb-4">
              کتابخانه ما شامل بیش از ۲۰۰ کتاب در مورد فرهنگ، تاریخ، ادبیات و شعر افغانستان است. از آثار کلاسیک مولانا و فردوسی تا رمان‌های مدرن خالد حسینی.
            </p>
            <a 
              href="https://ourlibrary.us" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors"
            >
              برای کتاب‌های بیشتر به ourlibrary.us مراجعه کنید ←
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;