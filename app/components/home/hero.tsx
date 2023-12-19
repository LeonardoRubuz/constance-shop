import CallToAction from "../global/callToAction";

function Hero() {
    return ( 
        <section>
            <div>
                <div>
                    <h2>The nature candle</h2>
                    <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure</p>
               </div>
               <CallToAction text="Discovery our collection" hasIcon={false} />
            </div>
        </section>
     );
}

export default Hero;