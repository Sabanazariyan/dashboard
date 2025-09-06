import styles from "./DashboardNavbar.module.css";

import { HiHome } from "react-icons/hi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import { CiGrid42 } from "react-icons/ci";
import { BsPersonFill } from "react-icons/bs";
import { TbLockFilled } from "react-icons/tb";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function DashboardNavbar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.texthead}>
          <span>HORIZON</span>
          <span>FREE</span>
        </div>
        <div className={styles.line}></div>
        <div className={styles.pagelist}>
          <ul>
            <li>
              <NavLink to="/">
                <HiHome />
                <span>Dashboard</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/nft-marketplace">
                <MdOutlineShoppingCart />
                <span>NFT Marketplace</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/tables">
                <HiOutlineBars3CenterLeft />
                <span>Tables</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/kanban">
                <CiGrid42 />
                <span>Kanban</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/profile">
                <BsPersonFill />
                <span>Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/signin">
                <TbLockFilled />
                <span>Sign In</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.pro}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <span>
                <FaMoon />
              </span>
            </div>
            <h3>Upgrade to PRO</h3>
            <p>to get access to all features! Connect with Venus World! </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardNavbar;
