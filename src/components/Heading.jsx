import styles from "../customStyles/Heading.module.css";
export default function Heading({ headingContent }) {
  return (
    <>
      <center>
        <h1 className={styles.heading}>{headingContent}</h1>
      </center>
    </>
  );
}
