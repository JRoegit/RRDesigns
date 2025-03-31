import { FaRegPaperPlane } from "react-icons/fa";
import Envelope from "../components/envelope";

export default function ContactPage(){
    return (
        <div className="h-auto min-h-screen w-full max-w-screen-lg bg-rrwhite text-black mx-auto flex flex-col md:flex-row pt-10">
            <div className="flex flex-col text-black p-6 w-full md:w-1/2">
                <h1 className="text-4xl lg:text-5xl  font-bold">Let&apos;s Get In Touch!</h1>
                <h2 className="text-xl mt-10 font-semibold">Ask how we can help you:</h2>
                <div className="mt-5">
                    <h1 className="font-semibold">Custom Engravings</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus cum dolor, quas temporibus dignissimos doloremque magni amet rem dolores soluta alias minima inventore perspiciatis deleniti impedit labore accusamus beatae. Beatae?</p>
                </div>
                <div className="mt-5">
                    <h1 className="font-semibold">Personalized Gifts</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus cum dolor, quas temporibus dignissimos doloremque magni amet rem dolores soluta alias minima inventore perspiciatis deleniti impedit labore accusamus beatae. Beatae?</p>
                </div>
                <div className="mt-5">
                    <h1 className="font-semibold">Sublimation Printing</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus cum dolor, quas temporibus dignissimos doloremque magni amet rem dolores soluta alias minima inventore perspiciatis deleniti impedit labore accusamus beatae. Beatae?</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 max-w-md mx-auto p-6">
                <div className="flex flex-col w-full border-2 border-rrteal rounded-t-md border-b-0 z-20 bg-rrwhite">
                    <h1 className="mx-auto text-2xl font-semibold p-4">Contact Us</h1>
                    <form className="mx-6 flex flex-col font-semibold gap-2 mb-14">
                        <p>Name<span className="text-red-500">*</span></p>
                        <input type="text" className="w-full bg-black/5 rounded-md border-b-2 border-black/40 px-2 py-1 font-normal"/>
                        <p>Email<span className="text-red-500">*</span></p>
                        <input type="text" className="w-full bg-black/5 rounded-md border-b-2 border-black/40 px-2 py-1 font-normal"/>
                        <p>Message<span className="text-red-500">*</span></p>
                        <textarea className="w-full bg-black/5 rounded-md border-b-2 border-black/40 px-2 py-1 font-normal"/>
                        <button className="flex flex-row mt-4 font-semibold text-white px-4 py-2 rounded-md bg-amber-500 border-b-3 border-l-3 border-black/40 mx-auto hover:bg-amber-600 hover:cursor-pointer transition-colors duration-250 ease-in-out z-50">Send <FaRegPaperPlane className="ml-2 my-auto text-white"/></button>
                    </form>
                </div>
                
                <div className="relative bottom-25 scale-111">
                    <Envelope width={443}/>
                    {/* <Envelope width={443}/> */}
                </div>
            </div>
        </div>
    )
}