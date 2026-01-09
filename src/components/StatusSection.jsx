export default function StausSection(props) {
  const {winGame, savedLanguages} = props;
  
  const statuaStyles = {
    backgroundColor: winGame ? "#10a95b" : "#BA2A2A",
  };
  return (
    <div className="result" style={statuaStyles}>
      {winGame ? (
        <> Well done! 🎉 You Win! <br /> You Saved {savedLanguages.map((lang,index)=> (<span key={index}>{`${lang}, `}</span>))}</>
      ) : (
        <>Game over! <br/> You loes! Better start learning Assembly 😭</>        
      )}
      
    </div>
  );
}
