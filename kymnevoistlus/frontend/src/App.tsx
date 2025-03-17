import './App.css';
import { Person } from './models/Person';
import { Event } from './models/Event';
import { useEffect, useState } from 'react'

function App() {
  const [person, setPersons] = useState<Person[]>([]);
  const [event, setEvents] = useState<Event[]>([]);
  useEffect(() =>{  
    fetch("http://localhost:8080/persons") 
    .then (res => res.json()) 
    .then (json => setPersons(json))
  },[]);
  useEffect(() =>{  
    fetch("http://localhost:8080/events") 
    .then (res => res.json()) 
    .then (json => setEvents(json))
  },[]);

  return (
    <>
    <h1>People:</h1>
    {person.map(person => 
        <div key={person.id}>
          {person.name}
          {person.country}
          {person.age}
          {person.totalResult}
        </div>)}
    <h1>Events:</h1>
    {event.map(event => 
        <div key={event.id}>
          {event.person.id}
          {event.result}
        </div>)}
    </>
  )
}

export default App
