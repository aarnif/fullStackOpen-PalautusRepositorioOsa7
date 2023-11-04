import React from "react";

const Users = ({ users }) => {
  const sortByNumberOfBlogs = users.sort(
    (a, b) => b.blogs.length - a.blogs.length
  );
  return (
    <>
      <h2>Users</h2>
      <table>
        <tr>
          <th></th>
          <th>blogs created</th>
        </tr>
        {sortByNumberOfBlogs.map((user) => {
          return (
            <tr>
              <td>{user.name}</td>
              <td>{user.blogs.length}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Users;
