import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Profile } from './Profile'
import { getImageUrl } from './utlits'

const person = {
  name:"aniket",
  theme:{
    backgroundColor:'black',
    color:'pink'
  }
};

let guest=0;
 function Cup({guest}){
  guest =guest +1;
  return <h2> Tea cup for guest #{guest}</h2>
 }

function App() {
  const [count, setCount] = useState(0)
  //  const listItems =people.map(person =>
  //   <li key ={person.id}>
  //     <img src="getImageUrl(person)" alt="" />
  //   <p><b>
  //     {person.name}:</b>
  //     {' '+ person.profession+' '}
  //     known for {person.accomplishment}</p>
  //   </li>
  //  )
  return (
    <>

    <li>
      <Cup guest={1} />
      <Cup guest={0} />
      <Cup guest={2} />
      <Cup guest={3} />
      <Cup />
      <Cup />
    </li>
    <ul>
      <Item  isPacked={true}
      name='space suit'/>
      <Item  isPacked={true}
      name='space suit'/>
      <Item  isPacked={false}
      name='space suit'/>
    </ul>
    
    <div style={person.theme}>
  <h1>{person.name}'s Todos</h1>
    </div>
     <section>
      <h1>name</h1>
      <Profile />
      <Profile />
      <Profile />
     </section>

     <section>
      <ul>
        <li>Invent new traffic</li>
        <li>Invent new traffic</li>
        <li>Invent new traffic</li>
        <li>Invent new traffic</li>
      </ul>
     </section>
      {/* <Card>
      <Avatar size={100} person={{
        name:'aniket',
        imageId:'1'
      }} />
    </Card> */}
    </>
  )
}

function Avatar({person,size}){
  return(
    <img  className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}/>
  )
}

function Card({children}){
  return(
    <div className='card'>
      {
        {children}
      }
    </div>
  )
}

function Item({name,isPacked}){
  return(
    <li className='item'>
      {name} {isPacked && '#'}
    </li>
  )
}

export default App
