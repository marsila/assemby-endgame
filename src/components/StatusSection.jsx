export default function StausSection(props) {
  const winGame = props.winGame;
  const statuaStyles = {
    backgroundColor: winGame ? "#10a95b" : "#BA2A2A",
  };
  return (
    <div className="result" style={statuaStyles}>
      {!winGame ? (
        <>Game over! <br/> You loes! Better start learning Assembly 😭</>
      ) : (
        <>
          You Win! <br /> Well done! 🎉
        </>
      )}
    </div>
  );
}
