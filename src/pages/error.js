import React from 'react'
import Reddit404error from '../assets/reddit404error.png'
import Header from '../components/header.js'
function error() {
  return (
    <div>
        <Header></Header>
        <img src={Reddit404error}></img>
        <h1>page not found</h1>
        <p>the page you requested doesn't exist</p>
    </div>
  )
}

export default error