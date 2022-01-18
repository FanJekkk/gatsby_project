import React from "react"
import { Link } from "gatsby"
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Layout from "../components/layout"
import SEO from "../components/seo"



const Projects = () => {
  return (
  <Layout>
    <div className = "ProjectPage container-lg">
      <div className="row">
    <SEO title="Проекты" />
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    <div className="col-lg-8 col-md-8 col-sm-8">
    <h3>Здесь представлены мои основные реализованные проекты.</h3>
    
    </div>
    <div className="col-lg-2 col-md-2 col-sm-2"></div>
    
    <div class="col-md-7">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300" alt=""/> 
          </a>
        
      </div>
      <div class="col-md-5">
        <h4>Дашборд качества агрегатов КХД Мегафона</h4>
        <p>Реализвал проект при помощи следующих технологий: Python + Django, Javascript, Git</p>
        <a class="btn btn-primary" href="#">View Project</a>
      </div>
      <hr></hr>
      <div class="col-md-7 mt-5">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300" alt=""/> 
          </a>
        
      </div>
      <div class="col-md-5 mt-5">
        <h4>Интеллектуальная система для анализа данных об археологических артефактах</h4>
        <p>Разработал систему используя Python библиотки Pandas, Numpy, Scipy, OS, FPDF, Keras</p>
        <a class="btn btn-primary" href="#">View Project</a>
      </div>
      <div class="col-md-7 mt-5">
        <a href="#">
          <img class="img-fluid rounded mb-3 mb-md-0" src="https://via.placeholder.com/700x300" alt=""/> 
          </a>
        
      </div>
      <div class="col-md-5 mt-5">
        <h4>Прототип системы анализа мощности ДГУ тепловоза (Хакатон)</h4>
        <p>Разработали прототип системы, используя Python, Django, Numpy, Matplotlib</p>
    
        <a class="btn btn-primary" href="#">View Project</a>
      </div>

    </div>
    </div>
    
  </Layout>);
}

export default Projects