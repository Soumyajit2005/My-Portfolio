import React from "react";
import {Tilt} from "react-tilt";
import { useSpring, animated } from "@react-spring/web";
import { motion } from "framer-motion";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const springProps = useSpring({
    to: { opacity: 1, transform: "scale(1)" },
    from: { opacity: 0, transform: "scale(0.9)" },
    config: { tension: 200, friction: 20 },
  });

  return (
    <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
      <animated.div style={springProps} className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.description}>{description}</p>
          <ul className={styles.skills}>
            {skills.map((skill, id) => (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
          <div className={styles.links}>
            <a href={demo} className={styles.link} target="_blank">
              Demo
            </a>
            <a href={source} className={styles.link} target="_blank">
              Source
            </a>
          </div>
        </motion.div>
      </animated.div>
    </Tilt>
  );
};

export default ProjectCard;