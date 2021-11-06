import {selectedLanguage, repos} from "../constants/popular.constants";

const popularSelectLanguage = (payload) => ({
    type: selectedLanguage,
    payload
});

const popularRepos = (payload) => ({
   type: repos,
   payload
});

export {popularSelectLanguage, popularRepos};