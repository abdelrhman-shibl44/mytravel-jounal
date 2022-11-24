import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAfrica } from '@fortawesome/free-solid-svg-icons'
export default function Header() {
    return (
        <header>

            <h1><FontAwesomeIcon icon={faEarthAfrica} /> My_Travel_Journal</h1>
        </header>
    )
}