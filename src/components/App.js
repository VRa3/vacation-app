import React from 'react';
import '../static/scss/main.scss'
import BaseBox from './BaseBox'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
          <div className="container overflow-hidden">
              <BaseBox/>
          </div>
      </Router>
  );
}

export default App;
