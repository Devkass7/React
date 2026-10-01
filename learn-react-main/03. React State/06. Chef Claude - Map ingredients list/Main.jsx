export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */
    const ingredientsList = ingredients.map(el =>{
        return (
            <li key={el}>{...el}</li>
        )
    })

    function submitHandler(e){
        e.preventDefault()
        
        const formData = new FormData(e.currentTarget)
       ingredients.push(formData.get("userInput"))

       console.log(ingredients);
       
    }

    
    return (

        
        <main>
           

            <form className="add-ingredient-form" onSubmit={submitHandler}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="userInput"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}