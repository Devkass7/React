/**
 * Challenge:
 * - Create a Contact component in another file
 * - Move one of the contact card articles below into that file
 * - import and render 4 instances of that contact card
 *     - Think ahead: what's the problem with doing it this way?
 */

function App(props) {
    return (
        <div className="contacts">
            <article className="contact-card">
                <img 
                    src="{props.img}"
                    alt="Photo of {props.title}"
                />
                <h3>{props.title}</h3>
                <div className="info-group">
                    <img 
                        src="{props.phoneImg}" 
                        alt="phone icon" 
                    />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img 
                        src="{props.emailImg}" 
                        alt="mail icon"
                    />
                    <p>{props.email}</p>
                </div>
            </article>
            
            
            
        </div>
    )
}

export default App