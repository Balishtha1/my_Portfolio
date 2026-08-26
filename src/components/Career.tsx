import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My academic <span>&</span>
          <br /> journey
        </h2>

        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MCA Student</h4>
                <h5>National Institute of Technology Raipur</h5>
              </div>
              <h3>NOW</h3>
            </div>

            <p>
              Pursuing a Master of Computer Applications at NIT Raipur with a
              strong focus on software engineering, artificial intelligence,
              machine learning, full-stack development, and data-driven
              systems.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineering</h4>
                <h5>Core Focus</h5>
              </div>
              <h3>FOCUS</h3>
            </div>

            <p>
              Developing strong foundations in data structures and algorithms,
              object-oriented programming, databases, backend systems, APIs,
              and scalable software architecture.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML & Data</h4>
                <h5>Technical Focus</h5>
              </div>
              <h3>BUILD</h3>
            </div>

            <p>
              Exploring machine learning, natural language processing,
              intelligent applications, and data-driven solutions with an
              emphasis on practical implementation and real-world use cases.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Development</h4>
                <h5>Engineering Focus</h5>
              </div>
              <h3>GROW</h3>
            </div>

            <p>
              Building modern web applications across the frontend and
              backend, while developing practical experience with APIs,
              databases, cloud technologies, and production-oriented
              development workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;