import { links } from "@/data/content";
import { cn } from "@/lib/utils";

import Mobilemenu from "@/Components/app/mobile-menu";
import { buttonVariants } from "@/Components/ui/button";
import { Link, usePage } from "@inertiajs/react";

const Header = () => {
    return (
        <div className="w-full h-20 px-10 py-3 flex flex-row justify-between items-center">
            <div>
                <a
                    className="flex place-items-center gap-2 p-4 lg:pointer-events-auto lg:p-0"
                    href="/"
                    rel="noopener noreferrer"
                >
                    <img
                        src="/hustonkenny-ranch-high-resolution-logo.png"
                        alt="Huston Kenny's Ranch Logo"
                        className="dark:invert h-[50px] w-[90px]"
                        width={100}
                        height={24}
                    />
                </a>
            </div>
            {/* Nav links */}
            <div className="md:flex md:flex-row hidden space-x-3 items-center justify-center">
                {links.map((link, index) => (
                    <NavLinks key={index} href={link.href} name={link.name} />
                ))}
            </div>
            <div className="block md:hidden">
                <Mobilemenu />
            </div>
        </div>
    );
};

export default Header;

interface NavLinksProps {
    name: string;
    href: string;
}

const NavLinks = ({ href, name }: NavLinksProps) => {
    const { url } = usePage();
    const isActive = url === "/" || url?.startsWith(`${href}/`) || url === href;

    return (
        <Link
            href={`${href}`}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-left rounded-sm hover:bg-primary hover:text-white hover:no-underline",
                isActive ? "text-white bg-primary hover:bg-primary/50" : ""
            )}
        >
            {name}
        </Link>
    );
};
