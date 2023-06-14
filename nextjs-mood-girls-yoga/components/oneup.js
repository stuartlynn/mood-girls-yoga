export const OneUp = ({ children, color = "primary" }) => {
    return <section className={`px-4 md:px-10 py-10 items-center bg-${color}`}>{children}</section>;
};
