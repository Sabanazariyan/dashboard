import styles from "./DashboardArticleOne.module.css";

import { BsFire } from "react-icons/bs";
import { HiOutlineClock } from "react-icons/hi2";
import { FiPlayCircle } from "react-icons/fi";
import AvatarStack from "./AvatarStack";

const avatars = [
  "./profiles/profile.png",
  "./profiles/2.jpg",
  "./profiles/3.jpg",
  "./profiles/4.jpg",
  "./profiles/5.png",
]

function DashboardArticleOne() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.headicon}>
          <BsFire />
        </div>
        <div className={styles.headtext}>
          <p>Business Design</p>
          <p>New lession is available</p>
        </div>
      </div>
      <h3>What do you need to know to create better products?</h3>
      <div className={styles.icons}>
        <div className={styles.iconone}>
          <HiOutlineClock />
          <p>85 mins</p>
        </div>
        <div className={styles.icontwo}>
          <FiPlayCircle />
          <p>Video format</p>
        </div>
      </div>
      <div className={styles.avatarsstack}>
        <div>
          <AvatarStack avatars={avatars} size={30} overlap={10} maxVisible={4} />
        </div>
        <div className={styles.button}>
          <p>Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardArticleOne;
