import React from "react";
export default function Main() {
  /**
   * Challenge: move the hardcoded meme info into React
   * state. Use an object with `topText`, `bottomText`,
   * and `imageUrl` properties, and set the initial values to
   * the ones hardcoded below.
   */

  const [memeText, setMemeText] = React.useState(false);

  const text = {
    topText: "Walk into Mordor",
    buttomText: "Walk into Mordor",
  };

  function clickHandler() {
    setMemeText((prev) => !prev);
  }

  return (
    <main>
      <div className="form">
        <label>
          Top Text
          <input type="text" placeholder="One does not simply" name="topText" />
        </label>

        <label>
          Bottom Text
          <input type="text" placeholder="Walk into Mordor" name="bottomText" />
        </label>
        <button>Get a new meme image 🖼</button>
      </div>

      {memeText &&
        <>
          <div className="meme">
            <img src="http://i.imgflip.com/1bij.jpg" />
            <span className="top">{text.topText}</span>
            <span className="bottom">{text.buttomText}</span>
          </div>
        </>
       }
    </main>
  );
}
