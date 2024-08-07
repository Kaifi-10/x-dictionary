import React, { useState } from 'react'

const Search = ({onSearch}) => {
    const [word, setWord] = useState("")

    const handleSearch = (e) =>{
        setWord(e.target.value)
      
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        onSearch(word)
    }
  return (
    <div>
        <form onSubmit={onSubmit}>
        <input type='text'
        value={word}
        onChange={handleSearch} 
        placeholder='Search a word...'/>
        <button type='submit'>Search</button>

        </form>
        
    </div>
  )
}

export default Search