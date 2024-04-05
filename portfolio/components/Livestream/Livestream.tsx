import './Livestream.css'

export default function Livestream() {
    return (
        <div className='livestream'>
            <iframe
                src="https://www.twitch.tv/mira004"
                height="100%"
                width="100%"
                allowFullScreen
                frameBorder="0"
                scrolling="no">
            </iframe>
        </div>
    )
}
