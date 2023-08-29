
const ContactForm = (props) => {
    const { children, type } = props;
    return (
        <div className="w-full px-8 py-0 mb-2">
            <label htmlFor="" className="font-medium text-[18px] text-primary">{children}</label>
            <input type={type} className="w-full bg-white text-dark p-3 rounded-md text-base font-medium" />
        </div>
    )
};

const Message = () => {
    return (
        <div className="w-full px-8 py-2 mb-2">
            <label htmlFor="" className="font-medium text-[18px] text-primary">message</label>
            <textarea name="message" id="message" type="text" class="w-full bg-slate-white text-dark text-base p-3 rounded-md h-28"></textarea>
        </div>
    )
};

const Send = () => {
    return (
        <div className="w-full px-8 py-2 mb-2 text-center">
            <button className="font-medium text-[20px] bg-primary w-full h-10 rounded-xl hover:bg-dark hover:text-primary" type="submit" id="submitButton" >Send</button>
        </div>
    )
};


ContactForm.Send = Send;
ContactForm.Message = Message;



export default ContactForm;