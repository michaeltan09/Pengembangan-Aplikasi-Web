import React from "react";

const title = () => {
  return (
    <h2
      style={{
        width: "550px",
        margin: "auto",
        marginTop: "10px",
        textAlign: "center",
        color: "#4d90fe",
      }}
    >
      Sistem Informasi E-biz
    </h2>
  );
};

class Header extends React.Component {
  render() {
    return <div>{title()}</div>;
  }
}

export default Header;