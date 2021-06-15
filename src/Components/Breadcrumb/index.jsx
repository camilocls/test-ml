import "./styles.scss";

function Breadcrumb({ path }) {
  return (
    <div className="breadcrumb">
      <div className="breadcrumb__path">{ path }</div>
    </div>
  );
}

export default Breadcrumb;
