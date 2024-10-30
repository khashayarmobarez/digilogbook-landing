'use client'

import { useState } from "react";
import InputWithButtonInside from "../Inputs/InputWithButtonInside";


const CommentSection = () => {

  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Posted:', inputValue)
    setInputValue('')
  }

    return (
        <div className="w-full pb-10">
            <div className="w-full flex flex-col justify-center items-center">

                <div className="w-full flex justify-between">
                    <InputWithButtonInside 
                        inputValue={inputValue} 
                        setInputValue={setInputValue} 
                        handleSubmit={handleSubmit} 
                    />
                </div>

            </div>
        </div>
    );
};

export default CommentSection;