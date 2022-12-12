import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from 'framer-motion';

const StyledForm = styled.form`
    position: relative;

    width: 500px;
    height: 600px;

    background-color: #2D3436;

    border-radius: 5px;
    padding: 10px;

    input{
        width: 90%;
        height: 50px;

        position: absolute;
        top: 50%;
        left: 50%;
        translate: -50% -50%;
    }
`;


const Stepper = () => {
    const [currentPosition, setCurrentPosition] = useState(1);

    const handleClick = (e) => {
        e.preventDefault();
        if (e.target.value === "next") return setCurrentPosition(currentPosition + 1);
        if (e.target.value === "back") return setCurrentPosition(currentPosition - 1);
        return;
    };

    return (
        <StyledForm>

            <AnimatePresence>{currentPosition === 1 && <motion.input initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} type="email" required placeholder="Email" />}</AnimatePresence>
            <AnimatePresence>{currentPosition === 2 && <motion.input initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} type="text" placeholder="Username" />}</AnimatePresence>
            <AnimatePresence>{currentPosition === 3 && <motion.input initial={{ opacity: 0, }} animate={{ opacity: 1, }} exit={{ opacity: 0, }} type="password" placeholder="Password" />}</AnimatePresence>


            {currentPosition >= 2 && <button type={"submit"} onClick={(e) => handleClick(e)} value="back">BACK</button>}
            {currentPosition < 3 && <button type={"submit"} onClick={(e) => handleClick(e)} value="next">NEXT</button>}
            {currentPosition === 3 && <button type={"submit"} onClick={(e) => handleClick(e)} value="send">SEND</button>}
        </StyledForm>
    );
}

export default Stepper;