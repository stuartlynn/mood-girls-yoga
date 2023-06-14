import { getTestimonials } from "../lib/api";
import { TwoUp } from "../components/twoup";
import Image from "next/image";
import { Testemonials } from "../components/testimonials";
import Layout from "../components/layout";
import Link from "next/link";

export default function Index({ allTestimonials, allTeenagers }) {
    console.log("teens ", allTeenagers);
    return (
        <Layout>
            <TwoUp>
                <Image src="/Mood_Logo-29.png" alt="Yoga Center" width={2053} height={2035} />
                <p className={"text-5xl italic text-accent-1"}>
                    'It was the first time I had stood still and let myself feel amazing’
                </p>
            </TwoUp>
            <section className="bg-tertiary py-10 px-32">
                <h2 className="text-4xl">Testimonials:</h2>
                <Testemonials testemonials={allTestimonials} />
            </section>
            <section className="bg-secondary py-10 px-32 items-center text-accent-3">
                <Link href="/classes">
                    <h1 className="text-6xl text-center">Summer Course 2023 , booking now open</h1>
                </Link>
            </section>

            <section className="bg-tertiary py-10 px-32">
                <h2 className="text-4xl">Things I Wish I Knew as Teenager:</h2>
                <Testemonials testemonials={allTeenagers} />
            </section>
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
