import {Fragment} from 'react';
import Home from './components/Home';
import People from './components/People';
import Planet from './components/Planet';
import {Route, Routes} from "react-router-dom";


function App() {
  return (
    
    <Fragment>
      <div className="container">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/people/:id" element={<People />}/>
        <Route path="/planet/:id" element={<Planet />}/>
      </Routes>
      </div>
    </Fragment>
  );
}

export default App
