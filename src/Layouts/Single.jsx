import Header from "../Components/Header";
import Wrapper from "../Components/Wrapper";

function SingleLayout({ children }) {
  return (
    <div className="page-layout">
      <Header />
      <Wrapper>
        {children}
      </Wrapper>
    </div>
  );
}

export default SingleLayout;
