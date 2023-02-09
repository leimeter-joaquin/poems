import { Poem } from "../types/Poem";

const PoemComponent = ({ title1, title2, text }: Poem) => {
  return (
    <div>
      <h3>{title1}</h3>
      <h4>{title2}</h4>
      <p>
        {text?.split("\n").map((p) => {
          return <p>{p}</p>;
        })}
      </p>
    </div>
  );
};

export default PoemComponent;
