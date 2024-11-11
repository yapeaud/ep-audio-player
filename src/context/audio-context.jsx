/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import { useAudioPlayer } from "../hooks/use-audio-player";

// Création du contexte dans le conteneur AudioContext...
const AudioContext = createContext();

// exportation de la fonction useAudioContext pour l'utiliser dans les composants
export const useAudioContext = () => useContext(AudioContext);

// Création du composant (le livreur) AudioProvider qui enveloppera les composants enfants avec le contexte AudioContext
// de manière a ce que tous les composants enfant puisse récupérer les données stocké dans le conteneur/contexte AudioContext
export const AudioProvider = ({ children }) => {
  const audioPlayer = useAudioPlayer();

  return (
    <AudioContext.Provider value={audioPlayer}>
      {children}
    </AudioContext.Provider>
  );
};
