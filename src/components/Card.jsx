import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const Card = (props) => {
    const { children } = props;
    return (
        <div className="flex w-[300px] h-[430px] bg-slate-300 flex-col items-center border-2 border-primary shadow-2xl rounded-2xl" data-aos="zoom-in-down" data-aos-delay="10">
            {children}
        </div>
    )
};

const Header = ({ image }) => {
    return (
        <img src={image} alt="div" className="w-[100px] h-[100px] mt-8" />
    )
};

const Body = (props) => {
    const { title, desc, to } = props;
    return (
        <div className="px-4">
            <h1 className="text-[20px] py-4 font-semibold text-primary text-center">{title}</h1>
            <p className="text-medium text-[18px] mb-8">{desc}</p>
            <Link to="/detail" className="flex items-center justify-center w-[100%] text-dark font-semibold">Selengkapnya{""}<IoIosArrowDroprightCircle className="mt-1 text-lg" /></Link>
        </div>
    )
};

Card.Header = Header;
Card.Body = Body;

export default Card;