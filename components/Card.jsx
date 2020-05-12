const Card = (props) => {
  let { title, subtitle, tenure, details, link, github } = props.details;

  return (
    <div className="col-lg-4 col-sm-6 col-12 mt-2">
      <div className="card mb-4">
        <div className="card-body">
          <h2 className="card-title text-center pt-4">{title}</h2>
          {tenure ? <span className="platform">{tenure}</span> : null}
          {subtitle ? (
            <h5 className="card-subtitle text-center mb-4">{subtitle}</h5>
          ) : null}
          {details.length ? (
            <p className="card-text" style={{ "text-align": "justify;" }}>
              {details.map((detail) => (
                <li className="li-left">{detail}</li>
              ))}
            </p>
          ) : null}
          {link ? (
            <a href={link} target="_blank">
              <i className="fas fa-link"></i>
            </a>
          ) : null}
          {github ? (
            <a href={github} target="_blank">
              <i className="fab fa-github git"></i>
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Card;
