import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../store/actions/userAction";
import { useParams } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.userReducer.user);
  const { userId } = useParams();

  useEffect(() => {
    dispatch(getUser(userId));
  }, [dispatch, userId]);

  return (
    <>
      <Link to="/">Back</Link>
      <h1>User Detail</h1>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
    </>
  );
};
