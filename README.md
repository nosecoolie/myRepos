## My Repos

### How to run
```
npm install
npm start (and check your localhost:3000)
```

### Description
A simple React webapp to show my repos, Made by react hooks and love.

Using React.memo on child components for avoid unnecessary rerender.

### Dependencies

React,
React-scripts
(Use Create React App to bootstrap this webapp.)

### file structure

```
MyRepos
│   README.md
│   package.json
└───src
    │   index.js (App entry point)
    │   app.css
    └─── helper
    │    | apiFetcher.js (Wrap all the fetch here. For the possible change in the future)
    └─── components
          │ Repo (Repo SKU)
          │  └─── index.js
          │  └─── Repo.css
          │ RepoWrapper
          │  └─── index.js
```
