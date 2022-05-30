import React from 'react'
import './App.scss'
// import { Route, Redirect } from 'react-router-dom'
import { Home, Nav } from '@portfolio/Components'

function App(props: any) {
  return (
    <main className="App">
      <Nav />
      <Home />
      {/* <Nav props={props}></Nav> */}
      {/* <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route exact path="/home" render={() => <Home />} /> */}
    </main>
  )
}

export default App
