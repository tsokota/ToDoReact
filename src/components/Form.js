import React, { Component } from 'react';

class Form extends Component{


    render() {
        return(
            <div className="Form">
                <form onSubmit={(event) => this.props.handleSubmit(event)}>
                    <input 
                        onChange={(event) => this.props.handleChange(event)}
                        value={this.props.inputValue}
                    />
                </form>
            </div>
        )
    }
}

export default Form;