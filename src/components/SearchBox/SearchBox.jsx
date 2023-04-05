const SearchBox = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query"></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
