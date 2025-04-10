import Link from "next/link";
import Flowers from "./components/flowers";
import HowItWorksCard from "./components/how-it-works-card";
import ItemCarousel from "./components/ItemCarousel";
import WaveTop from "./components/wavetop";
import FaqItem from "./components/faq-item";

export default function Home() {
    return (
        <div className="h-auto  text-rrcharcoal text-rrcharchoal w-full">
            {/* HERO SECTION */}
            <div className=" h-[90vh] min-h-screen-lg bg-rrwhite w-full px-6">
                <div className="w-full mx-auto max-w-screen-xl px-20 flex flex-col md:flex-row h-auto pt-10">
                    <div className="w-full md:w-2/3 flex flex-col my-auto">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-teal-950">Crafting Memories,</h1>
                        <h1 className="text-xl md:text-3xl lg:text-5xl font-bold text-amber-500">One Personalized Piece at a Time.</h1>
                        <p className="md:text-2xl mt-10 font-semibold text-rrcharcoal/70 w-2/3">We believe in the power of personalization. Specializing in transforming ordinary items into extraordinary treasures that tell your unique story.</p>
                        <div className="flex flex-row gap-4 mt-10">
                            <Link href={"/gallery"} className="bg-rrteal hover:bg-rrteal/75 border-l-4 transition-all ease-in-out duration-500 border-b-4 border-black/25 px-4 py-2 rounded-md text-white font-bold text-lg">Check Out Our Work</Link>
                            <Link href={"/contact"} className="bg-amber-500 hover:bg-amber-500/75 transition-all ease-in-out duration-500 border-l-4 border-b-4 border-black/25 px-4 py-2 rounded-md text-white font-bold text-lg">Contact Us</Link>
                        </div>
                    </div>                    
                    <div className="ml-auto w-full md:w-1/3">
                        <Flowers width={500}/>
                    </div>
                </div>
            </div>
            <WaveTop orientation={"top"} color={"white"} scale={100} />
            <div className="flex flex-col w-full max-w-screen-lg gap-10  mx-auto">
                <h1 className="mx-auto text-4xl sm:text-5xl font-bold">Our Engravings Process</h1>
                <HowItWorksCard number={1} image={"/Woofer.jpg"} title={"Share Your Idea"} description={"Send us your design, image, or just an idea - We'll chat to understand what you are looking for!"} direction="left"/>
                <HowItWorksCard number={2} image={"/charcoaldog.png"} title={"Design Preperation"} description={"We turn your idea into a high-quality, engravable digital design, ready for production."} direction="right"/>
                <HowItWorksCard number={3} image={"/engravedYeti.png"} title={"We Engrave It"} description={"Your design is professionally engraved onto your chosen product — like water bottles, mugs, and more."} direction="left"/>
            </div>
            <WaveTop orientation={""} color={"white"} scale={100} />
            <div className="bg-rrwhite">
                <div className="flex flex-col w-full max-w-screen-lg  mx-auto">
                    <h1 className="mx-auto text-5xl font-bold mt-10">Customize These</h1>
                    <ItemCarousel/>
                    <Link className="mx-auto text-2xl font-bold border-b-4 border-amber-500 hover:bg-rrcharcoal hover:text-white hover:rounded-md transition-all ease-in-out duration-500 px-4 py-2 " href={"/gallery"}>And Many More</Link>
                    <div className="h-10"/>
                </div>
            </div>
            <div className="bg-rrcharcoal h-fit">
                <WaveTop orientation={"top"} color={"white"} scale={50} />
                <div className="mx-auto w-full max-w-screen-lg flex flex-col">
                    <div className="flex flex-col gap-2 text-white relative">
                        <h1 className="text-8xl">Blank Stuff Is Boring.</h1>
                        <h2 className="text-8xl"><span className="border-b-10">Let&apos;s</span> Fix That!</h2>
                        <Link className="absolute bottom-0 right-0 bg-amber-500 hover:bg-amber-500/75 transition-all ease-in-out duration-500 text-white border-b-2 border-black/50 rounded-md px-6 py-3 text-3xl font-bold" href={"/contact"}>Get In Touch.</Link>
                    </div>
                </div>
                <div className="h-20"/>
            </div>
            <div className="bg-rrteal">
                <WaveTop orientation={"top"} color={"charcoal"} scale={50} />
                <div className="flex flex-col w-full mx-auto max-w-screen-lg p-6">
                    <h1 className="text-5xl mb-10 mx-auto text-rrwhite font-bold">Quick Answers</h1>
                    <FaqItem textcolor="rrwhite" question={"How do I place a custom order?"}>
                        <p>If you're looking to place a custom order, you can reach out to us directly through social media or our <Link className="text-amber-500/75 hover:text-amber-500" href={"/contact"}>contact page</Link> with the details of your order and we'll get in touch.</p>
                    </FaqItem>
                    <FaqItem textcolor="rrwhite" question={"Can I use my own image or logo?"}>
                        <p>Yes we do! Send us your image or logo, and we'll get it engraved on the items of your choosing.</p>
                    </FaqItem>
                    <FaqItem textcolor="rrwhite" question={"What products can I customize?"}>
                        <p>We offer customization of a wide variety of products, most commonly: Yeti Water Bottles, Key Chains, Mugs, T-Shirts and Hoodies. If you're looking for something special, reach out through our contact page and we'll see how we can help!</p>
                    </FaqItem>
                    <FaqItem textcolor="rrwhite" question={"Is there a minimum order size?"}>
                        <p>Nope! We do orders of all sizes.</p>
                    </FaqItem>
                    <Link href={"/faq"} className="mx-auto px-4 py-2 my-10 bg-amber-500 hover:bg-amber-600 transition-color ease-in-out duration-500 text-white rounded-md border-b-4 border-l-4 font-bold text-xl  border-black/25">All FAQ</Link>
                </div>
            </div>
        </div>
    );
}  
