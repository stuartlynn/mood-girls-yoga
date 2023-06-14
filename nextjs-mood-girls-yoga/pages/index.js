import { getTestimonials } from "../lib/api";
import { TwoUp } from "../components/twoup";
import { OneUp } from "../components/oneup";
import SectionHeader from "../components/section-header";
import Image from "next/image";
import { Testemonials } from "../components/testimonials";
import Layout from "../components/layout";
import Link from "next/link";

export default function Index({ allTestimonials, allTeenagers }) {
    return (
        <Layout>
            <TwoUp>
                <Image src="/Mood_Logo-29.png" alt="Yoga Center" width={2053} height={2035} />
                <p className={"text-5xl italic text-accent-1 text-center md:text-left"}>
                    'It was the first time I had stood still and let myself feel amazing’
                </p>
            </TwoUp>
            <OneUp color="tertiary">
                <SectionHeader>Testimonials</SectionHeader>
                <Testemonials testemonials={allTestimonials} />
            </OneUp>
            <section className="bg-secondary py-10 px-10 md:px-32 items-center text-accent-3">
                <Link href="/book">
                    <h1 className="text-6xl text-center">Summer Course 2023 , booking now open</h1>
                </Link>
            </section>

            <OneUp color="tertiary">
                <SectionHeader>Things I Wish I Knew as Teenager</SectionHeader>
                <Testemonials testemonials={allTeenagers} />
                <p className='italic'>'I asked you on Instagram, you answered...'</p>
            </OneUp>
        </Layout>
    );
}

export async function getStaticProps() {
    const allTestimonials = await getTestimonials();
    const allTeenagers = await getTestimonials(true);

    return {
        props: { allTestimonials, allTeenagers }
    };
}
