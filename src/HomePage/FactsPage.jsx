import { useState } from "react";
import { FaUserCircle, FaThumbsUp, FaCommentAlt, FaPaperPlane } from "react-icons/fa"; // Import icons from FontAwesome
import "bootstrap/dist/css/bootstrap.min.css";

function FactsPage() {
  const facts = Array(4).fill({
    text: "Did you know? More than 90% of web traffic comes from mobile devices. This means it's essential to make your website responsive and mobile-friendly!",
  });

  const [commentData, setCommentData] = useState(
    facts.map(() => ({ showComment: false, comment: "", comments: [], liked: false }))
  );

  const handleCommentClick = (index) => {
    setCommentData((prev) =>
      prev.map((data, idx) =>
        idx === index ? { ...data, showComment: !data.showComment } : data
      )
    );
  };

  const handleCommentChange = (index, value) => {
    setCommentData((prev) =>
      prev.map((data, idx) => (idx === index ? { ...data, comment: value } : data))
    );
  };

  const handleSubmitComment = (index, e) => {
    e.preventDefault();
    if (commentData[index].comment.trim() !== "") {
      console.log("Comment submitted for Fact", index + 1, ": ", commentData[index].comment);
      setCommentData((prev) =>
        prev.map((data, idx) =>
          idx === index
            ? {
                ...data,
                comments: [...data.comments, data.comment],
                comment: "",
                showComment: false,
              }
            : data
        )
      );
    }
  };

  const handleLikeClick = (index) => {
    setCommentData((prev) =>
      prev.map((data, idx) =>
        idx === index ? { ...data, liked: !data.liked } : data
      )
    );
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {/* Left Side Page */}
          <div className="col-md-8">
            <div className="mb-3">
              {/* Card Component */}
              {facts.map((fact, index) => (
                <div className="card mb-3 shadow-sm" key={index} style={{ borderLeft: "none", borderRight: "none" }}>
                  <div className="card-body">
                    <div className="d-flex align-items-center mb-3">
                      {/* User icon */}
                      <FaUserCircle size={40} className="me-2" />
                      <h5 className="card-title mb-0">Posted by D3vCode</h5>
                    </div>

                    {/* Fact about web development */}
                    <p className="card-text">{fact.text}</p>

                    {/* Like and Comment icons */}
                    <div className="d-flex justify-content-between align-items-center mt-4">
                      <div
                        className="like-comment"
                        onClick={() => handleLikeClick(index)}
                      >
                        <FaThumbsUp
                          className={`like-icon me-2 ${commentData[index].liked ? "liked" : ""}`}
                        />
                        <span>Like</span>
                      </div>
                      <div
                        onClick={() => handleCommentClick(index)}
                        className="comment-icon"
                      >
                        <FaCommentAlt className="me-2" />
                        <span>Comment</span>
                      </div>
                    </div>

                    {/* View Comments */}
                    {commentData[index].comments.length > 0 && (
                      <div className="mt-3">
                        <span
                          onClick={() => handleCommentClick(index)}
                          className="view-comments"
                        >
                          {commentData[index].showComment
                            ? "Hide Comments"
                            : `View Comments (${commentData[index].comments.length})`}
                        </span>
                      </div>
                    )}

                    {/* Comment text box */}
                    {commentData[index].showComment && (
                      <div className="comment-input-container mt-3">
                        <textarea
                          className="form-control comment-textarea"
                          rows="1"
                          value={commentData[index].comment}
                          onChange={(e) => handleCommentChange(index, e.target.value)}
                          placeholder="Write your comment here..."
                          required
                        ></textarea>
                        <FaPaperPlane
                          className="submit-icon"
                          size={24}
                          onClick={(e) => handleSubmitComment(index, e)}
                        />
                      </div>
                    )}

                    {/* Display Comments */}
                    {commentData[index].showComment &&
                      commentData[index].comments.map((cmt, idx) => (
                        <div key={idx} className="mt-2 comment">
                          <FaUserCircle size={20} className="me-2" />
                          <span>{cmt}</span>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Right Side Page */}
          <div className="col-md-4">
            <div className="course-suggested-card">
              <div className="card text-bg-light mb-3">
                <div className="card-header">Express</div>
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ut, ipsam.
                  </p>
                </div>
              </div>
              <div className="card text-bg-light mb-3">
                <div className="card-header">Angular</div>
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Fugiat, commodi!
                  </p>
                </div>
              </div>
              <div className="card text-bg-light mb-3">
                <div className="card-header">Node.js</div>
                <div className="card-body">
                  <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
                  <p className="card-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Ducimus, et!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactsPage;
