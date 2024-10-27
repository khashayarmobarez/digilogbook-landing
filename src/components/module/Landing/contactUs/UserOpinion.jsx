'use client'

import { useState } from "react";
import InputWithIcon from "../Inputs/InputWithIcon";

const UserOpinion = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [Comment, setComment] = useState('');

    return (
        <div className="flex w-full h-full flex-col gap-y-4 text-primaryDarker">

            <InputWithIcon placeHolder={'نام'} />
            <InputWithIcon placeHolder={'ایمیل'} />
            
        </div>
    );
};

export default UserOpinion;