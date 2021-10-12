import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FirstPage from './pages/FirstPage';
import SummaryPage from './pages/SummaryPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FirstPage} />
        <Route path="/summary" component={SummaryPage} />
      </Switch>
    </Router>
  )
}

export default App
