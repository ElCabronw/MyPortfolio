import React from "react";
import "./experience.css";
import {FcCheckmark} from 'react-icons/fc'
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>Javascript</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>React</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>jQuery</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>C#</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>SQL</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>.NET/NET CORE</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>Python</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>Java</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>Entity Framework</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>

            <article className="experience_details">
            <FcCheckmark className="experience_details-icon"/>
            <div>
            <h4>Dapper</h4>
            <small className="text-light">Intermediate</small>
            </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
