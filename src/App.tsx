import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Home';
import AddBook from './pages/AddBook';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/'
            element={
              <Homepage/>
            }
          />
          <Route path='/addbook'
            element={
              <AddBook/>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
