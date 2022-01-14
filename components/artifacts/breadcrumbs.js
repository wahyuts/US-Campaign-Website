import styles from "../../styles/About.module.css";
export default function Breadcrumbs(props) {
  const { text1, text2 } = props;
  return (
    <nav className={`breadcrumb mb-4 ${styles["breadcrumb"]}`}>
      <ol className={`breadcrumb ${styles["breadcrumb"]}`}>
        <li className={`breadcrumb-item ${styles["breadcrumb-item"]}`}>
          <a href="https://us.campaign.com" style={{ color: "#000" }}>
            {text1}
          </a>
        </li>
        <li
          className={`breadcrumb-item active ${styles["breadcrumb-item"]} ${styles.active}`}
        >
          {text2}
        </li>
      </ol>
    </nav>
  );
}
