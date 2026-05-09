function EmptyState({ resetSearch }) {
  return (
    <div className="empty-state">

      <div className="empty-icon">
        🔍
      </div>

      <h2>No Products Found</h2>

      <p>
        Try searching for something else
        or reset your search.
      </p>

      <button
        className="reset-btn"
        onClick={resetSearch}
      >
        Reset Search
      </button>

    </div>
  );
}

export default EmptyState;