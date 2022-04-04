import UniqueBtn from "./UniqueBtn";
//import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <UniqueBtn
        text={showAdd ? "Close" : "Add Task"}
        color={showAdd ? "red" : "green"}
        onBtnClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

//CSS in JS
//const headingStyle = {
// color: "grey",
// backgroundColor: "purple",
//};
export default Header;
