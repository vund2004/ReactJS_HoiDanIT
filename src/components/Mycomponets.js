import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "nguyendinhvu1", age: 18 },
            { id: 2, name: "nguyendinhvu2", age: 29 },
            { id: 3, name: "nguyendinhvu3", age: 30 }
        ]
    }
    handleaddNewuser = (userObj) => {
        console.log(userObj)
        this.setState(
            {
                listUser: [userObj, ...this.state.listUser]
            }
        )
    }
    handledelete = (UserId) => {
        let listUserCopy = this.state.listUser;
        listUserCopy = listUserCopy.filter(item => item.id !== UserId);
        this.setState(
            {
                listUser: listUserCopy
            }
        )
    }

    render() {
        return (
            <>
                <AddUserInfor listUser={this.listUser}
                    handleaddNewuser={this.handleaddNewuser} />
                <br></br>
                <DisplayInfor
                    listUser={this.state.listUser}
                    handledelete={this.handledelete}
                />

            </>
        );
    }
}

export default Mycomponent;