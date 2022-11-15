// import logo from './logo.svg';
import React ,{ useState } from 'react';
import './App.css';
import Alert from './components/alert';
import About from './components/about';
import Navbar from './components/Navbar'
import Txt from './components/txt';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";
function App() {
    const [Theme, setTheme] = useState('light'); //Whether Dark Mode is enabled or not
const [alert, setalert] = useState();
const [mode, setmode] = useState("On");
const showAlert = (message,type)=>{
setalert({msg:message,
type:type})
setTimeout(() => {
    setalert(null)
}, 2000);
}
    const toggleMode=()=>{
if (Theme==='light'){
    setTheme('dark');
    document.body.style.backgroundColor="black";
    showAlert("Dark mode is Enabled","success");
    setmode("Off");
    
} else{
    setTheme('light')
    document.body.style.backgroundColor="white"
    showAlert("Light mode is Enabled","success");
    setmode("On")
    
}
}

    return (<Router><>
     <Navbar tittle="Game On"   theme={Theme} toggleMode = {toggleMode} mode={mode}/>
<Alert  Alert={alert} showAlert={showAlert}/>
<div className="container">
<Routes>
        
          <Route exact path="/about" element={<About theme={Theme}/>} />
          <Route exact path="/" element={<Txt theme={Theme} />} />
          

        </Routes>    
</div>
</>
</Router>
);      
}


export default App;
