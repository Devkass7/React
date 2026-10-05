export default function App() {
  /**
   * Challenge: Replace the if/else below w#272e4e29ith a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = true;

  let answer = isGoingOut ? "Yes" : "No"

  // if (isGoingOut === true) {
  //   answer = "Yes";
  // } else {
  //   answer = "No";
  // }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{answer}</button>
    </main>
  );
}

