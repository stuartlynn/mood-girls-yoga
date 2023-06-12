import Footer from "../components/footer";
import Meta from "../components/meta";
import { Header } from "../components/header";

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div className="w-screen h-screen">
                <Header />
                <main className="text-accent-1">{children}</main>
                <Footer />
            </div>
        </>
    );
}
