import React from "react";
import FormPage from "./components/FormPage";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Loginpage from "./Loginpage";
import 'bootstrap/dist/css/bootstrap.min.css' 
import SignupForm from "./components/forms/Signupform";
import Google from "./components/Google";
import Text from "./components/Text";


const App =()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path = '/' element={<FormPage/>}></Route>
                    <Route exact path = '/loginpage' element={<Loginpage/>}></Route>
                    <Route exact path='/loginform' element={<SignupForm/>}></Route>
                    <Route exact path="/google" element={<Google/>}></Route>  
                    <Route exact path="/text" element={<Text/>}></Route>                             
                </Routes>
            </Router>
        </>
        
    )
}


export default App