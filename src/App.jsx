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
  
  function generateWord(words){
    const randomIndex = Math.floor(Math.random()* words.length);
    return words[randomIndex]
  }
  const[theWord, setTheWord] = useState(()=> generateWord(words));
  //console.log(theWord);

  const endGame = true;
  const winGame = true;
  const HandleLetterClick = (e) => {
    console.log(e.current.value);
    
  }
    
  return (
    <main>
     <HeaderSection
        endGame={endGame}
        winGame={winGame}
     />     
     <LanguagesList/>
     <WordDisply/>
     <Keyboard/>
    </main>
  )
}

export default App
