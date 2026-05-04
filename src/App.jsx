import { useState, useEffect } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import { AboutMe } from './AboutMe';
import { MyClasswork } from './MyClasswork';
import { PaddedButton } from './PaddedButton';
import { PaddedLink } from './PaddedLink';

function App() {
  const [selectedSectionToView, setSelectedSectionToView] = useState(0)

  useEffect(() => {
    document.title = "Cameron Green CS 780 Final Portfolio"
  }, []);

  return (
    <>
      {/* These are merely contextual/local navigational links */}
      <nav className="sticky top-0 w-full bg-blue-900">
        <PaddedButton onClick={() => setSelectedSectionToView(0)}>About Me</PaddedButton>
        <PaddedButton onClick={() => setSelectedSectionToView(1)}>My Classwork</PaddedButton>
        <PaddedLink href="https://courses.unh.edu/class/202610/15692" target='_blank'>
          HCI Course Fall 2026
        </PaddedLink>
      </nav>

      <main className='w-full flex justify-center'>
        {selectedSectionToView === 0 ? (
          <AboutMe />
        ) : (
          <MyClasswork />
        )}
      </main>

    </>
  )
}

export default App
