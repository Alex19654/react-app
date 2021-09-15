import {Component} from "react";
import {fetchPopularRepos} from "./api/fetchPopularRepos";
import RepoGrid from "./RepoGrid";

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python'];

class App extends Component {
    state = {
        selectedLanguage: 'All',
        repos: null
    }

    componentDidMount() {
        fetchPopularRepos(this.state.selectedLanguage)
            .then(data => this.setState({ repos: data }));
    }

    selectLanguage = (event) => {
        this.setState({ repos: null });
        fetchPopularRepos(event.target.innerText)
            .then(data => this.setState({ repos: data }));
        if(event.target.innerText !== this.state.selectedLanguage) {
            this.setState({selectedLanguage: event.target.innerText});
        }
    }

    render() {
        return (
            <>
                <ul className='languages'>
                    {languages.map((language, index) =>
                        <li
                            key={index}
                            style={{color: language === this.state.selectedLanguage ? '#d0021b' : '#000000'}}
                            onClick={this.selectLanguage}>
                            {language}
                        </li>)}
                </ul>
                {this.state.repos ?
                    <RepoGrid repos={this.state.repos} /> :
                    <p style={{ textAlign: 'center'}}>Loading ...</p>}
            </>
        )
    }
}

export default App;