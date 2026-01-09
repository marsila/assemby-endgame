export default function WordDisply(props){
    const {currentWord, guessedLetters}= props;
     
    return(
        <div className="word">
            {currentWord.split('').map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                return(
                    <span 
                    className="letter-box"
                    key={index}
                    id={letter}
                >
                 {isGuessed ? letter : ' '}   
                </span>
                )
                                
            })}
        </div>
    )
}