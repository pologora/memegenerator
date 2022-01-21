import { useState } from 'react'
import data from '../data/data'


const Meme = () => {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImageUrl: ''
    })

    const [allMemeImages, setAllMemeImages] = useState(data.data.memes)

    const handleGetMemeBtnClick = () => {
        const random = Math.floor(Math.random() * allMemeImages.length)
        setMeme(prevState => {
            return {
                ...prevState,
                randomImageUrl: allMemeImages[random].url
            }
        })
    }

    const handleOnChange = (event) => {
        const { value, name } = event.target
        setMeme(prevState => {
            return {
                ...prevState,
               [name]: value
            }
        })
    }

    return (
        <main>
            <div className="meme-form">
                <input
                    type="text"
                    className="meme-form--top-message"
                    placeholder="Top text"
                    onChange={handleOnChange}
                    disabled={!meme.randomImageUrl && true}
                    name="topText"
                />
                <input
                    type="text"
                    className="meme-form--bottom-message"
                    placeholder="Bottom text"
                    onChange={handleOnChange}
                    disabled={!meme.randomImageUrl && true}
                    name="bottomText"
                />
                <button
                    onClick={handleGetMemeBtnClick}
                    type="submit"
                    className="meme-form--get-meme-btn"
                >Get a new meme image 🖼</button>
            </div>

            <div className="meme-container" style={{ display: meme.randomImageUrl ? 'block' : 'none' }} >
                <h2 className="meme-container--text top">{meme.topText}</h2>
                <h2 className="meme-container--text bottom">{meme.bottomText}</h2>
                <img className='meme-container--image' src={meme.randomImageUrl} alt="some meme image" />
            </div>
        </main>
    )
}


export default Meme