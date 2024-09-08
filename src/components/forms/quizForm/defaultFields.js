import questions from "./questions";

const defaultFields = {
  // Sample field
  //
  // question_1: {
  //   name: "",
  //   label: "",
  //   value: "",
  //   rules: {},
  //   options: [],
  //   errorMessage: "",
  // },
};

for (const [index, question] of questions.entries()) {
  // Ex. question_1
  const questionName = `question_${question.id}`;

  defaultFields[questionName] = {
    name: questionName,
    label: `${index + 1}. ${question.text}`,
    value: null,
    rules: {},
    options: [],
    errorMessage: "",
  };

  // Add options to the current field
  for (let [index, option] of question.options.entries()) {
    defaultFields[questionName].options.push({
      id: `option_${option.id}`,
      label: option.label,
      value: index,
    });
  }
}

export default defaultFields;
