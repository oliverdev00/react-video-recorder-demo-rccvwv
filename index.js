import React from 'react'
import { render } from 'react-dom'
import VideoRecorder from 'react-video-recorder'

const App = () => (
  <VideoRecorder />
)

render(<App />, document.getElementById('root'))
