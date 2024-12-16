import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/Components/ui/button";
import { ContentType } from "@/types";
import { router } from "@inertiajs/react";

const OrderProduct = ({ item }: { item: ContentType }) => {
    const [isSuccess, setIsSuccess] = useState<boolean>(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSuccess(false);
        }, 2000);
        return clearTimeout(timeout);
    }, [isSuccess]);

    const inValid = item.status === "Reserved" || item.status === "Sold";

    const validText = () => {
        if (item.status === "Reserved") {
            return "Already Taken";
        } else if (item.status === "Sold") {
            return "Not Available";
        } else if (item.status === "Available") {
            return "Order Now";
        }
    };
    return (
        <Button
            onClick={() => {
                setIsSuccess(true);
                router.visit(`/product/order/${item.id}`);
            }}
            // disabled={inValid}
            variant={inValid ? "destructive" : "default"}
            className="w-full text-base"
            size={"lg"}
        >
            {isSuccess ? (
                <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    {"Processing..."}
                </>
            ) : (
                <span>{validText()}</span>
            )}
        </Button>
    );
};

export default OrderProduct;
