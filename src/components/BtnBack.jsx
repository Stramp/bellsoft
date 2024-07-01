import { useNavigate } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths";

export const BtnBack = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(RoutePaths.HOME)}

    >
      <svg
        width="32"
        height="32"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 32 32"
      >
        <path
          fill="#8B8B8B"
          d="M30 16c0-7.732-6.268-14-14-14S2 8.268 2 16s6.268 14 14 14 14-6.268 14-14ZM16.707 9.293a1 1 0 0 1 0 1.414L12.414 15H22a1 1 0 1 1 0 2h-9.586l4.293 4.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0Z"
        />
      </svg>
    </button>
  );
};
