import Header from './components/Header';
import './App.css';
import Meme from './components/Meme';
import Form from './components/Form';
import { useEffect, useState } from 'react';


function App() {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImageUrl: ''
})

const [allMemes, setAllMemes] = useState([])

useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
}, [])

const handleOnChange = (event) => {
  const { value, name } = event.target
  setMeme(prevState => {
      return {
          ...prevState,
          [name]: value
      }
  })
}

const handleGetMeme = () => {
  const random = Math.floor(Math.random() * allMemes.length)
  const url = allMemes[random].url
  setMeme(prevState => {
      return {
          ...prevState,
          randomImageUrl: url
      }
  })
}

  return (
    <div className="App">
      <Header/>
      <main>
        <Form 
        handleOnChange={handleOnChange} 
        meme={meme.randomImageUrl}
        handleGetMeme={handleGetMeme}
        />
        <Meme 
          meme={meme}
        />
      </main>
    </div>
  );
}

export default App;
