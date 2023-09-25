import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './pages/Home';
import Layout from './components/Layout';
import AddBook from './pages/AddBook';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/'
              element={
                <Homepage/>
              }
            />
            <Route path='/addbook'
              element={
                <AddBook />
              }
            />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
