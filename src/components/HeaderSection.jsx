import StatusSection from "./StatusSection";

export function HeaderSection(props) {
  const { winGame, endGame, savedLanguages } = props;
  
  return (
    <div className="header-section">
      <div className="headline">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      {(endGame || winGame) && (
        <StatusSection 
          winGame={winGame}
          endGame={endGame}
          savedLanguages ={savedLanguages}
        />
      )}
    </div>
  );
}
