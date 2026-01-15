import { Play, Radio, X } from "lucide-react";
import { useHlsPlayer } from "@/hooks/useHlsPlayer";
import tvNews from "@/assets/tv-news.jpg";
import tvSport from "@/assets/tv-sport.jpg";
import tvEntertainment from "@/assets/tv-entertainment.jpg";

interface ChannelCardProps {
  name: string;
  category: "news" | "sport" | "entertainment";
  isLive?: boolean;
  streamUrl?: string;
}

const categoryImages = {
  news: tvNews,
  sport: tvSport,
  entertainment: tvEntertainment,
};

const categoryColors = {
  news: "bg-primary",
  sport: "bg-secondary",
  entertainment: "bg-accent",
};

const ChannelCard = ({ name, category, isLive = true, streamUrl }: ChannelCardProps) => {
  const { isPlaying, videoRef, play, close } = useHlsPlayer(streamUrl);

  return (
    <>
      <div className="channel-card p-3 md:p-4 border border-border group cursor-pointer" onClick={play}>
        <div className="flex items-start justify-between mb-2 md:mb-3">
          <span className={`px-2 py-1 text-xs font-medium rounded ${categoryColors[category]} text-primary-foreground`}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </span>
          {isLive && (
            <span className="flex items-center gap-1 text-xs text-primary">
              <Radio className="w-3 h-3 animate-pulse" />
              LIVE
            </span>
          )}
        </div>

        <div className="aspect-video bg-muted rounded-lg mb-2 md:mb-3 flex items-center justify-center overflow-hidden relative">
          <img src={categoryImages[category]} alt={category} className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
          <Play className={`w-10 h-10 md:w-12 md:h-12 relative z-10 transition-all ${streamUrl ? 'text-white group-hover:scale-125 group-hover:text-primary' : 'text-white/50'}`} />
        </div>

        <h3 className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors truncate">
          {name}
        </h3>
        {!streamUrl && <p className="text-xs text-muted-foreground mt-1">به زودی</p>}
      </div>

      {isPlaying && streamUrl && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button onClick={close} className="absolute -top-12 right-0 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <video ref={videoRef} className="w-full aspect-video" controls autoPlay muted playsInline />
            </div>
            <h3 className="text-center text-lg md:text-xl font-bold mt-4">{name}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default ChannelCard;