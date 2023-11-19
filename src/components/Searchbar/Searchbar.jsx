import { useSearchParams } from 'react-router-dom';
import './Searchbar.scss';

export const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const search = searchParams.get('searchQuery') ?? '';

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchedValue = event.currentTarget.elements.query.value;

    setSearchParams({ query: searchedValue });
    event.currentTarget.reset();
  };

  return (
    <header>
      <form className="search-form" onSubmit={handleFormSubmit}>
        <input
          className="search-input"
          type="text"
          autoComplete="off"
          name="query"
          placeholder="Search movies..."
          // defaultValue={search}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </header>
  );
};
