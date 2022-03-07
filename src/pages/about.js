import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PyCharm from "../images/pycharm.png"
import WebStorm from "../images/webstorm.png"
import VSCode from "../images/vscode.png"
import IntIDEA from "../images/intidea.png"
import Git from "../images/Git-logo.svg"
import MSProject from "../images/msproject.png"
import PlSqlDev from "../images/plsqldev.png"
import SAP from "../images/sap.png"
import Python from "../images/python.png"
import JS from "../images/js.png"
import PHP from "../images/php.png"
import PLSQL from "../images/plsql.png"
import ScrollAnimation from "react-animate-on-scroll";

const About = () => (
    <Layout>
        <div className="AboutPage container-lg">
            <div className="row">
                <SEO title="Обо мне"/>
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <h3>Инструменты</h3>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">

                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="intidea" width="150" height="150" src={IntIDEA} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="pycharm" width="150" height="150" src={PyCharm} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="webstorm" width="150" height="150" src={WebStorm} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="vscode" width="150" height="150" src={VSCode} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="msproject" width="150" height="150" src={MSProject} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="git" width="250" height="150" src={Git} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="plsqldev" width="150" height="150" src={PlSqlDev} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="sap" width="350" height="100" src={SAP} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4"></div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                    <ScrollAnimation animateIn='fadeIn'>
                        <h3>Языки программирования</h3>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4">
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2">
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="python" width="150" height="150" src={Python} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="js" width="150" height="150" src={JS} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="php" width="200" height="140" src={PHP} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-2 p-4 box-shadow-hover">
                    <ScrollAnimation animateIn='fadeIn'>
                        <img className="plsql" width="150" height="150" src={PLSQL} alt="logo"/>
                    </ScrollAnimation>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-5"></div>
    <div className="col-lg-2 col-md-2 col-sm-2 align-items-center text-center mb-5"> 
      <AniLink paintDrip to="/projects" hex="#33FF9C" className = "NavItem"><button class="btn btn-success">Далее</button></AniLink></div>

    <div className="col-lg-5 col-md-5 col-sm-5 mb-4"></div>
            </div>
        </div>
    </Layout>
)

export default About