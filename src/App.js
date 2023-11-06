import React from 'react';
import './App.css';
import imageUrl from './myimage.png';
import Laravel_logo from './Laragigs.png';
import bizbox_logo from './Bizbox-ss.png';
import Magento_Logo from './magento-logo.png';
import laravel_Logo from './Laravel-logo.jpeg';
import Net_Core from './net_core_logo.png';
import Linkedin_gif from './Linkedin_gif.gif';
import Github_gif from './github.gif';

const scrollUp = document.querySelector("#scroll-up");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const burger = document.querySelector("#burger-menu");




const Portfolio = () => {
  return (
    <><>
    <title>
      Ali Sajjad Profile
    </title>
    <nav>
      <h1>ALi Sajjad</h1>
      <ul class="navigation">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#skills" class="nav-link">Skills</a></li>
        <li><a href="#projects" class="nav-link">Projects</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
      <button class="burger-menu" id="burger-menu">
        <ion-icon class="bars" name="menu-outline"></ion-icon>
      </button>
    </nav>

      <section class="hero" id="about">
        <img
          src={imageUrl}
          alt="Ali-Sajjad"
          loading="lazy"
          class="hero-img" />
        <div class="bio animate__animated animate__shakeX">
          <h2 class="bio-title">About Me</h2>
          <p class="bio-text">
          I am a highly motivated and versatile software engineer with a passion for building innovative and impactful solutions. Graduated from Punjab University College of Information Technology (PUCIT), I have honed my skills and expertise in various technology stacks and programming languages, allowing me to tackle diverse challenges and deliver high-quality software solutions.
          </p>
        </div>
      </section></><section class="more-about">
        <h2>More About Me</h2>
        <p>
        My problem-solving skills and ability to think critically have allowed me to tackle complex challenges with innovative solutions. Throughout my career, I have demonstrated strong analytical capabilities, working collaboratively with cross-functional teams to deliver projects on time and within scope.
        </p>
        <p>
        I have 1-year of practical experience in web development, specializing in Magento, Laravel, .NET Core, HTML, and CSS. Working with these technologies, I have successfully delivered robust and user-friendly web applications, meeting the specific needs of clients and businesses.
        </p>
        <p>
        As technology is constantly evolving, I am dedicated to continuous learning and staying up-to-date with the latest advancements in the software industry. This passion for learning enables me to adopt new technologies rapidly and ensures I am always well-equipped to meet the demands of modern software development.
        </p>
      </section>
      <section class="skills" id="skills">
      <h2 class="skill-header">My Top Skills</h2>

      <div class="skills-wrapper">
        <div class="first-set animate__animated animate__pulse">
          <img
            src={Magento_Logo}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={laravel_Logo}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
          <img
            src={Net_Core}
            alt=""
            loading="lazy"
            class="icon icon-card"
          />
        </div>

        
      </div>
    </section>
    <section class="projects" id="projects">
      <h2 class="projects-title">Some of my Recent Projects</h2>
      <div class="projects-container">
        <div class="project-container project-card">
          <img
            src={bizbox_logo}
            alt="expense-tracker"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="project-title">BIZBOX</h3>
          <p class="project-details">
          During my tenure at Bizbox.com, I played a vital role in updating the platform to the latest version of Magento, ensuring improved performance, enhanced security, and a seamless user experience. Additionally, I took sole responsibility for crafting and developing the website's landing page, showcasing my proficiency in front-end technologies like HTML, CSS, and JavaScript. Through meticulous problem-solving, I addressed various challenges and successfully resolved critical issues, contributing significantly to the overall success of the project. My dedication to delivering high-quality results and my ability to work independently have been instrumental in driving positive outcomes for the Bizbox.com team.
          </p>
          <a href="https://www.bizboxinc.com/" target="_blank" class="project-link">Check it Out</a>
        </div>
        <div class="project-container project-card">
          <img
            src={Laravel_logo}
            alt="netflic-clone"
            loading="lazy"
            class="project-pic"
          />
          <h3 class="project-title">LARAGIGS</h3>
          <p class="project-details">
          As part of my journey to master the Laravel framework, I undertook an ambitious project to develop the Laragigs app. Leveraging a combination of self-learning and guidance from a comprehensive YouTube tutorial, I single-handedly designed and created the application from the ground up. Through this hands-on experience, I deepened my understanding of Laravel's intricacies, including its powerful features for building robust web applications. Building the Laragigs app not only solidified my proficiency in PHP and Laravel but also honed my skills in database management, API integration, and front-end development. This project not only served as an exceptional learning opportunity but also instilled in me the confidence to take on complex development challenges.
          </p>
          <a href="#" target="_blank" class="project-link">Check it Out</a>
        </div>
      </div>
    </section>
    <section class="contact" id="contact">
      <h2>Get In Touch With Me</h2>
      <div class="contact-form-container">
        <div class="contact-form">
          <form action="https://formspree.io/f/xvojzpbk" method="POST">
            <div class="form-control">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                name="sender-name"
                placeholder="Enter Your Name"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                name="sender-email"
                placeholder="Enter Your Email"
                class="input-field"
                required
              />
            </div>
            <div class="form-control">
              <label for="message">Message</label>
              <textarea
                id="message"
                cols="60"
                rows="10"
                placeholder="Enter Your Message"
                name="message"
                class="input-field"
                required
              ></textarea>
            </div>
            <input
              type="submit"
              value="Submit"
              id="submit-btn"
              class="submit-btn"
            />
          </form>
        </div>
      </div>
    </section>
    <div class="socials">
      <a href="https://www.instagram.com/iamaligreat/" target="_blank"
        ><img
          src="https://media.giphy.com/media/l41YmiCZ8HXvVl5M4/giphy.gif"
          alt="Instagram"
          loading="lazy"
          class="socicon"
      /></a>
      <a href="https://www.linkedin.com/in/ali-sajjad-095365183" target="_blank"
        ><img
          src={Linkedin_gif}
          alt="Linkedin"
          loading="lazy"
          class="socicon"
      /></a>
      <a href="https://github.com/alisajjad123" target="_blank"
        ><img src={Github_gif} alt="Github" class="socicon"
      /></a></div>
{/* <i class="scroll-up" id="scroll-up"
      ><img
        src="assets/icons/icons8-upward-arrow.gif"
        class="socicon up-arrow"
        alt="scroll-up"
    /></i> */}
    
      </>
      

  );
};

export default Portfolio;
