import React, { useState } from 'react';
import './App.css';
import MyNav from './components/main/MyNav';
import LatestRelease from './components/main/LatestRelease';
import Welcome from './components/main/Welcome';
import MyFooter from './components/main/MyFooter';

const App = () => {
  const [query, setQuery] = useState(''); //useState definisce la variabile di stato 'query' e la funzione 'setQuery' la modifica

  return (
    <>
      <MyNav query={query} setQuery={setQuery} /> {/* // query e setQuery vengono passate come props così MyNav può accedere alla query e modificarla */}
      <Welcome />
      <LatestRelease query={query} /> {/* //query viene passata come prop in modo che LatestRelease possa filtrare i libri */}
      <MyFooter />
    </>
  );
};

export default App;