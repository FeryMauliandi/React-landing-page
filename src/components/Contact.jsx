import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section id="contact" className="pt-24 pb-32 bg-slate-300">
            <div className="container mx-auto">
                <div className="flex flex-col items-center text-center">
                    <h1 data-aos="zoom-in" data-aos-delay="50" className="font-bold text-[32px] text-dark mb-2">Contact Us</h1>
                    <p className="lg:max-w-[60%] font-medium text-[16px] mb-4 lg:text-[20px]" data-aos="flip-down">Apakah Anda memiliki pertanyaan, saran, atau ingin berkolaborasi dengan kami? Jangan ragu untuk menghubungi tim kami melalui formulir kontak di bawah ini. Kami siap untuk merespons setiap pertanyaan dan masukan yang Anda miliki. Terima kasih atas kunjungan Anda!</p>
                </div>
                <form action="">
                    <div data-aos="flip-left" data-aos-delay="50" className="w-full pt-4 lg:w-[40%] lg:mx-auto">
                        <ContactForm type={"text"}>Name</ContactForm>
                        <ContactForm type={"email"}>Email</ContactForm>
                        <ContactForm type={"text"}>Subject</ContactForm>
                        <ContactForm.Message></ContactForm.Message>
                        <ContactForm.Send></ContactForm.Send>
                    </div>
                </form>
            </div>
        </section>
    )
};

export default Contact;