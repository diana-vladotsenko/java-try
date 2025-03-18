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
          <div>Name: {person.name}</div>
          <div>Country:  {person.country}</div>
          <div>Age:  {person.age}</div>
          <div>totalResult:  {person.totalResult}</div>
          ------------------------------
        </div>)}
    <h1>Events:</h1>
    {event.map(event => 
        <div key={event.id}>
          <div>Person ID: {event.person.id}</div>
          <div>Result:  {event.result}</div>
          ------------------------------
        </div>)}
    </>
  )
}

export default App
