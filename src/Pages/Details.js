import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getUser } from "../store/actions/usersAction";
import Loader from "../Components/Loader";

const Details = () => {
  const dispatch = useDispatch();
  const { lodder, user } = useSelector((state) => state.users);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUser(id));
  }, []);

  return !lodder ? (
    <>
      <Link className="btn btn-primary rounded my-3" to="/">
        Go Back
      </Link>
      <div className="card">
        <div className="card-header">
          <h3>
            <span className="text-info">{user.name}</span> Details
          </h3>
        </div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-3">Name</div>
            <div className="col-9 text-end">{user.name}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3">Email</div>
            <div className="col-9 text-end">{user.email}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3">Username</div>
            <div className="col-9 text-end">{user.username}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3">Phone</div>
            <div className="col-9 text-end">{user.phone}</div>
          </div>
          <div className="row mb-3">
            <div className="col-3">Website</div>
            <div className="col-9 text-end">{user.website}</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <Loader />
    </div>
  );
};

export default Details;
