import styles from "./ProfileInformation.module.css";

function ProfileInformation() {
  return (
    <div className={styles.container}>
      <h3>General Information</h3>
      <p>
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </p>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p>Education</p>
          <p>Stanford University</p>
        </div>
        <div className={styles.card}>
          <p>Languages</p>
          <p>English, Spanish</p>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p>Department</p>
          <p>Product Design</p>
        </div>
        <div className={styles.card}>
          <p>Work History</p>
          <p>Google, Facebook</p>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <p>Organization</p>
          <p>Simmmple Web LLC</p>
        </div>
        <div className={styles.card}>
          <p>Birthday</p>
          <p>20 July 1986</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileInformation;
