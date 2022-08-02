import React from 'react'
import resume from '../assets/resume.pdf';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import mail from '../assets/mail.png';
import '../App.css';
import img from '../assets/blue.png'

export default function Home() {
  return (
    <div className='App'>
        <div className='border'></div>
        <div className='Main'>
        <header className='App-header'>
          <p className='font-link'>Hey... I'm Amy!</p>
          {/* <img src={ img } className='Icons'/> */}
      </header>

      <div className='text'>
        <div className='font-link'>
          <p>I am Currently...</p>
          <div className='stagger'>
          <p>studying in my 2nd year of <a className='text-link' href='https://uwaterloo.ca/future-students/programs/management-engineering#:~:text=In%20contrast%2C%20Management%20Engineering%20provides,business%20more%20efficiently%20and%20effectively.' target="_blank">Management Engineering</a> at the University of Waterloo</p>
          <p className='stagger'>learning all I can as a Web Developer at the <a className='text-link' href='https://www.tdsb.on.ca/' target="_blank">Toronto District School Board</a></p>
          <p>spending my free time reading as much as I can &amp; getting gains in the gym</p>
          </div>
        </div>
      </div>

      <div className='App-footer'>
          <span>
          <a target='_blank' className='text-link' href={ resume }> resume </a>
          </span>
        <div className='Icons-container'>
            <a href='https://github.com/kang-amy' target='blank'>
              <img src={ github } alt='Github' className='Icons'/>
            </a>
            <a href='https://www.linkedin.com/in/kang-amy/' target='blank'>
              <img src={ linkedin } alt='LinkedIn' className='Icons' />
            </a>
            <a href='mailto:amy.kang@uwaterloo.ca' target='blank'>
              <img src={ mail } alt='Email' className='Icons' />
            </a>
        </div>
      </div>
        </div>
        <div className='border'></div>
    </div>
  )
}
