import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact= () => (
  <Layout>
    <div className = "ContactPage container-lg">
      <div className="row">
    <SEO title="Контакты" />
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    <div className="col-lg-4 col-md-4 col-sm-4">
    <h1>Добро пожаловать на страницу для контакта со мной!</h1>
    <p>Welcome to Contact page</p>
    </div>
    <div
      className="contactBody"
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
     

      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        className="formContainer"
      >
        <input type="hidden" name="form-name" value="contact"></input>
        <h2 style={{ fontSize: "4rem", marginBottom: "2rem" }}>
          <div className="sub_line_wrap">
            <div
              className="sub_line1"
            >
              Send me a
            </div>
          </div>
          <div className="sub_line_wrap">
            <div
              className="sub_line2"
            >
              message{" "}
              <a
                href="mailto:makintomo04@hotmail.co.uk"
                target="_blank"
                rel="noreferrer"
              >
                <i style={{ color: "red" }} class="fab fa-telegram-plane"></i>
              </a>
            </div>
          </div>
        </h2>
        <div className="formWrapper">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="name">Name</label>
            <input
              className="inputs"
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              required
            ></input>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email">Email</label>
            <input
              className="inputs"
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              required
            ></input>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            cols="50"
            placeholder="Enter your message"
            style={{ height: "150px" }}
            required
          ></textarea>
        </div>
        <input
          className="button"
          type="submit"
        ></input>
      </form>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-4">
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    <h1>Hi from the Projects page</h1>
    <p>Welcome to page 2</p>
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    </div>
    </div>
  </Layout>
)

export default Contact