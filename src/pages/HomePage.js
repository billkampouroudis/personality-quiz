import React from "react";
import QuizForm from "../components/forms/quizForm/QuizForm";
import BasicLayout from "../components/layouts/basicLayout/BasicLayout";

function HomePage() {
  return (
    <BasicLayout>
      <QuizForm />
    </BasicLayout>
  );
}

export default HomePage;
