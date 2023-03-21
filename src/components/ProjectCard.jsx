import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, deploy }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h5>{title}</h5>
          <span>{description}</span>
          <span className="proj-but-span">
            <button className="proj-button">
              <a href={deploy} target="_blank">Deploy</a>
            </button>
            <button className="proj-button">
              <a href={github} target="_blank">Structure</a>
            </button>
          </span>
        </div>
      </div>
    </Col>
  )
}
