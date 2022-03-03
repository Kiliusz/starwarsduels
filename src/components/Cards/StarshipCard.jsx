import React from "react";
import GenericCard from "./GenericCard";

const StarshipCard = ({ loading, details, winner = false, draw = false }) => {
  const starshipStats = [
    { key: "cargo_capacity", label: "Cargo Capacity" },
    { key: "consumables", label: "Consumables" },
    { key: "cost_in_credits", label: "Cost" },
    { key: "length", label: "Length" },
    { key: "passengers", label: "Passengers" },
  ];

  return (
    <GenericCard
      data={details}
      statistics={starshipStats}
      loading={loading}
      winner={winner}
      draw={draw}
      name={details?.name}
      power={details?.crew}
      powerLabel="Crew"
    />
  );
};

export default StarshipCard;
