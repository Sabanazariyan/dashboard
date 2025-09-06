import styles from "./DashboardArticleFour.module.css";
import { FaRegClock } from "react-icons/fa";
import { MdFastfood } from "react-icons/md";

function DashboardArticleFour() {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="./starbox/starbox.png" alt="" width="100%"  className={styles.imagebackground}/>
        <img src="./starbox/logo.png" alt="" className={styles.logo} />
        <div className={styles.icon}>
          <FaRegClock />
        </div>
      </div>
      <h3>Starbucks</h3>
      <div className={styles.text}>
        <MdFastfood />
        <p>10% cashback & off</p>
      </div>
    </div>
  );
}

export default DashboardArticleFour;
