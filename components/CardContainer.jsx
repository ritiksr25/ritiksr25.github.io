import Card from "./Card";

const CardContainer = (props) => (
  <>
    <h2 className="display-4 page_title">{props.path}</h2>
    <hr className="my-4" />
    <div className="row">
      {props.data.map((data) => (
        <Card details={data} />
      ))}
    </div>
  </>
);

export default CardContainer;
