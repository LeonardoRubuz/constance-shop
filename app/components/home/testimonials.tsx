import SectionTitle from "./sectionTitle";
import TestimonialCard from "./testimonialCard";

function Testimonials() {
    return ( 
        <section>
            <SectionTitle title="Testimonials" description="Some quotes from our happy customers" />
            <div>
                <TestimonialCard image="" review="Amazing" author="Leonardo" />
                <TestimonialCard image="" review="Amazing" author="Leonardo" />
                <TestimonialCard image="" review="Amazing" author="Leonardo" />
            </div>
        </section>
     );
}

export default Testimonials;