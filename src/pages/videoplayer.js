import React from 'react'
import Header from '../components/header'
import YouTube from 'react-youtube'
import {useParams} from 'react-router-dom'

function Videoplayer() {
    const params = useParams();
    const video = params.id;
    console.log(params)
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }}
        const _onReady=(event)=> {
            // access to player in all event handlers via event.target
            event.target.pauseVideo();
          }
  return (
    <div>
    <Header></Header>
    <YouTube videoId={video} opts={opts} onReady={(event) => _onReady(event)}
    ></YouTube>
    </div>
  )
}

export default Videoplayer