// import { useState } from 'react';

import './index.css';

const Board = () => {

    return (
        <div className='board'>
            <div id='1' className='row'>
                <div id='a1' className='square dark'></div>
                <div id='b1' className='square light'></div>
                <div id='c1' className='square dark'></div>
                <div id='d1' className='square light'></div>
                <div id='e1' className='square dark'></div>
                <div id='f1' className='square light'></div>
                <div id='g1' className='square dark'></div>
                <div id='h1' className='square light'></div>
            </div>
            <div id='2' className='row'>
                <div id='a2' className='square light'></div>
                <div id='b2' className='square dark'></div>
                <div id='c2' className='square light'></div>
                <div id='d2' className='square dark'></div>
                <div id='e2' className='square light'></div>
                <div id='f2' className='square dark'></div>
                <div id='g2' className='square light'></div>
                <div id='h2' className='square dark'></div>
            </div>
            <div id='3' className='row'>
                <div id='a3' className='square dark'></div>
                <div id='b3' className='square light'></div>
                <div id='c3' className='square dark'></div>
                <div id='d3' className='square light'></div>
                <div id='e3' className='square dark'></div>
                <div id='f3' className='square light'></div>
                <div id='g3' className='square dark'></div>
                <div id='h3' className='square light'></div>
            </div>
            <div id='4' className='row'>
                <div id='a4' className='square light'></div>
                <div id='b4' className='square dark'></div>
                <div id='c4' className='square light'></div>
                <div id='d4' className='square dark'></div>
                <div id='e4' className='square light'></div>
                <div id='f4' className='square dark'></div>
                <div id='g4' className='square light'></div>
                <div id='h4' className='square dark'></div>
            </div>
            <div id='5' className='row'>
                <div id='a5' className='square dark'></div>
                <div id='b5' className='square light'></div>
                <div id='c5' className='square dark'></div>
                <div id='d5' className='square light'></div>
                <div id='e5' className='square dark'></div>
                <div id='f5' className='square light'></div>
                <div id='g5' className='square dark'></div>
                <div id='h5' className='square light'></div>
            </div>
            <div id='6' className='row'>
                <div id='a6' className='square light'></div>
                <div id='b6' className='square dark'></div>
                <div id='c6' className='square light'></div>
                <div id='d6' className='square dark'></div>
                <div id='e6' className='square light'></div>
                <div id='f6' className='square dark'></div>
                <div id='g6' className='square light'></div>
                <div id='h6' className='square dark'></div>
            </div>
            <div id='7' className='row'>
                <div id='a7' className='square dark'></div>
                <div id='b7' className='square light'></div>
                <div id='c7' className='square dark'></div>
                <div id='d7' className='square light'></div>
                <div id='e7' className='square dark'></div>
                <div id='f7' className='square light'></div>
                <div id='g7' className='square dark'></div>
                <div id='h7' className='square light'></div>
            </div>
            <div id='8' className='row'>
                <div id='a8' className='square light'></div>
                <div id='b8' className='square dark'></div>
                <div id='c8' className='square light'></div>
                <div id='d8' className='square dark'></div>
                <div id='e8' className='square light'></div>
                <div id='f8' className='square dark'></div>
                <div id='g8' className='square light'></div>
                <div id='h8' className='square dark'></div>
            </div>
        </div>
    )
}

export default Board;