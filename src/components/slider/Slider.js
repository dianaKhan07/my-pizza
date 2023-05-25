import { Carousel } from "antd"
import { SliderItemsData } from "../../consts"
import SliderItem from "./sliderItem/SliderItem"
const Slider =()=> {
    return (
        <Carousel slidesPerRow={5} style={{backgroundColor:'white'}}>
           {
            SliderItemsData.map((slider,index)=> (
                <SliderItem key={index} src={slider.src}/>
            ))
           }
        </Carousel>
    )
}
export default Slider