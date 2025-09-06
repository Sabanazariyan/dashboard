import { Link } from "react-router-dom";
import styles from "./NftHistory.module.css";
import { FaEthereum } from "react-icons/fa6";

function NftHistory() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>History</h3>
        <Link>See all</Link>
      </div>
      <div className={styles.card1}>
        <div className={styles.info}>
          <img src="./nftmarketplace/recentlyadded/2.jpg" alt="" />
          <div className={styles.names}>
            <p>Colorful Heaven</p>
            <p>By Mark Benjamin</p>
          </div>
        </div>
        <div className={styles.price}>
          <FaEthereum />
          <p>1.30 ETH</p>
        </div>
        <p>30s ago</p>
      </div>
      <div className={styles.card2}>
        <div className={styles.info}>
          <img src="./nftmarketplace/trending/1.jpg" alt="" />
          <div className={styles.names}>
            <p>Abstract Colors</p>
            <p>By Esthera Jackson</p>
          </div>
        </div>
        <div className={styles.price}>
          <FaEthereum />
          <p>0.91 ETH</p>
        </div>
        <p>58s ago</p>
      </div>
      <div className={styles.card3}>
        <div className={styles.info}>
          <img src="./nftmarketplace/trending/2.jpg" alt="" />
          <div className={styles.names}>
            <p>ETH AI Brain</p>
            <p>By Nick Wilson</p>
          </div>
        </div>
        <div className={styles.price}>
          <FaEthereum />
          <p>2.82 ETH</p>
        </div>
        <p>1m ago</p>
      </div>
      <div className={styles.card4}>
        <div className={styles.info}>
          <img src="./nftmarketplace/recentlyadded/1.jpg" alt="" />
          <div className={styles.names}>
            <p>Swipe Circles</p>
            <p>By Peter Will</p>
          </div>
        </div>
        <div className={styles.price}>
          <FaEthereum />
          <p>2.30 ETH</p>
        </div>
        <p>1m ago</p>
      </div>
      <div className={styles.card5}>
        <div className={styles.info}>
          <img src="./nftmarketplace/trending/3.jpg" alt="" />
          <div className={styles.names}>
            <p>Mesh Gradients</p>
            <p>By Will Smith</p>
          </div>
        </div>
        <div className={styles.price}>
          <FaEthereum />
          <p>0.56 ETH</p>
        </div>
        <p>2m ago</p>
      </div>
      <div className={styles.card6}>
        <div className={styles.info}>
          <img src="./nftmarketplace/recentlyadded/3.jpg" alt="" />
          <div className={styles.names}>
            <p>3D Cubes Art</p>
            <p>By Manny Gates</p>
          </div>
        </div>
        <div className={styles.price}>
          <FaEthereum />
          <p>6.58 ETH</p>
        </div>
        <p>3m ago</p>
      </div>
    </div>
  );
}

export default NftHistory;
