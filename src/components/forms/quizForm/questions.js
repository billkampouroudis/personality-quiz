const questions = [
  // Realistic
  {
    id: 1,
    text: "Do you enjoy working with tools, or machines?",
    options: [
      {
        id: 1,
        label: "Yes, I love working with tools and machines.",
        score: { Realistic: 4 },
      },
      {
        id: 2,
        label: "I don't mind it, but it's not my favorite thing.",
        score: { Realistic: 2 },
      },
      {
        id: 3,
        label: "No, I prefer activities that involve creativity or analysis.",
        score: { Realistic: 0 },
      },
    ],
  },
  {
    id: 2,
    text: "Do you prefer working outdoors rather than in an office?",
    options: [
      {
        id: 4,
        label: "Yes, I enjoy being outdoors much more than being in an office.",
        score: { Realistic: 4 },
      },
      {
        id: 5,
        label: "Sometimes, but I don’t mind office work.",
        score: { Realistic: 2 },
      },
      {
        id: 6,
        label: "No, I prefer working indoors.",
        score: { Realistic: 0 },
      },
    ],
  },
  {
    id: 3,
    text: "Do you enjoy fixing or repairing things, like vehicles, appliances, or furniture?",
    options: [
      {
        id: 7,
        label:
          "Yes, I love working with my hands and solving practical problems.",
        score: { Realistic: 4 },
      },
      {
        id: 8,
        label:
          "Sometimes, but only when necessary or when I have the right tools.",
        score: { Realistic: 2 },
      },
      {
        id: 9,
        label: "No, I prefer other types of activities.",
        score: { Realistic: 0 },
      },
    ],
  },
  {
    id: 4,
    text: "Do you enjoy a job that involves nature or animals?",
    options: [
      {
        id: 10,
        label:
          "Yes, I love working outdoors and being around nature or animals.",
        score: { Realistic: 4 },
      },
      {
        id: 11,
        label: "Sometimes, but I also like indoor work.",
        score: { Realistic: 2 },
      },
      {
        id: 12,
        label: "No, I prefer working in an office or other indoor settings.",
        score: { Realistic: 0 },
      },
    ],
  },
  {
    id: 5,
    text: "Do you enjoy working with mechanical systems, like engines or electrical circuits?",
    options: [
      {
        id: 13,
        label:
          "Yes, I love working with and understanding how machines and systems operate.",
        score: { Realistic: 4 },
      },
      {
        id: 14,
        label: "Sometimes, but only when I need to fix something.",
        score: { Realistic: 2 },
      },
      {
        id: 15,
        label:
          "No, I prefer tasks that don't involve mechanical systems or technical work.",
        score: { Realistic: 0 },
      },
    ],
  },

  // Investigative
  {
    id: 6,
    text: "Do you enjoy researching and analyzing information?",
    options: [
      {
        id: 16,
        label: "Yes, I enjoy conducting research and analysis.",
        score: { Investigative: 4 },
      },
      {
        id: 17,
        label: "Sometimes, if the topic interests me.",
        score: { Investigative: 2 },
      },
      {
        id: 18,
        label: "No, I prefer other activities.",
        score: { Investigative: 0 },
      },
    ],
  },
  {
    id: 7,
    text: "Do you enjoy solving complex problems?",
    options: [
      {
        id: 19,
        label: "Yes, I like digging into details and figuring things out.",
        score: { Investigative: 4 },
      },
      {
        id: 20,
        label: "Sometimes, depending on the problem.",
        score: { Investigative: 2 },
      },
      {
        id: 21,
        label: "No, I prefer simpler or more creative tasks.",
        score: { Investigative: 0 },
      },
    ],
  },
  {
    id: 8,
    text: "Do you enjoy reading books or researching topics of interest in your free time?",
    options: [
      {
        id: 22,
        label: "Yes, I often spend my free time reading or researching.",
        score: { Investigative: 4 },
      },
      {
        id: 23,
        label: "Sometimes, but I also enjoy other activities.",
        score: { Investigative: 2 },
      },
      {
        id: 24,
        label: "No, I prefer more active or social hobbies.",
        score: { Investigative: 0 },
      },
    ],
  },
  {
    id: 9,
    text: "Do you enjoy solving complex puzzles or problems that others may find challenging?",
    options: [
      {
        id: 25,
        label:
          "Yes, I love tackling complex problems and solving them step by step.",
        score: { Investigative: 4 },
      },
      {
        id: 26,
        label:
          "It depends on the problem; if it's something that intrigues me, then maybe yes.",
        score: { Investigative: 2 },
      },
      {
        id: 27,
        label:
          "I don't like puzzles that feel overly complicated or time-consuming.",
        score: { Investigative: 0 },
      },
    ],
  },
  {
    id: 10,
    text: "Do you prefer working on tasks that involve logic, data, or evidence rather than relying on intuition or emotions?",
    options: [
      {
        id: 28,
        label: "Yes, I enjoy solving logical or data-driven tasks.",
        score: { Investigative: 4 },
      },
      {
        id: 29,
        label: "It depends on the task; if it's interesting, I might enjoy it.",
        score: { Investigative: 2 },
      },
      {
        id: 30,
        label:
          "No, I prefer tasks that don’t require detailed logic or analysis.",
        score: { Investigative: 0 },
      },
    ],
  },

  // Artistic

  {
    id: 11,
    text: "Do you enjoy creating art, music, or writing?",
    options: [
      {
        id: 31,
        label: "Yes, I love expressing myself through art, music, or writing.",
        score: { Artistic: 4 },
      },
      {
        id: 32,
        label: "Sometimes, but it’s not something I do often.",
        score: { Artistic: 2 },
      },
      {
        id: 33,
        label: "No, I prefer more practical activities.",
        score: { Artistic: 0 },
      },
    ],
  },
  {
    id: 12,
    text: "Do you enjoy performing in front of other people, such as acting or playing music?",
    options: [
      {
        id: 34,
        label: "Yes, I love performing and being in the spotlight.",
        score: { Artistic: 4 },
      },
      {
        id: 35,
        label: "Sometimes, but I get nervous.",
        score: { Artistic: 2 },
      },
      {
        id: 36,
        label: "No, I prefer to stay behind the scenes.",
        score: { Artistic: 0 },
      },
    ],
  },
  {
    id: 13,
    text: "Do you enjoy working on projects that allow you to express your emotions or ideas?",
    options: [
      {
        id: 37,
        label:
          "Yes, I find it fulfilling to express my feelings through my work.",
        score: { Artistic: 4 },
      },
      {
        id: 38,
        label: "Sometimes, but it’s not always necessary.",
        score: { Artistic: 2 },
      },
      {
        id: 39,
        label:
          "No, I prefer projects that are more objective and less personal.",
        score: { Artistic: 0 },
      },
    ],
  },
  {
    id: 14,
    text: "Do you enjoy using imagination to solve problems or think of new concepts?",
    options: [
      {
        id: 40,
        label:
          "Yes, I love using my imagination to come up with innovative solutions.",
        score: { Artistic: 4 },
      },
      {
        id: 41,
        label: "Sometimes, but I prefer more practical approaches.",
        score: { Artistic: 2 },
      },
      {
        id: 42,
        label: "No, I prefer solving problems with well-established methods.",
        score: { Artistic: 0 },
      },
    ],
  },
  {
    id: 15,
    text: "When you cook or prepare meals, do you enjoy experimenting with new recipes or ingredients?",
    options: [
      {
        id: 43,
        label:
          "Yes, I love being creative in the kitchen and trying new things.",
        score: { Artistic: 4 },
      },
      {
        id: 44,
        label: "Sometimes, but I often stick to familiar recipes.",
        score: { Artistic: 2 },
      },
      {
        id: 45,
        label: "No, I prefer following recipes exactly as they are.",
        score: { Artistic: 0 },
      },
    ],
  },

  // Social

  {
    id: 16,
    text: "Do you enjoy helping others by teaching, mentoring, or guiding people?",
    options: [
      {
        id: 46,
        label: "Yes, I find it very rewarding.",
        score: { Social: 4 },
      },
      {
        id: 47,
        label: "Sometimes, but it depends on the situation.",
        score: { Social: 2 },
      },
      {
        id: 48,
        label: "No, I prefer working on my own tasks.",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 17,
    text: "Do you enjoy volunteering or helping people in need?",
    options: [
      {
        id: 49,
        label:
          "Yes, I find it very rewarding to support and help other people.",
        score: { Social: 4 },
      },
      {
        id: 50,
        label: "Sometimes, but it depends on the situation.",
        score: { Social: 2 },
      },
      {
        id: 51,
        label:
          "No, I prefer making a difference in my own way, even if it's not directly through volunteering.",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 18,
    text: "Do you enjoy interacting with customers or clients in a service setting?",
    options: [
      {
        id: 52,
        label: "Yes, I like working with people and helping them.",
        score: { Social: 4 },
      },
      {
        id: 53,
        label: "Sometimes, but I prefer working behind the scenes.",
        score: { Social: 2 },
      },
      {
        id: 54,
        label: "No, I prefer working with things rather than people.",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 19,
    text: "Do you enjoy working in roles that require empathy and understanding of others' emotions?",
    options: [
      {
        id: 55,
        label:
          "Yes, I excel at understanding and supporting others emotionally.",
        score: { Social: 4 },
      },
      {
        id: 56,
        label:
          "Sometimes, but I prefer tasks that require less emotional involvement.",
        score: { Social: 2 },
      },
      {
        id: 57,
        label:
          "No, I find it challenging to work in roles that require high emotional empathy.",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 20,
    text: "Do you enjoy building relationships with clients, colleagues, or peers?",
    options: [
      {
        id: 58,
        label: "Yes, I enjoy forming connections and building relationships.",
        score: { Social: 4 },
      },
      {
        id: 59,
        label: "Sometimes, but I also appreciate working independently.",
        score: { Social: 2 },
      },
      {
        id: 60,
        label:
          "No, I prefer to focus on my tasks rather than building relationships.",
        score: { Social: 0 },
      },
    ],
  },

  // Enterprising

  {
    id: 21,
    text: "Do you enjoy leading teams and persuading others to follow your ideas or plans?",
    options: [
      {
        id: 61,
        label: "Yes, I enjoy taking the lead and influencing others.",
        score: { Enterprising: 4 },
      },
      {
        id: 62,
        label: "Sometimes, but only when necessary.",
        score: { Enterprising: 2 },
      },
      {
        id: 63,
        label: "No, I prefer not to take on leadership roles.",
        score: { Enterprising: 0 },
      },
    ],
  },
  {
    id: 22,
    text: "Are you good with making decisions?",
    options: [
      {
        id: 64,
        label: "Yes, I like taking charge and making decisions.",
        score: { Enterprising: 4 },
      },
      {
        id: 65,
        label: "Sometimes, but I prefer collaborating rather than leading.",
        score: { Enterprising: 2 },
      },
      {
        id: 66,
        label: "No, I prefer to follow instructions.",
        score: { Enterprising: 0 },
      },
    ],
  },
  {
    id: 23,
    text: "Would you speak or give presentations to an audience easily?",
    options: [
      {
        id: 67,
        label: "Yes, I am fine with that.",
        score: { Enterprising: 4 },
      },
      {
        id: 68,
        label: "Sometimes, but it depends on the situation or the topic.",
        score: { Enterprising: 2 },
      },
      {
        id: 69,
        label: "No, I don’t like being in the spotlight.",
        score: { Enterprising: 0 },
      },
    ],
  },
  {
    id: 24,
    text: "Do you easily take risks to achieve a goal, whether in business or personal projects?",
    options: [
      {
        id: 70,
        label: "Yes, nothing can stop me from achieving my goals.",
        score: { Enterprising: 4 },
      },
      {
        id: 71,
        label: "Sometimes, but only if really needed.",
        score: { Enterprising: 2 },
      },
      {
        id: 72,
        label: "No, I prefer safer approaches.",
        score: { Enterprising: 0 },
      },
    ],
  },
  {
    id: 25,
    text: "Do you enjoy setting up new projects or businesses from scratch?",
    options: [
      {
        id: 73,
        label: "Yes, I find it exciting to start new ventures.",
        score: { Enterprising: 4 },
      },
      {
        id: 74,
        label: "Sometimes, but I prefer to join established projects.",
        score: { Enterprising: 2 },
      },
      {
        id: 75,
        label: "No, I prefer maintaining and improving existing systems.",
        score: { Enterprising: 0 },
      },
    ],
  },

  // Conventional

  {
    id: 26,
    text: "Do you enjoy working with numbers, charts, or spreadsheets?",
    options: [
      {
        id: 76,
        label: "Yes, I enjoy working with numbers and data.",
        score: { Conventional: 4 },
      },
      {
        id: 77,
        label: "Sometimes, but only when necessary.",
        score: { Conventional: 2 },
      },
      {
        id: 78,
        label: "No, I prefer other types of work.",
        score: { Conventional: 0 },
      },
    ],
  },
  {
    id: 27,
    text: "Do you enjoy organizing files, schedules, or managing data?",
    options: [
      {
        id: 79,
        label:
          "Yes, I find it satisfying to keep things in order and well-organized.",
        score: { Conventional: 4 },
      },
      {
        id: 80,
        label: "Sometimes, but only when it’s necessary for a project.",
        score: { Conventional: 2 },
      },
      {
        id: 81,
        label: "No, I prefer more creative or hands-on tasks.",
        score: { Conventional: 0 },
      },
    ],
  },
  {
    id: 28,
    text: "Do you enjoy managing budgets or handling financial transactions?",
    options: [
      {
        id: 82,
        label: "Yes, I like working with numbers and managing finances.",
        score: { Conventional: 4 },
      },
      {
        id: 83,
        label: "Sometimes, but it can be stressful.",
        score: { Conventional: 2 },
      },
      {
        id: 84,
        label: "No, I prefer other types of tasks.",
        score: { Conventional: 0 },
      },
    ],
  },
  {
    id: 29,
    text: "Do you enjoy managing detailed documentation or reports?",
    options: [
      {
        id: 85,
        label: "Yes, I find it satisfying to keep detailed records.",
        score: { Conventional: 4 },
      },
      {
        id: 86,
        label: "Sometimes, but I also enjoy more varied tasks.",
        score: { Conventional: 2 },
      },
      {
        id: 87,
        label: "No, I prefer creative or practical activities.",
        score: { Conventional: 0 },
      },
    ],
  },
  {
    id: 30,
    text: "Do you enjoy working with procedures and guidelines to ensure accuracy?",
    options: [
      {
        id: 88,
        label:
          "Yes, I find following procedures important for achieving precise results.",
        score: { Conventional: 4 },
      },
      {
        id: 89,
        label: "Sometimes, but I prefer flexibility.",
        score: { Conventional: 2 },
      },
      {
        id: 90,
        label: "No, I prefer a more creative or less structured approach.",
        score: { Conventional: 0 },
      },
    ],
  },
];

export default questions;
