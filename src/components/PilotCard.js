import Flags from "country-flag-icons/react/3x2";
import teamClassNamesForPilotCards from "./teamColors";
import "./PilotCard.css";
import "./TeamColor.css";

const getBorderClassName = function (team) {
  return teamClassNamesForPilotCards[team]?.border;
};

const getLineClassName = function (team) {
  return teamClassNamesForPilotCards[team]?.line;
};

const PilotCard = function (props) {
  const { firstName, lastName, number, team, points, image, country } =
    props.pilot || {};
  const { pilotIndex } = props;
  const { bestTeamPlayers } = props;

  const Flag = Flags[country];

  const FlagOfBestTeamPlayerOne = bestTeamPlayers
    ? Flags[bestTeamPlayers[0].country]
    : Flags.US;

  const FlagOFBestTeamPlayerTwo = bestTeamPlayers
    ? Flags[bestTeamPlayers[1].country]
    : Flags.US;

  const addPointsHandler = function (event) {
    event.preventDefault();

    props.onAddPoints(pilotIndex);
  };

  const removePointsHandler = function (event) {
    event.preventDefault();
    props.onRemovePoints(pilotIndex);
  };
  console.log(bestTeamPlayers);
  return bestTeamPlayers ? (
    <article className="best-team-container">
      <div className="first-player-container">
        <img
          className="first-player-image"
          src={bestTeamPlayers[0].image}
          alt={`Image of ${
            bestTeamPlayers[0].firstName + " " + bestTeamPlayers[0].lastName
          }`}
        />
        <div className="first-player-flag-name-container">
          <FlagOfBestTeamPlayerOne className="best-team-flag" />
          <p className="first-player-name">
            {bestTeamPlayers[0].firstName + " "}
            <strong>{bestTeamPlayers[0].lastName}</strong>
          </p>
        </div>
        <p className="best-team-player-points">
          <strong>{bestTeamPlayers[0].points}</strong> PTS
        </p>
      </div>
      <div className="team-info-container">
        <p className="best-team-name">
          <strong>{bestTeamPlayers[0].team}</strong>
        </p>
        <p className="best-team-points">
          <strong>
            {bestTeamPlayers[0].points + bestTeamPlayers[1].points}
          </strong>{" "}
          PTS
        </p>
      </div>
      <div className="second-player-container">
        <img
          className="first-player-image"
          src={bestTeamPlayers[1].image}
          alt={`Image of ${
            bestTeamPlayers[1].firstName + " " + bestTeamPlayers[1].lastName
          }`}
        />
        <div className="first-player-flag-name-container">
          <FlagOFBestTeamPlayerTwo className="best-team-flag" />
          <p className="first-player-name">
            {bestTeamPlayers[1].firstName + " "}
            <strong>{bestTeamPlayers[1].lastName}</strong>
          </p>
        </div>
        <p className="best-team-player-points">
          <strong>{bestTeamPlayers[1].points}</strong> PTS
        </p>
      </div>
    </article>
  ) : (
    <li
      className={`pilot-list-card ${
        getBorderClassName(team) || "pilot-border-generic"
      }`}
    >
      <div className="flex-container">
        <div className="pilot-number-container">{props.pilotIndex + 1}</div>
        <div
          className={getLineClassName(team) || "vertical-line-generic"}
        ></div>
        <div className="container-name-team">
          <div className="container-flag-name">
            <Flag className="pilot-country-flag" />
            <p className="pilot-name">
              {firstName + " "}
              <strong>{lastName}</strong>
            </p>
          </div>
          <p className="team-name">{team.toUpperCase()}</p>
        </div>
      </div>
      <img src={image} alt={`Image of ${firstName + " " + lastName}`} />

      <button
        title="Remove 5 points"
        onClick={removePointsHandler}
        className="button remove-points-button"
      >
        <span className="button-text">-</span>
      </button>

      <p className="pilot-points">
        <strong>{points} </strong> PTS
      </p>

      <button
        title="Add 5 points"
        onClick={addPointsHandler}
        className="button add-points-button"
      >
        <span className="button-text">+</span>
      </button>
    </li>
  );
};

export default PilotCard;
