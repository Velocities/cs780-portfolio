import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section>
        <h1>About Myself</h1>
        <p>
          I'm Cameron Green, a software engineer completing a Computer Science major
          at the <a href="www.unh.edu" className='text-blue-400'>University of New Hampshire</a>.
          Becoming a successful software engineer is a goal I strive to achieve in my career,
          which requires that I become knowledgable on standards and good practices surrounding
          user experiences and accessibility. On this webpage, I describe these various standards
          and good practices that I learned from assignments during my time in CS 780 Human-Computer
          Interaction at UNH.
        </p>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
