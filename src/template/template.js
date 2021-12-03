import React from "react";
import { FaHtml5, FaCss3, FaPhp, FaReact,
         FaBootstrap, FaAws, FaDatabase, 
         FaWordpress, FaTimes, FaFacebook,
         FaInstagram, FaTwitter, FaGithub, 
         FaLinkedin,FaHackerrank, FaPhoneAlt} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiAdobexd,SiGmail } from "react-icons/si";
import emailjs from "emailjs-com";
import CodersrankSummary from '@codersrank/summary';
import ReactTypingEffect from 'react-typing-effect';

 



class Template extends React.Component {
   
    
    render() {
        function sendEmail(e) {
            e.preventDefault();
        
            emailjs.sendForm('service_9psjpe7', 'template_831e934', e.target, 'user_15sWbpzmcAyp7flaklFkw')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
              e.target.reset();
          }  
        return (
        <div>
            {/*--PAge Loader Start---*/}
            <div class="loading">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            {/*--Page Loader End---*/}
            {/*--Background Circles Start---*/}
            <div className="bg-circles">
                <div className="circle-1"></div>
                <div className="circle-2"></div>
                <div className="circle-3"></div>
                <div className="circle-4"></div>
            </div>
            {/*--Background Circles  End---*/}

            {/*--overlay Start---*/}
            <div className="overlay">
               
            </div>
            {/*--overlay End---*/}


           {/*Main Start */  }
            <div className = "main hidden">

                {/* ---- Header Start ---- */}
                <header className="header">
                    <div className="container">
                        <div className="row flex-end">
                            <button type="button" className="nav-toggler">
                                <span></span>
                            </button>
                            <div className="nav">
                                <div className="nav-inner">
                                    <ul>
                                        <li><a href="#home" className="nav-item link-item">home</a></li>
                                        <li><a href="#about" className="nav-item link-item">about me</a></li>
                                        <li><a href="#portfolio" className="nav-item link-item">portfolio</a></li>
                                        <li><a href="#certificate" className="nav-item link-item">certificates</a></li>
                                        <li><a href="#contact" className="nav-item link-item">contact me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* ---- Header End ---- */}
               

               <img src="../assets/img/sign_1.png" alt="profile-img" />   
                {/* Home Section Start */}
                <section className="home-section align-items-center  " id="home">
                    <div className="container">
                        <div className="row align-items-center">
                        <div className="home-text">
                            <p>Hello 🖐 , I'm</p>
                            <h1>Himanshu</h1>
                            <h2><ReactTypingEffect text=
                            {["Full Stack Developer", "Web Developer", "UI/UX Designer"]} />
                            </h2>
                            <codersrank-summary show-avatar="false" username="himanshu-portfolio"></codersrank-summary>
                            <a href="#about" className="btn link-item">more about me</a>
                            <a href="#portfolio" className="btn link-item">portfolio</a>
                        </div>
                        <div className="home-img">
                            <div className="img-box">
                                <img src="../assets/img/profile-img.jpg" alt="profile-img" />
                            </div>
                        </div>
                        </div>
                    </div>
                </section>
                {/* Home Section End */}

                {/* About Section Start */}
                <section className="about-section sec-padding" id="about">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>about me</h2>
                            </div>
                        </div>
                        <div className="row">
                        <div className="about-img">
                        <div className="img-box">
                            <img src="../../assets/img/about-img.png" alt="about-img" />
                        </div>
                        </div>
                        <div className="about-text">
                            <p>Hey, I am a 22-year-old freelance Full stack developer based in India. I am
                               currently in the final year of BCA. I have experience in frontend and backend
                               development. I have worked in various programming languages like Php,
                               Javascript, React js, etc. I build clean, appealing, and functional interfaces whic h
                               comply with the latest web standards. I work primarily with Web designs, App
                               prototype designs</p>   
                            <h3>Skills</h3>  
                            <div className="skills">
                                <div className="skill-item"><span><FaHtml5 color="#e34c26" /></span>HTML</div>
                                <div className="skill-item"><span><FaCss3 color="#264de4" /></span>CSS</div>
                                <div className="skill-item"><span><DiJavascript1 color="yellow" /></span>JAVASCRIPT</div>
                                <div className="skill-item"><span><FaPhp color="purple" /></span>PHP</div>
                                <div className="skill-item"><span><FaReact color="#61DBFB" /></span>REACT JS</div>
                                <div className="skill-item"><span><FaBootstrap color="purple" /></span>BOOTSTRAP</div>
                                <div className="skill-item"><span><FaAws color="#FF9900" /></span>AWS</div>
                                <div className="skill-item"><span><FaDatabase color="#e34c26" /></span>MY SQL</div>
                                <div className="skill-item"><span><FaWordpress color="blue" /></span>WORDPRESS</div>
                                <div className="skill-item"><span><SiAdobexd  color = "#F75EEE" /></span>ADOBE XD</div>
                            </div>
                            <div className="about-tabs">
                                <button type="button" className="tab-item active" data-target="#education">Education</button>
                                <button type="button" className="tab-item" data-target="#experience">Experience</button>
                            </div>

                            {/* ----Education Start ---- */}
                            <div className="tab-content active" id="education">
                                <div className="timeline">
                                    <div className="timeline-item">
                                        <span className="date">2018 - Present</span>
                                        <h4>Bachelor Of Computer Applications - <span>VIPS (GGSIPU)</span></h4>
                                        <p>I am currently pursuing a Bachelor of Computer Applications (BCA) 
                                        from Vivekananda Institute of Professional Studies, GGSIPU.My aggregate percentage till now is 74.59% </p>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">2017 - 2018</span>
                                        <h4>High School  - <span>Tagore Public School</span></h4>
                                        <p>I have completed my High School with 72 percent from Tagore Public School Panipat, Haryana</p>
                                    </div>
                                    <div className="timeline-item">
                                        <span className="date">2014 - 2015</span>
                                        <h4>Tenth Grade - <span>B.R.S.K. International Public School</span></h4>
                                        <p>I have completed my tenth grade with 77.9 percent from B.R.S.K Intenational Public School</p>
                                    </div>
                                </div>
                            </div>
                            {/* ----Education End ---- */}

                            {/* ----Experience Start ---- */}
                            <div className="tab-content" id="experience">
                                <div className="timeline">
                                <div className="timeline-item">
                                        <span className="date">July2020 - Present</span>
                                        <h4>Scholar Trainee - <span>Wipro Limited </span></h4>
                                        <p>I am currently working as a full time employee here. I am working on Angular, Java, Springboot and Spring mvc here </p>
                                    </div>

                                    <div className="timeline-item">
                                        <span className="date">Jun2020 - Nov2020</span>
                                        <h4>Software Developer Intern - <span>Hackveda </span></h4>
                                        <p>I have worked as a software developer intern here. My work is to design layouts and UI for websites and apps.
                                             I am also give training to new interns and manage the team of the new interns. 
                                            Languages and software I have worked On during my internship are javascript PHP, MySQL, HTML, Adobe XD, AWS, CSS, Bootstrap</p>
                                    </div>
                                </div>
                            </div>
                            {/* ----Experience End ---- */}
                            <a href="../../assets/cv.pdf" target="_blank" className="btn">Download cv</a>
                            <a href="#contact" className="btn link-item">Contact me</a>
                        </div>
                     </div>
                    </div>
                </section>
                {/* About Section Start */}

                {/* Portfolio Section Start */}
                <section className="portfolio-section sec-padding" id="portfolio">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>Recent Works</h2>
                            </div>
                        </div>
                        <div className="row">
                            
 {/* ----Portfolio Item Start 1----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/rsj.jpg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Ridhi Sidhi Jewels (Product  and Company Portfolio)</h3>
                                <button type="button" className="btn view-project-btn">view project</button>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>It is my freelancing project. It’s a website of jewellery store which
                                            is made in wordpress using custom css
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>Technologies used 💻   - <span>wordpress</span></li>
                                            <li>Role - <span>Frontend and Backend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="http://ridhisidhijewels.in/" target="_blank">www.arabyogafoundation.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}



                            {/* ----Portfolio Item Start 1----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/arabyoga.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">arab yoga foundation website (company portfolio)</h3>
                                <button type="button" className="btn view-project-btn">view project</button>
                                <div className="portfolio-item-details">
                                    <div className="description">
                                        <p>It is my freelancing project. It’s a website of Arab foundation which is
                                           located in Saudi Arabia. It’s the first certified yoga foundation whose 
                                           founder is Saudi Yoga Acharya Nouf Marwaai.
                                           This website is based on PHP Yii 2 framework.
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>6 Dec 2020</span></li>
                                            <li>Framework used 🖥 - <span>PHP Yii 2 Framework</span></li>
                                            <li>Technologies used 💻   - <span>PHP, CSS, HTML, BOOTSTRAP, and JAVASCRIPT.</span></li>
                                            <li>Role - <span>Frontend and Backend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="https://arabyogafoundation.com/" target="_blank">www.arabyogafoundation.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 2----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/sbf.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">shree balaji fasteners website(company portfolio)</h3>
                                <button type="button" className="btn view-project-btn">View Project</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is my freelancing project. It’s a website of a small-scale factory that
                                           manufactures industrial products like Nuts, Bolts, and Fasteners.
                                           This website is based on core PHP.
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>5 Nov 2020</span></li>
                                            <li>Technologies used 💻   - <span>PHP, CSS, HTML, BOOTSTRAP, and JAVASCRIPT.</span></li>
                                            <li>Role - <span>Frontend and Backend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="http://shreebalajifasteners.com/" target="_blank">www.shreebalajifasteners.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 3----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/ttt.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">The Travel trends Website(Tours and Travels)</h3>
                                <button type="button" className="btn view-project-btn">View Project</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is my freelancing project. It’s a website of tour and travel company.

                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>1 May 2021</span></li>
                                            <li>Technologies used 💻   - <span>Wordpress, Wordpress admin panel, html and css.</span></li>
                                            <li>Features - <span>1. Featured Tours manageable by admin panel<br />
                                                                 2. Working Booking Form With every Tour<br />
                                                                 3. proper itenerary creation with seo support<br/>
                                                                 4. Tours and destinantion can be created by admin panel<br />
                                                                 5. People can book tours acc to their mood and destinantion</span></li>
                                            <li>View Live - <span><a href="https://www.thetraveltrends.com/" rel="noopener noreferrer" target="_blank">www.thetraveltrends.com</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 4----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/rm.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Simple messenger webApp in react js and Firebase</h3>
                                <button type="button" className="btn view-project-btn">view project</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is a simple messaging web app in react Js and firebase. For the database I used firebase.
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>10 oct 2020</span></li>
                                            <li>Technologies used 💻   - <span>Html, CSS, Javascript, Bootstrap, ReactJs and Firebase.</span></li>
                                            <li>Role - <span>Frontend and Backend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="https://messenger-76374.web.app/" target="_blank">www.messenger-76374.web.app</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 5----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/br.png" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Blood Report Internship Project</h3>
                                <button type="button" className="btn view-project-btn">View Project</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is my internship project. I have worked on the frontend part of this
                                           project. Basically, in this project, we automatically analyze reports, compare
                                           them with each other, and show that health is decreased, improved, or normal.
                                           The language used in this UI is CSS, HTML, BOOTSTRAP, and JAVASCRIPT.
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>31 july 2020</span></li>
                                            <li>Technologies used 💻   - <span>CSS, HTML, BOOTSTRAP, and JAVASCRIPT.</span></li>
                                            <li>Role - <span>Frontend</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 6----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/mmui.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Mentor Match App UI In Adobe XD
</h3>
                                <button type="button" className="btn view-project-btn">View Project</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is a prototype and UI of an which helps to connect students and teachers
                                            from anywhere in the world according to their field and time preference. It is
                                            my internship project.
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>15 july 2020</span></li>
                                            <li>Technologies used 💻   - <span>Adobe XD</span></li>
                                            <li>Role - <span>Frontend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="https://xd.adobe.com/view/d7fabc3e-ebf8-4bab-8dac-019d8f517b3f-82a9/grid/" target="_blank">Adobe XD</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 7----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/mui.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Messaging App UI In Adobe XD</h3>
                                <button type="button" className="btn view-project-btn">view more</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is the prototype and UI of a messaging app name converse made in Adobe Xd.It is my internship project.
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                        <li>created 🚀  - <span>3 july 2020</span></li>
                                            <li>Technologies used 💻   - <span>Adobe XD</span></li>
                                            <li>Role - <span>Frontend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="https://xd.adobe.com/view/c192483b-7ee7-4d7e-9dc2-cf4c13f61a0c-94c1/grid/" target="_blank">Adobe XD</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            {/* ----Portfolio Item Start 8----- */}
                            <div className="portfolio-item">
                                <div className="portfolio-item-thumbnail">
                                    <img src="../../assets/img/portfolio/pp.jpeg" alt="portfolio item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Personal portfolio website</h3>
                                <button type="button" className="btn view-project-btn">View Project</button>
                                <div className="portfolio-item-details">
                                <div className="description">
                                        <p>It is my personal portfolio website which developed in react. The Glass UI trend is used for this UI is Glassmorphism
                                        </p>
                                    </div>
                                    <div className="general-info">
                                        <ul>
                                            <li>created 🚀  - <span>4 Jun 2021</span></li>
                                            <li>Technologies used 💻   - <span>Html, CSS, Javascript,ReactJs and EmailJs.</span></li>
                                            <li>Role - <span>Frontend and Backend</span></li>
                                            <li>View Live - <span><a rel="noopener noreferrer" href="#home" target="_blank">Current Website</a></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* ----Portfolio Item End----- */}
                            

