import "./Container.css";
import { useState } from "react";
import BestTeamCard from "./BestTeamCard";
import PilotList from "./PilotList";
import PilotCard from "./PilotCard";

const sortListByPoints = function (list) {
  return list.sort((a, b) => b.points - a.points);
};

const computeBestTeam = function (pilotList) {
  const arrayOfTeamObjects = pilotList.reduce((result, { team, points }) => {
    const teamAlreadyInArray = result.find((element) => element.team === team);
    teamAlreadyInArray
      ? (teamAlreadyInArray.points += points)
      : result.push({ team, points });
    return result;
  }, []);

  sortListByPoints(arrayOfTeamObjects);
  const bestTeam = arrayOfTeamObjects[0].team;

  return bestTeam;
};

const getAllPlayersFromBestTeam = function (pilotList, bestTeam) {
  const bestTeamMembers = pilotList.filter((pilot) => pilot.team === bestTeam);

  return bestTeamMembers;
};

const Container = function ({ pilotList }) {
  const [sortedPilotList, setSortedPilotList] = useState(
    sortListByPoints(pilotList)
  );
  const [bestTeam, setBestTeam] = useState(computeBestTeam(sortedPilotList));

  const setPilotList = function (changedPilotList) {
    setSortedPilotList([...sortListByPoints(changedPilotList)]);
    setBestTeam(computeBestTeam(sortedPilotList));
  };

  // console.log(getAllPlayersFromBestTeam(sortedPilotList, bestTeam));
  console.log();
  return (
    <div className="container">
      <PilotList
        pilotListToDisplay={sortedPilotList}
        setPilotList={setPilotList}
      />
      {/* <BestTeamCard bestTeam={bestTeamMembers} /> */}
      <PilotCard
        bestTeamPlayers={getAllPlayersFromBestTeam(sortedPilotList, bestTeam)}
      />
    </div>
  );
};

export default Container;
