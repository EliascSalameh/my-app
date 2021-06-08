import PartnerItem from "./PartnerItem";
import classes from "./PartnerList.module.css";
function PartnerList(porps) {
  return (
    <ul className={classes.list}>
      {porps.partners.map((partner) => (
        <PartnerItem
          key={partner.id}
          organization={partner.organization}
          offices={partner.offices}
        />
      ))}
    </ul>
  );
}
export default PartnerList;
