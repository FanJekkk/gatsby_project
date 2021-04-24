import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import emailjs, { init }from 'emailjs-com';
init(process.env.REACT_USERID);


  

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm(process.env.REACT_SERVICE_ID, process.env.REACT_TEMPLATE_ID, e.target, process.env.REACT_USERID )
    .then((result) => {
        console.log(result);
        if (result.status === 200) {
          alert(
            "Email send successfully!"
          );
        return 
        }
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();
}


const Contact= () => {

  return(
  <Layout>
    <div className = "ContactPage container-lg">
      <div className="row">
    <SEO title="Контакты" />
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    <div className="col-lg-4 col-md-4 col-sm-4">
    <h1>Добро пожаловать на страницу для контакта со мной!</h1>
    <p>Welcome to Contact page</p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <form method="post" action="/success" onSubmit={sendEmail}  data-netlify-recaptcha="true" netlify-honeypot="number" data-netlify="true" name="contact" className="grid grid-cols-1 gap-8 lg:col-start-8 lg:col-span-8">
          <input type="hidden" name="number" />
          <input type="hidden" name="form-name" value="contact" placeholder= "Name"/>
          
            <label className="block p-4 text-f4" htmlFor="name">Имя</label>
            <input type="text" name="name" id="name" className="form-control"  placeholder= "Имя" required />
            <label className="block p-4  text-f4" htmlFor="email">Почта</label>
            <input type="email" name="email" id="email" className="form-control" placeholder= "Почта" required />
           <label className=" block p-4 text-f4" htmlFor="message">Письмо</label>
            <textarea name="message" id="message" rows="5" className="form-control"  placeholder= "Текст"  required></textarea>
          
          <button type="submit" className="btn btn-success bg-tumbleweed hover:bg-sidecar text-prussian font-bold font-title lowercase px-4 py-4 rounded-md transition">Send</button>
          <div className='form-message-container'>
              <p>
                Thank you for the message!
              </p>


            
            </div>     
        </form>

    </div>
    </div>

    </div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    

  </Layout>)};


export default Contact