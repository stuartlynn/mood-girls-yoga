import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
    const date = new Date();

    return (
        <footer className="bg-accent-1 border-t border-accent-2 text-white">
            <Container>
                <div className="py-28 flex flex-col lg:flex-row items-center">
                    <h3 className="text-4xl lg:text-5xl font-bold -center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                        Mood Girls Yoga is a project by Aileen Lynn.
                    </h3>
                    <small>&copy; Copyright {date.getFullYear()}, Mood Girl Yoga</small>
                </div>
            </Container>
        </footer>
    );
}
