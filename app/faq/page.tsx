
import { FaTools } from "react-icons/fa";
import { FaScroll } from "react-icons/fa";
import { IoMdSwap } from "react-icons/io";
import { FaSoap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaClock } from "react-icons/fa";

import Link from "next/link";
import FaqItem from "../components/faq-item";

export default function FaqPage(){
    return (
        <div className="w-full flex flex-col h-auto min-h-screen max-w-screen-lg mx-auto gap-10 bg-rrwhite text-rrcharcoal p-6">
            <h1 className="mx-auto text-3xl md:text-5xl my-10 font-semibold">Frequently Asked Questions</h1>
            <section>
                <h2 className="border-b-4  text-3xl md:text-4xl font-semibold text-rrteal flex gap-2"><FaTools className="my-auto"/>Orders & Customizations</h2>
                <FaqItem textcolor="rrcharcoal"question={"How do I place a custom order?"}>
                    <p>If you're looking to place a custom order, you can reach out to us directly through social media or our <Link className="text-rrteal underline" href={"/contact"}>contact page</Link> with the details of your order and we'll get in touch.</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"Can I use my own image or logo?"}>
                    <p>Yes we do! Send us your image or logo, and we'll get it engraved on the items of your choosing.</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"Can you help me design something if I don't have an image?"}>
                    <p>Sure why the hell not.</p>
                </FaqItem>
            </section>

            <section>
                <h2 className="border-b-4  text-3xl md:text-4xl font-semibold text-rrteal flex gap-2"><FaScroll className="my-auto"/>Products & Pricing</h2>
                <FaqItem textcolor="rrcharcoal"question={"What products can I customize?"}>
                    <p>We offer customization of a wide variety of products, most commonly: Yeti Water Bottles, Key Chains, Mugs, T-Shirts and Hoodies. If you're looking for something special, reach out through our contact page and we'll see how we can help!</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"Is there a minimum order size?"}>
                    <p>Nope! We do orders of all sizes.</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"How much does custom engraving cost?"}>
                    <p>Pricing may vary depending on the order, feel free to reach out for a quote.</p>
                </FaqItem>
            </section>

            <section>
                <h2 className="border-b-4  text-3xl md:text-4xl font-semibold text-rrteal flex gap-2"><FaClock className="my-auto"/>Timing & Delivery</h2>
                <FaqItem textcolor="rrcharcoal"question={"How long does it take to receive my custom item?"}>
                    <p>Dunno, wait and see.</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"Do you offer rush orders?"}>
                    <p>If the price is right!</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"Where do you ship?"}>
                    <p>No shipping, come to me.</p>
                </FaqItem>
            </section>
            <section>
                <h2 className="border-b-4  text-3xl md:text-4xl font-semibold text-rrteal flex gap-2"><IoMdSwap className="my-auto"/>Returns & Changes</h2>
                <FaqItem textcolor="rrcharcoal"question={"Can I make changes after placing my order?"}>
                    <p>As long as it's not engraved yet, you can probably make some changes.</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"What's your return or refund policy for custom items?"}>
                    <p>All sales final.</p>
                </FaqItem>
            </section>

            <section>
                <h2 className="border-b-4  text-3xl md:text-4xl font-semibold text-rrteal flex gap-2"><FaSoap className="my-auto"/>Product Care</h2>
                <FaqItem textcolor="rrcharcoal"question={"Are engraved items dishwasher-safe?"}>
                    <p>Sure are, the designs are engraved so they won't wash off in the dishwasher!</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"How do I care for my custom clothing?"}>
                    <p>Probably just wash it!</p>
                </FaqItem>
            </section>

            <section>
                <h2 className="border-b-4  text-3xl md:text-4xl font-semibold text-rrteal flex gap-2"><FaPhone className="my-auto"/>Contact & Support</h2>
                <FaqItem textcolor="rrcharcoal"question={"How do I get in touch with you?"}>
                    <p>You can reach us through the <Link href={"/contact"} className="text-rrteal underline ">contact page</Link> or through social media by direct message!</p>
                </FaqItem>
                <FaqItem textcolor="rrcharcoal"question={"Can I see examples of past work?"}>
                    <p>Of course! Check out the <Link className="text-rrteal underline " href={"/gallery"}>gallery</Link> or our social media.</p>
                </FaqItem>
            </section>
        
        </div>
    )
}