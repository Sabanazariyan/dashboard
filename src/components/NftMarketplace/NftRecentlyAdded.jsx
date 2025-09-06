import styles from "./NftRecentlyAdded.module.css";

import AvatarStack from "../AvatarStack";
import { FaRegHeart } from "react-icons/fa6";

const avatars = [
  "./profiles/profile.png",
  "./profiles/2.jpg",
  "./profiles/3.jpg",
  "./profiles/4.jpg",
  "./profiles/5.png",
];

function NftRecentlyAdded() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Recently Added</h3>
      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.icon}>
            <FaRegHeart />
          </div>
          <img src="./nftmarketplace/recentlyadded/1.jpg" alt="" />
          <div className={styles.people}>
            <div className={styles.name}>
              <p>Swipe Circles</p>
              <p>By Peter Will</p>
            </div>
            <AvatarStack
              avatars={avatars}
              size={25}
              overlap={10}
              maxVisible={4}
            />
          </div>
          <div className={styles.price}>
            <p>Current Bid: 2.30 ETH</p>
            <button>Place Bid</button>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.icon}>
            <FaRegHeart />
          </div>
          <img src="./nftmarketplace/recentlyadded/2.jpg" alt="" />
          <div className={styles.people}>
            <div className={styles.name}>
              <p>Colorful Heaven</p>
              <p>By Mark Benjamin</p>
            </div>
            <AvatarStack
              avatars={avatars}
              size={25}
              overlap={10}
              maxVisible={4}
            />
          </div>
          <div className={styles.price}>
            <p>Current Bid: 1.30 ETH</p>
            <button>Place Bid</button>
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.icon}>
            <FaRegHeart />
          </div>
          <img src="./nftmarketplace/recentlyadded/3.jpg" alt="" />
          <div className={styles.people}>
            <div className={styles.name}>
              <p>3D Cubes Art</p>
              <p>By Manny Gates</p>
            </div>
            <AvatarStack
              avatars={avatars}
              size={25}
              overlap={10}
              maxVisible={4}
            />
          </div>
          <div className={styles.price}>
            <p>Current Bid: 6.58 ETH</p>
            <button>Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftRecentlyAdded;
