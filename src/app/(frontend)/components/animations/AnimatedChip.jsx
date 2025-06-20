"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AnimatedChip = () => {
  return (
    <div className="position-absolute top-0 z-3 w-100 d-flex align-items-center heroHeight justify-content-center ">
      <motion.div
        className="d-flex  align-items-center justify-content-center flex-column position-relative"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 2,
          delay: 1, // Stagger letters
        }}
      >
        <svg
          style={{ width: "26vw", height: "60vh" }}
          viewBox="0 0 415 415"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M362 207C362 292.604 292.604 362 207 362C121.396 362 52 292.604 52 207C52 121.396 121.396 52 207 52C292.604 52 362 121.396 362 207Z"
            fill="#010302"
          />
          <path
            d="M207 402.5C314.972 402.5 402.5 314.972 402.5 207C402.5 99.0283 314.972 11.5 207 11.5C99.0283 11.5 11.5 99.0283 11.5 207C11.5 314.972 99.0283 402.5 207 402.5ZM361.5 207C361.5 292.328 292.328 361.5 207 361.5C121.672 361.5 52.5 292.328 52.5 207C52.5 121.672 121.672 52.5 207 52.5C292.328 52.5 361.5 121.672 361.5 207Z"
            fill="#208C4E"
            stroke="#9E9E9E"
          />
          <circle
            cx="207.5"
            cy="207.5"
            r="201.5"
            stroke="#394641"
            strokeWidth="12"
          />
        </svg>
        {/* <motion.div className="frame position-absolute" /> */}
        <div className="frameChip1Wrapper position-absolute">
          <div className="frameChipBg1 chip3"></div>
          <div className="frameChipBg1 chip1"></div>
          <div className="frameChipBg1 chip2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedChip;
