export default function WordDisply(props){
    const {currentWord, guessedLetters} = props;
    console.log(`curent= ${currentWord}, guesd= ${guessedLetters}`);
     
    return(
        <div className="word">
            {currentWord.split('').map((letter, index) => {
                const isGuessed = guessedLetters.includes(letter);
                console.log(isGuessed);
                
               //const isGuessed = true;
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