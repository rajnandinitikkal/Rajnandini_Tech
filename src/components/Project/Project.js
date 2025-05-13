import React from 'react';
import './Project.css';
import VmLogo from './WM logo.png';
import ContactLogo from './contact.jpg';
// import bookImg from './book-img.png';
// import chalkTalk from './chalk-talk.png';

function Project() {
  return (
    <>
      <div className='project-heading-card'>
        <h3 className='text-center'><i class="fa-sharp fa-solid fa-computer"></i> Projects</h3>
      </div>

      <div className='container mt-2 mb-3'>
        <div className='project-card'>
          <div className='row'>

            <div className='col-md-4'>
              <img src={VmLogo} className="mx-auto d-block"  />
            </div>
            <div className='col-md-8'>
              <h3 className='text-center'>Waste management in Smart Cities 🗑️</h3>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-solid fa-code"></i> HTML</b></span>
              <span class="badge badge-pill bg-f-color m-2 p-2"><b><i class="fa-brands fa-css3-alt"></i> CSS</b></span>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-brands fa-square-js"></i> Javascript</b></span>
              <span class="badge badge-pill bg-f-color m-2 p-2"><b><i class="fa-brands fa-bootstrap"></i> Bootstrap</b></span>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-brands fa-react"></i> React JS</b></span>
              <span class="badge badge-pill bg-f-color m-2 p-2"><b><i class="fa-brands fa-node-js"></i> Node JS</b></span>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-solid fa-database"></i> Mongo DB</b></span>

              <h4 className='mt-2 text-center'>Stay Clean , Stay healthy !</h4>
              <h6 className='text-center'>Traditional life to smart life</h6>

          <div className='text-center'>
          <a href='https://open-book.onrender.com/' target='blank'>
                <button className='btn-demo m-3 p-2'><b><i class="fas fa-laptop-code"></i> Live Demo</b></button>
              </a>

              <a href='https://github.com/rajnandinitikkal/Final_Year_Project' target='blank'>
                <button className='btn-code m-3 p-2'><b><i class="fab fa-github-square"></i> Source Code</b></button>
              </a>
          </div>

            </div>
          </div>
        </div>
      </div>

      <div className='container mt-2 mb-5'>
        <div className='project-card'>
          <div className='row'>
            
            <div className='col-md-4'>
              <img src={ContactLogo} className="mx-auto d-block" />
            </div>
            <div className='col-md-8'>
              <h3 className='text-center'>Contact App ☎️</h3>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-solid fa-code"></i> HTML</b></span>
              <span class="badge badge-pill bg-f-color m-2 p-2"><b><i class="fa-brands fa-css3-alt"></i> CSS</b></span>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-brands fa-square-js"></i> Javascript</b></span>
              <span class="badge badge-pill bg-f-color m-2 p-2"><b><i class="fa-brands fa-bootstrap"></i> Bootstrap</b></span>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-brands fa-react"></i> React JS</b></span>
              <span class="badge badge-pill bg-f-color m-2 p-2"><b><i class="fa-brands fa-node-js"></i> Node JS</b></span>
              <span class="badge badge-pill bg-s-color m-2 p-2"><b><i class="fa-solid fa-database"></i> Mongo DB</b></span>

              <h4 className='mt-2 text-center'>The Contact app using ReactJs in which it
shows landing page where we can add delete
or add contacts.

</h4>
              

          <div className='text-center'>
          <a href='https://chalk-talk-u6gk.onrender.com/' target='blank'>
                <button className='btn-demo m-3 p-2'><b><i class="fas fa-laptop-code"></i> Live Demo</b></button>
              </a>

              <a href='https://github.com/roadtocode4u/chalk-talk' target='blank'>
                <button className='btn-code m-3 p-2'><b><i class="fab fa-github-square"></i> Source Code</b></button>
              </a>
          </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project