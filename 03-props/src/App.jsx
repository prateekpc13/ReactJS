import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <>
   
   <div className="card-container">
    <Card name='Tony Stark' caption='"I am Iron Man"' img='https://images.unsplash.com/photo-1657558045738-21507cf53606?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dG9ueSUyMHN0YXJrfGVufDB8fDB8fHww'/>
    <Card name='Stephen Strange' caption='"Dormammu, I’ve come to bargain!"' img='https://www.hollywoodreporter.com/wp-content/uploads/2021/12/Doctor-Strange-in-the-Multiverse-of-Madness-Marvel-Publicity-H-2021.jpg'/>
    <Card name='Peter Parker' caption={`"I'm just your friendly neighborhood Spider-Man."`} img='https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BpZGVyJTIwbWFufGVufDB8fDB8fHww'/>
   </div>
    
    </>
  )
}

export default App