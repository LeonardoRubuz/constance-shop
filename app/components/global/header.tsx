import Logo from "./logo";
import { ShoppingCartIcon, UserIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Header() {
    return(
        <header className="flex flex-row justify-evenly gap-[8rem] p-5 sticky top-0 font-medium bg-blanc">
            <Logo />
            <nav className="flex justify-between gap-[5rem] font-semibold">
                <div className="flex ">
                    <span>Discovery </span>
                    <ChevronDownIcon className="h-6 w-4 ml-2 text-noir" />
                </div>
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