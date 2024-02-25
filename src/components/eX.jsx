import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import product_single_10 from "../assets/img/product_single_10.jpg";
import product_single_01 from "../assets/img/product_single_01.jpg";
import product_single_02 from "../assets/img/product_single_02.jpg";
import product_single_03 from "../assets/img/product_single_03.jpg";
import product_single_04 from "../assets/img/product_single_04.jpg";
import product_single_05 from "../assets/img/product_single_05.jpg";

const images = [
    product_single_05,
    product_single_02,
    product_single_03,
    product_single_04,
    product_single_10
];

const eX=() =>{
    return (
        <div className="box">
            <Carousel useKeyboardArrows={true}>
                {images.map((URL, index) => (
                    <div className="slide">
                        <img alt="sample_file" src={URL} key={index} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}
export default eX;
