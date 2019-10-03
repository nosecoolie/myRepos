import React from "react";
import PropTypes from "prop-types";
import "./Repo.css";

const RepoComponent = ({ repo }) => {
  const { full_name: fullName, html_url: htmlUrl, description } = repo;
  return (
    <div className="repo-card">
      <h5>{fullName}</h5>
      <a href={htmlUrl}>
        <div>{htmlUrl}</div>
      </a>
      <p>{description}</p>
    </div>
  );
};

RepoComponent.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    full_name: PropTypes.string.isRequired,
    html_url: PropTypes.string.isRequired,
    description: PropTypes.string
  })
};

export default React.memo(RepoComponent);
