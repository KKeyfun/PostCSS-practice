import './App.css';
import { useState } from 'react';
import Articles from './components/Articles';
import Hero from './components/Hero';
import TextSizeBar from './components/TextSizeBar';

function App() {
  const [fontSize,setFontSize] = useState<number>(8);
  return (
    <>
      <nav className='Nav'>
        <ul className='Nav__List Nav__List_left'>
          <li className="Nav__Item"><a className='Nav__Url' href="#" >Home</a></li>
          <li className="Nav__Item"><a className='Nav__Url' href="#" >About</a></li>
          <li className="Nav__Item"><a className='Nav__Url' href="#" >Support</a></li>
        </ul>
        <h2 className='Nav__Header'>PostCSS Toy</h2>
        <ul className='Nav__List Nav__List_right'>
          <li className="Nav__Item"><a className='Nav__Url' href="#" >Log In</a></li>
          <li className="Nav__Item"><a className='Nav__Url' href="#" >Sign Up</a></li>
        </ul>
      </nav>
      <Hero/>
      <main>
        <TextSizeBar setFontSize={setFontSize}/>
        <Articles fontSize={fontSize}/>
      </main>
    </>
  );
}

export default App;
