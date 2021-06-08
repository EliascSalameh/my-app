import clasess from "./Card.module.css";
//here the props.children is used in order to be able to wrap the Card component with
//the PartnerItem or the component will be swallowed
function Card(props) {
  return <div className={clasess.card}>{props.children}</div>;
}
export default Card;
