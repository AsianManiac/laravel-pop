import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Container = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-4xl px-2.5 md:px-10",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Container;
