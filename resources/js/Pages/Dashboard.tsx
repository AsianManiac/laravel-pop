import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { PageProps } from "@/types";
import ContactForm from "@/Components/app/contact-form";
import Offer from "@/Components/app/offer";
import OrderProduct from "@/Components/app/order-item";
import {
    DnaIcon,
    HandCoins,
    HeartIcon,
    LeafIcon,
    LucideIcon,
} from "lucide-react";
import Container from "@/Components/app/container";
import { content } from "@/data/content";
import { formatPrice } from "@/lib/utils";
import Testimonial from "@/Components/app/testimonial";

interface Props {
    icon: LucideIcon;
    label: string;
    text: string;
}
const quicks: Props[] = [
    {
        icon: HeartIcon,
        label: "Healthy and Affordable",
        text: "Find healthy animals at affordable prices, ensuring you get the best value for your investment. Our animals are raised with care and attention to their well-being.",
    },
    {
        icon: DnaIcon,
        label: "Exceptional Genetics",
        text: "Discover animals bred with exceptional genetics, ensuring strong and resilient offspring. Our carefully selected breeding stock guarantees superior quality and performance.",
    },
    {
        icon: HandCoins,
        label: "Ethically Raised",
        text: "Support ethical farming practices by choosing animals raised with compassion and respect. Our ranch prioritizes animal welfare and provides them with a natural and nurturing environment.",
    },
    {
        icon: LeafIcon,
        label: "Environmentally Sustainable",
        text: "Contribute to environmental sustainability by selecting animals raised on a ranch committed to eco-friendly practices. Our operations prioritize land conservation and responsible resource management.",
    },
];
export default function Dashboard({ auth }: PageProps) {
    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const shuffledContent = shuffleArray(content);

    const randomTestimonials = shuffledContent.slice(0, 3);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose TFarm Shopping section */}
            <div className="bg-gray-300 w-full h-auto py-10">
                <Container className="flex flex-col space-y-3 items-center justify-center">
                    <h1 className="text-3xl font-bold tracking-wide mb-4">
                        Why Choose TFarm Shopping?
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {quicks.map((item, index) => (
                            <Offer
                                key={index}
                                icon={item.icon}
                                label={item.label}
                                text={item.text}
                            />
                        ))}
                    </div>
                </Container>
            </div>

            <div className="w-full bg-white py-10">
                <Container className="flex flex-col space-y-3 items-center justify-center">
                    <h1 className="text-3xl font-bold tracking-wide mb-4">
                        Featured Products
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {content.map((item) => (
                            <div
                                className="relative group overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-transform duration-300 ease-in-out hover:scale-105"
                                key={item.id}
                            >
                                <Link
                                    className="absolute inset-0 z-10"
                                    href={`/product/${item.id}`}
                                >
                                    <span className="sr-only">View</span>
                                </Link>
                                <div className="h-[250px] max-h-[300px]">
                                    <img
                                        alt={item.name}
                                        className="aspect-3/2 object-cover w-full h-full"
                                        height={400}
                                        src={item.image}
                                        width={600}
                                    />
                                </div>
                                <div className="grid gap-1.5 p-4 dark:bg-gray-950">
                                    <h3 className="font-semibold line-clamp-2">
                                        {item.name}
                                    </h3>
                                    <h4 className="font-bold">
                                        {formatPrice(item.price)}
                                    </h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>

            {/* Testimonials section */}
            <div className="bg-gray-300 w-full h-auto py-10">
                <Container className="flex flex-col space-y-3 items-center justify-center">
                    <h1 className="text-3xl font-bold tracking-wide mb-4">
                        Customer Testimonials
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {/* Testimonial components can go here */}
                        {randomTestimonials.map((item) => (
                            <Testimonial
                                key={item.id}
                                name={item.name}
                                image={item.image}
                                text={item.review}
                            />
                        ))}
                    </div>
                </Container>
            </div>

            {/* Contact Us section */}
            <div className="w-full bg-white py-10">
                <Container className="flex flex-col space-y-3 items-center justify-center">
                    <h1 className="text-3xl font-bold tracking-wide mb-4">
                        Contact Us
                    </h1>
                    <ContactForm />
                </Container>
            </div>
        </AuthenticatedLayout>
    );
}
