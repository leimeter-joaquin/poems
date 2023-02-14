import { Poem, Stanza } from "../../types/Poem";
import styles from "./styles.module.css";

const PoemComponent = ({ title1, title2, text }: Poem) => {
  console.log(text);
  return (
    <div>
      <h3>{title1}</h3>
      <h4>{title2}</h4>
      <div className={styles.p}>
        {text?.map((p) => {
          if (Array.isArray(p)) {
            return (
              <div className={styles.parSeparator}>
                {p.map((l) => {
                  return <p>{l}</p>;
                })}
              </div>
            );
          }
          return "not stanza";
        })}
      </div>
    </div>
  );
};

export default PoemComponent;
