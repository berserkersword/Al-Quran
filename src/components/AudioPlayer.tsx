import React from "react"
import { useAudioPlayer } from "react-use-audio-player"
import { AiOutlinePlayCircle, AiOutlinePauseCircle } from 'react-icons/ai'
import Spinner from "./Spinner"
export const AudioPlayer = (prop: { src: string }) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src: prop.src,
        format: "mp3",
        autoplay: false,
        onend: () => console.log("sound has ended!")
    })

    if (!ready && !loading) return <div>No audio to play</div>
    if (loading) return <Spinner />

    return (
        <div onClick={togglePlayPause}>
            {playing ?
                <AiOutlinePauseCircle className="audio-icon" /> :
                <AiOutlinePlayCircle className="audio-icon" />}
        </div>
    )
}