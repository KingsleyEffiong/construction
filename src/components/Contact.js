import React, {
    useState
} from 'react';
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import './Contact.css'

function Contact() {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: 'Your Full Name',
        email: 'Your Mail',
        message: 'Drop a Message',
    });

    const {
        name,
        email,
        message
    } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Add your Email.js configuration and service ID here
        const serviceID = 'service_awt7r8k';
        const templateID = 'template_edgwn8j';
        const userID = 'Q3OXXvdezOwWs9jPT';

        emailjs
            .sendForm(serviceID, templateID, e.target, userID)
            .then(() => {
                console.log('Email sent successfully!');
                setModalIsOpen(true);
                setFormData({
                    name: 'Your Full Name',
                    email: 'Your Mail',
                    message: 'Drop a Message'
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });
    };
    return ( 
        <>
       
       <div className = 'container-contact'>
       
       <h1 id = 'font' > Contact Us Now </h1>

       
       <div className = 'container-width'>
       
       <form onSubmit = { handleSubmit} >
       
       <p id = 'paragraph' > Fill out the form below to get in touch with < br / > our construction experts.We are here to help < br / > you with all your civil 20E ngineering needs. </p> 
       <label
        for = "user_name"
        name = ""
        id = "user_name" > Name </label> 
        <input type = "text"
        name = "name"
        value = {
            name
        }
        onChange = {
            handleChange
        }
        placeholder = "Your Full Name"
        required/>

       
         <label
        for = "user_email"
        name = "user_email"
        id = "user_email" > Email </label> 
        <input type = "email"
        name = "email"
        value = {
            email
        }
        onChange = {
            handleChange
        }
        placeholder = "Your Mail"
        required/>


       
         <label
        for = "user_message"
        name = "user_messagel"
        id = "user_message" > Message Us </label> <
        textarea name = "message"
        value = {
            message
        }
        onChange = {
            handleChange
        }
        placeholder = "Drop a Message"
        required/>

        
        <button id = 'btn'
        type = "submit" > Submit </button> 
        </form>

       
        <Modal isOpen = {
            modalIsOpen
        }
        className = 'pop-up'
        onRequestClose = {
            () => setModalIsOpen(true)
        }
        contentLabel = "Email Sent Modal">
       
       <h2> Email Sent </h2>
        Your message has been sent successfully! < br/>
        
        <button id = 'btn-2'
        onClick = {
            () => setModalIsOpen(false)
        } > Close </button> 
        </Modal> 
        </div> 
        </div> 
        </>
    );
};


export default Contact;