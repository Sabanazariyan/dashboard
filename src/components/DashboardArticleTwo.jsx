import styles from "./DashboardArticleTwo.module.css";

import { AiFillPlusCircle } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";

function DashboardArticleTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <p>Team members</p>
        <div className={styles.icon}>
          <AiFillPlusCircle />
        </div>
      </div>
      <div className={styles.card1}>
        <img src="./profiles/7.png" alt="" />
        <div className={styles.namerole}>
          <p>Adela Parkson</p>
          <p>Creative Director</p>
        </div>
        <HiOutlineDotsVertical />
      </div>
      <div className={styles.card2}>
        <img src="./profiles/6.png" alt="" />
        <div className={styles.namerole}>
          <p>Christian Mad</p>
          <p>Product Designer</p>
        </div>
        <HiOutlineDotsVertical />
      </div>
      <div className={styles.card3}>
        <img src="./profiles/5.png" alt="" />
        <div className={styles.namerole}>
          <p>Jason Statham</p>
          <p>Junior Graphic Designer</p>
        </div>
        <HiOutlineDotsVertical />
      </div>
    </div>
  );
}

export default DashboardArticleTwo;
