import styles from "./ProfileUploadFile.module.css";

import { MdUpload } from "react-icons/md";

function ProfileUploadFile() {
  return (
    <div className={styles.container}>
      <div className={styles.upload}>
        <label htmlFor="file" className={styles.uploadfile}>
          <MdUpload />
          <h3>Upload Files</h3>
          <p>PNG, JPG and GIF files are allowed</p>
        </label>
        <input type="file" id="file" style={{ display: "none" }} />
      </div>
      <div className={styles.text}>
        <h3>Complete your profile</h3>
        <p>
          Stay on the pulse of distributed projects with an anline whiteboard to
          plan, coordinate and discuss
        </p>
        <button>Publish now</button>
      </div>
    </div>
  );
}

export default ProfileUploadFile;
