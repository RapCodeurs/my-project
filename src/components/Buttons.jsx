import { Link } from "react-router-dom";

// Creation du composant ButtonAttack
// Creation du prop enfant: children
const Buttons = ({ children, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${color} py-1 px-2 border-2 border-neutral-400 rounded-xl hover:border-neutral-700 hover:opacity-90 duration-300`}
    >
      <Link to="/">{children}</Link>
    </button>
  );
};

export default Buttons;
