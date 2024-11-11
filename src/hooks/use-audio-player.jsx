// Importation des hooks React nécessaires
import { useEffect, useRef, useState } from "react";

// Déclaration du hook personnalisé useAudioPlayer
// Ce hook reçoit en paramètre audioSrc, la source de l'audio
export function useAudioPlayer() {
    
    // État pour gérer si l'audio est en lecture (isPlaying)
    const [isPlaying, setIsPlaying] = useState(false);
    
    // État pour la position actuelle de l'audio (en secondes)
    const [currentTime, setCurrentTime] = useState(0);
    
    // État pour la durée totale de l'audio (en secondes)
    const [duration, setDuration] = useState(0);

    const [currentTrack, setCurrentTrack] = useState(null);

    // Référence à l'élément audio pour conserver l'objet Audio à travers les re-rendus
    const audioRef = useRef(new Audio());

    // Utilisation de useEffect pour configurer les événements au montage du composant
    useEffect(() => {
        const audio = audioRef.current;
        
        // Fonction pour mettre à jour l'état currentTime avec la position actuelle de l'audio
        const updateCurrentTime = () => setCurrentTime(audio.currentTime);
        
        // Fonction pour mettre à jour la durée totale de l'audio lorsque les métadonnées sont chargées
        const updateDuration = () => setDuration(audio.duration);

        // Ajout des événements à l'élément audio pour gérer les mises à jour de l'état
        audio.addEventListener("timeupdate", updateCurrentTime);  // Mise à jour de currentTime pendant la lecture
        audio.addEventListener("loadedmetadata", updateDuration); // Mise à jour de la durée quand les métadonnées sont chargées

        // Nettoyage des événements lorsque le composant se démonte
        return () =>{
            audio.removeEventListener("timeupdate", updateCurrentTime);
            audio.removeEventListener("loadedmetadata", updateDuration);
        };
    }, []); // Le tableau vide indique que cet effet ne s'exécute qu'une seule fois au montage

    useEffect(() => {
        if(currentTrack) {
            audioRef.current.src = currentTrack;
            play();
        }
    }, [currentTrack]);

    // Fonction pour démarrer la lecture et mettre à jour l'état isPlaying
    const play = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    // Fonction pour mettre en pause la lecture et mettre à jour l'état isPlaying
    const pause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    // Fonction utilitaire pour formater le temps en "MM:SS"
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const second = Math.floor(seconds % 60);
        return (
            `${minutes}:${second < 10 ? "0" : ""}${second}`
        );
    };

    // Le hook retourne un ensemble de valeurs et de fonctions nécessaires pour contrôler le lecteur audio
    return {
        isPlaying,                      // État indiquant si l'audio est en cours de lecture
        currentTime,                    // Position actuelle en secondes
        currentFormatedTime: formatTime(currentTime), // Temps actuel formaté "MM:SS"
        duration,                       // Durée totale de l'audio en secondes
        durationFormatedTime: formatTime(duration),  // Durée totale formatée "MM:SS"
        play,                           // Fonction pour démarrer la lecture
        pause,                          // Fonction pour mettre en pause la lecture
        currentTrack,
        setCurrentTrack
    };
}
