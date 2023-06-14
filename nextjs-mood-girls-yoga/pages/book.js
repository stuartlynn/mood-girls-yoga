import Layout from "../components/layout";
import { OneUp } from "../components/oneup";
import { TwoUp } from "../components/twoup";
import SectionHeader from "../components/section-header";
import Link from "next/link";

export const BookingOption = ({ children, name, cost }) => {
    return (
        <Link className="w-56 cursor-pointer" href="https://www.aileenyoga.uk/book">
            <div class="relative w-56 h-56 bg-tertiary rounded-full mx-auto flex justify-center items-center text-center p-5 shadow-xl">
                <div>
                    <p className="text-3xl">{name} </p>{" "}
                    <p className="text-bold text-2xl">£{cost}</p>
                </div>
            </div>{" "}
            <p className="text-center py-3 text-xl">{children}</p>
        </Link>
    );
};

export default function Index({ allTestimonials, allTeenagers }) {
    return (
        <Layout>
            <OneUp color={"tertiary"}>
                <SectionHeader>
                    We created MOOD GIRLS Sponsorships because we want all girls to benefit from this powerful ancient practice. If you or your family have the means to pay for classes please do. If you’re not currently in a position to pay, please email moodteenyoga@gmail.com to apply for a fully funded place. If you’d like to donate a place, please see below!
                </SectionHeader>
            </OneUp>
            <section className=" bg-secondary w-full py-10 px-20">
                <SectionHeader>Tickets</SectionHeader>
                <div className="md:flex pt-10 md:flex-row md:justify-around justify-center md:items-start md:py-10">
                    <BookingOption name={"SUMMER 2023 PROGRAMME "} cost={80}>
                        Six weeks exploring yoga at the beautiful RESET studio in Kinning Park, Glasgow
                    </BookingOption>

                    <BookingOption name={"Empower Her"} cost={80}>
                        Pay it Forward. This generous gift will cover the cost of one girl to attend
                        the full summer 2023 programme free of charge. Thank you so very much for
                        your kindness.
                    </BookingOption>
                </div>
            </section>
        </Layout>
    );
}
