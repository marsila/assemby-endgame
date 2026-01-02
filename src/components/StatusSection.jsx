export default function StausSection(){
    const win = true;
    return(        
      <div className="result">
        {!win ? "Doh! You lose! Too many misses. Good luck next time." : "“Yay lots of choices, the world is safe”"}
      </div>
    )
}