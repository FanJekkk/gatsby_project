import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import emailjs, { init }from 'emailjs-com';
init(process.env.GATSBY_USERID);

console.log(process.env.GATSBY_TEST)
  
 

function sendEmail(e) {
  e.preventDefault();
  emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USERID )
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
    <h1>Есть предложения!?</h1>
    <h1>Пишите Ваши предложения в форму.</h1>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
      <form method="post" action="/success" onSubmit={sendEmail}  data-netlify-recaptcha="true" netlify-honeypot="number" data-netlify="true" name="contact" className="grid grid-cols-1 gap-8 lg:col-start-8 lg:col-span-8">
          <input type="hidden" name="number" />
          <div className="row">
            <div className="col-md-12">
              <div className="group">
            <input type="text" name="name" id="name" className=""  placeholder= "" required />
            <label className="" htmlFor="name">Имя</label>
            </div>
          </div>
            <div className="col-md-12">
              <div className="group">
            <input type="email" name="email" id="email" className="" placeholder= "" required />
           <label className="" htmlFor="email">Почта</label>
           </div> 
           </div>
           <div className="col-md-12">
           <div className="group">
            <textarea name="message" id="message" rows="5" className=""  placeholder= "Текст"  required></textarea>
            <label className="" htmlFor="message">Письмо</label>
            </div>
            </div>
          </div>
          <button type="submit" className="btn mt-2 btn-success bg-tumbleweed hover:bg-sidecar text-prussian font-bold font-title lowercase px-4 py-4 rounded-md transition">Отправить</button>
          <div className='form-message-container'>
              
            
            </div>   
            
        </form>

    </div>
    </div>

    </div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    

  </Layout>)};


export default Contact