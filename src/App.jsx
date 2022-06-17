//import logo from './logo.svg';
import { Suspense } from 'react';
import './App.css';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
import LoadingComponents from './LoadingComponents'
function App() {
  const elements =  useRoutes(routes);
  return (
      <div className="App">
        <Suspense fallback={<LoadingComponents/>}>
          {elements}
        </Suspense>
      </div>
  );
}

export default App;
