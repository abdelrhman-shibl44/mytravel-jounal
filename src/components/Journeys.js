import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
export default function Journeys(props) {
    return (
        <div className="trip">
            <div className="imgHolder">
                <img src={`/images/${props.imageUrl}`} />
            </div>
            <div className="info">
                <div className="location">
                    <span><FontAwesomeIcon className='locationIcon' icon={faLocationDot} /> {props.location}</span>
                    <span><a href={props.googleMapsUrl}>{props.googleMapsText}</a></span>
                </div>
                <h1>{props.title}</h1>
                <div className="date">{props.startDate} - {props.endDate}</div>
                <p className="description">{props.description}</p>
            </div>
        </div >
    )
}