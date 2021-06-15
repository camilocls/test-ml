import "./styles.scss";

function EmptyState({ query }) {
  return (
    <div className="empty-state">
      <h2 className="empty-state__message">
        Sorry, didn't get results with{" "}
        <span className="empty-state__query">{query}</span>, try again! 🤔🥺
      </h2>
    </div>
  );
}

export default EmptyState;
