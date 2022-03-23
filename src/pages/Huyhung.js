import { useParams, Route } from "react-router-dom";
import { Fragment } from "react";
import Comments from "../components/comments/Comments";
const HuyHung = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Huy Hung</h1>
      <p>
        Huy Hung is a software engineer based in Vietnam. He is a member of the
        Vietnam Software Association (VSA) and the Vietnam Software Development
        Association (VSDDA). He is also a member of the Vietnam Software
        Association (VSA) and the Vietnam Software Development Association
        (VSDDA).
      </p>
      <Route path={`/huyhung/${params.IdComment}`}>
        <Comments IdComment={params.IdComment} />
        </Route>
    </Fragment>
  );
};
export default HuyHung;
