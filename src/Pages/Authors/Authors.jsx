import "./Authors.css";
import { authors } from "./../../data/authors";
import { useState } from "react";

const Authors = () => {
  const [ search, setSearch ] = useState("");
  return (
    <section className="authors">
      <div className="author-search-wrapper">
        <input 
            type="search" 
            placeholder="search in authors"
            value={search}
            onChange={(event) => setSearch(event.target.value)} 
        />
      </div>
      <div className="authors-wrapper">
        {authors
          .filter((a) => a.name.toLowerCase().includes(search))
          .map((author) => (
            <div className="author" key={author.id}>
              <img
                src={author.image}
                alt={author.name}
                className="author-img"
              />
              <h2 className="author-name">{author.name}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Authors;
