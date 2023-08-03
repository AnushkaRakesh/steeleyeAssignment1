import { useState } from "react";

// Data
import mockData from "../assets/data.json";
import timestamps from "../assets/timeStamps.json";

// Components
import Dropdown from "../component/dropdown/Dropdown";
import HeaderTitle from "../component/header-title/HeaderTitle";
import Search from "../component/search/Search";
import List from "../component/list/List";

// Styles
import styles from "./Dashboard.module.css";
import Card from "../component/card/Card";

const Dashboard = () => {
  const [currency, setCurrency] = useState("EUR");
  const [searchText, setSearchText] = useState("");
  const [selectedOrderDetails, setSelectedOrderDetails] = useState({});
  const [selectedOrderTimeStamps, setSelectedOrderTimeStamps] = useState({});

  const handleSelectedOrder = (orderId) => {
    let execDetails = mockData.results.filter((order) => order['&id'] === orderId);
    if(execDetails && execDetails.length > 0) {
      execDetails = execDetails[0].executionDetails;
      setSelectedOrderDetails(execDetails);
    }
    let orderTimeStamp = timestamps.results.filter((stamp) => stamp['&id'] === orderId);
    if(orderTimeStamp && orderTimeStamp.length > 0) {
      orderTimeStamp = orderTimeStamp[0].timestamps;
      setSelectedOrderTimeStamps(orderTimeStamp);
    }
  }

  return (
    <div>
      <div className={styles.header}>
        <HeaderTitle primaryTitle="Orders" secondaryTitle={mockData.results.length} />
        <div className={styles.actionBox}>
          <Search
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Dropdown
            options={["GBP", "USD", "JPY", "EUR"]}
            onChange={(e) => setCurrency(e.target.value)}
            selectedItem={currency}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.section}>
          <Card
            cardData={selectedOrderDetails}
            title="Selected Order Details"
          />
          <Card
            cardData={selectedOrderTimeStamps}
            title="Selected Order Timestamps"
          />
        </div>
        <List rows={mockData.results} searchString={searchText} currency={currency} timeStamps={timestamps.results} setSelectedOrder={handleSelectedOrder}/>
      </div>
    </div>
  );
};

export default Dashboard;
