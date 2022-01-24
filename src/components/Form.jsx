
export default function Form(props) {

    return (
        <div className="meme-form">
            <input
                type="text"
                className="meme-form--top-message"
                placeholder="Top text"
                onChange={props.handleOnChange}
                disabled={!props.meme && true}
                name="topText"
                value={props.topText}
            />
            <input
                type="text"
                className="meme-form--bottom-message"
                placeholder="Bottom text"
                onChange={props.handleOnChange}
                disabled={!props.meme && true}
                name="bottomText"
                value={props.bottomText}
            />
            <button
                onClick={props.handleGetMeme}
                type="submit"
                className="meme-form--get-meme-btn"
            >Get a new meme image <span className='meme-form--btn-icon'> 🖼</span></button>
        </div>
    )

}