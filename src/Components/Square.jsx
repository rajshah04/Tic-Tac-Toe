import React from 'react';

const Square = ({ value, no, onclick }) => {

    return (
        <div className=''>
            <button onClick={onclick} className={`w-40 h-40 text-9xl border border-black ${no === 0 ? "rounded-tl-3xl" : ""} ${no === 2 ? "rounded-tr-3xl" : ""} ${no === 6 ? "rounded-bl-3xl" : ""} ${no === 8 ? "rounded-br-3xl" : ""} flex items-center justify-center `}>
                {value}
            </button>
        </div>
    )
}

export default Square