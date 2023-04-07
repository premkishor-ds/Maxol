import * as React from "react";
import { useState } from "react";
import newsletterlogo from "../../images/newsletter-logo.png"
import ReCAPTCHA from "react-google-recaptcha";
import Modal from 'react-modal';
import Linking from "../commons/Link";
export default function Newsletter(props:any){
    const [status, setStatus] = React.useState<string | null>(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [newsletter,setNewsletter]=React.useState(false);
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
  
    const FORM_URL = `https://www.maxol.co.uk/newsletter`
    const recaptchaRef = React.createRef();
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      // recaptchaRef.current.execute(); 
      const data = new FormData(event.target as HTMLFormElement)
      try {
        const response = await fetch(FORM_URL, {
          method: "post",
          body: data,
          headers: {
            accept: "application/json",
          },
        });
        const json = await response.json()
        if (json.status === "success") {
          setEmail("")
          setStatus("SUCCESS")
          return
        }
      } catch (err) {
        setStatus("ERROR")
      }
    }
  
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setEmail(value)
    }
  
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target
      setName(value)
    }

    function openModal() {
      document.body.classList.add("overflow-hidden")
      setIsOpen(true);
    }

    let subtitle:any;
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }

    function closeModal() {
      document.body.classList.remove("overflow-hidden")
      setIsOpen(false);
      setNewsletter(true);
    }
    
    return(
      <>
        <div className="newsletter-section">
          <div className="newsletter-inner">
            <div className="newsletter-logo"><img className=" " src={newsletterlogo} width="200" height="83" alt="" /></div>
            <p>Sign up for maxol Me and start receiving exclusive discounts and rewards for shopping.</p>
            <div className="search-field-bx w-1/2 mx-auto"><button><Linking props={props._site}/></button></div>
          </div>
        </div>
      </>
    )
}

