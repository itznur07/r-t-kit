import { useRef } from "react";
import { useDispatch } from "react-redux";
import { filteredUsers } from "../store/reducers/usersReducer";

const Filter = () => {
  const inputRef = useRef("");

  const dispatch = useDispatch();
  const filterUser = () => {
    dispatch(filteredUsers(inputRef.current.value));
  };

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        name=""
        placeholder="search user by name"
        className="form-control mb-3 "
        onChange={filterUser}
      />
    </>
  );
};

export default Filter;
