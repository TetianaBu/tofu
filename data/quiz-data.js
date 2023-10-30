export const QUIZ_DATA = {
  initial: {
    text: "Do you have some tofu or just come to take a look?",
  },
  detailed: [
    {
      text: "Take a look",
      subQuestions: [
        {
          text: "Knowledge",
          action: {
            message: "Moving to the About",
            link: "/blog/learn",
          },
        },
        {
          text: "Inspiration",
          action: {
            message: "Moving to the Inspo",
            link: "/blog/inspo",
          },
        },
      ],
    },
    {
      text: "I do",
      subQuestions: [
        {
          text: "Go to the database",
          action: {
            message: "Moving to the DB",
            link: "/finder/database",
          },
        },
        {
          text: "Choose by firmness",
          action: {
            message: "Moving to the Firmness",
            link: "/finder/firmness",
          },
        },
      ],
    },
  ],
};
