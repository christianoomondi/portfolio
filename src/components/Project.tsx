import React from "react";

import '../assets/styles/Project.scss';
import blogImg from '../assets/images/blog.png';
import hospImg from '../assets/images/hospitalscreenshot.png'
import farmImg from '../assets/images/farmers.jpg'
import ecommImg from '../assets/images/ecommercewebdesign.png' 
import animImg from '../assets/images/Animated form.png'



function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/christianoomondi/blogapp" target="_blank" rel="noreferrer"><img src={blogImg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/christianoomondi/blogapp" target="_blank" rel="noreferrer"><h2>Blog App</h2></a>
                <p>A dynamic blog application with an admin dashboard for creating, editing, and managing posts. The content is updated in real-time, ensuring that any changes made on the admin side are instantly reflected on the frontend for users</p>
            </div>
            <div className="project">
                <a href="https://hospital-tiano.netlify.app/" target="_blank" rel="noreferrer"><img src={hospImg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hospital-tiano.netlify.app/" target="_blank" rel="noreferrer"><h2>Hospital Management System</h2></a>
                <p>A Hospital Management System designed to streamline patient registration, doctor scheduling, and medical record management. It provides an efficient interface for administrators, doctors, and patients to manage hospital operations digitally.</p>
            </div>
            <div className="project">
                <a href="https://github.com/christianoomondi/farmers-dashboard" target="_blank" rel="noreferrer"><img src={farmImg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/christianoomondi/farmers-dashboard" target="_blank" rel="noreferrer"><h2>Farmers Dashboard</h2></a>
                <p>A Farmers’ Dashboard designed to help farmers easily access raw materials and essential resources. The platform provides a centralized hub where farmers can view available supplies, compare options, and make informed decisions, enhancing efficiency and productivity in the agricultural process.</p>
            </div>
            <div className="project">
                <a href="https://github.com/christianoomondi/figma-ecommerce-design" target="_blank" rel="noreferrer"><img src={ecommImg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/christianoomondi/figma-ecommerce-design" target="_blank" rel="noreferrer"><h2>Ecommerce Figma Design</h2></a>
                <p>An eCommerce UI/UX design created in Figma, showcasing a modern and user-friendly shopping experience. The design includes product listings, detailed product pages, a shopping cart, and a checkout flow, with a focus on clean layouts, intuitive navigation, and responsive design principles.</p>
            </div>
            <div className="project">
                <a href="https://github.com/christianoomondi/login-form-animated" target="_blank" rel="noreferrer"><img src={animImg} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/christianoomondi/login-form-animated/" target="_blank" rel="noreferrer"><h2>Login Animated Form</h2></a>
                <p>An interactive animated form built with HTML and CSS, featuring smooth transitions, hover effects, and input focus animations to enhance user experience and make form filling more engaging.</p>
            </div>
            
        </div>
    </div>
    );
}

export default Project;