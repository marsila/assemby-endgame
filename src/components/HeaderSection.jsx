export function HeaderSection() {
    const win = true;
  return (
    <div className="header-section">
      <div className="headline">
        <h1>Assembly: Endgame</h1>
        <p>
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <div className="result">
        {!win ? "Doh! You lose! Too many misses. Good luck next time." : "“Yay lots of choices, the world is safe”"}
      </div>
    </div>
  );
}
