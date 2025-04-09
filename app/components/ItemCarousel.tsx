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
      breakpoint: { max: 3000, min: 768 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 768, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

export default function ItemCarousel(){
    return (
        <Carousel responsive={responsive}
            swipeable={true}
            infinite={true}
            itemClass="p-4 flex"
            draggable={true}
            autoPlay={true}
            autoPlaySpeed={5000}
        >
            <Image className="rounded-md object-contain m-auto" src={"/Babies.png"} alt="Custom Baby Clothes" width={512} height={512}/>
            <Image className="rounded-md object-contain m-auto" src={"/BusinessYeti.png"} alt="Engraved Business Yetis" width={512} height={512}/>
            <Image className="rounded-md object-contain m-auto" src={"/Hammer.png"} alt="Engraved Hammer" width={512} height={512}/>
            <Image className="rounded-md object-contain m-auto" src={"/KeyChain.png"} alt="Engraved Key Chain" width={512} height={512}/>
            <Image className="rounded-md object-contain m-auto" src={"/Mugs.png"} alt="Engraved Mugs" width={512} height={512}/>
            <Image className="rounded-md object-contain m-auto size-80" src={"/PhoneCase.png"} alt="Custom Phone Case" width={512} height={512}/>
            <Image className="rounded-md object-contain m-auto" src={"/SportYeti.png"} alt="Engraved Sports Yeti" width={512} height={512}/>
        </Carousel>
    )
}