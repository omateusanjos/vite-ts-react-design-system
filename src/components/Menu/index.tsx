import Button from "../Button";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/Menu.module.scss";

export const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.menu}>
      <div className="menu__buttons"></div>
    </div>
  );
};
