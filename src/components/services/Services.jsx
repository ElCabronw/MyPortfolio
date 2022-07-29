import React from "react";
import "./services.css";
import {RiCheckDoubleFill} from 'react-icons/ri'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX</h3>
          </div>

          <ul className="service_list">
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
          </ul>
        </article>
        {/* End of WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
            <li>
              <RiCheckDoubleFill className='service_list-icon'/>
              <p>Lorem Ipson dolor</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
