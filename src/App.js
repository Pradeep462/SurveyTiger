import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from './Logo.jpeg';
import Menu from './components/Menu'; 
import CreateSurvey from './components/CreateSurvey'
import Published from './components/Published'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import {Link} from 'react-router-dom';


function App() {

 const [squestion , setSquestion] = useState([]);

  return (
    <>
    <div className="col-md-10 offset-md-1 clo-12 text-center">
     
     
        <Router>
        <Link to="/">
             <img className="col-md-6" alt='logo' src={Logo}></img>
       </Link> 

          <Switch>
             <Route path="/" component={Menu} exact/>
             <Route path="/create">
                <CreateSurvey squestion={squestion} setSquestion={setSquestion} />
               </Route>
              <Route path="/published"  >
                <Published questions={squestion}/>
                </Route>
    
          </Switch>
        </Router>

    </div>
    </>
  );
}

export default App;
