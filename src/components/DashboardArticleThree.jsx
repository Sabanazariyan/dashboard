import styles from "./DashboardArticleThree.module.css";
import { IoFingerPrint } from "react-icons/io5";

function DashboardArticleThree() {
  return (
    <div className={styles.container}>
      <IoFingerPrint />
      <h3>Control card security in-app with a tap</h3>
      <p>Discover our cards benefits, with one tap.</p>
      <button>Cards</button>
    </div>
  );
}

export default DashboardArticleThree;
