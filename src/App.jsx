import { useState } from 'react'
import './App.css'
const drumPad = [
  {
    display: "Q",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
  },
  {
    display: "W",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
  },
  {
    display: "E",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
  },
  {
    display: "A",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
  },
  {
    display: "S",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    display: "D",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    display: "Z",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
  },
  {
    display: "X",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
  },
  {
    display: "C",
    audio: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
  },

]
const DisplayComponent = () => {
  const playAudio = (src) => {
    const _audio  = new Audio(src)
    _audio.play()
  }
  const handleClick = (e) => {
    const audio = e.target.children[0]
    playAudio(audio.src)
  }
 document.querySelector("body").addEventListener('keyup', (event) => {
    document.getElementById((event.key).toUpperCase()).click()
  })
  return (
    <div id="display" className="grid grid-cols-3 gap-4">
      {drumPad.map(d => (
        <div onClick={handleClick} key={d.display} id={d.display} className="drum-pad border h-22 w-22 text-center">{d.display}
          <audio autoPlay src={d.audio}></audio>
        </div>
      ))}
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="drum-machine">
      <DisplayComponent></DisplayComponent>
      </div>
    </>
  )
}

export default App
