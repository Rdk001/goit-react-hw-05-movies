const SearchBox = ({ handeSubmit, handleChange }) => {
  return (
    <form onSubmit={handeSubmit}>
      <input onChange={e => handleChange(e.target.value)} type="text"></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBox;
