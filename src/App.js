import './App.css';
import {BrowserRouter as Router, Link, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route'

const User = ({match}) => {
  return (<h1>Welcome {match.params.username}</h1>)
}

function App() {
  return (
    
    <Router>
      <div className="App">
        <ul>
          <li><NavLink to="/" activeStyle={{'color': 'green'}} exact>Home</NavLink></li>
          <li><NavLink to="/about" activeStyle={{'color': 'green'}} exact>About</NavLink></li>
        </ul>
      <Route path="/" exact strict render = {
          () => {
            return (<h1>Welcome Home</h1>)
          }
        }/>
      <Route path="/about" exact strict render={
          () => {
            return(<h1>About page</h1>)
          }
        }/>
      <Route path="/user/:username" exact strict component={User}/>
      </div>
    </Router>
  );
}

export default App;
