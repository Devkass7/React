import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    

  function clickHandler(event){
    event.preventDefault();

    const dataEl = event.currentTarget;
    
    const formData = new FormData(dataEl)

    const mail = formData.get("email")

    dataEl.reset()

    console.log(mail);
    
  }


  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={clickHandler}>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
        <br />
        
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" name="password" />
        <br />
        
        <button  >Submit</button>
        
      </form>
    </section>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);