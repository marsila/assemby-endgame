export default function Keyboard(props) {
  const { endGame, handleLetterClick, guessedLetters, currentWord ,newGame, winGame} = props;
  const letters = [
    "A","B", "C", "D","E", "F", "G", "H", "I","J","K","L", "M",
    "N", "O",  "P", "Q", "R", "S", "T", "U", "V","W", "X", "Y","Z"];
  
  return (
    <>
      <div className="keyboard">
        {letters.map((letter, index) => {
          const isGuessed = guessedLetters.some(guessed => guessed.toUpperCase() === letter.toUpperCase());
          //console.log(isGuessed);
          
          const isCorrect = isGuessed && currentWord.toUpperCase().includes(letter.toUpperCase());
          //console.log(isCorrect);
          
          const isWrong = isGuessed && !currentWord.toUpperCase().includes(letter.toUpperCase());
          //console.log(isWrong);
          
          const className = isCorrect? "key-correct" : isWrong? 'key-wrong' : 'key-default';
          //console.log(className);
          
          return (
            <button
              key={index}
              id={letter}
              value={letter}
              onClick={handleLetterClick}
              className={className}
            >
              {letter}
            </button>
          );
        })}
      </div>
      <div className="new-game">
        {(endGame || winGame) && <button id="new-game" onClick={newGame}>New Game</button>}
      </div>
    </>
  );
}
