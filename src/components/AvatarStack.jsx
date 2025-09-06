import styles from "./AvatarStack.module.css";

function AvatarStack({
  avatars = [],
  size = 30,
  overlap = 12,
  maxVisible = 5,
}) {
  const visible = avatars.slice(0, maxVisible);
  const extra = avatars.length - visible.length;
  return (
    <div className={styles.stack} style={{ height: size }}>
      {visible.map((src, i) => (
        <img
          key={i}
          src={src}
          className={styles.avatar}
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -overlap,
            zIndex: avatars.length - i,
            borderWidth: Math.max(2, Math.round(size * 0.06)),
          }}
        />
      ))}

      {extra > 0 && (
        <div
          className={styles.more}
          style={{
            width: size,
            height: size,
            marginLeft: visible.length === 0 ? 0 : -overlap,
          }}
        >
          {extra > 99 ? "+99" : `+${extra}`}
        </div>
      )}
    </div>
  );
}

export default AvatarStack;
