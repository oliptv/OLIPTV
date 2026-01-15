import MediaCard from "@/components/MediaCard";
import headerMovies from "@/assets/header-movies.jpg";
import titanicCover from "@/assets/titanic-cover.jpg";

const Movies = () => {
  const movies = [
    { title: "تایتانیک دوبله فارسی", year: "1997", rating: 7.9, streamUrl: "https://drive.internxt.com/file/90be859f-e1d3-4437-b33c-2dee32fd2c18", coverImage: titanicCover },
    { title: "Osama", year: "2003", rating: 7.3, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "The Kite Runner", year: "2007", rating: 7.6, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Buzkashi Boys", year: "2012", rating: 7.0, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "A Thousand Splendid Suns", year: "2022", rating: 7.4, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Afghan Star", year: "2009", rating: 7.5, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Sewing the Future", year: "2021", rating: 6.8, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "The Breadwinner", year: "2017", rating: 7.7, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Kabul Express", year: "2006", rating: 6.5, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Escape from Taliban", year: "2003", rating: 6.2, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Earth and Ashes", year: "2004", rating: 6.9, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Kandahar", year: "2001", rating: 6.6, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "What We Left Unfinished", year: "2019", rating: 6.7, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "In This World", year: "2002", rating: 7.2, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "The Black Tulip", year: "2010", rating: 7.0, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Love and Honor", year: "2018", rating: 6.4, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Afghan Dreams", year: "2020", rating: 6.8, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Hava, Maryam, Ayesha", year: "2019", rating: 7.1, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Three Dots", year: "2021", rating: 6.5, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "The Orphanage", year: "2019", rating: 6.9, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "A Letter to the President", year: "2017", rating: 6.6, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-28">
      {/* Hero Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={headerMovies} 
          alt="Movies" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" dir="rtl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground drop-shadow-lg">
              <span className="text-gradient">فیلم‌ها</span>
            </h1>
            <p className="text-lg text-foreground/80 drop-shadow-md">
              فیلم‌های بین‌المللی را تماشا کنید
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Movies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {movies.map((movie, index) => (
            <MediaCard
              key={index}
              title={movie.title}
              year={movie.year}
              rating={movie.rating}
              type="movie"
              streamUrl={movie.streamUrl}
              coverImage={movie.coverImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movies;