import React from "react";

const Profession = (props) => {

  return (
    <div>
      <h1>My profession:{props.Prof}</h1>
      {props.children}
    </div>
  )
}

export default Profession;
