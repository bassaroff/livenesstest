import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    OzLiveness.open({

      // ...
      style: {
        //the backward compatibility block
        doc_color: "",
        face_color_success: "",
        face_color_fail: "",
        // the current customization block
        faceFrame: {
          faceReady: "",
          faceNotReady: "",
        },
        centerHint: {
          textSize: "",
          color: "",
          yPosition: "",
          letterSpacing: "",
          fontStyle: "",
        },
        closeButton: {
          image: "",
        },
        backgroundOutsideFrame: {
          color: "",
        },
      },
      // ...
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
