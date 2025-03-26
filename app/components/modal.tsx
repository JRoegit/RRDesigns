import React from "react";

export default function Modal({ isOpen, children }: {isOpen : boolean, children : React.ReactNode}){
    if (!isOpen) return null;
    return (
        <div className="fixed left-0 top-0 w-full h-full bg-black/75 flex justify-center items-center z-50">
            <div className="bg-rrwhite h-auto w-[500px] m-auto p-2 rounded-md flex flex-col gap-2">
                {children}
            </div>
        </div>
    );
};