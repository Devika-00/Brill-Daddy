import React from 'react';
import MainRouter from './Router/Router';
import ErrorBoundary from './components/Error/errorboundaries';

const App = () => {
  return (
    

       <ErrorBoundary>
         <MainRouter />
       </ErrorBoundary>
  );
};

export default App;
