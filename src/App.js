import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import FormBuilder from './views/FormBuilder';

function App() {
  return (
    <Router>
      <div className='flex flex-col gap-8'>
        <header className='flex items-center justify-between gap-3 p-3 bg-indigo-500'>
          <h1 className='font-bold text-white text-2xl'>Form Builder</h1>
        </header>

        <div className='px-3'>
          <Routes>

            <Route path='/form-builder/' exact element={<FormBuilder />} />
            <Route path='/' exact element={<Home />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
