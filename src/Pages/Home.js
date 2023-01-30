import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/actions/usersAction";
import Loader from "../Components/Loader";
import Person from "../Components/Person";
import Filter from "../Components/Filter";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  const { users, loader } = useSelector((state) => state.users);

  return !loader ? (
    <>
      <Filter />
      <table className="table table-hover rounded">
        <thead>
          <tr>
            <td>S.No</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Details</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <Person key={index} user={user} index={index} />
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <div className="d-flex justify-content-center">
      <Loader />
    </div>
  );
};

export default Home;
