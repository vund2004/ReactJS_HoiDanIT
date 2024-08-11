import React from "react";

class AddUserInfor extends React.Component {
    state = {
        name: 'vu',
        age: 20,
    };

    OnchangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    onSubmitt = (event) => {
        event.preventDefault();
        this.props.handleaddNewuser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: this.state.name,
            age: this.state.age,
        });
    };

    OnchangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    render() {
        return (
            <div>
                my name is: {this.state.name} age is: {this.state.age}
                <br />
                <form onSubmit={(event) => this.onSubmitt(event)}>
                    <label>Name</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.OnchangeInput(event)}
                    />
                    <br />
                    <label>Age</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.OnchangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
