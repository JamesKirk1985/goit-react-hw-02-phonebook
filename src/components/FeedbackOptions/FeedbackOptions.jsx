export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <>
        {/* <h2>Please leave feedback</h2> */}
      <button type="button" onClick={onLeaveFeedback}>{ options.positive}</button>
      <button type="button" onClick={onLeaveFeedback}>{ options.neutral}</button>
      <button type="button" onClick={onLeaveFeedback}>{ options.negative}</button>
        </>
    )
}