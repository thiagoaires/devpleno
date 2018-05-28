import React from 'react'

const Comment = ({commentContent}) => (
  <div className="card">
    <span className="card-body">
      {commentContent.comment}
    </span>
  </div>
)

export default Comment