import Image from "next/image";

function TestimonialCard({
    image,
    review,
    author,
}:{
    image : any,
    review : string,
    author : string
}) {
    return ( 
        <div>
            <Image src={image} alt=""/>
            <p>"{review}"</p>
            <p>"{author}"</p>
        </div>
     );
}

export default TestimonialCard;