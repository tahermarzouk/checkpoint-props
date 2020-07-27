import React from 'react';
import PropTypes from 'prop-types';

import Profile from './component/Profile';

function App() {
  return (
    <div className="App">
      <Profile fullName="taher" bio= "aaa" profession="etudiant">
      <img src="ph.jpg" alt="hello" style={{height: "200px",
  marginLeft: "300px",
  marginTop: "100px"}}/> 
      </Profile>
    </div>
  );
}
Profile.PropTypes = {
  bio : PropTypes.string ,
  fullName : PropTypes.string ,
  profession : PropTypes.string 
}

export default App;
