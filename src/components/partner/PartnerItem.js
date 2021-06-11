import classes from "./PartnerItem.module.css";
import Card from "../ui/Card";
function PartnerItem(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.organization}</h3>
          <ul>
            <address>{props.address}</address>
          </ul>
        </div>
      </Card>
      <br />
    </li>
  );
}
export default PartnerItem;
