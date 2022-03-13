import { useEffect, useRef } from 'react';
import { Film } from '../../types/films';

type VideoPlayerProps = {
  isPlaying: boolean;
  film: Film;
}

function VideoPlayer({isPlaying, film}: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect (() => {
    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    videoRef.current.load();
  }, [isPlaying, film.posterImage]);

  return (
    <video
      ref = {videoRef}
      src = {film.previewVideoLink}
      poster = {film.previewImage}
      width = "100%"
      height = "100%"
      muted
    />
  );
}

export default VideoPlayer;
