import React from "react";

class SearchBar extends React.Component{
    state = {text : ""}
    onFormSubmit = (e)=>{
        e.preventDefault()
        this.props.onFormSubmit(this.state.text);
    }
    render(){
        return(
            <>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div class="ui icon input">
                        <div>Video Input</div>
                        <input type="text" placeholder="Search..." value={this.state.text}
                         onChange={(e)=>this.setState({text : e.target.value})}/>
                        <i class="circular search link icon"></i>
                    </div>
                </form>
            </>
        )
    }
}
export default SearchBar;