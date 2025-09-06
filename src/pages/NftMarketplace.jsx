import DashboardNavbar from "../components/DashboardNavbar";
import NftHeader from "../components/NftMarketplace/NftHeader";
import NftHistory from "../components/NftMarketplace/NftHistory";
import NftMain from "../components/NftMarketplace/NftMain";
import NftRecentlyAdded from "../components/NftMarketplace/NftRecentlyAdded";
import NftTopCreators from "../components/NftMarketplace/NftTopCreators";
import NftTrending from "../components/NftMarketplace/NftTrending";
import styles from "./NftMarketplace.module.css";

function NftMarketplace() {
  return (
    <div className={styles.main}>
      <div className={styles.ss}>
        <DashboardNavbar />
        <div className={styles.sss}>
          <NftHeader />
          <div className={styles.container}>
            <div className={styles.content}>
              <NftMain />
              <NftTrending />
              <NftRecentlyAdded />
            </div>
            <div className={styles.navbar}>
              <NftTopCreators />
              <NftHistory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftMarketplace;
