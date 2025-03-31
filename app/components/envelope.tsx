export default function Envelope({width} : {width : number}){
    return (
        <svg className="z-10 w-full"  viewBox="0 0 1080 461" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 28.8819V461H1080L540 244.941L56.6084 51.5315L0 28.8819Z" fill="#00504D"/>
            <path d="M540 244.941L1080 461V28.8819L1023.39 51.5315L540 244.941Z" fill="#006663"/>
            <path d="M0 28.8819L56.6084 51.5315V0L0 28.8819Z" fill="#007B78"/>
            <path d="M1023.39 51.5315L1080 28.8819L1023.39 0V51.5315Z" fill="#007B78"/>
        </svg>
    )
}