import React, { useRef, useState } from "react";
import styles from "./quizForm.module.scss";
import defaultFields from "./defaultFields";
import { isEmptyObject } from "../../../helpers/misc/is";
import { getFieldsAfterChange } from "../../../helpers/forms";
import questions from "./questions";

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add validation and prevent submission if form has errors

    for (let key in fields) {
      const _field = fields[key];

      // If a question is not answered just ignore it
      if (_field.value == null) {
        // alert("Please answer all questions.");
        // return;
        continue;
      }

      const questionId = _field.name.split("_")[1];
      const score =
        questions.find((q) => q.id == questionId).options[_field.value].score ||
        {};

      for (let key in score) {
        const points = score[key];
        results[key.toLowerCase()] += points;
      }
    }

    let maxKey = Object.keys(results)[0];
    for (let key in results) {
      if (results[key] > results[maxKey]) {
        maxKey = key;
      }
    }

    // Show user message
    alert(`
    Your personality type is
        ${maxKey.toUpperCase()}
    Detailed results
        Realistic: ${results.realistic}
        Investigative: ${results.investigative}
        Artistic: ${results.artistic}
        Social: ${results.social}
        Enterprising: ${results.enterprising}
        Conventional: ${results.conventional}
    `);
    console.log(results);

    // Reset results but don't reset the form so the user can check the answers even after submission
    results = { ...defaultResults };

    // Clear selected data
    // const form = formRef.current;
    // form.reset();
    // setFields(defaultFields);
  };

  return (
    <form ref={formRef}>
      {renderQuestions()}
      <button onClick={handleSubmit} className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default QuizForm;
