import { useState } from "react";
import styles from "./DashboardCallender.module.css";
import Calendar from "react-calendar";

function DashboardCallender() {
  const [value, setValue] = useState(new Date());
  return (
    <div className={styles.container}>
      <Calendar
        value={value}
        onChange={setValue}
        defaultView="month"
        className={styles.calendar}
      />
    </div>
  );
}

export default DashboardCallender;
