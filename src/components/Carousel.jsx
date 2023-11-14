import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import styles from "./Carousel.module.css";

export const Carousel = ({ data }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide((slide) => (slide === data.length - 1 ? 0 : slide + 1));
  };

  const prevSlide = () => {
    setSlide((slide) => (slide === 0 ? data.length - 1 : slide - 1));
  };

  // Automatically change the slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  return (
    <div className={styles.carousel}>
      <BsArrowLeftCircleFill onClick={prevSlide} className={`${styles.arrow} ${styles["arrow-left"]}`}/>
      {data.map((item, idx) => {
        return (
          <a href="#"><img
            src={item.src}
            alt={item.alt}
            key={idx}
            className={slide === idx ? styles.slide : styles["slide-hidden"]}
          /></a>
        );
      })}
      <BsArrowRightCircleFill
        onClick={nextSlide}
        className={`${styles.arrow} ${styles["arrow-right"]}`}
      />
      <span className={styles.indicators}>
        {data.map((_, idx) => {
          return (
            <button
              key={idx}
              className={
                slide === idx
                  ? styles.indicator
                  : `${styles.indicator} ${styles["indicator-inactive"]}`
              }
              onClick={() => setSlide(idx)}
            ></button>
          );
        })}
      </span>
    </div>
  );
};
