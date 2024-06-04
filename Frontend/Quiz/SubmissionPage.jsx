import React, {useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SubmissionPage () {
    const navigate = useNavigate();
    const {state} = useLocation();

    const backToPrevious = () => {
        const lastQuestionIndex = state.userAnswers.length;
        navigate(`/Quiz/TakeQuiz/${lastQuestionIndex}`, { state });
    };

    const questions = state.questions;
    const answers = state.answers;
    const userAnswers = state.userAnswers;
    const rightAnswers = state.rightAnswers;

    const submit = async () => {
        try {
            navigate('/Quiz/ScorePage', { state: { questions, answers, userAnswers, rightAnswers } });
        } catch (error) {
            console.error('Error submitting answers:', error);
            alert('There was an error submitting your answers. Please try again.');
        }
    };

    return (
        <>
            <header>
                <button className="backButton" onClick={backToPrevious}>
                    Back
                </button>
                <h1>
                    Quiz Completed!
                </h1>
            </header>
            <main>
                <h2>
                    You have succesfully completed all questions, would you like to submit your answers?
                </h2>
                <button onClick={submit}>
                    Submit
                </button>
            </main>
        </>
    )
}
