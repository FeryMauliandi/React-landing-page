import { Link } from "react-router-dom";

const Detaildiv = () => {
    return (
        <section className="bg-primary">
            <div className="h-screen flex flex-col gap-y-11 justify-center items-center text-center">
                <h1 className="font-extrabold text-dark text-5xl">Belum ada penambahan</h1>
                <Link to="/" className="font-semibold bg-sky-400 p-2 rounded-lg">kembali</Link>
            </div>
        </section>    
    )
};

export default Detaildiv;