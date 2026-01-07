export default function Keyboard(props){
    const{endGame , handleLetterClick} = props
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O',
                    'P','Q','R','S','T','U','V','W','X','Y','Z']; 
    return(
        <>
        <div className="keyboard">
            {letters.map((letter,index) => (
                <button
                  key={index}  
                  id={letter}
                  value={letter}
                  onClick={handleLetterClick}
                >
                    {letter}
                </button>
            ))}            
        </div>
        <div className="new-game">
            {endGame &&<button id="new-game">New Game</button>}
        </div>
        </>
    )
}