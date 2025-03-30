const Logo = ({ theme }) => {
    const color = theme === "dark" ? "white" : "black";
    return (
        <div style={{ color }} className="font-alex font-bold">
            Atend<span className="font-black text-primary text-lg">ER</span>
        </div>
    );
};

export default Logo;
