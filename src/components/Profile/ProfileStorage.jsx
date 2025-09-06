import styles from "./ProfileStorage.module.css";

import { MdOutlineCloudDone } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

import ProgressBar from "@ramonak/react-progress-bar";

function ProfileStorage() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <PiDotsThreeOutlineFill />
      </div>
      <div className={styles.content}>
        <div className={styles.cloud}>
          <MdOutlineCloudDone />
        </div>
        <h3>Your storage</h3>
        <p>Supervise your drive space in the easiest way</p>
      </div>
      <div className={styles.progressbar}>
        <ProgressBar
          completed="80"
          customLabel=" "
          height="8px"
          bgColor="#4318FF"
        />
      </div>
    </div>
  );
}

export default ProfileStorage;
