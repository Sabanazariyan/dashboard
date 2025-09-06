import { Link } from "react-router-dom";
import styles from "./ProfileProjects.module.css";

import { MdEdit } from "react-icons/md";

function ProfileProjects() {
  return (
    <div className={styles.container}>
      <h3>All Projects</h3>
      <p>
        Here you can find more details about your projects. Keep you user
        engaged by providing meaningful information.
      </p>
      <div className={styles.card1}>
        <img src="./profile/projects/1.jpg" alt="" />
        <div className={styles.text}>
          <p>Technology behind the Blockchain</p>
          <div className={styles.info}>
            <p>Project #1</p>
            <Link>See project details</Link>
          </div>
        </div>
        <MdEdit />
      </div>
      <div className={styles.card2}>
        <img src="./profile/projects/2.jpg" alt="" />
        <div className={styles.text}>
          <p>Greatest way to a good Economy</p>
          <div className={styles.info}>
            <p>Project #2</p>
            <Link>See project details</Link>
          </div>
        </div>
        <MdEdit />
      </div>
      <div className={styles.card3}>
        <img src="./profile/projects/3.jpg" alt="" />
        <div className={styles.text}>
          <p>Most essential tips for Burnout</p>
          <div className={styles.info}>
            <p>Project #3</p>
            <Link>See project details</Link>
          </div>
        </div>
        <MdEdit />
      </div>
    </div>
  );
}

export default ProfileProjects;
