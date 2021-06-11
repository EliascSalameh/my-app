import PartnerItem from "./PartnerItem";
import classes from "./PartnerList.module.css";
function PartnerList(props) {
  return (
    <ol className={classes.list}>
      {props.partners.map((partner) => (
        <PartnerItem
          key={partner.id}
          organization={partner.organization}
          address={partner.address}
        />
      ))}
    </ol>
  );
}
export default PartnerList;
