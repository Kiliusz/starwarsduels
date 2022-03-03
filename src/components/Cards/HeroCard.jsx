import React from "react";
import GenericCard from "./GenericCard";

const HeroCard = ({ loading, details, winner = false, draw = false }) => {
  const heroStats = [
    { key: "mass", label: "Mass" },
    { key: "skin_color", label: "Skin Color" },
    { key: "hair_color", label: "Hair Color" },
    { key: "eye_color", label: "Eye Color" },
    { key: "gender", label: "Gender" },
  ];

  //I chose the height as power instaed of mass, because many characters has unknown mass :)
  return (
    <GenericCard
      data={details}
      statistics={heroStats}
      loading={loading}
      winner={winner}
      draw={draw}
      name={details?.name}
      power={details?.height}
      powerLabel="Height"
    />
  );
};

export default HeroCard;
