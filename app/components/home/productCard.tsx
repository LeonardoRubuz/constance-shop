import Image from "next/image";


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
        <div>
            <div>
                <Image src={itemImage} alt="" />
            </div>
            <span>{itemName}</span>
            <span>{itemPrice} $</span>
        </div>
     );
}

export default ProductCard;