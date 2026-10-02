import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";

const FeedbackCard = ({
  testimonial,
  name,
  designation,
  company,
  image,
  date,
  relationship,
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="
        w-full
        bg-black-200
        p-7
        sm:p-8
        rounded-3xl
        border
        border-white/10
        shadow-xl
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <img
            src={image}
            alt={name}
            className="
              w-14
              h-14
              rounded-full
              object-cover
              border-2
              border-[#915EFF]/40
              shrink-0
            "
          />

          <div className="min-w-0">
            <h3 className="text-white font-bold text-[16px] truncate">
              {name}
            </h3>

            <p className="text-secondary text-[12px] mt-1">
              {designation}
            </p>

            {company && (
              <p className="text-secondary text-[12px]">
                {company}
              </p>
            )}
          </div>
        </div>

        {/* LinkedIn icon */}
        <div
          className="
            w-8
            h-8
            rounded-md
            bg-[#0A66C2]
            flex
            items-center
            justify-center
            text-white
            font-bold
            text-sm
            shrink-0
          "
        >
          in
        </div>
      </div>

      {/* Date / relationship */}
      <div className="mt-5">
        <p className="text-secondary text-[11px]">
          {date}
        </p>

        <p className="text-secondary text-[11px] mt-1">
          {relationship}
        </p>
      </div>

      {/* Quote */}
      <div className="mt-5">
        <span className="text-[#915EFF] text-[42px] font-black leading-none">
          "
        </span>

        <p
          className={`
            text-white
            text-[14px]
            leading-6
            mt-1
            ${expanded ? "" : "line-clamp-5"}
          `}
        >
          {testimonial}
        </p>

        {testimonial && testimonial.length > 300 && (
          <button
            type="button"
            onClick={() => setExpanded((prev) => !prev)}
            className="
              mt-3
              text-[#915EFF]
              hover:text-white
              text-[13px]
              font-semibold
            "
          >
            {expanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-white/10">
        <p className="text-secondary text-[11px]">
          LinkedIn Recommendation
        </p>
      </div>
    </div>
  );
};

const Feedbacks = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = testimonials.length;

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) => {
      if (prev === total - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  // PREVIOUS
  const previousSlide = () => {
    setCurrent((prev) => {
      if (prev === 0) {
        return total - 1;
      }

      return prev - 1;
    });
  };

  // AUTO SLIDE
  useEffect(() => {
    if (paused) {
      return;
    }

    const timer = setInterval(() => {
      setCurrent((prev) => {
        if (prev === total - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [paused, total]);

  const currentTestimonial = testimonials[current];

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Section heading */}
      <div
        className={`
          bg-tertiary
          rounded-2xl
          ${styles.padding}
          min-h-[260px]
        `}
      >
        <p className={styles.sectionSubText}>
          What others say
        </p>

        <h2 className={styles.sectionHeadText}>
          Recommendations.
        </h2>

        <p className="mt-4 text-secondary text-[14px]">
          Recommendations from colleagues and technical leaders.
        </p>
      </div>

      {/* Slider */}
      <div
        className={`
          -mt-16
          pb-14
          ${styles.paddingX}
        `}
      >
        <div
          className="
            relative
            max-w-3xl
            mx-auto
          "
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* CARD */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -50,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <FeedbackCard
                {...currentTestimonial}
              />
            </motion.div>
          </AnimatePresence>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous recommendation"
            className="
              absolute
              left-[-15px]
              sm:left-[-25px]
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              sm:w-12
              sm:h-12
              rounded-full
              bg-[#915EFF]
              hover:bg-[#7c4dff]
              text-white
              text-2xl
              flex
              items-center
              justify-center
              shadow-lg
              z-20
              transition-all
            "
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next recommendation"
            className="
              absolute
              right-[-15px]
              sm:right-[-25px]
              top-1/2
              -translate-y-1/2
              w-10
              h-10
              sm:w-12
              sm:h-12
              rounded-full
              bg-[#915EFF]
              hover:bg-[#7c4dff]
              text-white
              text-2xl
              flex
              items-center
              justify-center
              shadow-lg
              z-20
              transition-all
            "
          >
            ›
          </button>
        </div>

        {/* Counter */}
        <div className="flex flex-col items-center mt-7">
          <p className="text-white text-[13px]">
            Recommendation{" "}
            <span className="text-[#915EFF] font-bold">
              {current + 1}
            </span>{" "}
            of{" "}
            <span className="text-[#915EFF] font-bold">
              {total}
            </span>
          </p>

          {/* Progress bar */}
          <div className="w-[180px] sm:w-[250px] h-[3px] bg-white/10 rounded-full mt-3 overflow-hidden">
            <motion.div
              className="h-full bg-[#915EFF]"
              animate={{
                width: `${((current + 1) / total) * 100}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(
  Feedbacks,
  "recommendations"
);
