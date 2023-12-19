import SectionTitle from "./sectionTitle";
import ProductCard from "./productCard";

function Bestsellers() {
    return ( 
        <section>
            <SectionTitle title="Popular" description="Our top selling product that you may like" />
            <div>
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
                <ProductCard itemImage="" itemName="Item 1" itemPrice={10} />
            </div>
        </section>
     );
}

export default Bestsellers;