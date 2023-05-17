import { Poem } from "../../types/Poem";
import styles from "./styles.module.css";

const PoemComponent = ({ title1, title2, text, stanza }: Poem) => {
  return (
    <div>
      <h3 className={styles.h3}>{title1}</h3>
      <h4 className={styles.h4}>{title2}</h4>
      <p className={styles.p}>
        {text?.split("\n").map((p) => {
          return <p>{p}</p>;
        })}
      </p>
      <ul>
        <li className={styles.li}>{stanza}</li>
      </ul>
    </div>
  );
};

export default PoemComponent;
