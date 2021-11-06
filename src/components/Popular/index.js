import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPopularRepos} from "../../api/fetchPopularRepos";
import SelectLanguage from "./SelectLanguage";
import RepoGrid from "./RepoGrid";
import {popularSelectLanguage, popularRepos} from "../../redux/actions/popular.actions";


const Popular = () => {

    const dispatch = useDispatch();
    const popularLanguage = useSelector(state => state.popularLanguage.language);
    const repos = useSelector(state => state.repoReducer.repos);

    const updateLanguage = (popularLanguage) => {
        dispatch(popularSelectLanguage(popularLanguage));
    };

    const updateRepos = (repos) => {
        dispatch(popularRepos(repos));
    };

    useEffect(() => {
        fetchPopularReposHandler(popularLanguage);
    }, []);

    const fetchPopularReposHandler = (text) => {
        fetchPopularRepos(text)
            .then(data => {updateRepos(data)});
    }

    const selectLanguage = (event) => {
        updateRepos(null);
        fetchPopularReposHandler(event.target.innerText);
        if(event.target.innerText !== popularLanguage) {
            updateLanguage(event.target.innerText);
        }
    }

        return (
            <>
                <SelectLanguage
                    selectedLanguage={popularLanguage}
                    selectedLanguageHandler={repos ? selectLanguage : null}
                />
                {repos ?
                    <RepoGrid repos={repos} /> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }

export default Popular;
