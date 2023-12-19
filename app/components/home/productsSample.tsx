import ProductCard from "./productCard";
import SectionTitle from "./sectionTitle";

function ProductsSample() {
    return ( 
        <div>
            <SectionTitle title="Products" description="Order it for you or for your beloved ones" />
            <div>
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
            </div>
        </div>
     );
}

export default ProductsSample;