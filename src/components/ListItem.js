import React from "react";

const ListItem = ({ job, handleTagClick }) => {
  const tags = [job.role, job.level];

  if (job.languages) {
    tags.push(...job.languages);
  }

  if (job.tools) {
    tags.push(...job.tools);
  }

  return (
    <div className={`list-item ${job.featured ? "featured" : ""}`}>
      <div className="list-item__left">
        <div className="brand-logo">
          <img src={job.logo} alt="" />
        </div>
        <div className="job-details">
          <div className="job-details-row">
            <div className="brand-name">{job.company}</div>
            {job.new && <div className="new pill">New!</div>}
            {job.featured && <div className="featured pill">FEATURED</div>}
          </div>
          <div className="job-details-row">
            <div className="position">{job.position}</div>
          </div>
          <div className="job-details-row job-subinfo">
            <div className="posted-date">{job.postedAt}</div>
            <span className="job-details-dot"></span>
            <div className="contract-type">{job.contract}</div>
            <span className="job-details-dot"></span>
            <div className="job-location">{job.location}</div>
          </div>
        </div>
      </div>
      <div className="list-item__right">
        <div className="job-tags">
          {tags.map((tag, index) => (
            <button onClick={() => handleTagClick(tag)} key={index}>
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
