import CardComponent from "./Card";
import { Row } from "antd";
const CardContainer = (props) => (
  <>
    <div
      className="site-card-wrapper"
      style={{ textAlign: "center", alignItems: "center" }}
    >
      <Row justify="center" gutter={16} style={{ margin: "10px" }}>
        {props.data.map((data, i) => (
          <CardComponent key={i} data={data} />
        ))}
      </Row>
    </div>
  </>
);

export default CardContainer;
