import React from "react";
import { ListTask } from "./ListTask";
import Cards from "./Cards";
// import Cards from "./Cards";

const ListMap = ({disable}) => {
  console.log(ListTask);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {ListTask.map((item) => (
        <Cards
          race={item.race}
          location={item.location}
          name={item.name}
          photo={item.photo}
          type={item.type}
          item={item}
          disable={disable}
        />
      ))}
    </div>
  );
};

export default ListMap;
