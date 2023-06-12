export const TwoUp = ({ children, color = "primary" }) => {
    return (
        <section className={`flex gap-20 px-10 items-center bg-${color}`}>
            <div className="flex-1">{children[0]}</div>
            <div className="flex-1">{children[1]}</div>
        </section>
    );
};
