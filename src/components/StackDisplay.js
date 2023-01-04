import React from 'react'
import Node from '../assets/image/node.png';
import ReactIcon from '../assets/image/react.png';
import php from '../assets/image//php.png';
import js from '../assets/image/js.png';
import StackIcon from './StackIcon';
import ci from '../assets/image/ci.png';
import mysqlIcon from '../assets/image/mysql.png';
import mongoIcon from '../assets/image/mongodb.png';

const StackDisplay = ({ heroMode }) => {
    return (
        <>
            <StackIcon image={Node} alt={"Node"} />
            <StackIcon image={ReactIcon} alt={"React"} />
            <StackIcon image={js} alt={"Javascript"} />
            <StackIcon image={mongoIcon} alt={"MongoDB"} />
            <StackIcon image={php} alt={"php"} />
            {heroMode && <div className='xl:hidden'></div>}
            <StackIcon image={ci} alt={"CI"} />
            {heroMode && <div className='xl:hidden'></div>}
            {heroMode && <div className='xl:hidden'></div>}
            <StackIcon image={mysqlIcon} alt={"MySql"} />
        </>
    )
}

export default StackDisplay
