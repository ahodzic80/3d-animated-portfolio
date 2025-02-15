import React, { useRef, useState } from "react";
import "./services.css";
import ComputerModelContainer from "./computer/ComputerModelContainer";
import ConsoleModelContainer from "./console/ConsoleModelContainer";
import MugModelContainer from "./mug/MugModelContainer";
import Counter from "./Counter";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { motion, useInView } from "motion/react";

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  const [currentServiceId, setCurrentServiceId] = useState(1);

  const services = [
    {
      id: 1,
      img: "/service1.png",
      title: "Web Development",
      counter: 35,
    },
    {
      id: 2,
      img: "/service2.png",
      title: "Product Design",
      counter: 23,
    },
    {
      id: 3,
      img: "/service3.png",
      title: "Branding",
      counter: 46,
    },
  ];

  const textVariants = {
    initial: {
      x: -100,
      y: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const listVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.5,
      },
    },
  };

  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          How can I help?
        </motion.h1>
        <motion.div
          className="serviceList"
          variants={listVariants}
          animate={isInView ? "animate" : "initial"}
        >
          {services.map((service) => (
            <motion.div
              className="service"
              key={service.id}
              variants={listVariants}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={104} text="Projects Completed" />
          <Counter from={0} to={72} text="Happy Clients" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <ComputerModelContainer />
        ) : currentServiceId === 2 ? (
          <MugModelContainer />
        ) : (
          <ConsoleModelContainer />
        )}
      </div>
    </div>
  );
};

export default Services;
