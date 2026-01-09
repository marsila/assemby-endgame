import { useState } from "react";
import { HeaderSection } from "./components/HeaderSection";
import Keyboard from "./components/Keyboard";
import LanguagesList from "./components/LanguagesList";
import WordDisply from "./components/WordDisplay";
import Confetti from "react-confetti";

function App() {
  const words = [
    "ASSEMBLY",
    "FRONTEND",
    "CALLBACK",
    "VARIABLE",
    "FUNCTION",
    "COMPILER",
    "DATABASE",
    "TERMINAL",
    "SOFTWARE",
    "KEYBOARD",
    "ARGUMENT",
    "CONSTANT",
    "SEQUENCE",
    "ITERATOR",
    "PROTOCOL",
    "PROPERTY",
    "TEMPLATE",
    "HARDWARE",
    "INTERNET",
    "DEBUGGER",
  ];

  const [guessedLetters, setGuessedLetters] = useState([]);
  function generateWord(words) {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  const _INTIAL_LANGUAGES_LIST = [
    "HTML",
    "CSS",
    "Javascript",
    "React",
    "Typescript",
    "Node.js",
    "Python",
    "Ruby",
    "Assembly",
  ];

  const [currentWord, setCurrentWord] = useState(() => generateWord(words));

  

  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;


  const savedLanguages = _INTIAL_LANGUAGES_LIST.slice(wrongGuessCount);
  console.log("wrongCount", wrongGuessCount);

  //console.log("savedlang", savedLanguages);

  const endGame = wrongGuessCount >= _INTIAL_LANGUAGES_LIST.length -1;

  console.log('currwnt word',currentWord);
  

  const winGame = currentWord.split('').every(letter => guessedLetters.includes(letter));
  console.log('win game',winGame);
  


  const handleLetterClick = (e) => {
    const letter = e.currentTarget.value;
    console.log('savedLanguages.length', savedLanguages.length);
    if (letter && !guessedLetters.includes(letter)) {
      //console.log(letter);
      setGuessedLetters((prev) => [...prev, letter]);
      //console.log(`gussedLetters = ${guessedLetters}`);
    }

  };


  const newGame = () => {
    setCurrentWord(generateWord(words));
    setGuessedLetters([]);    
  }

  return (
    <main>
      {winGame && <Confetti />}
      <HeaderSection 
        endGame={endGame} 
        winGame={winGame}
        savedLanguages={savedLanguages} 
      />
      <LanguagesList
        languagesList={_INTIAL_LANGUAGES_LIST}
        wrongGuessCount={wrongGuessCount}
      />
      <WordDisply 
        currentWord={currentWord} 
        guessedLetters={guessedLetters}     
      />
      <Keyboard
        endGame={endGame}
        winGame={winGame}
        handleLetterClick={handleLetterClick}
        guessedLetters={guessedLetters}
        currentWord={currentWord}
        newGame ={newGame}
      />
    </main>
  );
}

export default App;
