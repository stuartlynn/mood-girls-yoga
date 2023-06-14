import Link from "next/link";
import Image from "next/image";
import moodIcon from "./icons/Mood_Logo_SVG-20.svg";

const links = [
    {
        link: "#about",
        text: "About",
        main: false
    },
    {
        link: "/",
        text: "Mood Girl Yoga",
        main: true
    },
    {
        link: "/classes",
        text: "Book",
        main: false
    }
];

const generateLink = link => {
    let aTag = (
        <Link
            href={link.link}
            className={` hover:underline text-highlight ${
                link.main ? "font-bold" : "font-light text-2xl"
            }`}
        >
            {link.text}
        </Link>
    );
    if (link.main) {
        return (
            <h1>
                <Link href={link.link}>
                    <Image className="max-w-xl" priority src={moodIcon} alt="Mood Girls" />
                </Link>
            </h1>
        );
    }
    return aTag;
};

export const Header = () => {
    return (
        <header className="bg-primary text-2xl md:text-4xl  font-bold tracking-tight md:tracking-tighter leading-tight py-10 border-solid border-b-2 border-accent-1 ">
            <nav className="flex  justify-center gap-10 items-center">
                {links.map(generateLink)}
            </nav>
        </header>
    );
};
