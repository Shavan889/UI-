import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://images.unsplash.com/photo-1739967350392-7967c8f4ee0a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      color: 'blue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1739208831768-f949ce35b1bd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688',
      intro: '',
      color: 'orange',
      tag: 'Banked'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661681115364-d6a47c193442?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      color: 'black',
      tag: 'Attracted'
    },
    {
      img: 'https://images.unsplash.com/photo-1744691842534-d7a3b0b2489a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      color: 'gray',
      tag: 'Served'
    },
     {
      img: 'https://images.unsplash.com/photo-1760625525477-f725e48f5a13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
      intro: '',
      color: 'red',
      tag: 'Avenger'
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  )
}

export default App

