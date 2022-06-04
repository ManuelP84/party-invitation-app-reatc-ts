import { useState } from 'react'
import './App.css'
import AddToList from './components/AddToList'
import './components/List'
import List from './components/List'

export interface IState {
  people: {
    name: string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {  
  
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Manuel",
      url:"",
      age: 37,
      note: "Nota manuel"
    },
    {
      name: "Angie",
      url:"",
      age: 35,
      note: "Nota Angie"
    },
    {
      name: "Juanma",
      url:"",
      age: 5,
      note: "Nota juanma"
    }
  ])

  return (
    <div className="App">
      <h1>People invited to our party!</h1>
      <List people = {people}/>
      <AddToList people={people} setPeople={setPeople}/>
    </div>
  )
}

export default App
