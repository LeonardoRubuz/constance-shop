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
        <button>
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