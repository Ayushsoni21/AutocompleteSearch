import data from "../component/json"
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Heading() {
  // Add a unique id to each country object (in case the JSON data does not have one)
  const countriesWithIds = data.map((item, index) => ({ ...item, id: index + 1 }));

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  }

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  }

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  }

  const handleOnFocus = () => {
    console.log('Focused');
  }

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}> {item.country}</span>
 
      </>
    );
  }

  return (
    <>
      <header className="App-header">
      <div className="d-flex justify-content-center mt-5">
      <div style={{ width: 500 }}>
          <ReactSearchAutocomplete
            items={countriesWithIds}
            fuseOptions={{ keys: ["country", "capital"] }} // Search by country or capital
            onSearch={handleOnSearch}
            onHover={handleOnHover}
            onSelect={handleOnSelect}
            onFocus={handleOnFocus}
            autoFocus
            placeholder="search country"
            formatResult={formatResult}
          />
        </div>
      </div>
      </header>
    </>
  );
}

export default Heading;
