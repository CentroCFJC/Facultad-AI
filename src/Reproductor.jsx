import ReactPlayer from 'react-player'

function Reproductor () {
    return (
        <div>
            <ReactPlayer url='https://www.youtube.com/watch?v=10fPss35dXY' 
            controls
            muted
            loop
            width="auto"
            height="100vh"
            />
        </div>
    )
}

export default Reproductor