                        </div>
                        
                    </div>
                </section>
                {/* Portfolio Section End */}

                {/* Contact Section Start */}
                <section className="contact-section sec-padding" id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>Contact me</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="contact-form">
                                <form onSubmit={sendEmail}>
                                    <div className="row">
                                        <div className="input-group">
                                            <input type="text" placeholder="Name" className="input-control" name="name" required />
                                        </div>
                                        <div className="input-group">
                                            <input type="email" placeholder="Email" className="input-control" name="email" required />
                                        </div>
                                        <div className="input-group">
                                            <input type="text" placeholder="Subject" className="input-control" name="subject" required />
                                        </div>
                                        <div className="input-group">
                                            <textarea placeholder="Message" className="input-control" name="message" required ></textarea>
                                        </div>
                                        <div className="submit-btn">
                                            <button type="submit" value="Send" className="btn">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="contact-info">
                                <div className="contact-info-item">
                                    <h3><span> <a href="mailto:himjain1999@gmail.com"><SiGmail /></a></span>Email</h3>
                                    <p><a href="mailto:himjain1999@gmail.com">Himjain1999@gmail.com</a></p>
                                </div>
                                <div className="contact-info-item">
                                    <h3><span> <a href="tel:7206404472"><FaPhoneAlt /></a></span>Phone</h3>
                                    <p><a href="tel:7206404472">7206404472</a></p>
                                </div>
                                <div className="contact-info-item">
                                    <h3>Follow me</h3>
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/himjain1999/" rel="noopener noreferrer" target="_blank"><FaFacebook /></a>
                                        <a href="https://www.instagram.com/_king_jain_/" rel="noopener noreferrer" target="_blank"><FaInstagram /></a>
                                        <a href="https://twitter.com/himjain1999" rel="noopener noreferrer" target="_blank"><FaTwitter /></a>
                                        <a href="https://www.linkedin.com/in/himanshu-jain-b63a491b0/" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
                                        <a href="https://github.com/Kingwrites" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
                                        <a href="https://www.hackerrank.com/himjain1999" rel="noopener noreferrer" target="_blank"><FaHackerrank/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Contact Section End */}    
                {/* Certificate Section Start */} 
                <section className="portfolio-section sec-padding" id="certificate">
                    <div className="container">
                        <div className="row">
                            <div className="section-title">
                                <h2>Recent Works</h2>
                            </div>
                        </div>
                        <div className="row">
                            
                            {/* ----Certificate Item Start 1----- */}
                            <div className="portfolio-item">
                                <div className="certificate-item-thumbnail">
                                    <img src="../../assets/img/certificates/microsoft.jpeg" alt="certificate item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Microsoft Technical Associate :Introduction to Programming Using
                                HTML and CSS
                                </h3>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.credly.com/badges/a2dd30bd-4b1c-4171-b604-aad11253abb1" className="btn">view Certificate</a>
                            </div>
                            {/* ----Certificate Item End----- */}
                            {/* ----Certificate Item Start 2----- */}
                            <div className="portfolio-item">
                                <div className="certificate-item-thumbnail">
                                    <img src="../../assets/img/certificates/cousera.jpeg" alt="certificate item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Building Web Applications in PHP - University of Michigan</h3>
                                <a target="_blank" rel="noopener noreferrer" href="https://coursera.org/share/77a0ef562bdb062652d476eaabc669a5" className="btn">view Certificate</a>
                            </div>
                            {/* ----Certificate Item End----- */}
                            {/* ----Certificate Item Start 3----- */}
                            <div className="portfolio-item">
                                <div className="certificate-item-thumbnail">
                                    <img src="../../assets/img/certificates/hackveda.jpeg" alt="certificate item thumb" />
                                </div>
                                <h3 className="portfolio-item-title">Full Stack Web development - Hackveda</h3>
                                <a target="_blank" rel="noopener noreferrer" href="https://www.hackveda.in/one2one_old/verifycertificate.php?certi_encypt_key=CAFS%2F955%2F214%2F10393" className="btn">view Certificate</a>
                            </div>
                            {/* ----Certificate Item End----- */}            
                        </div>
                        
                    </div>
                </section>
                {/* Certificate Section End */}
                 
            </div>
            {/* Main End */}


            {/* ----Portfolio Item Details Popup Start----- */}
            <div className="portfolio-popup">
               <div className="pp-inner">
                   <div className="pp-content">
                       <div className="pp-header">
                           <button type="button" className="btn pp-close"><FaTimes /></button>
                           <div className="pp-thumbnail">
                               <img src="../../assets/img/portfolio/3.jpg" alt="pp-thumbnail" />
                           </div>
                           <h3>text</h3>
                       </div>
                       <div className="pp-body"></div>
                   </div>
               </div>
            </div> 
            {/* ----Portfolio Item Details Popup End----- */}
        </div>
        
            

        );
    }
}

export default Template;