import { useState } from "react";
import styles from "./DashboardTasks.module.css";

import { AiOutlineEllipsis } from "react-icons/ai";
import { AiOutlineHolder } from "react-icons/ai";

function DashboardTasks() {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);

  const checkHandler = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <input
          type="checkbox"
          name=""
          id="check"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label htmlFor="check">Tasks</label>
        <div className={styles.icon}>
          <AiOutlineEllipsis />
        </div>
      </div>
      <div className={styles.checklist}>
        <div>
          <input
            type="checkbox"
            name=""
            id="checklist1"
            checked={isChecked1}
            onChange={(event) => setIsChecked1(event.target.checked)}
          />
          <label htmlFor="checklist1">Landing Page Design</label>
        </div>
        <div className={styles.checkicon}>
          <AiOutlineHolder />
        </div>
      </div>
      <div className={styles.checklist}>
        <div>
          <input
            type="checkbox"
            name=""
            id="checklist2"
            checked={isChecked2}
            onChange={(event) => setIsChecked2(event.target.checked)}
          />
          <label htmlFor="checklist2">Dashboard Builder</label>
        </div>
        <div className={styles.checkicon}>
          <AiOutlineHolder />
        </div>
      </div>
      <div className={styles.checklist}>
        <div>
          <input
            type="checkbox"
            name=""
            id="checklist3"
            checked={isChecked3}
            onChange={(event) => setIsChecked3(event.target.checked)}
          />
          <label htmlFor="checklist3">Mobile App Design</label>
        </div>
        <div className={styles.checkicon}>
          <AiOutlineHolder />
        </div>
      </div>
      <div className={styles.checklist}>
        <div>
          <input
            type="checkbox"
            name=""
            id="checklist4"
            checked={isChecked4}
            onChange={(event) => setIsChecked4(event.target.checked)}
          />
          <label htmlFor="checklist4">Illustrations</label>
        </div>
        <div className={styles.checkicon}>
          <AiOutlineHolder />
        </div>
      </div>
      <div className={styles.checklist}>
        <div>
          <input
            type="checkbox"
            name=""
            id="checklist5"
            checked={isChecked5}
            onChange={(event) => setIsChecked5(event.target.checked)}
          />
          <label htmlFor="checklist5">Promotional LP</label>
        </div>
        <div className={styles.checkicon}>
          <AiOutlineHolder />
        </div>
      </div>
    </div>
  );
}

export default DashboardTasks;
