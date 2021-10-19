import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { userList } from "../action/userAction";
import { useDispatch, useSelector } from "react-redux";
export const HomePage = () => {
  const { users, loading, error } = useSelector((state) => state.userList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userList());
  }, [dispatch]);
  return (
    <div className="homepage">
      <Link to="/login">LoginPage</Link>
      <center>
        {" "}
        <h2>
          <b>Homepage /api/all</b>RouteGuard,Redux and Redux thunk for project
        </h2>
      </center>
      {loading ? (
        <div>Loading pleasewait</div>
      ) : error ? (
        <div className="error">Opps!!! Something went wrong</div>
      ) : (
        <ul className="listofuse">
          {users.map((user, index) => (
            <li key={index}>{user.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
