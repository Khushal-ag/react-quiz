const NextQuestion = ({ dispatch, answer, index, numQuestion }) => {
  if (answer === null) return null;
  if (index < numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextquestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestion - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
};
export default NextQuestion;
