export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};

export type NotificationType = "ORDER" | "LOW_ON_STOCK";

export type EmailContent = {
    subject: string;
    body: string;
};

export type Country = {
    name: string;
    code2: string;
    code3: string;
};

export type EmailProduct = {
    title: string;
    url: string;
};

export type CustomerDetails = {
    paymentMethod: any;
    name: string;
    email: string;
    country: String;
    address: string;
    message: string;
    phoneNumber: string;
};

export interface ProductMail {
    data: CustomerDetails & { products: ContentType[] };
    subject: string;
    body: string;
}

export type ContentType = {
    [review: string]: any;
    id: string;
    name: string;
    status: "Sold" | "Available" | "Reserved";
    sex: "male" | "female";
    price: number;
    image: string;
    animal: "Young Goat" | "Mini Cow" | "Dwarf Goat";
    description: string;
    color?: string;
};
