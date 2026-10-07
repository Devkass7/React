import { useState } from "react";

export default function Joke(props) {
  /**
   * Challenge:
   * - Create state `isShown` (boolean, default to `false`)
   * - Add a button that toggles the value back and forth
   */

  const [isShown, setIsShown] = useState(false);

  function clickHandler() {
    setIsShown((prev) => !prev);
  }

  return (
    <>
      {props.setup && <h3>{props.setup}</h3>}

      <button onClick={clickHandler}>
        {isShown ? "Hide Punchline" : "Show Punchline"}
      </button>
      <div>
        {isShown && <p className="punchline">{props.punchline}</p>}
        <hr />
      </div>
    </>
  );
}
