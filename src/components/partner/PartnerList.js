import PartnerItem from "./PartnerItem";
import classes from "./PartnerList.module.css";
import { Table } from "react-bootstrap";

function PartnerList(props) {
  return (
    <section className={classes.list}>
      <Table className={classes.table}>
        <thead>
          <tr>
            <th>Organization</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {props.partners.map((partner) => (
            <PartnerItem
              key={partner.id}
              organization={partner.organization}
              address={partner.address}
            />
          ))}
        </tbody>
      </Table>
    </section>
  );
}
export default PartnerList;
