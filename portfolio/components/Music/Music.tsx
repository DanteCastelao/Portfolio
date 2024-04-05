import './Music.css';

export default function Music() {
    return (
        <div className='music'>
            <div className='screen'>

            </div>
            <div className='controls'>
                <div className='buttons'>
                    <button>Play</button>
                    <button>Pause</button>
                </div>
                <div className='volume'>
                    <input type='range' />
                </div>
            </div>

        </div>
    )
}