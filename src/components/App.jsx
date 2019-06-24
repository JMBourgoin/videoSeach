import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';


class App extends React.Component {
    state = {};

    onTermSubmit = async (term) => {
        youtube.get('/search', {
            params: {
                q: term,
            }
        });
    }
    render(){
        return (
            <div>
                <SearchBar onTermSubmit={this.onTermSubmit}/>
            </div>
        )
    }
}

export default App;