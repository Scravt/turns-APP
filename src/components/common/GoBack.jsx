import { useNavigate, useLocation } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const GoBack = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoBack = () => {
        // Si hay una ubicación previa dentro del dominio, retrocede; de lo contrario, redirige a "/"
        if (location.state?.from && location.state.from.startsWith("/")) {
            navigate(location.state.from);
        } else {
            navigate("/");
        }
    };

    return (
        <button
            onClick={handleGoBack}
            className="self-end mr-2 mt-2 text-2xl"
        >
            <IoArrowBackCircleOutline />
        </button>
    );
};

export default GoBack;