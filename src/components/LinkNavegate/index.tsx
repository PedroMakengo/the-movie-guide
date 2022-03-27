import { Link } from "react-router-dom";

interface ITLinkNavegate {
  to: string;
  children: string;
}

function LinkNavegate({ to, children }: ITLinkNavegate) {
  return <Link to={to}>{children}</Link>;
}

export default LinkNavegate;
