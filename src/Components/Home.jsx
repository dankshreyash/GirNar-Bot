import Navbar from "./Navbar"
import Footer from "./Footer"
import './Home.css';
import myImage from './smart-farm.png';
const Home = () => {
    return (
        <>
            <Navbar />

            {/* <img src={myImage} alt="Description of Image" className="main-image" />
            <div className="text-content">

                <p>At GirNarBot, we are revolutionizing the agricultural landscape by bridging the gap between farmers and drone technology. As an innovative aggregator platform, GirNarBot offers a comprehensive solution for all agricultural drone needs. Whether you are looking to purchase a drone, explore specialized services, or access loans and subsidies under Indian Government schemes, GirNarBot is your trusted partner.

                    Our platform is designed to simplify the process for farmers, providing seamless access to the latest drone technology from top manufacturers. We also offer robust after-sales support, ensuring that your agricultural drones remain efficient and reliable, regardless of the brand.

                    With GirNarBot, farmers have a one-stop solution to enhance productivity, reduce operational costs, and leverage cutting-edge technology for sustainable farming practices. Join us in transforming agriculture with drone innovation.</p>
            </div> */}
            <div className="content-container">
                <div className="text-image-container">
                    <img src={myImage} alt="Description of Image" className="main-image" />
                    <div className="text-content">
                        <p>At GirNarBot, we are revolutionizing the agricultural landscape by bridging the gap between farmers and drone technology. As an innovative aggregator platform, GirNarBot offers a comprehensive solution for all agricultural drone needs. Whether you are looking to purchase a drone, explore specialized services, or access loans and subsidies under Indian Government schemes, GirNarBot is your trusted partner.

                            Our platform is designed to simplify the process for farmers, providing seamless access to the latest drone technology from top manufacturers. We also offer robust after-sales support, ensuring that your agricultural drones remain efficient and reliable, regardless of the brand.

                            With GirNarBot, farmers have a one-stop solution to enhance productivity, reduce operational costs, and leverage cutting-edge technology for sustainable farming practices. Join us in transforming agriculture with drone innovation.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home