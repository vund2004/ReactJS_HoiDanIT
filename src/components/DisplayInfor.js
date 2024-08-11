import React from "react";
import "./DisplayInfor.scss"
class DisplayInfor extends React.Component {
    state = {
        ishow: true
    }
    hanleshowhide() {
        // alert('con cặc thằng nhất vũ + tk sĩ ngu + tk định óc lơn + hoàng ngu top 1 server vienam')
        this.setState(
            {
                ishow: !this.state.ishow
            }
        )
    }
    render() {
        const { listUser } = this.props        //props 
        return (
            <div>
                <div>
                    <span onClick={() => { this.hanleshowhide() }}>
                        {this.state.ishow == true ? "Ẩn danh sách" : "Hiện danh sách"}
                    </span>
                </div>
                {this.state.ishow &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                <div key={user.id} className={user.age > 18 ? "red" : "green"}>
                                    <br></br>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                }
            </div>
        )
    }
}
export default DisplayInfor