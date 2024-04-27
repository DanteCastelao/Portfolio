import './Livestream.css'

export default function Livestream() {
    return (
        <div className='livestream'>
            <video autoPlay loop muted>
                <source src='//cdn-cf-east.streamable.com/video/mp4/o9uuse.mp4?Expires=1714511280&Signature=Kr92petm7vbp9Or82aLNhyKgOEnwuVqTaGI0J7wIuxRLzsuPa2xIXp0lvoIIwYmxPORa-YFzcjKdrwDSqb7Nr1wDFccIXFZ5g~HHnUgUnwoCJk6HHg4io8m5AExqMBQsEQUnjYo11MyxddsF3Ssnq3-zR7hXpz02PaSXGYbsjvHCZ9LF8TvUpz-q4hyBs8UDtP5VVc1NkY0CoVudn6BnFUede0V5WeKNkoZk6Sg5fhPuBb5wWOiqWOtUAIQBqJ6VsCL4Djy3jbEFd1slgKT27lEZUVf2rSZbd7qRNJQ7tF60iR5JtiRzXetJX3RCoar71~adfYOOlf4za3nX9ltAgQ__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ' type='video/mp4' />
            </video>
        </div>    
    )
}
