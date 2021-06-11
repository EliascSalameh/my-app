import PartnerItem from "./PartnerItem";
import classes from "./PartnerList.module.css";
function PartnerList(props) {
  return (
    <div className={classes.list}>
      <ol>
        {props.partners.map((partner) => (
          <PartnerItem
            key={partner.id}
            organization={partner.organization}
            address={partner.address}
          />
        ))}
      </ol>
    </div>
  );
}
export default PartnerList;
