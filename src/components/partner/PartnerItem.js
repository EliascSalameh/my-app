function PartnerItem(props) {
  return (
    <tr>
      <td>{props.organization}</td>
      <td>{props.address}</td>
      <td>{props.distance}</td>
    </tr>
  );
}
export default PartnerItem;
