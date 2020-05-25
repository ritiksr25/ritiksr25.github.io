import { Col, Card, Divider, Typography, Tag, Space } from "antd";
import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
const { Paragraph } = Typography;
const { Meta } = Card;

const CardComponent = (props) => {
  let { title, subtitle, tenure, details, links, tech } = props.data;
  let actions = [];
  links.map((link) => {
    actions.push(
      <a href={link.url} target="_blank" rel="noreferrer noopener">
        {link.type === "github" ? <GithubOutlined /> : <LinkOutlined />}
      </a>
    );
  });
  return (
    <Col style={{ margin: "10px" }}>
      <Card
        bordered={false}
        className={"card"}
        style={{ width: 300, cursor: "pointer" }}
        hoverable={true}
        actions={actions}
      >
        <Space direction="vertical">
          <Meta title={title} description={subtitle} />
          <Tag color={"green"} key={1}>
            {tenure}
          </Tag>
          <Tag color={"geekblue"} key={1}>
            {tech}
          </Tag>
        </Space>

        <Divider />
        <Typography style={{ textAlign: "left", fontSize: "13px" }}>
          {details.map((detail, i) => (
            <Paragraph key={i}>{detail}</Paragraph>
          ))}
        </Typography>
      </Card>
    </Col>
  );
};

export default CardComponent;
