import Image from "next/image";

export default function HowItWorksCard({number, image, title, description, direction, bordered} : {number: number, image : string, title : string, description: string, direction: string, bordered : boolean}) {
    return (
        <div className={`mx-10 w-fit flex flex-col-reverse ${direction == "left" ? "sm:flex-row" : "sm:flex-row-reverse"} relative bg-rrwhite rounded-md drop-shadow-lg`}>
            <div className={`drop-shadow-lg border-b-2 border-amber-600 rounded-full absolute ${direction == "left" ? "-top-6 -left-6 -rotate-6" : "-top-6 -right-6 rotate-6"} bg-amber-500 text-white size-12 flex items-center justify-center font-bold text-2xl p-4 `}>{number}</div>
            <div className="p-6 w-full sm:max-w-80 rounded-md">
                <Image className={`rounded-md mx-auto w-full `} src={image} width={512} height={512} alt={title}/>
            </div>
            <div className="flex flex-col gap-4 p-8">
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
                <p className="text-2xl overflow-ellipsis">{description}</p>
            </div>
        </div>
    )
}