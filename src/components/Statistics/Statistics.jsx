export const Statistics = (
    { good,
        neutral,
        bad,
        total,
        positivePercentage }
) => {
    return (<>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive feedback: {positivePercentage} %</p>
    </>)
}
