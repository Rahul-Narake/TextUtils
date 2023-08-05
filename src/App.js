import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#222933';
      showAlert('Dark Mode has Enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has Enabled', 'success');
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggle={toggleMode} />
        <div className="container">
          <Alert alert={alert} />
        </div>
        <div className="container">
          {/* <TextForm
          heading="Enter The Text to Analyze"
          mode={mode}
          showMsg={showAlert}
        /> */}
          <Routes>
            <Route path="/about" element={<About mode={mode} />} />

            <Route
              path="/"
              element={
                <TextForm
                  heading="Try TextUtils - Word Counter,Character Counter,Remove ExtraSpaces"
                  mode={mode}
                  showMsg={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
