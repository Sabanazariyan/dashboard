import styles from "./KanbanInProgress.module.css";

import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import AvatarStack from "../AvatarStack";

const avatars = [
  "./profiles/profile.png",
  "./profiles/2.jpg",
  "./profiles/3.jpg",
  "./profiles/4.jpg",
  "./profiles/5.png",
];

function KanbanInProgress() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>In progress</h3>
        <div className={styles.icon}>
          <FaPlus />
        </div>
      </div>
      <div className={styles.card1}>
        <div className={styles.text}>
          <p>General ideas to improve 'Edit' workflow</p>
          <MdEdit />
        </div>
        <p>
          Currently, I have a few templates in the Local Library and when I want
          to add them I'm always presented (by default).
        </p>
        <div className={styles.photobutton}>
          <AvatarStack
            avatars={avatars}
            size={25}
            overlap={10}
            maxVisible={2}
          />
          <button>PENDING</button>
        </div>
      </div>
      <div className={styles.card2}>
        <div className={styles.text}>
          <p>Shortcode for templates to display correctly</p>
          <MdEdit />
        </div>
        <p>
          When you save some sections as a template and then paste a shortcode
          to a new page, the layout is broken, some styles are missing - in the
          editor.
        </p>
        <div className={styles.photobutton}>
          <AvatarStack
            avatars={avatars}
            size={25}
            overlap={10}
            maxVisible={4}
          />
          <button>UPDATES</button>
        </div>
      </div>
       <div className={styles.card3}>
        <div className={styles.text}>
          <p>Add/modify your own CSS-Selectors</p>

          <MdEdit />
        </div>
        <img src="./kanban/2.png" alt="" />
        <p>
          Website Design: The ability to add/modify your own CSS-Selectors like
          its done in Venus.
        </p>
        <div className={styles.photobutton}>
          <AvatarStack
            avatars={avatars}
            size={25}
            overlap={10}
            maxVisible={2}
          />
          <button>ERRORS</button>
        </div>
      </div>
    </div>
  );
}

export default KanbanInProgress;
