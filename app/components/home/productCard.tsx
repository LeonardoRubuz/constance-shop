import Image from "next/image";
import blackBackground from "@/public/black.jpg"


function ProductCard({
    itemImage,
    itemName,
    itemPrice
}:
    {
        itemImage : string,
        itemName : string,
        itemPrice : number
    }) {
    return (
        <div className="rounded-lg shadow-xl">
            <div className="rounded-lg h-[60%]">
                <Image src={blackBackground} alt="" className="w-full object-cover h-[100%]"/>
            </div>
            <div className="flex justify-between h-[40%]">
                <b>{itemName}</b>
                <p>${itemPrice}</p>
            </div>
        </div>
     );
}

export default ProductCard;