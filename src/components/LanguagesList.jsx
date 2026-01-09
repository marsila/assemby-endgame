
export default function LanguagesList(props) {
    const {languagesList,wrongGuessCount } = props;
    

    return(
        <div className="lang-list">
            {languagesList.map((lang,index)=> {
                const isDeleted = index < wrongGuessCount;
                return(
                 <span 
                    className={`lang-btn ${isDeleted? "deleted-lang":""} `}
                    id={lang.replace('.','').toLowerCase()}
                    key={index}
                    
                 >
                    {lang}
                 </span>   
                )
            })}
        </div>
    )
}