import CallToAction from "../global/callToAction";
import { prata } from "@/app/lib/fonts";

function Hero() {
    return ( 
        <section className="flex align-left h-[30rem] bg-hero-bg bg-no-repeat bg-cover">
            <div className="ml-[5rem] w-[30%] flex flex-col justify-evenly">
                <div className="flex flex-col justify-between gap-12">
                    <h1 className={`${prata.className} text-5xl font-extrabold`}>The nature candle</h1>
                    <p className="text-[1.2rem]">All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments</p>
                </div>
                <CallToAction text="Commandez dès maintenant" hasIcon={false} />
            </div>
        </section>
     );
}

export default Hero;