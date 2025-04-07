import { Fragment } from "react"
import Footer from "../Components/Footer"
import { Header } from "../Components/Header"
import { Carousel, Image } from "react-bootstrap"
import { PiArrowFatLeftBold, PiArrowFatRightBold } from "react-icons/pi";
import FeaturedProducts from "../Components/FeaturesProducts";

const HomePage = () => {
    return <Fragment>
        <Header />
        <Carousel fade prevIcon={<PiArrowFatLeftBold size={30}/>} nextIcon={<PiArrowFatRightBold size={30}/>}>
            <Carousel.Item interval={1000}>
                <Image className="w-100" height={550} src="https://graphicsfamily.com/wp-content/uploads/edd/2024/11/Creative-E-Commerce-Shoes-Banner-Design-Free-PSD-02-scaled.jpg" alt="ad1"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image className="w-100" height={550} src="https://graphicsfamily.com/wp-content/uploads/edd/2021/07/Professional-E-Commerce-Shoes-Banner-Design-1180x664.jpg" alt="ad1"/>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <Image className="w-100" height={550} src="https://img.freepik.com/premium-vector/sports-shoe-social-media-cover-template-fashion-sneakers-marketing-facebook-cover-photo-design_755018-1884.jpg" alt="ad1"/>
            </Carousel.Item>
        </Carousel>
        <FeaturedProducts />
    </Fragment>
}

export default HomePage