import React, { useRef, useState } from "react";
import styles from "./quizForm.module.scss";
import defaultFields from "./defaultFields";
import { isEmptyObject } from "../../../helpers/misc/is";
import { getFieldsAfterChange } from "../../../helpers/forms";
import questions, { choices } from "./questions";

const defaultResults = {
  realistic: 0,
  investigative: 0,
  artistic: 0,
  social: 0,
  enterprising: 0,
  conventional: 0,
};

let results = { ...defaultResults };

const QuizForm = () => {
  const [fields, setFields] = useState(defaultFields);
  const formRef = useRef();

  const renderOptions = (field) => {
    const options = field.options;

    return options?.map((option) => (
      <div className={styles.option} key={option.id}>
        <input
          type="radio"
          id={option.id}
          name={field.name}
          value={option.value}
          onChange={(e) =>
            setFields(getFieldsAfterChange(e.target.value, field, fields))
          }
        />
        <label className={styles.optionText} htmlFor={option.id}>
          {option.label}
        </label>
      </div>
    ));
  };

  const renderQuestions = () => {
    if (isEmptyObject(fields)) {
      return null;
    }

    return Object.keys(fields).map((key) => (
      <div className={styles.question} key={fields[key].name}>
        <label className={styles.questionText}>{fields[key].label}</label>
        {renderOptions(fields[key])}
      </div>
    ));
  };

  // Finds the points of the answer that the user gave for a specific question
  const findScore = (field) => {
    const questionId = field.name.split("_")[1];

    if (!questions.find((q) => q.id == questionId)) {
      return {};
    }

    const category = questions.find((q) => q.id == questionId).category;
    const points = choices[field.value].score; // Get the points that should be added to the category

    if (category && points >= 0) {
      return { [category]: points };
    }

    return {};
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let pointsUpdated = false; // Flag to know if

    for (let key in fields) {
      const _field = fields[key];

      // If a question is not answered just ignore it and continue to the next one
      if (_field.value == null) {
        continue;
      }

      const score = findScore(_field);

      // If the current answer does not add points to any type, continue to the next one.
      if (isEmptyObject(score)) {
        continue;
      }

      for (let key in score) {
        const points = score[key];
        results[key.toLowerCase()] += points;
      }

      // If we reach this step, we know that some points were added to a certain type
      if (!pointsUpdated) {
        pointsUpdated = true;
      }
    }

    if (!pointsUpdated) {
      alert("Please answer some more questions to get a result 😊");
      return;
    }

    // Find dominant personality type(s)
    let maxKey = Object.keys(results)[0];
    let dominantTypes = []; // There can be more than one dominant type (have the same score).
    for (let key in results) {
      if (results[key] > results[maxKey]) {
        maxKey = key;
        dominantTypes = [maxKey];
      } else if (results[key] === results[maxKey]) {
        dominantTypes.push(key);
      }
    }

    // Show user message
    console.log(results);

    alert(`
    Your personality is
        ${dominantTypes.join(", ").toUpperCase()}
    Detailed results
        Realistic: ${results.realistic}
        Investigative: ${results.investigative}
        Artistic: ${results.artistic}
        Social: ${results.social}
        Enterprising: ${results.enterprising}
        Conventional: ${results.conventional}
    `);

    // Reset results but don't reset the form so the user can check the answers even after submission
    results = { ...defaultResults };
  };

  const handleClear = (e) => {
    e.preventDefault();

    // Clear selected data
    const form = formRef.current;
    form.reset();
    setFields(defaultFields);
  };

  return (
    <>
      <h1>Personality Quiz</h1>
      <form ref={formRef}>
        {renderQuestions()}
        <button onClick={handleSubmit} className={styles.submitButton}>
          Submit
        </button>
        <button onClick={handleClear} className={styles.clearButton}>
          Clear
        </button>
      </form>
    </>
  );
};

export default QuizForm;
