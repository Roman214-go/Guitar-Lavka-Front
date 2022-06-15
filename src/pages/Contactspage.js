import ContactsInfo from "../components/Contacts/ContactsInfo";
import ContactsMap from "../components/Contacts/ContactsMap";

export default function Contactspage() {
    return (
        <>
            <div className="contacts-header">
                <h2>How to contact us?</h2>
                <p>Our masters are very eager to help you and answer all your questions. If you don't want to wait, try searching the list below for the answer to your question. Thanks for understanding!</p>
            </div>
            <div className="contacts-main-info-cont">
                <ContactsMap />
                <ContactsInfo />
            </div>
        </>
    )
}