import Image from "next/image";



function CallToAction({
    text,
    hasIcon,
} : {
    text : string,
    hasIcon : boolean
}
) {
    return ( 
        <button className="bg-blanc text-left w-fit p-4 call-to-action">
            {
                hasIcon ?
                <Image
                    src=""
                    alt=""
                />
                :
                null
            }
            <span>{text}</span>
        </button>
     );
}

export default CallToAction;