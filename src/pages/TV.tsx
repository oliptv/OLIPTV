import { useState } from "react";
import ChannelCard from "@/components/ChannelCard";
import headerTv from "@/assets/header-tv.jpg";

type Category = "all" | "news" | "sport" | "entertainment";

const TV = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const channels = [
    // Sport Channels (First)
    { name: "Solh Sport", category: "sport" as const, streamUrl: "https://stream.snexus.co/live/SN_WILDLIFE/index.m3u8" },
    { name: "Persiana Sport", category: "sport" as const, streamUrl: "https://spstr.abntv.live/hls/psstream.m3u8" },
    { name: "Futbol", category: "sport" as const, streamUrl: "https://live.teleradiocom.tj/8/3m.m3u8" },
    { name: "All Sport", category: "sport" as const, streamUrl: "https://proshls.wns.live/hls/stream.m3u8" },
    { name: "Varzesh9", category: "sport" as const, streamUrl: "https://gg.hls2.xyz/live/irib-varzesh/chunks.m3u8" },
    { name: "Varzish", category: "sport" as const, streamUrl: "https://gg.hls2.xyz/live/IR%20-%20Varzish%20TV/chunks.m3u8" },
    { name: "Tolo Sport", category: "sport" as const, streamUrl: "https://fflivetolotv.b-cdn.net/media_0.m3u8" },
    { name: "Lemar Sport", category: "sport" as const, streamUrl: "https://cdn.lemartv.com/live/lemartv/index.m3u8" },
    { name: "1TV Sport", category: "sport" as const, streamUrl: "https://1tv.com.af/live/1tv.m3u8" },
    { name: "Ariana Sport", category: "sport" as const, streamUrl: "https://d10rltuy0iweup.cloudfront.net/ARIANANEWS/myStream/playlist.m3u8" },
    { name: "Afghan Sport TV", category: "sport" as const, streamUrl: "https://stream.afghansport.af/live/stream.m3u8" },
    { name: "Shamshad Sport", category: "sport" as const, streamUrl: "https://shamshadtv.com/live/shamshad.m3u8" },
    { name: "Kabul Sport", category: "sport" as const, streamUrl: "https://stream.kabulsport.af/live/stream.m3u8" },
    { name: "APL Sports", category: "sport" as const, streamUrl: "https://stream.apl.af/live/stream.m3u8" },
    { name: "ACB Cricket TV", category: "sport" as const, streamUrl: "https://stream.acb.af/live/cricket.m3u8" },
    
    // News Channels (Second) - Sorted by priority
    { name: "Afghanistan International", category: "news" as const, streamUrl: "https://hls.afintl.com/hls/stream.m3u8" },
    { name: "BBC Persian", category: "news" as const, streamUrl: "https://vs-hls-pushb-ww-live.akamaized.net/x=4/i=urn:bbc:pips:service:bbc_persian_tv/t=3840/v=pv14/b=5070016/main.m3u8" },
    { name: "Iran International", category: "news" as const, streamUrl: "https://live.playstop.me/1816184091/index.m3u8" },
    { name: "VOA Farsi", category: "news" as const, streamUrl: "https://voa-ingest.akamaized.net/hls/live/2033876/tvmc07/playlist.m3u8" },
    { name: "Tolo TV", category: "news" as const, streamUrl: "https://fflivetolotv.b-cdn.net/media_0.m3u8" },
    { name: "Tolo News", category: "news" as const, streamUrl: "https://fflivetolonews.b-cdn.net/media_0.m3u8" },
    { name: "Ariana News", category: "news" as const, streamUrl: "https://d10rltuy0iweup.cloudfront.net/ARIANANEWS/myStream/playlist.m3u8" },
    { name: "1TV News", category: "news" as const, streamUrl: "https://1tv.com.af/live/1tv.m3u8" },
    { name: "Shamshad TV News", category: "news" as const, streamUrl: "https://shamshadtv.com/live/shamshad.m3u8" },
    { name: "Khurshid TV News", category: "news" as const, streamUrl: "https://khurshidtv.af/live/stream.m3u8" },
    { name: "Lemar News", category: "news" as const, streamUrl: "https://cdn.lemartv.com/live/lemartv/index.m3u8" },
    { name: "TOLOnews 24", category: "news" as const, streamUrl: "https://fflivetolonews.b-cdn.net/media_0.m3u8" },
    { name: "Zan TV News", category: "news" as const, streamUrl: "https://zantv.af/live/stream.m3u8" },
    { name: "ATN News", category: "news" as const, streamUrl: "https://atn.af/live/stream.m3u8" },
    { name: "Mitra TV", category: "news" as const, streamUrl: "https://mitratv.af/live/stream.m3u8" },
    { name: "Tamadon TV", category: "news" as const, streamUrl: "https://tamadontv.af/live/stream.m3u8" },
    
    // Entertainment Channels
    { name: "Tolo TV", category: "entertainment" as const, streamUrl: "https://fflivetolotv.b-cdn.net/media_0.m3u8" },
    { name: "Ariana TV", category: "entertainment" as const, streamUrl: "https://d10rltuy0iweup.cloudfront.net/ARIANANEWS/myStream/playlist.m3u8" },
    { name: "1TV Afghanistan", category: "entertainment" as const, streamUrl: "https://1tv.com.af/live/1tv.m3u8" },
    { name: "Lemar TV", category: "entertainment" as const, streamUrl: "https://cdn.lemartv.com/live/lemartv/index.m3u8" },
    { name: "Shamshad TV", category: "entertainment" as const, streamUrl: "https://shamshadtv.com/live/shamshad.m3u8" },
    { name: "Khurshid TV", category: "entertainment" as const, streamUrl: "https://khurshidtv.af/live/stream.m3u8" },
    { name: "RTA TV", category: "entertainment" as const, streamUrl: "https://rta.org.af/live/rta.m3u8" },
    { name: "Kawoon TV", category: "entertainment" as const, streamUrl: "https://kawoontv.af/live/stream.m3u8" },
  ];

  const categories: { value: Category; label: string; labelFa: string }[] = [
    { value: "all", label: "Alle Kanalen", labelFa: "همه کانال‌ها" },
    { value: "sport", label: "Sport", labelFa: "ورزش" },
    { value: "news", label: "Nieuws", labelFa: "اخبار" },
    { value: "entertainment", label: "Entertainment", labelFa: "سرگرمی" },
  ];

  const filteredChannels = activeCategory === "all" 
    ? channels 
    : channels.filter(ch => ch.category === activeCategory);

  return (
    <div className="min-h-screen pt-28 pb-28">
      {/* Hero Header */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img 
          src={headerTv} 
          alt="Live TV" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center" dir="rtl">
            <h1 className="text-3xl md:text-5xl font-bold mb-2 text-foreground drop-shadow-lg">
              تلویزیون <span className="text-gradient">زنده</span>
            </h1>
            <p className="text-lg text-foreground/80 drop-shadow-md">
              بیش از ۳۰ کانال را زنده تماشا کنید
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-primary text-primary-foreground glow-red"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              <span className="block text-sm">{cat.labelFa}</span>
              <span className="block text-xs opacity-70">{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Channel Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredChannels.map((channel, index) => (
            <ChannelCard
              key={index}
              name={channel.name}
              category={channel.category}
              streamUrl={channel.streamUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TV;