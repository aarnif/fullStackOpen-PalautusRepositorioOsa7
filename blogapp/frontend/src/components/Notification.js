const Notification = ({ info }) => {
  if (!info.message) {
    return;
  }

  // console.log(info);

  const style = {
    color: info.type === "error" ? "red" : "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={style}>{info.message}</div>;
};

export default Notification;
