import ProductCard from "./productCard";
import SectionTitle from "./sectionTitle";

function ProductsSample() {
    return ( 
        <section className="flex flex-col items-center justify-center gap-8 p-16">
            <SectionTitle title="Products" description="Order it for you or for your beloved ones" />
            <div className="grid grid-cols-4 gap-x-[3.5rem] gap-y-[4rem] w-[80%] p-4">
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
            </div>
        </section>
     );
}

export default ProductsSample;