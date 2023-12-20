import Image from "next/image";
import Logo from "./logo";
import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return(
        <header className="flex flex-row justify-between p-5 sticky top-0 font-medium">
            <Logo />
            <nav className="flex justify-between gap-[5rem]">
                <div>Discovery</div>
                <div>About</div>
                <div>Contact us</div>
            </nav>
            <div className="flex justify-between gap-3">
                <div><UserIcon className="h-6 w-6 text-noir" /></div>
                <div><ShoppingCartIcon className="h-6 w-6 text-noir"/></div>
            </div>
        </header>
    )
}