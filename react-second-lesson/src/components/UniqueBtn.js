import PropTypes from "prop-types";

const UniqueBtn = ({ text, color, onBtnClick }) => {
  return (
    <div>
      <button
        onClick={onBtnClick}
        className="btn"
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};

UniqueBtn.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default UniqueBtn;
