import React from "react";

const ObjectCreator = ({ name, diagram }) => {
  const createObject = (name, diagram) => ({ 이름: name, 공정: diagram });

  return (
    <div style={{ backgroundColor: "red", marginBottom: 10 }}>
      {createObject(name, diagram).이름} :
      <div>{createObject(name, diagram).공정}</div>
    </div>
  );
};

export default ObjectCreator;
