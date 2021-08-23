 import './App.css';
 import Header from './components/header/header'
 import Vehicle from './components/vehicle/vehicle'
 import Train from './components/train/train'
 import Plane from './components/plane/plane'
 import Car from "./components/nkarner/w222.jfif"
 import Tn from "./components/nkarner/train.jfif"
 import Pn from "./components/nkarner/plane.jfif"
 import {BrowserRouter as Router,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <img src = {Car} alt = "car" height = {400} width = {426}/>
      <img src = {Tn} alt = "train" height = {400} width = {426}/>
      <img src = {Pn} alt = "plane" height = {400} width = {427}/>
        <Route path = "/vehicle" component = {Vehicle}/>
        <Route path = "/train" component = {Train}/>
        <Route path = "/plane" component = {Plane}/>
      </Router>
    </div>
  );
}

export default App;
