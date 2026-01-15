import { useRef, useEffect, useState, useCallback } from "react";
import Hls from "hls.js";

// Check if URL is an HLS stream
const isHlsStream = (url: string): boolean => {
  return url.includes('.m3u8') || url.includes('m3u8');
};

// Check if URL is a direct video file
const isDirectVideo = (url: string): boolean => {
  const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi', '.mkv'];
  return videoExtensions.some(ext => url.toLowerCase().includes(ext));
};

export const useHlsPlayer = (streamUrl?: string) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);

  useEffect(() => {
    if (!isPlaying || !streamUrl || !videoRef.current) return;

    const video = videoRef.current;
    setError(null);

    // Clean up any previous HLS instance
    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // Handle HLS streams
    if (isHlsStream(streamUrl)) {
      if (Hls.isSupported()) {
        hlsRef.current = new Hls({ 
          enableWorker: true, 
          lowLatencyMode: true,
          maxBufferLength: 30,
          maxMaxBufferLength: 60
        });
        hlsRef.current.loadSource(streamUrl);
        hlsRef.current.attachMedia(video);

        hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(console.error);
        });

        hlsRef.current.on(Hls.Events.ERROR, (_, data) => {
          if (data.fatal) {
            if (data.type === Hls.ErrorTypes.NETWORK_ERROR) {
              hlsRef.current?.startLoad();
            } else if (data.type === Hls.ErrorTypes.MEDIA_ERROR) {
              hlsRef.current?.recoverMediaError();
            } else {
              setError("Stream kon niet worden geladen");
              setIsPlaying(false);
            }
          }
        });
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Native HLS support (Safari)
        video.src = streamUrl;
        video.play().catch(console.error);
      }
    } 
    // Handle direct video files (MP4, WebM, etc.)
    else if (isDirectVideo(streamUrl)) {
      video.src = streamUrl;
      video.load();
      video.play().catch((err) => {
        console.error("Video playback error:", err);
        setError("Video kon niet worden afgespeeld");
      });
    }
    // Try as generic video source (for other URLs/formats like cloud storage links)
    else {
      // First attempt: try direct video playback (works for MP4 links without extension)
      video.src = streamUrl;
      video.load();
      
      const attemptPlay = video.play();
      if (attemptPlay !== undefined) {
        attemptPlay.catch((err) => {
          console.error("Direct playback failed, trying HLS:", err);
          // If direct play fails, try HLS as fallback
          if (Hls.isSupported()) {
            hlsRef.current = new Hls({ enableWorker: true });
            hlsRef.current.loadSource(streamUrl);
            hlsRef.current.attachMedia(video);
            hlsRef.current.on(Hls.Events.MANIFEST_PARSED, () => {
              video.play().catch(() => {
                setError("Video kon niet worden afgespeeld");
              });
            });
            hlsRef.current.on(Hls.Events.ERROR, () => {
              setError("Formaat wordt niet ondersteund");
            });
          } else {
            setError("Formaat wordt niet ondersteund");
          }
        });
      }
    }

    // Handle video element errors
    const handleError = () => {
      setError("Er is een fout opgetreden bij het afspelen");
    };
    video.addEventListener('error', handleError);

    return () => {
      hlsRef.current?.destroy();
      hlsRef.current = null;
      video.removeEventListener('error', handleError);
    };
  }, [isPlaying, streamUrl]);

  const play = useCallback(() => {
    if (streamUrl) {
      setError(null);
      setIsPlaying(true);
    }
  }, [streamUrl]);

  const close = useCallback(() => {
    setIsPlaying(false);
    setError(null);
    hlsRef.current?.destroy();
    hlsRef.current = null;
  }, []);

  return { isPlaying, videoRef, play, close, error };
};
