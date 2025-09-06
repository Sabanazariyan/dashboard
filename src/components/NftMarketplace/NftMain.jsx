import styles from "./NftMain.module.css";

function NftMain() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h3>Discover, collect, and sell extraordinary NFTs</h3>
        <p>
          Enter in this creative world. Discover now the latest NFTs or start
          creating your own!
        </p>
        <div className={styles.buttons}>
          <button>Discover now</button>
          <button>Watch video</button>
        </div>
      </div>
    </div>
  );
}

export default NftMain;
