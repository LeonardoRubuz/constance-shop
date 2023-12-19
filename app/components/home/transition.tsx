import Image from "next/image";
import CallToAction from "../global/callToAction";
import SectionTitle from "./sectionTitle";

function Transition() {
    return ( 
        <section>
            <div>
                <SectionTitle title="Clean and Fragrant soy wax" description="Made for your home and your wellness" />
                <ul>
                    <li>
                        <span><img src="" alt="" /></span>
                        <span>Eco-sustainable: All recycable materials, 0% CO2 emissions</span>
                    </li>
                    <li>
                        <span><img src="" alt="" /></span>
                        <span>Hyphoallergenic: 100% natural, human friendly ingredients</span>
                    </li>
                    <li>
                        <span><img src="" alt="" /></span>
                        <span>Handmade: All candles are craftly made with love</span>
                    </li>
                    <li>
                        <span><img src="" alt="" /></span>
                        <span>Long burning: No more waste. Created for last long</span>
                    </li>
                </ul>
                <CallToAction hasIcon={false} text="Learn more" />
            </div>
            <div>
                <Image src="" alt="" />
            </div>
        </section>
     );
}

export default Transition;