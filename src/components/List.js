import React, { useState, useEffect } from "react";
import jobdata from "../data.json";
import ListItem from "./ListItem";
const List = () => {
  const [jobs, setJobs] = useState([]);

  const [filters, setFilters] = useState([]);

  useEffect(() => {
    setJobs(jobdata);
  }, []);

  const filterFunction = (job) => {
    if (filters.length === 0) {
      return true;
    }

    const tags = [job.role, job.level];

    if (job.languages) {
      tags.push(...job.languages);
    }

    if (job.tools) {
      tags.push(...job.tools);
    }

    return filters.every((filter) => tags.includes(filter));
  };

  const handleTagClick = (tag) => {
    if (filters.includes(tag)) {
      return;
    }
    setFilters([...filters, tag]);
  };

  const handleRemoveFilter = (filter) => {
    setFilters(filters.filter((filterEl) => filterEl !== filter));
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  const filteredJobs = jobs.filter(filterFunction);

  return (
    <main className="list-wrapper">
      <div className="list-container">
        {filters.length > 0 && (
          <div className="filter-wrapper">
            <div className="filters">
              {filters.map((filter, index) => (
                <div className="filter" key={index}>
                  <div className="filter-text">{filter}</div>
                  <button
                    className="filter-remove"
                    onClick={() => handleRemoveFilter(filter)}
                  >
                    x
                  </button>
                </div>
              ))}
            </div>

            <button className="clear-filters" onClick={handleClearFilters}>
              Clear
            </button>
          </div>
        )}

        {filteredJobs.map((job) => (
          <ListItem job={job} key={job.id} handleTagClick={handleTagClick} />
        ))}
      </div>
    </main>
  );
};

export default List;
