import styles from "../customStyles/SectionHeading.module.css";

export default function SectionHeading({ sectionHeading }) {
  return (
    <div className={styles.sectionHeading}>
      <h2>{sectionHeading}</h2>
    </div>
  );
}
