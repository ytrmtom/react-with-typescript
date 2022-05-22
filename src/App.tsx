import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { Sub } from './types';




interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

// const INITIAL_STATE = [
//   {
//     nick: 'dapelu',
//     subMonths: 3,
//     avatar: 'https://avatars2.githubusercontent.com/u/529023399?s=400&v=4',
//     description: 'I am a software developer and I love to code.',
//   },
//   {
//     nick: 'juan',
//     subMonths: 5,
//     avatar: 'https://i.pravatar.cc/400?u=juan',
//   },
//   {
//     nick: 'tomás',
//     subMonths: 8,
//     avatar: 'https://unavatar.io/twitter/tomytrm',
//     description: 'I am a web developer'
//   }
// ]

function App() {

  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0);

const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }


  return (
    <div className="App" ref={divRef}>
      <h1>Subscriptor</h1>

      <List subs={subs} />
      <Form onNewSub={handleNewSub} />

    </div>
  );
}

export default App;
