import { useState } from "react";
import styles from "./ProfileNotification.module.css";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

function ProfileNotification() {
  const notifications = [
    "Item update notifications",
    "Item comment notifications",
    "Buyer review notifications",
    "Rating reminders notifications",
    "Meetups near you notifications",
    "Company news notifications",
    "New launches and projects",
  ];

  // یک آرایه به اندازه لیست نوتیفیکیشن‌ها می‌سازیم
  const [isOn, setIsOn] = useState(Array(notifications.length).fill(false));

  const handleToggle = (index) => {
    setIsOn((prev) => prev.map((t, i) => (i === index ? !t : t)));
  };

  return (
    <div className={styles.container}>
      <h3>Notifications</h3>
      <div className={styles.icon}>
        <PiDotsThreeOutlineFill />
      </div>
      {notifications.map((text, index) => (
        <div key={index} className={styles.card}>
          <button
            onClick={() => handleToggle(index)}
            className={`${styles.toggleButton} ${
              isOn[index] ? styles.on : styles.off
            }
`}
          >
            <div
              className={`${styles.toggleCircle} ${
                isOn[index] ? styles.circleOn : styles.circleOff
              }
`}
            ></div>
          </button>
          <p>{text}</p>
        </div>
      ))}
    </div>
  );
}

export default ProfileNotification;
