import React from 'react';
import { useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import "../src/valuepicker.css";

const ValuePicker = () => {
    const values = [10, 20, 30, 40, 50];
    const controls = useAnimation();

    const [y, setY] = useState(0);

    const constraintsRef = useRef(null);

    const onDrag = (event, info) => {
        setY(info.point.y);
    };

    const onDragEnd = (event, info) => {
        const closestValue = // ... calculate closest value based on info.point.y ...
            controls.start({
                y: closestValue * -30, // Assuming 30px line height
            });
    };

    return (
        <div className="picker-container">
            <motion.ul
                className="value-list"
                ref={constraintsRef}
                style={{ y }}
                drag="y"
                dragConstraints={constraintsRef}
                onDrag={onDrag}
                dragElastic={0.3} // Adds some bounce
            // onDragEnd={onDragEnd}
            >
                {values.map((value, index) => (
                    <motion.li key={index}>{value}</motion.li>
                ))}
            </motion.ul>
        </div>
    );
};

export default ValuePicker;
