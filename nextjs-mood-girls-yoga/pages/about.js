import Layout from "../components/layout";
import { OneUp } from "../components/oneup";
import { TwoUp } from "../components/twoup";
import SectionHeader from "../components/section-header";
import Image from "next/image";

function Para({ children, className }) {
    return <p className={"my-3 " + className}>{children}</p>;
}

export default function Index({ allTestimonials, allTeenagers }) {
    return (
        <Layout>
            <OneUp color={"tertiary"}>
                <SectionHeader>
                    Modern, accessible and inclusive yoga classes for young girls in schools,
                    communities and more.
                </SectionHeader>
            </OneUp>
            <TwoUp color={"primary"}>
                <Image
                    src="/girls_stock_2.jpg"
                    width={2000}
                    height={3000}
                    alt="Image of girls enjoying yoga"
                />
                <div className="py-20">
                    <SectionHeader>WHAT IS IT?</SectionHeader>
                    <Para>
                        Bespoke programmes designed to offer teenage girls a modern and relevant
                        introduction to the practice of yoga, from a mental health and well-being
                        perspective.
                    </Para>
                    <Para>Our aim is to provide young women with:</Para>
                    <ul className="max-w space-y-1 text-gray-500 list-disc dark:text-gray-400 px-10 py-5 ">
                        <li>
                            A basic understanding of what yoga is and how it can be a fantastic tool
                            to help us in times of uncertainty, anxiety, when we need to find focus
                            or even when we just need an injection of energy!
                        </li>
                        <li>
                            A safe space to explore something new – yoga postures, movement,
                            breathing techniques, all within a relaxed, friendly and encouraging
                            environment.
                        </li>
                        <li>
                            A better understanding of the world around you and how you so
                            beautifully fit in. Through exploring the many facets of yoga, we will
                            learn how to take up space in the world; stand on our own two feet;
                            speak up for ourselves and others and return to who we really are at the
                            core. The world needs you to be you. Let’s start on the mat and see what
                            happens.{" "}
                        </li>
                    </ul>
                </div>
            </TwoUp>
            <section className="bg-secondary py-10 px-10 md:px-32 items-center text-accent-3">
                <Para className="text-2xl text-center">
                    To chat more about MOOD GIRLS or to discuss bespoke classes / programmes please
                    get in touch:{" "}
                    <a className="text-accent-1 text-bold" href="mailto:moodteenyoga@gmail.com">
                        moodteenyoga@gmail.com
                    </a>
                </Para>
            </section>

            <TwoUp color={"primary"}>
                <Image src="/AboutPhoto.jpg" width={6144} height={4096} />
                <div className="py-20">
                    <SectionHeader className="text-4xl">Who Runs It?</SectionHeader>
                    <Para>MOOD GIRLS is founded by Aileen Lynn.</Para>
                    <Para>
                        Aileen is a qualified yoga teacher with over 9 years experience working in
                        the community with teenagers in various different settings including;
                        schools, care homes, supported accommodation and prisons. Aileen is
                        passionate about social change and empowering young women to know their
                        worth. Aileen lives in Glasgow with her husband Luke and their dog Molly{" "}
                    </Para>
                    <h3 className="text-bold text-xl">A little more from Aileen</h3>
                    <Para className="italic px-10">
                        "Yoga has brought a lot of joy and calm to my life. Through regular practise
                        I feel much more at ease with myself and better able to show up for others.
                        It took me until the age of 30 to understand confidence and feel comfortable
                        in my own skin. If I can help just one girl get there sooner, this will all
                        be worth it."
                    </Para>
                </div>
            </TwoUp>
        </Layout>
    );
}
