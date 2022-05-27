import React from "react"
import { faker } from "@faker-js/faker";
const Comment = (props) => {
  const { name, content, image } = props
  return (
    <div className="ui container">
      <div className="comment">
        <a className="avatar">
          <img src={image} />
        </a>
        <div className="content">
          <a className="author">{name}</a>
          <div className="metadata">
            <span className="date">Today at 5:42PM</span>
          </div>
          <div className="text">
            {content}
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment