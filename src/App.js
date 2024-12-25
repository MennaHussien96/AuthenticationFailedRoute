import React from 'react';
import CheckIcon from './assets/CheckIcon';

function App() {
  return (
    <div style={{ textAlign: 'center', display:'flex', alignItems:'center', flexDirection:'column',
      justifyContent:'center', height:'100vh'
     }}>
      <CheckIcon/>
  <h1>Authentication Process Failed</h1>
  <p>There was an issue completing your Authentication process. Please try again or contact support if the issue persists.</p>
    </div>
  );
}

export default App;
