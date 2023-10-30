import React from "react";

const Notification = ({ notification }) => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginTop: 5,
    marginBottom: 5,
  };
  return <>{notification && <div style={style}>{notification}</div>}</>;
};

export default Notification;
