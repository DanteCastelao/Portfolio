import Marquee from "react-fast-marquee";
import styles from "./Marquees.module.css";
import React from "react";

function Marquees() {
    return (
        <div className={styles.container}>
            <Marquee speed={100}>
                <span>DEVELOP<span className={styles.purple}>-DESIGN-CREATIVE-</span></span>
            </Marquee>
            <Marquee direction="right" speed={100}>
                <span><span className={styles.pink}>SEO-PERFORMANCE-</span>UX-UI<span className={styles.pink}>-DELIVER-</span></span>
            </Marquee>
            <Marquee speed={100}>
                <span><span className={styles.blue}>FAST-</span>REBRAND<span className={styles.blue}>-EXPERIENCE-</span></span>
            </Marquee>
        </div>
    );
}

export default Marquees;