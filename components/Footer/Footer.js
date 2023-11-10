import React from "react";
import Banner from "@/components/Banner";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <Banner type="info">
        {" "}
        Please note that the content on this page is currently being developed.
        Check back soon for updates!
      </Banner>
      <footer className={styles.container}>
        <p>Tofcio &copy; 2023, Poland</p>
      </footer>
    </div>
  );
}
export default Footer;
