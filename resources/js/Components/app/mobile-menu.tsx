import { LogIn, MenuIcon } from "lucide-react";

import { Button, buttonVariants } from "@/Components/ui/button";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/Components/ui/sheet";

import { cn } from "@/lib/utils";
import { links } from "@/data/content";
import { usePage } from "@inertiajs/react";

const Mobilemenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="cursor-pointer w-8 h-8" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    {links.map((link) => (
                        <NavLinks
                            key={link.href}
                            href={link.href}
                            name={link.name}
                        />
                    ))}
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button
                                type="submit"
                                className="text-center flex items-center justify-center"
                            >
                                <LogIn className="w-4 h-4 mr-2" />
                                Login
                            </Button>
                        </SheetClose>
                    </SheetFooter>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Mobilemenu;

interface NavLinksProps {
    name: string;
    href: string;
}

const NavLinks = ({ href, name }: NavLinksProps) => {
    const { url } = usePage();
    const isActive = url === "/" || url?.startsWith(`${href}/`) || url === href;

    return (
        <a
            href={`${href}`}
            className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-left rounded-sm hover:bg-primary hover:text-white hover:no-underline",
                isActive ? "text-white bg-primary hover:bg-primary/50" : ""
            )}
        >
            {name}
        </a>
    );
};
