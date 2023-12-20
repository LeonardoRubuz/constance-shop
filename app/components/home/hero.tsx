import CallToAction from "../global/callToAction";

function Hero() {
    return ( 
        <section className="flex align-left h-[30rem] bg-hero-bg bg-no-repeat bg-cover">
            <div className="border-2 ml-[5rem] my-7 w-[20%]">
                <div>
                    <h1>The nature candle</h1>
                    <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments</p>
                </div>
                <CallToAction text="Discover our collection" hasIcon={false} />
            </div>
        </section>
     );
}

export default Hero;