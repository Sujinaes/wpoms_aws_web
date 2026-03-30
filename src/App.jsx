import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/index';
import { Toaster } from 'sonner';


function App() {
  return (
    <Router>
      <AppRoutes />
      <Toaster/>
    </Router>
  );
}

export default App;
