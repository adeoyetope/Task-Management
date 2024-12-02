import React, { useState } from "react";
import "./cards.css";
import { useSelector, useDispatch } from "react-redux";
import { deletePet } from "../slices/petSlice";

const SelectedPet = ({ setDisable, disable }) => {
  const [priceTotal, setPriceTotal] = useState(null);
  const [petInput, setPetInput] = useState(1);
  const selectedPet = useSelector((state) => state.pets.value);
  const dispatch = useDispatch();

  const deletePets = (pet) => {
    dispatch(deletePet(pet));

    setDisable(!disable);
  };
  const handleActiveInput = (id, e) => {
    const value = parseInt(e.target.value, 10) || 1; // Ensure the value is a valid integer, defaulting to 1
    setPetInput((prev) => ({
      ...prev,
      [id]: value, // Update the quantity for the specific pet by its `id`
    }));
  };

  const totalPrice = selectedPet.reduce((accumulator, petPriceTag) => {
    const quantity = petInput[petPriceTag.id] || 1; // Default to 1 if no input
    // console.log(2 * quantity);
    return accumulator + petPriceTag.price * quantity; //?.price;
  }, 0);

  console.log(totalPrice);

  const handleFinalize = () => {
    setPriceTotal(totalPrice);
  };

  return (
    <div>
      <table>
        <tr>
          <th>Image</th>
          <th>name</th>
          <th>race</th>
          <th>location</th>
          <th>price</th>
          <th>Packs</th>
          <th>Quantity</th>
        </tr>
        {selectedPet.map((pet, idx) => (
          <tr>
            <td><img src={pet.photo} alt="" style={{width: "50px" , borderRadius: "50%"}} /></td>
            <td>{pet.name}</td>
            <td>{pet.race}</td>
            <td>{pet.location}</td>
            <td>{pet.price}</td>
            <td>
              <input
                style={{ width: "30px", outline: "none", border: "none" }}
                type="number"
                id={pet.id}
                //value={pet.quantity ?? 1}
                value={petInput[pet.id] || 1}
                onChange={(e) => handleActiveInput(pet.id, e)}
              />
            </td>
            <td>
              {" "}
              <button
                style={{ background: "red", cursor: "pointer" }}
                onClick={() => deletePets(pet)}
              >
                remove
              </button>
            </td>
          </tr>
        ))}

        <tr>
          <td colSpan="7">
            <hr style={{ border: "1px solid grey" }} />
          </td>
        </tr>

        <tr>
          <td colSpan="6">Total Price</td>
          <td>{totalPrice}</td>
        </tr>
      </table>
      <div>
        <button onClick={() => deletePets(pet)}>remove</button>
      </div>

      <div>
        <h3>
          <button onClick={handleFinalize}>finalise</button>
        </h3>
      </div>
      {priceTotal ? <h1>Total Price: {priceTotal}</h1> : null}
    </div>
  );
};

export default SelectedPet;
