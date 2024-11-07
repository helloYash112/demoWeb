import { useState } from 'react';
import Header from './Header.jsx';
import logo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header
        name="yash wardhan"
        image={logo}
      />
      
      </>
  );
}

export default App;
