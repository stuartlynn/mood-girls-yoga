export default function SectionHeader({ children, className }) {
    return <h2 className={`${className} text-center md:text-left text-4xl`}>{children}</h2>;
}
