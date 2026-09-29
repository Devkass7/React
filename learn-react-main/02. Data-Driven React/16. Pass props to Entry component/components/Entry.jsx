export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.mainsrc}
                    alt={props.mainalt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={props.markersrc} 
                    alt={props.markeralt}
                />
                <span className="country">{props.country}</span>
                <a href= {props.maps}>View on Google Maps</a>
                <h2 className="entry-title">{props.entrytitle}</h2>
                <p className="trip-dates">{props.date}</p>
                <p className="entry-text">{props.description}</p>
            </div>
            
        </article>
    )
}