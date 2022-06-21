//import logo from './logo.svg';
import { Suspense } from 'react';
import './App.css';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
//import LoadingComponents from './LoadingComponents'
function App() {
  const elements = useRoutes(routes);
  const [showLoading] = useState(true)
  return (
    <div className="App">
      <Suspense fallback={<>
        <CSSTransition
          in = {showLoading}
          timeout = {200}
          classNames="alert"
          unmountOnExit          
        >
          <div className="loading">
            Loading
          </div>
        </CSSTransition>
      </>}>
        {elements}
      </Suspense>
    </div>
  );
}

export default App;
