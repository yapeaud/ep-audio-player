import { useAudioContext } from "../../context/audio-context";
import styles from "./audio-list.module.css";

const tracks = [
  {
    id: 1,
    title: "Poster new song",
    src: "/audio/song-1.mp3",
    imgSrc: "/image/covers/song-1.jpg",
  },
  {
    id: 2,
    title: "Agosto Lilis",
    src: "/audio/song-2.mp3",
    imgSrc: "/image/covers/song-2.jpg",
  },
  {
    id: 3,
    title: "Music Festival",
    src: "/audio/song-3.mp3",
    imgSrc: "/image/covers/song-3.jpg",
  },
  {
    id: 4,
    title: "New Collection",
    src: "/audio/song-4.mp3",
    imgSrc: "/image/covers/song-4.jpg",
  },
  {
    id: 5,
    title: "Anzac - Forever in our Thoughts",
    src: "/audio/song-5.mp3",
    imgSrc: "/image/covers/song-5.jpg",
  },
  {
    id:6,
    title: "Paradoxe Official",
    src: "/audio/song-6.mp3",
    imgSrc: "/image/covers/song-6.png",
  },
];
const AudioList = () => {
  const { play, pause, isPlaying, currentTrack, setCurrentTrack } =
    useAudioContext();

  return (
    <div className={styles.container}>
      {tracks.map((track) => (
        <div
          key={track.id}
          className={`${styles.song} ${
            currentTrack === track.src ? styles.songIsPlaying : ""
          }`}
        >
          <img src={track.imgSrc} alt="Song cover" width="30px" height="30px" />
          {currentTrack === track.src ? (
            <button
              className={styles.buttonPrimary}
              onClick={isPlaying ? pause : play}
            >
              {isPlaying ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2870ff"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2870ff"
                  style={{ width: "15px", height: "15px" }}
                >
                  <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
                </svg>
              )}
            </button>
          ) : (
            <button
              className={styles.buttonPrimary}
              onClick={() => setCurrentTrack(track.src)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#2870ff"
                style={{ width: "15px", height: "15px" }}
              >
                <path d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"></path>
              </svg>
            </button>
          )}

          <div
            className={`${styles.trackTitle} ${
              currentTrack === track.src ? styles.titleIsPlaying : ""
            }`}
            onClick={() => setCurrentTrack(track.src)}
          >
            {track.title}
          </div>

          {currentTrack === track.src && (
            <img
              src={`/image/gifs/${
                isPlaying ? "play-song.gif" : "mute-song.gif"
              }`}
              alt="Sound animate icon"
              width={"20px"}
              height={"20px"}
              className={styles.soundIcon}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default AudioList;
