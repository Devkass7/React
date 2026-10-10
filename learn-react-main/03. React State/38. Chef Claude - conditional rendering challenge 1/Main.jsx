import React from "react"

export default function Main() {

    const [ingredients, setIngredients] = React.useState([])

    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    
    /**
     * Challenge:
     * Using conditional rendering, only render the new <section> IF
     * there are ingredients added to the list of ingredients.
     */

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <section>
<<<<<<< HEAD
               { ingredientsListItems.length < 0 ? <h2>Ingredients on hand:</h2> : null}
=======
             { ingredients.length > 0 &&   <h2>Ingredients on hand:</h2>}
>>>>>>> 997c436219825c974818c9f06cd2eeb7719113e7
                <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>

               {ingredients.length > 2 &&  <div className="get-recipe-container">
               <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
<<<<<<< HEAD
                   {ingredientsListItems.length < 0 ? <button>Get a recipe</button> : null}
                </div>
=======
                    <button>Get a recipe</button>
                </div>}
>>>>>>> 997c436219825c974818c9f06cd2eeb7719113e7
            </section>
        </main>
    )
}