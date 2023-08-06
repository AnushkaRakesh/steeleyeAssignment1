import styles from "./HeaderTitle.module.css";
import Button from '../Button/Button';
const HeaderTitle = ({ primaryTitle, secondaryTitle }) => {
  return (
    <div className={styles.container}>
      <h1>{primaryTitle}</h1>
      <div>{secondaryTitle} orders</div>
      <Button>StoryBook</Button>
    </div>
  );
};

export default HeaderTitle;
