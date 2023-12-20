import Image from "next/image";
import { poppins} from "@/app/lib/fonts";

const footerLinks = [
    {
        name : "New season",
        category : "Discovery"
    },
    {
        name : "Most searched",
        category : "Discovery"
    },
    {
        name : "Most selled",
        category : "Discovery"
    },
    {
        name : "Help",
        category : "About"
    },
    {
        name : "Shipping",
        category : "About"
    },
    {
        name : "Affiliate",
        category : "About"
    },
    {
        name : "Contact us",
        category : ""
    },
    {
        name : "",
        category : ""
    },
    {
        name : "",
        category : ""
    },
]

function Footer() {
    return ( 
        <footer className="flex flex-col">
            <div className="flex flex-col p-[4rem] bg-noir text-blanc justify-between">
                <div>
                    <hr />
                </div>
                <div className="flex flex-row justify-between mt-[3.5rem]">
                    <div className="flex flex-col justify-between">
                    <div>
                        <Image src='' alt="logo" />
                    </div>
                    <p>Your natural candle made for your home and for your wellness</p>
                    </div>
                    <div className="flex justify-between gap-6">
                    <div className="flex flex-col justify-between gap-3">
                        <h2 className={`${poppins.className} text-bleu`}>Discovery</h2>
                        <p>New season</p>
                        <p>Most searched</p>
                        <p>Most selled</p>
                    </div>
                    <div className="flex flex-col justify-between gap-3">
                        <h2 className={`${poppins.className} text-bleu`}>About</h2>
                        <p>Help</p>
                        <p>Shipping</p>
                        <p>Affiliate</p>
                    </div>
                    <div className="flex flex-col justify-between gap-3">
                        <h2 className={`${poppins.className} text-bleu`}>Info</h2>
                        <p>Contact us</p>
                        <p>Privacy Policies</p>
                        <p>Terms & Conditions</p>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between p-4 px-[4rem] text-sm">
                <p>Constance RDC All Right Reserved</p>
                <p>Designed and Developped by <a href="">Leonardo Rubuz</a></p>
            </div>
        </footer>
     );
}

export default Footer;