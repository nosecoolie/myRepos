const perPage = 8;
const userName = "nosecoolie";
const reposUrl = page =>
  `https://api.github.com/users/${userName}/repos?page=${page}&per_page=${perPage}`;

const fetchToJson = fetchUrl => {
  if (!fetchUrl)
    throw new Error("Please add target url as apiFetcher parameters");
  return fetch(fetchUrl).then(response => response.json());
};

const fetchRepos = (page = 1) => fetchToJson(reposUrl(page));

export { fetchRepos };
