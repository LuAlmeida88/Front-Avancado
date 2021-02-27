import logo from './logo.svg';
import './App.css';
import { lazy, Suspense } from 'react';

const Parte1 = lazy (() => import('./Parte1'));
const Parte2 = lazy (() => import('./Parte2'));
const Parte3 = lazy (() => import('./Parte3'));

//import Parte1 from  './Parte1';
//import Parte2 from './Parte2';
//import Parte3 from './Parte3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Suspense fallback={<p> Carregando</p>}>
          <Parte1 />
        </Suspense>
        <Suspense fallback={<p> Carregando</p>}>
           <Parte2 />
        </Suspense>
       
      </header>
       <Suspense fallback={<p> Carregando</p>}>
      <Parte3 />
      </Suspense>
    </div>
  );
}

export default App;
