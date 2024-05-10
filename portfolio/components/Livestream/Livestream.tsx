import './Livestream.css'

export default function Livestream() {
    return (
        <div className='livestream'>
            <video autoPlay loop muted>
                <source src="//cdn-cf-east.streamable.com/video/mp4/o9uuse.mp4?Expires=1715629740&Signature=SHnHoj4P4I45lIKenp~-DCidteRZa7cOHVIaM2REsyDoLr~SsdBvk3NnTLoHNDUeAYg1aUxIFWH0oeAlNvrhISy26wQcDZNSX425una8rCe9pSy3k~JBA5Wqda0bPqwRs5GKZnAV6y8bBGNBWzBsY3AXvKf~Mpq5Nf0bHNU~PSmQn5ikZAgZ0inGF9PwisaHwYMzLUxSBzl8Fb7M1E4X7DFo5JsuZy7shNuY8M0dI5hyiEnT226Oxu8rzCtLs2FBXVgEUALRjWJMEynKyNinMyhRjuluDQCvUGpRprlUlawvXzHa9sXZ55vPQ-SkH6pXgpUjf27ld-eO6kqhxTs9Xg__&Key-Pair-Id=APKAIEYUVEN4EVB2OKEQ" type='video/mp4' />
            </video>
        </div>    
    )
}
