import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import TeacherLogin from './Components/TeacherLogin';
import TeacherRegistration from './Components/TeacherRegistration';
import FrontPage from './Pages/FrontPage';
//import frontPage from './frontPage';
import HomePage from './Pages/HomePage';
import TeacherHomePage from './Pages/TeacherHomePage';



export default function App() {
  return (
    <div>
    <BrowserRouter>
     <Switch>
         <Route exact path="/" component={()=><Redirect to="/front"/>}/>
         <Route exact path="/front" component={()=><FrontPage/>} />

         
         <Route exact path="/signin" component={()=><LoginPage/>}/>
         <Route exact path="/signup" component={()=><RegisterPage/>}/>

         <Route exact path="/signint" component={()=><TeacherLogin/>}/>
         <Route exact path="/signupt" component={()=><TeacherRegistration/>}/>

         
         <Route exact path="/homepaget" component={()=><TeacherHomePage/>}/>
         <Route exact path="/homepage" component={()=><HomePage/>}/>
       </Switch>
    
     </BrowserRouter>
      
      
    </div>
  )
}
