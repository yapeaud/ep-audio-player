import { useAudioContext } from '../../context/audio-context';
// Importation des styles CSS du composant
import styles from './music-player.module.css';

// Déclaration du composant MusicPlayer, fonction principale de ce lecteur audio
export function MusicPlayer() {

    // Déstructuration des propriétés retournées par le hook useAudioPlayer
    // - isPlaying : indique si l'audio est actuellement en cours de lecture
    // - currentTime : position actuelle de l'audio en secondes
    // - currentFormatedTime : temps actuel de l'audio au format 'MM:SS'
    // - duration : durée totale de l'audio en secondes
    // - durationFormatedTime : durée totale de l'audio au format 'MM:SS'
    // - play : fonction pour démarrer la lecture
    // - pause : fonction pour mettre en pause la lecture
    const { isPlaying, currentTime, currentFormatedTime, duration, durationFormatedTime, play, pause, currentTrack } = useAudioContext();

    if (currentTrack) {
        // Rendu de l'interface utilisateur du lecteur audio
        return (
            <div className={styles.container}>
                {/* Bouton pour démarrer ou mettre en pause la lecture audio */}
                <button className={styles.buttonPrimary} onClick={isPlaying ? pause : play}>
                    {/* Affichage de l'icône en fonction de l'état de lecture (pause ou lecture) */}
                    {isPlaying ? (
                        // Icône de pause affichée lorsque l'audio est en cours de lecture
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#2870ff"
                            style={{ width: "20px", height: "20px" }}
                        >
                            <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                        </svg>

                    ) : (
                        // Icône de lecture affichée lorsque l'audio est en pause
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#2870ff"
                            style={{ width: "20px", height: "20px" }}
                        >
                            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                        </svg>
                    )}
                </button>

                {/* Affichage du minuteur avec le temps actuel et la durée totale */}
                <div className={styles.timer}>
                    <span>{currentFormatedTime}</span> / <span>{durationFormatedTime}</span>
                </div>

                {/* Barre de progression indiquant la position actuelle dans l'audio */}
                <progress className={styles.progressBar} value={currentTime} max={duration} />
            </div>
        );
    }
}
