import { IoIosCall } from "react-icons/io"
import { BsInstagram } from "react-icons/bs"
import { SiPointy } from "react-icons/si"
import { FaTelegramPlane } from "react-icons/fa"
import { AiOutlineMail, AiFillYoutube } from "react-icons/ai"

export default function ContactsInfo() {
    return (
        <div className="contacts-info-cont">
            <div className="contact-cont">
                <h3><IoIosCall />Calls</h3>
                <p>8 (800) 555 35 35</p>
            </div>

            <div className="contact-cont">
                <h3><BsInstagram />Instagram</h3>
                <a href="https://www.instagram.com/guitar_lavka">https://www.instagram.com/guitar_lavka</a>
            </div>

            <div className="contact-cont">
                <h3><SiPointy />Adress</h3>
                <p>Minsk, Temeryazieva 67</p>
            </div>

            <div className="contact-cont">
                <h3><FaTelegramPlane />Telegram</h3>
                <a href="https://t.me/guitar_lavka">https://t.me/guitar_lavka</a>
            </div>
            
            <div className="contact-cont">
                <h3><AiOutlineMail />Gmail</h3>
                <p>guitarlavka@lavka.com</p>
            </div>

            <div className="contact-cont">
                <h3><AiFillYoutube />YouTube</h3>
                <a href="www.youtube.com/channel">www.youtube.com/channel</a>
            </div>
        </div>
    )
}