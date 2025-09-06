import AvatarStack from "../AvatarStack";
import styles from "./NftTrending.module.css";

import { FaRegHeart } from "react-icons/fa6";

const avatars = [
  "./profiles/profile.png",
  "./profiles/2.jpg",
  "./profiles/3.jpg",
  "./profiles/4.jpg",
  "./profiles/5.png",
];

function NftTrending() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Trending NFTs</h3>
        <div className={styles.categories}>
          <ul>
            <li>Art</li>
            <li>Music</li>
            <li>Collectibles</li>
            <li>Sports</li>
          </ul>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card1}>
          <div className={styles.icon}>
            <FaRegHeart />
          </div>
          <img src="./nftmarketplace/trending/1.jpg" alt="" />
          <div className={styles.people}>
            <div className={styles.name}>
              <p>Abstract Colors</p>
              <p>By Esthera Jackson</p>
            </div>
            <AvatarStack
              avatars={avatars}
              size={25}
              overlap={10}
              maxVisible={4}
            />
          </div>
          <div className={styles.price}>
            <p>Current Bid: 0.91 ETH</p>
            <button>Place Bid</button>
          </div>
        </div>
        <div className={styles.card2}>
          <div className={styles.icon}>
            <FaRegHeart />
          </div>
          <img src="./nftmarketplace/trending/2.jpg" alt="" />
          <div className={styles.people}>
            <div className={styles.name}>
              <p>ETH AI Brain</p>
              <p>By Nick Wilson</p>
            </div>
            <AvatarStack
              avatars={avatars}
              size={25}
              overlap={10}
              maxVisible={4}
            />
          </div>
          <div className={styles.price}>
            <p>Current Bid: 2.82 ETH</p>
            <button>Place Bid</button>
          </div>
        </div>

        <div className={styles.card3}>
          <div className={styles.icon}>
            <FaRegHeart />
          </div>
          <img src="./nftmarketplace/trending/3.jpg" alt=""/>
          <div className={styles.people}>
            <div className={styles.name}>
              <p>Mesh Gradients</p>
              <p>By Will Smith</p>
            </div>
            <AvatarStack
              avatars={avatars}
              size={25}
              overlap={10}
              maxVisible={4}
            />
          </div>
          <div className={styles.price}>
            <p>Current Bid: 0.56 ETH</p>
            <button>Place Bid</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftTrending;
