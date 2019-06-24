import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'search for videos'
        };
    };

    handleTextChange = e => {
        e.preventDefault();
        this.setState({
            value: e.target.value
        });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        this.props.onTermSubmit(this.state.value);
        
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.handleFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <br></br>
                        <input type="text" value={this.state.value} onChange={this.handleTextChange}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;