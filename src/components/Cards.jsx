






import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPet } from "../slices/petSlice";


const Cards = ({ race, location, type, name, photo, item, disable }) => {
  const adoptedPets = useSelector((state) =>
    state.pets.value.find((pet) => pet.id === item.id)
  );

  const dispatch = useDispatch();
  
  
  
  const [isChecked, setIsChecked] = useState(adoptedPets?.adopted || false);
  

  const handleCheck = () => {
   {!isChecked?  dispatch(addPet(item)) : null};
    setIsChecked(true);
  };

  return (
    <div style={{ margin: "20px 20px" }}>
      <div>
        <img
          src={photo}
          alt=""
          style={{ width: "300px", height: "250px", borderRadius: "10px" }}
        />
        <h2>{type}</h2>
        <h3>{name}</h3>
        <p>{race}</p>
        <p>{location}</p>
        <input
          type={"checkbox"}
          onChange={handleCheck}
          disabled={disable? isChecked : null } // to able and disable checkbox
          checked={isChecked}
          style={{
            marginLeft: "10px",
            width: "20px",
            height: "20px",
            cursor: "pointer",
            backgroundColor: "transparent",
            // color: {check? "green" : "red"},
            // display: "none"
          }}
        />{" "}
        <span style={{ color: isChecked ? "green" : "red" }}>
          {isChecked ? "Adopted" : ""}
        </span>{" "}
        : null
      </div>
    </div>
  );
};

export default Cards;
