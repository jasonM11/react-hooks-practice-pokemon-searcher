import React from "react";
import { Form } from "semantic-ui-react";

function Search({ searchTerm, onChangeSearch }) {
  return (
    <Form>
      <Form.Field>
        <label>Search for a Pokémon</label>
        <input
          value={searchTerm}
          onChange={(e) => onChangeSearch(e.target.value)}
          placeholder="Enter a Pokémon name"
        />
      </Form.Field>
    </Form>
  );
}

export default Search;
