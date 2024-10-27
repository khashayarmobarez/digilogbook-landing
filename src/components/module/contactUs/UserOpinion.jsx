'use client'

import { Api_BASE_URL } from "@/utils/resuableVars";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

// comps
import InputWithIcon from "../Inputs/InputWithIcon";
import MailIcon from "@/Assets/Icons/MailIcon";
import TextArea from "@/components/module/Inputs/TextArea";

const UserOpinion = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const addGeneralComment = async (commentData) => {
        const response = await axios.post(`${Api_BASE_URL}/GeneralComment/AddGeneralComment`, commentData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    };

    const handleSubmit = async () => {
        // Basic validation
        if (!username.trim() || !email.trim() || !comment.trim()) {
            Swal.fire({
                icon: "error",
                title: "لطفا همه فیلدها را پر کنید",
                // text: "لطفا ایمیل خود را وارد کنید",
                confirmButtonText: 'مشکلی نیست'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "لطفا یک ایمیل معتبر وارد کنید",
                // text: "لطفا ایمیل خود را وارد کنید",
                confirmButtonText: 'مشکلی نیست'
              });
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            const commentData = {
                FullName: username,
                email: email,
                comment: comment
            };

            const result = await addGeneralComment(commentData);
            
            // Clear form after successful submission
            setUsername('');
            setEmail('');
            setComment('');
            
            // You might want to show a success message
            Swal.fire({
                title: 'ثبت شد!',
                text: 'نظر شما با موفقیت ثبت شد.',
                icon: 'success',
                confirmButtonText: 'باشه'
            });

        } catch (err) {
            setError(err.response?.data?.message || 'خطا در ارسال نظر');
            Swal.fire({
                icon: "error",
                title: "خطا در ارسال نظر",
                text: err.response?.data?.message || 'خطا در ارسال نظر',
                confirmButtonText: 'مشکلی نیست'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex w-full h-full flex-col gap-y-6 text-primaryDarker">
            <p>نظرات خود را با ما در میان بگذارید</p>
            
            {error && (
                <div className="text-red-500 text-sm">
                    {error}
                </div>
            )}

            <InputWithIcon 
                placeHolder={'نام'} 
                value={username} 
                onChange={handleUsernameChange}
                disabled={isSubmitting}
            />
            <InputWithIcon 
                placeHolder={'ایمیل'} 
                value={email} 
                onChange={handleEmailChange}
                disabled={isSubmitting}
                icon={<MailIcon color={'var(--neutral-dark)'} />} 
            />
            <TextArea 
                value={comment} 
                placeholder={'نظر شما...'} 
                onChange={handleCommentChange}
                disabled={isSubmitting}
            />
            <button 
                className={`btn btn-success text-primaryLight rounded-3xl bg-accentNormal ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleSubmit}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'در حال ارسال...' : 'ارسال'}
            </button>
        </div>
    );
};

export default UserOpinion;