import React, { useState, useEffect, useCallback } from 'react';
import './App.css';

// Define the sound data
const pokemonSounds = [
  { 
    key: 'Q', 
    id: 'pikachu', 
    name: 'Pikachu', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'W', 
    id: 'bulbasaur', 
    name: 'Bulbasaur', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'E', 
    id: 'charmander', 
    name: 'Charmander', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'A', 
    id: 'squirtle', 
    name: 'Squirtle', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'S', 
    id: 'meowth', 
    name: 'Meowth', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'
  },
  { 
    key: 'D', 
    id: 'battle', 
    name: 'Battle', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'Z', 
    id: 'caught', 
    name: 'Pokemon Caught', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'X', 
    id: 'levelup', 
    name: 'Level Up', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  },
  { 
    key: 'C', 
    id: 'healing', 
    name: 'Healing', 
    url: 'https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' 
  }
];

// DrumPad component
const DrumPad: React.FC<{
  sound: { key: string; id: string; name: string; url: string };
  setDisplayText: (text: string) => void;
}> = ({ sound, setDisplayText }) => {
  
  const playSound = useCallback(() => {
    const audio = document.getElementById(sound.key) as HTMLAudioElement;
    if (audio) {
      try {
        audio.currentTime = 0;
        const playPromise = audio.play();
        
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setDisplayText(sound.name);
            })
            .catch(error => {
              console.error("Error playing sound:", error);
              // Still update display even if audio fails
              setDisplayText(sound.name);
            });
        } else {
          // For browsers where play() doesn't return a promise
          setDisplayText(sound.name);
        }
      } catch (error) {
        console.error("Error with audio element:", error);
        // Still update display even if audio fails
        setDisplayText(sound.name);
      }
    }
  }, [sound.key, sound.name, setDisplayText]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key.toUpperCase() === sound.key) {
        playSound();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [sound.key, playSound]);

  return (
    <div 
      className="drum-pad" 
      id={sound.id} 
      onClick={playSound}
    >
      {sound.key}
      <audio 
        className="clip" 
        id={sound.key} 
        src={sound.url}
      />
    </div>
  );
};

function App() {
  const [displayText, setDisplayText] = useState('');

  return (
    <div className="App">
      <div id="drum-machine">
        <div className="pokemon-header">
          <h1>Pokémon Drum Machine</h1>
          <div id="display">{displayText}</div>
        </div>
        <div className="drum-pads">
          {pokemonSounds.map((sound) => (
            <DrumPad 
              key={sound.key} 
              sound={sound} 
              setDisplayText={setDisplayText} 
            />
          ))}
        </div>
        {/* <p>sorry! Tried to use Pokemon sounds but it wasnt working so I used these instead</p> */}
      </div>
    </div>
  );
}

export default App;
