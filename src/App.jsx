//import logo from './logo.svg';
import { Suspense } from 'react';
import './App.css';
import routes from './routes'
import { useRoutes } from 'react-router-dom';
function App() {
  const elements =  useRoutes(routes);
  return (
      <div className="App">
        <Suspense fallback={<h1>Loading</h1>}>
          {elements}
        </Suspense>
      </div>
  );
}

export default App;
