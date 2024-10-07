import ReactPlayer from 'react-player'

function Reproductor () {
    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=XFNzN36jIfI' 
            controls
            muted
            loop
            width="100vw"
            height="100vh"
            />
        </div>
    )
}

export default Reproductor