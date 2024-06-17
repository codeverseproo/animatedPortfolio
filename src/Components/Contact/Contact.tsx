import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useThemeContext } from '../../context/ThemeCintextProvider';


const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templete_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const public_key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function Contact() {

    const [sending, setSending] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [messageSucessStatus, setMessageSuccessStatus] = useState(false)
    const [messageFailStatus, setMessageFailStatus] = useState(false)
    const theme = useThemeContext()?.theme


    const form = useRef<null | HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSending(true)
        emailjs
            .sendForm(service_id!, templete_id!, form.current!, {
                publicKey: public_key!
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setMessageSuccessStatus(true)
                    setTimeout(() => {
                        setMessageSuccessStatus(false)
                    }, 5000);
                    setSending(false)
                    setName("")
                    setEmail("")
                    setMessage("")
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setMessageFailStatus(true)
                    setTimeout(() => {
                        setMessageFailStatus(false)
                    }, 5000);
                    setSending(false)
                    setName("")
                    setEmail("")
                    setMessage("")
                },
            );
    };



    return (
        <section className={`${theme == 'dark' && "text-codGray-500"} py-[5rem] max-lg:py-[3rem] flex flex-col items-center gap-[3rem] lg:min-h-screen`} id="contact">
            <div className="flex-1 flex flex-col items-center">
                <h3 className="font-ubuntu font-bold max-md:text-[2rem] max-md:leading-[3rem] text-[40px] capitalize tracking-tight leading-[3rem]">Get in touch</h3>
                <h3 className="font-ubuntu font-bold max-md:text-[2rem] max-md:leading-[3rem] text-[40px] capitalize text-pictonBlue-500 tracking-tight leading-[3rem]">Contact me</h3>
            </div>
            <div className="flex-1 flex justify-center items-center w-full">
                <form ref={form} className="flex flex-col gap-[2rem] w-2/5 max-md:w-4/5" onSubmit={sendEmail}>
                    <input type="text" name='user_name' placeholder="Name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="px-[1rem] py-[0.5rem] ring-2 rounded-lg ring-pictonBlue-500 focus:outline-1 focus:outline-bitterSweet-500 transition-all duration-100" />
                    <input type="email" name='user_email' placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="px-[1rem] py-[0.5rem] ring-2 rounded-lg ring-pictonBlue-500 focus:outline-1 focus:outline-bitterSweet-500 transition-all duration-100" />
                    <textarea name="user_message" placeholder="Message" id="message" cols={10} rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="resize-none px-[1rem] py-[0.5rem] ring-2 rounded-lg ring-pictonBlue-500 focus:outline-1 focus:outline-bitterSweet-500 transition-all duration-100"></textarea>
                    {
                        messageSucessStatus && <p className='self-center  font-ubuntu text-bitterSweet-500'>Success Fully Sent The Message</p>
                    }

                    {
                        messageFailStatus && <p>Message sending failed</p>
                    }
                    <button disabled={sending ? true : false} type="submit" className={`w-[10rem] self-center btn-primary hover:btn-primary-hover disabled:bg-gray-500 disabled:cursor-not-allowed`}>Send</button>
                </form>
            </div>
        </section>
    )
}
