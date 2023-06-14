import Link from "next/link";
import Image from "next/image";
import moodIcon from "./icons/Mood_Logo_SVG-20.svg";

const links = [
    {
        link: "/about",
        text: "About",
        main: false
    },
    {
        link: "/",
        text: "Mood Girl Yoga",
        main: true
    },
    {
        link: "/book",
        text: "Book",
        main: false
    }
];

const generateLink = link => {
    let aTag = (
        <Link href={link.link} className={` hover:underline text-bold font-thin`}>
            {link.text}
        </Link>
    );
    if (link.main) {
        return (
            <h1>
                <Link href={link.link} className="md:block hidden">
                    <Image
                        className="max-w-xl"
                        width={451}
                        height={227}
                        priority
                        src="/Mood_Logo-18.png"
                        alt="Mood Girls"
                    />
                </Link>
            </h1>
        );
    }
    return aTag;
};

export const Header = () => {
    return (
        <header className="bg-primary text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight py-4 md:py-10 border-solid border-b-2 border-accent-1 text-accent-1">
            <nav className="flex md:justify-center justify-start md:gap-10 gap-2 items-center pr-10 md:pr-0">
                <h1 className="block md:hidden justify-self-start mr-auto">
                    <Link href={"/"}>
                        <Image
                            priority
                            width={150}
                            height={150}
                            src="/Mood_Logo-22.png"
                            alt="Mood Girls"
                        />
                    </Link>
                </h1>
                {links.map(generateLink)}
                <Link href="https://www.instagram.com/moodteenyoga/" className="block md:hidden">
                    <Image src="/instagram.png" width={25} height={25} alt="Instagram link" />
                </Link>
            </nav>
            <div className="hidden md:flex text-center flex-row justify-center">
                <Link href="https://www.instagram.com/moodteenyoga/" className="inline font-thin">
                    <Image
                        src="/instagram.png"
                        width={30}
                        height={30}
                        className="inline mr-3"
                        alt="flex-1 Instagram link"
                    />
                    @moodteenyoga
                </Link>
            </div>
        </header>
    );
};
