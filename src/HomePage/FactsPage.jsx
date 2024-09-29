import { FaUserCircle, FaThumbsUp, FaCommentAlt } from "react-icons/fa"; // Import icons from FontAwesome

function FactsPage() {
  return (
    <>

    <div className="Facts-container1">
        {/*left side page*/}
        <div className="Facts-leftSide">
        <div className="card mb-3  mt-5 facts-card shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                {/* User icon */}
                <FaUserCircle size={40} className="me-2" />
                <h5 className="card-title mb-0">Posted by D3vCode</h5>
              </div>

              {/* Fact about web development */}
              <p className="card-text">
                Did you know? More than 90% of web traffic comes from mobile
                devices. This means its essential to make your website
                responsive and mobile-friendly!
              </p>

              {/* Like and Comment icons */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  <FaThumbsUp className="me-2" /> <span>Like</span>
                </div>
                <div>
                  <FaCommentAlt className="me-2" /> <span>Comment</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3  mt-5 facts-card shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                {/* User icon */}
                <FaUserCircle size={40} className="me-2" />
                <h5 className="card-title mb-0">Posted by D3vCode</h5>
              </div>

              {/* Fact about web development */}
              <p className="card-text">
                Did you know? More than 90% of web traffic comes from mobile
                devices. This means its essential to make your website
                responsive and mobile-friendly!
              </p>

              {/* Like and Comment icons */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  <FaThumbsUp className="me-2" /> <span>Like</span>
                </div>
                <div>
                  <FaCommentAlt className="me-2" /> <span>Comment</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3  mt-5 facts-card shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                {/* User icon */}
                <FaUserCircle size={40} className="me-2" />
                <h5 className="card-title mb-0">Posted by D3vCode</h5>
              </div>

              {/* Fact about web development */}
              <p className="card-text">
                Did you know? More than 90% of web traffic comes from mobile
                devices. This means its essential to make your website
                responsive and mobile-friendly!
              </p>

              {/* Like and Comment icons */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  <FaThumbsUp className="me-2" /> <span>Like</span>
                </div>
                <div>
                  <FaCommentAlt className="me-2" /> <span>Comment</span>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3  mt-5 facts-card shadow-sm">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                {/* User icon */}
                <FaUserCircle size={40} className="me-2" />
                <h5 className="card-title mb-0">Posted by D3vCode</h5>
              </div>

              {/* Fact about web development */}
              <p className="card-text">
                Did you know? More than 90% of web traffic comes from mobile
                devices. This means its essential to make your website
                responsive and mobile-friendly!
              </p>

              {/* Like and Comment icons */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <div>
                  <FaThumbsUp className="me-2" /> <span>Like</span>
                </div>
                <div>
                  <FaCommentAlt className="me-2" /> <span>Comment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*left side page ended*/}
    {/*Right side page*/}
        <div className="Facts-rightSide">
        <div className="course-suggested-card">
          <div
            className="card text-bg-light mb-3 "
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">Express</div>
            <div className="card-body">
              <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
              <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, ipsam.
              </p>
            </div>
          </div>
          <div
            className="card text-bg-light mb-3 "
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">Angular</div>
            <div className="card-body">
              <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
              <p className="card-text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, commodi!
              </p>
            </div>
          </div>
          <div
            className="card text-bg-light mb-3"
            style={{ maxWidth: "22rem" }}
          >
            <div className="card-header">Nodejs</div>
            <div className="card-body">
              <h5 className="card-title">Lorem ipsum dolor sit amet.
              </h5>
              <p className="card-text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, et!

              </p>
            </div>
          </div>
        </div>
        
        </div>
    </div>
            
    </>
  );
}

export default FactsPage;
