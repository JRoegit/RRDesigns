'use client'
import Image from "next/image";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default function ItemCarousel(){
    return (
        <Carousel responsive={responsive}
            swipeable={true}
            infinite={true}
            itemClass="p-4"
            draggable={true}
        >
            <Image className="rounded-md" src={"/engravedYeti.png"} alt="yet" width={512} height={512}/>
            <Image className="rounded-md" src={"/engravedYeti.png"} alt="yet" width={512} height={512}/>
            <Image className="rounded-md" src={"/engravedYeti.png"} alt="yet" width={512} height={512}/>
            <Image className="rounded-md" src={"/engravedYeti.png"} alt="yet" width={512} height={512}/>
            <Image className="rounded-md" src={"/engravedYeti.png"} alt="yet" width={512} height={512}/>
        </Carousel>
        // <Carousel
        //     swipeable={false}
        //     draggable={false}
        //     showDots={true}
        //     responsive={responsive}
        //     ssr={true} // means to render carousel on server-side.
        //     infinite={true}
        //     autoPlaySpeed={1000}
        //     keyBoardControl={true}
        //     customTransition="all .5"
        //     transitionDuration={500}
        //     containerClass="carousel-container"
        //     removeArrowOnDeviceType={["tablet", "mobile"]}
        //     dotListClass="custom-dot-list-style"
        //     itemClass="carousel-item-padding-40-px"
        // >
        //     <div>Item 1</div>
        //     <div>Item 2</div>
        //     <div>Item 3</div>
        //     <div>Item 4</div>
        // </Carousel>
    )
}