import { useEffect, useState } from "react";
import PilotCard from "./PilotCard";
import "./PilotList.css";

const PilotList = function (props) {
  const { pilotListToDisplay, setPilotList } = props;

  const onAddPoints = function (pilotChangedIndex) {
    const pilotToChange = pilotListToDisplay[pilotChangedIndex];

    pilotListToDisplay[pilotChangedIndex] = {
      ...pilotToChange,
      points: pilotToChange.points + 5,
    };
    setPilotList(pilotListToDisplay);
  };

  const onRemovePoints = function (pilotChangedIndex) {
    const pilotToChange = pilotListToDisplay[pilotChangedIndex];
    if (pilotListToDisplay[pilotChangedIndex].points - 5 < 0) return;
    pilotListToDisplay[pilotChangedIndex] = {
      ...pilotToChange,
      points: pilotToChange.points - 5,
    };

    setPilotList(pilotListToDisplay);
  };

  return (
    <ul className="pilot-list">
      {pilotListToDisplay.map((pilot, index) => (
        <PilotCard
          key={pilot.number}
          pilot={pilot}
          pilotIndex={index}
          onAddPoints={onAddPoints}
          onRemovePoints={onRemovePoints}
        />
      ))}
    </ul>
  );
};

export default PilotList;
