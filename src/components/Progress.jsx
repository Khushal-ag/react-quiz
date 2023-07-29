const Progress = ({ index, numQuestion, score, maxPoints, answer }) => {
  return (
    <>
      <header className="progress">
        <progress max={numQuestion} value={index + Number(answer !== null)} />
        <p>
          Question <strong>{index + 1}</strong> / {numQuestion}
        </p>
        <p>
          <strong>{score}</strong> / {maxPoints} points
        </p>
      </header>
    </>
  );
};
export default Progress;
