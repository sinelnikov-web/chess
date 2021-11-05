import React from 'react';
import './Board.scss'

const Board = () => {
    let arr: Array<number[]> = []
    for (let i = 0; i < 8; i++) {
        arr.push([])
        for (let j = 0; j < 8; j++) {
            arr[i].push(j)
        }
    }
    return (
        <div className={'board'}>
            <div className="container">
                <div className="board__inner">
                   <div className="board__field">
                       {arr.map((row, index) => {
                           return(
                               <>
                                   {row.map((cell) => {
                                       return(
                                           <div key={index + cell} className={`board__cell ${(index + cell) % 2 === 0 ? 'board__cell-light' : 'board__cell--dark'}`}>

                                           </div>
                                       )
                                   })}
                               </>
                           )
                       })}
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Board;