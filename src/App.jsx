import { useState } from "react"
import { HeaderSection } from "./components/HeaderSection"
import Keyboard from "./components/Keyboard"
import LanguagesList from "./components/LanguagesList"
import WordDisply from "./components/WordDisplay"


function App() {
  const words = [
    "ASSEMBLY", "FRONTEND", "CALLBACK", "VARIABLE", 
    "FUNCTION", "COMPILER", "DATABASE", "TERMINAL",
    "SOFTWARE", "KEYBOARD", "ARGUMENT", "CONSTANT",
    "SEQUENCE", "ITERATOR", "PROTOCOL", "PROPERTY",
    "TEMPLATE", "HARDWARE", "INTERNET", "DEBUGGER"
  ];
  
  const [guessedLetters, setGuessedLetters]=useState([]);
  
  function generateWord(words){
    const randomIndex = Math.floor(Math.random()* words.length);
    return words[randomIndex]
  }
  const[currentWord, setCurrentWord] = useState(()=> generateWord(words));
  //console.log(theWord);

  const endGame = false;
  const winGame = false;
  const handleLetterClick = (e) => {
    console.log(e.currentTarget.value);
    const letter = e.currentTarget.value;
    if(currentWord.includes(letter)){
      console.log(letter);
      setGuessedLetters(oldLetters => [...oldLetters,letter])
      console.log(`gussedLetters = ${guessedLetters}`);
      
      
    }else{
      console.log('not today!');
      
    }  
      
  }
    
  return (
    <main>
     <HeaderSection
      endGame={endGame}
      winGame={winGame}
     />     
     <LanguagesList/>
     <WordDisply
      currentWord ={currentWord}
      guessedLetters={guessedLetters}
     />
     <Keyboard
      endGame={endGame}
      handleLetterClick ={handleLetterClick}
     />
    </main>
  )
}

export default App
