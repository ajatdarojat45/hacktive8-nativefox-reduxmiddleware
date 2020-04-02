import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers } from "../store/actions/userAction";
import { Link } from "react-router-dom";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }
  render() {
    return (
      <>
        <h1>User List</h1>
        <ul>
          {this.props.users.map(user => {
            return (
              <Link key={user.id} to={`/${user.id}`}>
                <li>
                  {user.first_name} {user.last_name}
                </li>
              </Link>
            );
          })}
        </ul>
      </>
    );
  }
}

// export default EmployeeList;
const mapStateToProps = state => {
  return {
    users: state.userReducer.users
  };
};

const mapDispatchToProps = { getUsers };

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
