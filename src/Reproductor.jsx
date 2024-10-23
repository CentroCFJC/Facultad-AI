import ReactPlayer from 'react-player'

function Reproductor () {
    return (
        <div>
            <ReactPlayer url='/Video Sinergia V2compres.mp4' 
            controls
            muted
            loop
            width="100%"
            height="auto"
            />
        </div>
    )
}

export default Reproductor