'use client'

import { Api_BASE_URL } from "@/utils/resuableVars";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

// comps
import InputWithIcon from "../Inputs/InputWithIcon";
import MailIcon from "@/Assets/Icons/MailIcon";
import TextArea from "@/components/module/Inputs/TextArea";

const UserOpinion = ({className}) => {
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
                title: "Please fill out all fields",
                confirmButtonText: 'OK'
            });
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Swal.fire({
                icon: "error",
                title: "Please enter a valid email",
                confirmButtonText: 'OK'
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
                title: 'Submitted!',
                text: 'Your comment has been successfully submitted.',
                icon: 'success',
                confirmButtonText: 'OK'
            });

        } catch (err) {
            setError(err.response?.data?.message || 'Error submitting comment');
            Swal.fire({
                icon: "error",
                title: "Error submitting comment",
                text: err.response?.data?.message || 'Error submitting comment',
                confirmButtonText: 'OK'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={`flex w-full h-full flex-col gap-y-4 text-primaryDarker ${className}`}>
            <p>Share your opinions with us</p>
            
            {error && (
                <div className="text-red-500 text-sm">
                    {error}
                </div>
            )}

            <InputWithIcon 
                containerClassName={''}
                placeHolder={'Name'} 
                value={username} 
                onChange={handleUsernameChange}
                disabled={isSubmitting}
            />
            <InputWithIcon 
                placeHolder={'Email'} 
                value={email} 
                onChange={handleEmailChange}
                disabled={isSubmitting}
                icon={<MailIcon color={'var(--neutral-dark)'} />} 
            />
            <TextArea 
                value={comment} 
                placeholder={'Your comment...'} 
                onChange={handleCommentChange}
                disabled={isSubmitting}
            />
            <button 
                className={`btn btn-success text-primaryLight rounded-3xl bg-accentNormal md:mt-[14px] ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                onClick={handleSubmit}
                disabled={isSubmitting}
            >
                {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
        </div>
    );
};

export default UserOpinion;
