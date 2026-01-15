import MediaCard from "@/components/MediaCard";
import headerSeries from "@/assets/header-series.jpg";

const Series = () => {
  const series = [
    { title: "Rang-e-Ishq", year: "2023", rating: 8.1, episodes: 24, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Fatima", year: "2022", rating: 7.8, episodes: 18, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Dil-e-Zaraa", year: "2021", rating: 7.5, episodes: 20, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Khana-e-Ishq", year: "2023", rating: 7.9, episodes: 30, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Afghan Star", year: "2023", rating: 8.0, episodes: 12, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Sabza Maidaan", year: "2022", rating: 7.3, episodes: 16, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Roshan", year: "2021", rating: 7.6, episodes: 22, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Gulrukh", year: "2022", rating: 7.4, episodes: 28, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Shahzada", year: "2023", rating: 7.7, episodes: 15, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Zindagi Aur Qanoon", year: "2021", rating: 7.2, episodes: 26, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Ashq-e-Dil", year: "2022", rating: 7.8, episodes: 20, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Takht-e-Lahore", year: "2023", rating: 7.5, episodes: 32, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Kabul Dreams", year: "2022", rating: 7.6, episodes: 18, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Safar", year: "2021", rating: 7.1, episodes: 14, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
    { title: "Tamanna", year: "2023", rating: 7.9, episodes: 24, streamUrl: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-28">
      {/* Hero Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={headerSeries} 
          alt="Series" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" dir="rtl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground drop-shadow-lg">
              <span className="text-gradient">سریال‌ها</span>
            </h1>
            <p className="text-lg text-foreground/80 drop-shadow-md">
              سریال‌های محبوب را تماشا کنید
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Series Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {series.map((show, index) => (
            <MediaCard
              key={index}
              title={show.title}
              year={show.year}
              rating={show.rating}
              type="series"
              streamUrl={show.streamUrl}
              episodes={show.episodes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Series;