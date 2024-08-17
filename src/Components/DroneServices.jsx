import './DroneServices.css';
import Navbar from './Navbar'
import Footer from './Footer'

const DroneServices = () => {
  const services = [
    "Aerial Photography and Videography: Capturing high-quality images and videos for real estate, events, and media production.",
    "Surveying and Mapping: Creating detailed maps and surveys for construction, mining, agriculture, and environmental monitoring.",
    "Agricultural Drones: Monitoring crop health, applying pesticides, and managing farm resources.",
    "Infrastructure Inspection: Checking bridges, power lines, pipelines, and other infrastructure for maintenance and safety.",
    "Search and Rescue: Assisting in locating missing persons or assessing disaster areas.",
    "Delivery Services: Transporting small packages, medical supplies, and other goods.",
    "Environmental Monitoring: Tracking wildlife, monitoring deforestation, and assessing natural disasters.",
    "Security and Surveillance: Monitoring properties, events, and public areas for security purposes.",
    "Traffic Monitoring: Observing and reporting on traffic conditions and accidents.",
    "Filmmaking and Entertainment: Providing unique aerial shots and effects for movies, TV shows, and other media."
  ];
  return (
    <>
      <Navbar />
      <div className="services-container">
        <h2>Drone Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              {service}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
export default DroneServices