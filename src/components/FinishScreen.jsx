const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "🥇";
  else if (percentage >= 80) emoji = "🥈";
  else if (percentage >= 60) emoji = "🥉";
  else if (percentage >= 40) emoji = "👍";
  else emoji = "👎";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>You Scored <strong>{points}</strong> out of{" "}
        {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">
        (Highscore : <strong>{highscore}</strong> points)
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
};
export default FinishScreen;
