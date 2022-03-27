const BestTeamCard = function ({ bestTeam }) {
  return bestTeam ? (
    <div>
      <p>{bestTeam.points}</p>
      <p>{bestTeam.team}</p>
      <p>{bestTeam.members[0].lastName}</p>
      <p>{bestTeam.members[1].lastName}</p>
    </div>
  ) : (
    <></>
  );
};

export default BestTeamCard;
