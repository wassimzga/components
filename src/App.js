
import './App.css';
import React from 'react';
import FullName from './component/profile/FullName';
import Adress from './component/profile/Address';
import Profilphoto from './component/profile/ProfilPhoto'



function App() {
  return (
    <div className="App">
      <FullName/>
      <Adress/>
      <Profilphoto/>
     
    </div>
  );
}

export default App;
