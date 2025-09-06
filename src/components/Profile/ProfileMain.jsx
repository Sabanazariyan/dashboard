import styles from "./ProfileMain.module.css";

function ProfileMain() {
  return (
    <div className={styles.container}>
      <div className={styles.images}>
        <img src="./profile/background.jpg" alt="" />
        <img src="./profile/profile.jpg" alt="" />
      </div>
      <div className={styles.name}>
        <p>Adela Parkson</p>
        <p>Product Designer</p>
      </div>
      <div className={styles.information}>
        <div className={styles.info}>
          <p>17</p>
          <p>Posts</p>
        </div>
        <div className={styles.info}>
          <p>9.7k</p>
          <p>Followers</p>
        </div>
        <div className={styles.info}>
          <p>274</p>
          <p>Followers</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
