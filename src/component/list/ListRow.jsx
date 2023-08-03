import styles from "./ListRow.module.css";
// import mockData from '../../assets/data.json';

const ListCell = ({ children , sendSelectedDetails}) => {
  return <tr onClick={() => sendSelectedDetails(children[0].props.children)} className={styles.cell}>{children}</tr>;
};

export default ListCell;
