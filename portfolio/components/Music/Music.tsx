import { useState, useRef, useEffect, ChangeEvent } from 'react';
import './Music.css';

interface MusicProps {}

const Music: React.FC<MusicProps> = () => {
    const [currentSongIndex, setCurrentSongIndex] = useState<number>(0);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);

    const songs: { url: string; title: string }[] = [
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602201/portfolio%20songs/bcx7dtmeh3xorck9nmrs.mp3", title: "Sweeter Than Fiction - Taylor Swift" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602199/portfolio%20songs/ilarfpqyf9zixpyjmahq.mp3", title: "Obsessed - Olivia Rodrigo" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602201/portfolio%20songs/c4tkecvskwzyxumit22i.mp3", title: "Hits Different - Taylor Swift" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602201/portfolio%20songs/f2fi8ysou3dxuulmn7v8.mp3", title: "Delicate - Taylor Swift" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602200/portfolio%20songs/srnoqcnqucjscpeisj7z.mp3", title: "Broken Clocks - SZA" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602200/portfolio%20songs/ypy68btbdyplxwtwi95t.mp3", title: "bad idea right? - Olivia Rodrigo" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602199/portfolio%20songs/atchzyduiardssce93uo.mp3", title: "Call It What You Want - Taylor Swift" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602199/portfolio%20songs/fanv4flrtjnoxtwxjvht.mp3", title: "Tornado Warnings - Sabrina Carpenter" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602199/portfolio%20songs/vztwbsuvihyxn2qryp1u.mp3", title: "Recovery - Frank Turner" },
        { url: "https://res.cloudinary.com/dm6rfw0nj/video/upload/v1712602199/portfolio%20songs/h6ab9uaxzftsq35xxxhp.mp3", title: "Mario - The King's Parade" }
    ];

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('loadedmetadata', () => {
                setDuration(audioRef.current ? audioRef.current.duration : 0);
            });
            audioRef.current.addEventListener('timeupdate', () => {
                setCurrentTime(audioRef.current ? audioRef.current.currentTime : 0);
            });
            audioRef.current.addEventListener('ended', playNextSong);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.removeEventListener('loadedmetadata', () => {});
                audioRef.current.removeEventListener('timeupdate', () => {});
                audioRef.current.removeEventListener('ended', playNextSong);
            }
        };
    }, [currentSongIndex]);

    const playNextSong = (): void => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
        setIsPlaying(true);
    };

    const togglePlayPause = (): void => {
        setIsPlaying(!isPlaying);
        if (audioRef.current) {
            if (!isPlaying) {
                audioRef.current.play().catch((error) => console.error('Error playing audio:', error));
            } else {
                audioRef.current.pause();
            }
        }
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const volume = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    };

    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className='music'>
            <div className='screen'>
                <div className='marquee-area'>
                    {/* @ts-ignore*/}
                    <marquee scrollamount="5" className='marquee-text'>{songs[currentSongIndex].title}</marquee>
                </div>
                <div>{formatTime(currentTime)} / {formatTime(duration)}</div>
            </div>
            <div className='controls'>
                <div className='options'>
                    <div onClick={togglePlayPause} className={isPlaying ? 'fa fa-pause' : 'fa fa-play'}></div>
                    <div onClick={playNextSong} className="fa fa-fast-forward"></div>
                </div>
                <input type='range' min='0' max='0.5' step='0.01' onChange={handleVolumeChange} />
            </div>
            <audio ref={audioRef} src={songs[currentSongIndex].url} />
        </div>
    );
};

export default Music;
