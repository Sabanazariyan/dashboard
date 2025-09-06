import DashboardNavbar from "../components/DashboardNavbar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileInformation from "../components/Profile/ProfileInformation";
import ProfileMain from "../components/Profile/ProfileMain";
import ProfileNotification from "../components/Profile/ProfileNotification";
import ProfileProjects from "../components/Profile/ProfileProjects";
import ProfileStorage from "../components/Profile/ProfileStorage";
import ProfileUploadFile from "../components/Profile/ProfileUploadFile";

import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <DashboardNavbar />
        <div className={styles.rowcolumn}>
          <ProfileHeader />
          <div className={styles.rows}>
            <div className={styles.fisrtrow}>
              <ProfileMain />
              <ProfileStorage />
              <ProfileUploadFile />
            </div>
            <div className={styles.secondrow}>
              <ProfileProjects />
              <ProfileInformation />
              <ProfileNotification />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
