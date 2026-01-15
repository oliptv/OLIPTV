import { Play, Star, Download, X } from "lucide-react";
import { useHlsPlayer } from "@/hooks/useHlsPlayer";
import movieCover from "@/assets/movie-cover.jpg";
import seriesCover from "@/assets/series-cover.jpg";
import bookCover from "@/assets/book-cover.jpg";

interface MediaCardProps {
  title: string;
  year?: string;
  rating?: number;
  type: "movie" | "series" | "book";
  downloadUrl?: string;
  streamUrl?: string;
  episodes?: number;
  coverImage?: string;
}

const categoryImages = {
  movie: movieCover,
  series: seriesCover,
  book: bookCover,
};

const MediaCard = ({ title, year, rating, type, downloadUrl, streamUrl, episodes, coverImage }: MediaCardProps) => {
  const { isPlaying, videoRef, play, close, error } = useHlsPlayer(streamUrl);

  const handleClick = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    } else if (streamUrl) {
      play();
    }
  };

  return (
    <>
      <div className="channel-card p-2 md:p-3 border border-border group cursor-pointer" onClick={handleClick}>
        <div className="aspect-[2/3] bg-muted rounded-lg mb-2 flex items-center justify-center overflow-hidden relative">
          <img src={coverImage || categoryImages[type]} alt={type} className="w-full h-full object-cover absolute inset-0" />
          <div className="absolute inset-0 bg-background/30 group-hover:bg-background/10 transition-colors" />

          <div className="absolute inset-0 flex items-center justify-center">
            {downloadUrl ? (
              <Download className="w-8 h-8 md:w-10 md:h-10 relative z-10 transition-all text-white group-hover:scale-125 group-hover:text-secondary" />
            ) : (
              <Play className={`w-8 h-8 md:w-10 md:h-10 relative z-10 transition-all ${streamUrl ? 'text-white group-hover:scale-125 group-hover:text-primary' : 'text-white/50'}`} />
            )}
          </div>

          {type === "series" && episodes && (
            <div className="absolute top-2 right-2 bg-primary px-2 py-1 rounded text-[10px] md:text-xs font-medium z-10">
              {episodes} قسمت
            </div>
          )}

          {rating && (
            <div className="absolute bottom-2 left-2 bg-background/80 px-1.5 py-0.5 rounded flex items-center gap-1 z-10">
              <Star className="w-3 h-3 text-gold fill-gold" />
              <span className="text-[10px] md:text-xs font-medium">{rating}</span>
            </div>
          )}
        </div>

        <h3 className="font-semibold text-xs md:text-sm text-foreground group-hover:text-primary transition-colors truncate mb-0.5">
          {title}
        </h3>

        <div className="flex items-center justify-between text-[10px] md:text-xs text-muted-foreground">
          {year && <span>{year}</span>}
          {!streamUrl && type !== "book" && <span>به زودی</span>}
        </div>
      </div>

      {isPlaying && streamUrl && (
        <div className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button onClick={close} className="absolute -top-12 right-0 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
              <X className="w-6 h-6" />
            </button>
            <div className="bg-black rounded-lg overflow-hidden">
              <video ref={videoRef} className="w-full aspect-video" controls autoPlay muted playsInline />
              {error && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                  <p className="text-destructive text-center px-4">{error}</p>
                </div>
              )}
            </div>
            <h3 className="text-center text-lg md:text-xl font-bold mt-4">{title}</h3>
            {year && <p className="text-center text-muted-foreground">{year}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default MediaCard;
