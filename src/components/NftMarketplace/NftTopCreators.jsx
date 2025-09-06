import styles from "./NftTopCreators.module.css";

import { Link } from "react-router-dom";

import ProgressBar from "@ramonak/react-progress-bar";

function NftTopCreators() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Top Creators</h3>
        <Link>See all</Link>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Artworks</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/8.png" alt="" />
                  <p>@maddison_c21</p>
                </div>
              </td>
              <td>9821</td>
              <td>
                <ProgressBar
                  completed="100"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/9.png" alt="" />
                  <p>@karl.will02</p>
                </div>
              </td>
              <td>7032</td>
              <td>
                <ProgressBar
                  completed="90"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/10.png" alt="" />
                  <p>@andreea.1z</p>
                </div>
              </td>
              <td>5204</td>
              <td>
                <ProgressBar
                  completed="80"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/11.png" alt="" />
                  <p>@abraham47.y</p>
                </div>
              </td>
              <td>4309</td>
              <td>
                <ProgressBar
                  completed="70"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/12.png" alt="" />
                  <p>@simmmple.web</p>
                </div>
              </td>
              <td>3871</td>
              <td>
                <ProgressBar
                  completed="60"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/13.png" alt="" />
                  <p>@venus.sys</p>
                </div>
              </td>
              <td>3152</td>
              <td>
                <ProgressBar
                  completed="50"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/14.png" alt="" />
                  <p>@ape.vpp8</p>
                </div>
              </td>
              <td>2907</td>
              <td>
                <ProgressBar
                  completed="40"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.names}>
                  <img src="./profiles/15.png" alt="" />
                  <p>@leon_pwrr</p>
                </div>
              </td>
              <td>2309</td>
              <td>
                <ProgressBar
                  completed="30"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NftTopCreators;
