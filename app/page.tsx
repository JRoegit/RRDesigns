import Link from "next/link";
import Flowers from "./components/flowers";
import WhiteWaveTop from "./components/white-wavetop";

export default function Home() {
    return (
        <div className="h-auto  text-black w-full">
            {/* HERO SECTION */}
            <div className=" h-[90vh] min-h-screen-lg bg-rrwhite w-full">
                <div className="w-full mx-auto max-w-screen-lg flex flex-row h-auto pt-10">
                    <div className="w-2/3 flex flex-col">
                        <h1 className="text-6xl font-bold text-teal-950">Crafting Memories,</h1>
                        <h1 className="text-4xl font-bold text-teal-950">One Personalized Piece at a Time.</h1>
                        <p className="text-lg mt-10">At RR Designs, we believe in the power of personalization. We specialize in transforming ordinary items into extraordinary treasures that tell your unique story.</p>
                        <div className="flex flex-row gap-4 mt-10">
                            <Link href={"/gallery"} className="bg-rrteal border-l-4 border-b-4 border-black/25 px-4 py-2 rounded-md text-white font-bold text-lg">Check Out Our Work</Link>
                        </div>
                    </div>                    
                    <div className="ml-auto w-1/3">
                        <Flowers width={500}/>
                    </div>
                </div>
            </div>
            <WhiteWaveTop/>
            <div>
                FRONT PAGE CONTENT HERE
            </div>
        </div>
    );
}  
