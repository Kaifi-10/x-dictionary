import React, { useState } from 'react'
import Search from './Search'

const Dictionary = () => {

    const data = 
    [
        { word: "React", meaning: "A JavaScript library for building user interfaces." },
        { word: "Component", meaning: "A reusable building block in React." },
        { word: "State", meaning: "An object that stores data for a component." }
    ]
    
    const [meaning, setMeaning] = useState("");
    const [isDefinition, setIsDefinition] = useState(false);

    const handleSearch = (searchWord) => {
        searchMeaning(searchWord);
    };

    const searchMeaning = (word) => {
        setMeaning("");
        setIsDefinition(false);

        if (word === "") {
            alert("Enter a word");
            return;
        }

        const foundWord = data.find(item => item.word.toLowerCase() === word.toLowerCase());
        // console.log(foundWord)
        if (foundWord) {
            setMeaning(foundWord.meaning);
            setIsDefinition(true);
        } else {
            setMeaning("Word not found in the dictionary");
            setIsDefinition(true);
        }
    };

    return (
        <div>
            <h1>Dictionary App</h1>
            <Search onSearch={handleSearch} />
            <h4>Definition:</h4>
            {isDefinition && <p>{meaning}</p>}
        </div>
    );
}

export default Dictionary