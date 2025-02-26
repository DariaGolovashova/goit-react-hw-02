import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import Description from "../Description/Description";
import Option from "../Options/Option";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    return savedFeedback || { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        resetFeedback={resetFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
