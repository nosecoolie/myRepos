import React, { useEffect, useState } from "react";

import Repo from "../Repo";

import { fetchRepos } from "../../helper/apiFetcher";

export default function RepoWrapper() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    if (isEndOfList) return;
    setIsFetching(true);
    fetchRepos(currentPage).then(newRepos => {
      setIsFetching(false);
      if (newRepos.length === 0) return setIsEndOfList(true);
      setRepos(oldRepos => [...oldRepos, ...newRepos]);
    });
  }, [currentPage, isEndOfList]);

  useEffect(() => {
    const handleScrolling = e => {
      const { scrollTop, offsetHeight } = e.target.documentElement;
      if (scrollTop + window.innerHeight >= offsetHeight) {
        setCurrentPage(prevPage => prevPage + 1);
      }
    };
    document.addEventListener("scroll", handleScrolling);
    return () => document.removeEventListener("scroll", handleScrolling);
  }, []);

  return (
    <div>
      {repos.map(repo => (
        <Repo key={repo.id} repo={repo} />
      ))}
      {isFetching && <div>loading...</div>}
      {isEndOfList && <div>You have reached the end of the list.</div>}
    </div>
  );
}
