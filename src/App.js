import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Header from "./components/Header";
import Info from "./components/Info";
import Journeys from "./components/Journeys";
function App() {
  const Journey = Info.map((data) => {
    return <Journeys key={data.id}
      {...data}
    />
  })
  return (
    <div className="App">
      <Header />
      <section className="Trips">
        <div className="container">
          <div className="allTrips">
            {Journey}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
