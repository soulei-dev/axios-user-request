import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const users = props.users;
  return (
    <div className="w-100 d-flex flex-row flex-wrap justify-content-center my-3">
      {users && users.length ? (
        users.map((u, index) => (
          <div
            key={u.id}
            onClick={() => {
              props.selectedUser(index);
            }}
            className="card m-2"
            style={{ width: "200px" }}
          >
            <div className="card-header">{u.name}</div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">{u.username}</li>
                <li className="list-group-item">{u.email}</li>
              </ul>
              <button className='mt-4 btn btn-small btn-danger' onClick={() => props.deleteUser(u.id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="text-center">No users ...</h1>
      )}
    </div>
  );
};
