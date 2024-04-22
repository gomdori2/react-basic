import React from "react";
import { useParams } from "react-router-dom";

const Animal = () => {
  const { animal } = useParams();
  return (
    <div>
      <h2>동물 {animal}</h2>
    </div>
  );
};

export default Animal;
