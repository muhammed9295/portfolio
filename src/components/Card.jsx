import React from 'react';
import { FaGithub } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

function Card(props) {
  return (
    <div className="card w-full lg:w-96 glass">
  <figure><img src={props.image} alt={props.title}/></figure>
  <div className="card-body">
    <h2 className="card-title text-white">{props.title}</h2>
    <p className="text-white">{props.description}</p>
    <div className="card-actions my-3">
      <div className="badge badge-info badge-outline font-semibold">{props.tech1}</div> 
      <div className="badge badge-success badge-outline font-semibold">{props.tech2}</div>
      <div className="badge badge-warning badge-outline font-semibold">{props.tech3}</div>
      <div className="badge badge-accent badge-outline font-semibold">{props.tech4}</div>
    </div>
    <div className="card-actions gap-5 justify-end">
      <button className="btn btn-secondary btn-outline"><TbExternalLink /> Live Preview</button>
      <button className="btn btn-secondary btn-outline"><FaGithub /> View Code</button>
    </div>
  </div>
</div>
  )
}

export default Card