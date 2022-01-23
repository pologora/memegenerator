import trollImg from '../img/troll-face.png'

export default function Header() {
    return (
        <header className="header">
            <div className="header--logo">
                <img src={trollImg} alt="troll face" className='header--logo-img' />
                <h3 className='header--logo-text'>Meme Generator</h3>
            </div>
        </header>
    )
}
