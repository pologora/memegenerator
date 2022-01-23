
export default function Meme({ meme }) {

    return (
        <div className="meme-container" style={{ display: meme.randomImageUrl ? 'block' : 'none' }} >
            <h2 className="meme-container--text top">{meme.topText}</h2>
            <h2 className="meme-container--text bottom">{meme.bottomText}</h2>
            <img className='meme-container--image' src={meme.randomImageUrl} alt="some meme" />
        </div>

    )
}
