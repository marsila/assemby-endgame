import { HeaderSection } from "./components/HeaderSection"
import Keyboard from "./components/Keyboard"
import LanguagesList from "./components/LanguagesList"
import StatusSection from "./components/StatusSection"
import WordDisply from "./components/WordDisplay"


function App() {


  return (
    <main>
     <HeaderSection/>
     <StatusSection/> 
     <LanguagesList/>
     <WordDisply/>
     <Keyboard/>
    </main>
  )
}

export default App
