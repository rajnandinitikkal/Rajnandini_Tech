import React from 'react';
import Rutuimg from './PassportPhoto.jpg';
import './Information.css';
import rtcLogo from './rtc-logo.png';
import Github from './github-logo.png';
import Linkdin from './linkdin-logo.png';
import Twitter from './twitter-logo.png';
import Instagram from './instagram-logo.png';
// import Phone from './phone.png';

function Information() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img src={Rutuimg} className='header-img mt-5 mx-auto d-block' />
                        <h4 className='text-center mt-3'>Rajnandini Tikkal</h4>
                        <h5 className='text-center mt-1'>Java Full Stack Developer 💻</h5>

                        <div className='container mt-4'>
                            <div className='row'>

                                <a href="https://github.com/rajnandinitikkal" class="ico-social-container" target='blank'>
                                    <img src={Github} alt="github" class="ico-social" />
                                </a>

                                <a href="https://www.linkedin.com/in/rajnandinitikkal/" class="ico-social-container" target='blank'>
                                    <img src={Linkdin} alt="linkedin" class="ico-social" />
                                </a>

                                <a href='https://twitter.com/' class="ico-social-container" target='blank'>
                                    <img src={Twitter} alt="linkedin" class="ico-social" />
                                </a>

                                <a href="https://www.instagram.com/" class="ico-social-container" target='blank'>
                                    <img src={Instagram} alt="linkedin" class="ico-social" />
                                </a>

                            </div>
                        </div>

                    

                    </div>
                    <div className='col-md-6'>
                        <div className='mt-5'>
                            "Hi, I'm <b>Rajnandini Tikkal</b>! I'm a Java full stack developer and I love coding. I have experience with programming languages like JavaScript, ReactJs and Java, and have worked on web development projects using HTML, CSS, JavaScript, Bootstrap, Node.js, React.js, and Java. I'm passionate about creating functional and user-friendly applications. Let's work together and create something great!"
                        </div>

                        <div className='text-center mt-4'>
                            <a target='_blank' href="https://drive.google.com/file/d/1HnwubyLtea88fB0GG-bwxH1X2W5-sbNs/view?usp=drive_link"> 
                            <button type="button" class="btn-resume btn-sm m-2"><b><i class="far fa-file-alt"></i> Show Resume</b></button>
                            </a>
                        </div>

                        <div className='mt-4 card-skill'>
                            <p className='text-center'>
                                <button type="button" class="btn-js btn-sm m-2"><b><i class="fa-brands fa-square-js"></i> Javascript</b></button>
                                <button type="button" class="btn-md btn-sm m-2"><b><i class="fa-brands fa-java"></i> Java</b></button>
                                <button type="button" class="btn-rj btn-sm m-2"><b><i class="fa-brands fa-react"></i> React JS</b></button>
                                <button type="button" class="btn-nj btn-sm m-2"><b><i class="fa-brands fa-node-js"></i> Node JS</b></button>
                                <button type="button" class="btn-boot btn-sm m-2"><b><i class="fa-brands fa-bootstrap"></i> Bootstrap</b></button>
                                <button type="button" class="btn-git btn-sm m-2"><b><i class="fa-brands fa-github"></i> Github</b></button>
                            </p>
                        </div>

                        <div className='m-5 mt-5 rtc-card'>
                            <a href='https://www.roadtocode.org/' target='blank' className='rtc-logo-a'>
                                <h5><img src={rtcLogo} className="rtc-logo" /> Road To code</h5>
                            </a>
                            <b>Founding Member at Road To Code</b>.
                            We are Helping and Exploring Students To start their Programming Journey . I am Confident to solve Student programming doubt,
                            i have a strong problem sovling skill.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Information