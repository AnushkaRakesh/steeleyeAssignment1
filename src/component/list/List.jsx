import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows , searchString, currency, timeStamps, setSelectedOrder }) => {
  let filteredRows = rows.filter((row) => row['&id'].includes(searchString.toUpperCase()));
  return (
    <table className={styles.container} >
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / USD</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {filteredRows.length > 0 && filteredRows.map((row, index) => {
          row.orderSubmitted = timeStamps.filter((stamp) => stamp['&id'] === row['&id'])[0].timestamps.orderSubmitted;
          return (
          <ListRow key={index} sendSelectedDetails={setSelectedOrder}>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>{row.orderSubmitted}</ListRowCell>
            <ListRowCell>
              {    (currency === 'EUR' && row.bestExecutionData.orderVolume.EUR) 
                || (currency === 'JPY' && row.bestExecutionData.orderVolume.JPY) 
                || (currency === 'USD' && row.bestExecutionData.orderVolume.USD)
                || (currency === 'GBP' && row.bestExecutionData.orderVolume.GBP)
              }
              </ListRowCell>
          </ListRow>
          )
          })}
        { filteredRows.length === 0 && <tr className={styles.noDataFound}><td>No Data Found</td></tr>}
      </tbody>
    </table>
  );
};

export default List;
