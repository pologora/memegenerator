import { useEffect, useState } from 'react'


export default function Meme() {

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

    const handleGetMemeBtnClick = () => {
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random].url
        setMeme(prevState => {
            return {
                ...prevState,
                randomImageUrl: url
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
                >Get a new meme image <span className='meme-form--btn-icon'> 🖼</span></button>
            </div>

            <div className="meme-container" style={{ display: meme.randomImageUrl ? 'block' : 'none' }} >
                <h2 className="meme-container--text top">{meme.topText}</h2>
                <h2 className="meme-container--text bottom">{meme.bottomText}</h2>
                <img className='meme-container--image' src={meme.randomImageUrl} alt="some meme" />
            </div>
        </main>
    )
}
