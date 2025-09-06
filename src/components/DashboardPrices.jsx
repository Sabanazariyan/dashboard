import styles from "./DashboardPrices.module.css";

import { MdOutlineSegment } from "react-icons/md";
import { TbCurrencyDollar } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosCopy } from "react-icons/io";

function DashboardPrices() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.icon}>
          <MdOutlineSegment />
        </div>
        <div>
          <p>Earnings</p>
          <h3>$350.4</h3>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <TbCurrencyDollar />
        </div>
        <div>
          <p>Spend this month</p>
          <h3>$642.39</h3>
        </div>
      </div>
      <div className={styles.cardd}>
        <p>Sales</p>
        <h3>$574.34</h3>
        <p>
          <span>+23%</span> since last month
        </p>
      </div>
      <div className={styles.card}>
        <div>
          <p>Your balance</p>
          <h3>$1,000</h3>
        </div>
        <div className={styles.flag}>
          <img
            src="./flags/USA.jpg"
            alt=""
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
          <IoIosArrowDown />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icontwo}>
          <img src="./icons/tick.svg" alt="" />
        </div>
        <div>
          <p>New Tasks</p>
          <h3>154</h3>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.icon}>
          <IoIosCopy />
        </div>
        <div>
          <p>Total Projects</p>
          <h3>2935</h3>
        </div>
      </div>
    </div>
  );
}

export default DashboardPrices;
