import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

  function App() {
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)
    const [theme, setTheme] = useState('light')

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null)
      }, 1500)
    }

    const changeTheme = () => {
      var dropdown = document.getElementById("myTheme");
      var selectedValue = dropdown.options[dropdown.selectedIndex].value;
      if (selectedValue === 'red'){
        setMode('red')
        document.body.style.backgroundColor = '#E7717D';
        showAlert("red mode has been enabled!", 'success')
      }else if(selectedValue === 'blue'){
        setMode('blue')
        document.body.style.backgroundColor = '#659DBD';
        showAlert("blue mode has been disabled!", 'success')
      }else if(selectedValue === 'yellow'){
        setMode('yellow')
        document.body.style.backgroundColor = '#EFE2BA';
        showAlert("yellow mode has been disabled!", 'success')
      }else {
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been disabled!", 'success')
      }
    }

    const toggleMode = () => {
      if (mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = '#042743';
        showAlert("Dark mode has been enabled!", 'success')
      }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light mode has been disabled!", 'success')
      }
    }
  return (
    <Router>
      <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode} changeTheme = {changeTheme}/>
      <Alert alert = {alert} />
      <div className="container my-3">
      <Routes>
        <Route exact path="/" element={<TextForm title="Enter Text below to Analyze change" mode={mode} showAlert={showAlert} />} />
        <Route exact path="/about" element={<About mode = {mode} />} />
      </Routes>
        {/* <Routes>
          <Route path="/">
            <TextForm title = "Enter Text below to Analyze change" mode = {mode} showAlert = {showAlert}/>
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;
