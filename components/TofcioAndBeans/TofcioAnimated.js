"use client"
import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import styles from "./TofcioAnimated.module.css";

function TofcioAnimated() {
  return (
    <div className={styles.container}>
      <motion.svg
        width="179"
        height="172"
        viewBox="0 0 179 172"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.tofcio}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M37.6983 1.38187C35.2451 3.92885 36.6241 11.2993 40.1366 14.4133C42.36 16.3846 44.4234 16.9354 47.0036 16.2468C50.2593 15.3769 52.6407 12.8641 52.6407 10.298C52.6407 7.78465 49.7282 4.70372 45.1402 2.36406C40.6468 0.0724752 39.1498 -0.125005 37.6983 1.38187ZM137.125 2.0606C133.67 4.16687 130.484 8.15355 130.484 10.3693C130.484 14.1654 133.65 16.6973 137.735 16.1674C142.613 15.535 145.452 12.0128 145.453 6.58934C145.454 3.95144 145.201 3.25938 143.704 1.81158C142.741 0.880349 141.584 0.118805 141.132 0.118805C140.679 0.118805 138.876 0.9927 137.125 2.0606ZM77.7902 14.3901C58.567 15.7343 43.4216 18.8638 34.0948 23.4181C29.4822 25.6709 28.0134 27.7812 26.529 34.287C25.9841 36.6759 25.4469 38.7306 25.3356 38.8534C25.0553 39.1632 22.3134 37.3929 19.1081 34.832C15.2488 31.7487 13.0051 30.8123 9.47822 30.8123C5.26688 30.8123 2.84415 32.3308 1.21602 35.9914C-0.379775 39.5791 -0.404329 43.5061 1.13877 48.27C3.47827 55.4899 11.3962 66.3502 19.8751 73.9685L24.6038 78.217L23.9182 84.7738C23.541 88.38 23.0991 92.2427 22.9356 93.3575C22.7727 94.4723 22.529 102.942 22.3943 112.179C22.2164 124.386 22.3769 130.655 22.9817 135.13C24.2248 144.328 25.8739 149.905 27.4984 150.403C29.1241 150.902 40.1097 151.818 44.6587 151.834L48.9515 151.849L49.9755 154.889C51.6826 159.961 55.5077 167.273 57.4209 169.124C64.2029 175.683 71.1447 170.83 75.4124 156.547L76.7866 151.947L83.1267 151.609C92.3403 151.115 105.459 150.152 108.556 149.741L111.236 149.386L111.898 151.921C113.132 156.641 115.587 162.732 117.501 165.82C121.94 172.982 128.422 173.522 132.823 167.097C135.205 163.618 136.286 160.158 137.535 152.012C138.53 145.519 138.532 145.514 140.346 145.162C145.876 144.086 156.615 141.265 158.241 140.46C161.728 138.736 164.513 136.204 165.84 133.554C167.588 130.062 167.424 128.36 161.87 92.2393L159.25 75.1951L160.885 73.2348C170.026 62.2755 173.208 57.5156 176.382 50.0508C177.67 47.0231 178.043 45.1948 178.063 41.8156C178.093 36.717 176.99 34.078 174.007 32.1153C169.785 29.3373 163.453 31.0868 158.673 36.3528C157.691 37.434 156.772 38.1284 156.631 37.8955C156.489 37.6627 156.033 34.2899 155.618 30.4005C154.966 24.3001 154.673 23.1569 153.482 22.0751C150.744 19.5872 129.929 15.7702 113.119 14.6733C105.81 14.1961 83.1584 14.0148 77.7902 14.3901ZM113.101 63.9671C109.861 65.5504 107.603 68.5931 107.852 71.0428C108.084 73.339 110.42 73.8689 111.301 71.8252C112.586 68.8462 114.847 67.297 117.91 67.297C120.581 67.297 121.925 68.1663 123.309 70.7909C124.633 73.302 126.434 73.8394 127.438 72.0238C128.754 69.6454 126.201 65.4108 122.46 63.7673C119.186 62.3293 116.328 62.3901 113.101 63.9671ZM57.667 64.3487C55.8149 65.1618 54.8808 66.0832 53.8802 68.0817C52.403 71.0335 52.4245 73.2713 53.9335 73.5487C55.0407 73.7531 55.7718 73.0894 57.4377 70.3687C59.9855 66.2089 65.8735 66.7283 69.0657 71.3937C70.7807 73.9002 71.2771 74.0925 72.6351 72.779C73.3531 72.0846 73.419 71.5484 72.9363 70.3206C71.9998 67.9375 69.5489 65.0813 67.6094 64.1113C65.2484 62.9304 60.646 63.0399 57.667 64.3487ZM72.401 87.7198C72.401 88.8775 74.7663 92.9093 76.504 94.7144C81.4087 99.8084 91.8134 101.568 99.1193 98.5401C103.734 96.6273 108.855 90.9646 108.914 87.7111C108.925 87.1476 104.883 86.9872 90.6643 86.9872C76.3387 86.9872 72.401 87.1453 72.401 87.7198Z"
          fill="#F3F4C7"
        />
      </motion.svg>
    </div>
  );
}

export default TofcioAnimated;
