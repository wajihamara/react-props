import React from "react";
import FirstName from "./component/function";
import Profession from "./component/Profession";
import Bio from "./component/Bio";
import myPhoto from "./pac.jpg";
{
  /*import Welcome from "./component/Welcome";*/
}

function App() {
  const styleObject = { color: "red", textAlign: "center" };
  return (
    <div className="App" style={styleObject}>
      <div>
        <FirstName name="amara wajih" />
      </div>
      <Profession Prof="student">
        <img src={myPhoto} />
      </Profession>
      {/*
      <div>
        <Welcome name="wajih" alertMyInput={alertMyInput} />
      </div> */}

      <Bio Mybio="creating web sites" />
    </div>
  );
}

export default App;
