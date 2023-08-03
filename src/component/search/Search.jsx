const Search = ({ searchText, onChange }) => {
  return <input type="text" value={searchText} onChange={onChange} placeholder="Search Order Id"/>
}

export default Search
