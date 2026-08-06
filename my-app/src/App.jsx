import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
function Profile(){
  return (
    <img src="ani.jpg" alt="img" />
  );
}
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <section>
      <h1>name</h1>
      <Profile />
      <Profile />
      <Profile />
     </section>

    </>
  )
}

export default App
