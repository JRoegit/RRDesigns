import Image from "next/image";
import Link from "next/link";

export default function ServicePage() {
    return (
        <div className="w-full flex flex-col h-auto min-h-screen max-w-screen-lg mx-auto  text-rrcharcoal p-6">
            The service page I believe.
            <div className="w-full flex flex-col sm:flex-row h-full bg-rrwhite p-4 rounded-md">
                <div className="w-full max-w-80 relative">
                    <Image width={512} height={512} alt="Dog" src={"/Woofer.jpg"}  className="rounded-xl"/>
                    <Image width={512} height={256} alt="Dog" src={"/WooferYeti.png"} className="w-60 h-80 rotate-6 absolute -bottom-20 -right-30 rounded-xl"/>
                </div>
                <div className="h-auto w-full sm:w-4/7 flex flex-col sm:ml-auto gap-4 p-6">
                    <h1 className="text-3xl sm:text-5xl font-bold">Custom Engravings</h1>
                    <p className="text-2xl">Get your sweet fur baby on a mug of your choosing (must be a yeti tho)</p>
                    <Link href={"/contact"} className="ml-auto mt-auto bg-amber-500 px-4 py-2 text-lg font-semibold text-white rounded-md hover:bg-amber-600">Get In Touch!</Link>
                </div>  
            </div>
        </div>
    )
}