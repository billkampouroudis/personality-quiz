const questions = [
  {
    id: 1,
    text: "Do you enjoy working with your hands, tools, or machines?",
    options: [
      {
        id: 1,
        label: "Yes, I love working with tools and machines.",
        score: { Realistic: 3, Social: 0 },
      },
      {
        id: 2,
        label: "I don't mind it, but it's not my favorite thing.",
        score: { Realistic: 1, Social: 0 },
      },
      {
        id: 3,
        label: "No, I prefer activities that involve creativity or analysis.",
        score: { Realistic: 0, Social: 1 },
      },
    ],
  },
  {
    id: 2,
    text: "Do you enjoy solving puzzles or figuring out complex problems?",
    options: [
      {
        id: 4,
        label: "Yes, I love solving puzzles and complex problems.",
        score: { Investigative: 3, Conventional: 0 },
      },
      {
        id: 5,
        label: "Sometimes, depending on the problem.",
        score: { Investigative: 2, Conventional: 0 },
      },
      {
        id: 6,
        label: "No, I prefer tasks that are more straightforward.",
        score: { Investigative: 0, Conventional: 1 },
      },
    ],
  },
  {
    id: 3,
    text: "Do you enjoy creating art, music, or writing?",
    options: [
      {
        id: 7,
        label: "Yes, I love expressing myself through art, music, or writing.",
        score: { Artistic: 3, Conventional: 0 },
      },
      {
        id: 8,
        label: "Sometimes, but it’s not something I do often.",
        score: { Artistic: 1, Conventional: 0 },
      },
      {
        id: 9,
        label: "No, I prefer more practical activities.",
        score: { Artistic: 0, Conventional: 1 },
      },
    ],
  },
  {
    id: 4,
    text: "Do you enjoy helping others by teaching, mentoring or guiding people?",
    options: [
      {
        id: 10,
        label: "Yes, I find it very rewarding.",
        score: { Social: 2, Investigative: 0 },
      },
      {
        id: 11,
        label: "Sometimes, but it depends on the situation.",
        score: { Social: 1, Investigative: 0 },
      },
      {
        id: 12,
        label: "No, I prefer working on my own tasks.",
        score: { Social: 0, Investigative: 1 },
      },
    ],
  },
  {
    id: 5,
    text: "Do you enjoy leading or persuading others?",
    options: [
      {
        id: 13,
        label: "Yes, I enjoy taking the lead and influencing others.",
        score: { Enterprising: 3 },
      },
      {
        id: 14,
        label: "Sometimes, but only when necessary.",
        score: { Enterprising: 1 },
      },
      {
        id: 15,
        label: "No, I prefer not to take on leadership roles.",
        score: { Enterprising: 0 },
      },
    ],
  },
  {
    id: 6,
    text: "Do you enjoy organizing information, keeping records, or working with data?",
    options: [
      {
        id: 16,
        label: "Yes, I love organizing information and working with data.",
        score: { Conventional: 2, Social: 0 },
      },
      {
        id: 17,
        label: "Sometimes, but I prefer less structured tasks.",
        score: { Conventional: 1, Social: 0 },
      },
      {
        id: 18,
        label: "No, I find it tedious.",
        score: { Conventional: 0, Social: 1 },
      },
    ],
  },
  {
    id: 7,
    text: "Do you prefer working outdoors rather than in an office?",
    options: [
      {
        id: 19,
        label: "Yes, I enjoy being outdoors much more than being in an office.",
        score: { Realistic: 3, Investigative: 0 },
      },
      {
        id: 20,
        label: "Sometimes, but I don’t mind office work.",
        score: { Realistic: 1, Investigative: 0 },
      },
      {
        id: 21,
        label: "No, I prefer working indoors.",
        score: { Realistic: 0, Investigative: 1 },
      },
    ],
  },
  {
    id: 8,
    text: "Do you enjoy researching and analyzing information?",
    options: [
      {
        id: 22,
        label: "Yes, I enjoy conducting research and analysis.",
        score: { Investigative: 3, Artistic: 0 },
      },
      {
        id: 23,
        label: "Sometimes, if the topic interests me.",
        score: { Investigative: 2, Artistic: 0 },
      },
      {
        id: 24,
        label: "No, I prefer other activities.",
        score: { Investigative: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 9,
    text: "Do you enjoy performing in front of other people, such as acting or playing music?",
    options: [
      {
        id: 25,
        label: "Yes, I love performing and being in the spotlight.",
        score: { Artistic: 3 },
      },
      {
        id: 26,
        label: "Sometimes, but I get nervous.",
        score: { Artistic: 2 },
      },
      {
        id: 108,
        label: "No, I prefer to stay behind the scenes.",
        score: { Artistic: 0 },
      },
    ],
  },
  {
    id: 10,
    text: "Do you enjoy working in a team to achieve a common goal?",
    options: [
      {
        id: 27,
        label: "Yes, I thrive in a team environment.",
        score: { Social: 2, Investigative: 0 },
      },
      {
        id: 28,
        label: "Sometimes, but I also like working alone.",
        score: { Social: 1, Investigative: 0 },
      },
      {
        id: 29,
        label: "No, I prefer working independently.",
        score: { Social: 0, Investigative: 1 },
      },
    ],
  },
  {
    id: 11,
    text: "Do you enjoy setting goals and planning how to achieve them?",
    options: [
      {
        id: 30,
        label: "Yes, I enjoy setting and achieving goals.",
        score: { Enterprising: 2, Artistic: 0 },
      },
      {
        id: 31,
        label: "Sometimes, but I’m not always the most organized.",
        score: { Enterprising: 1, Artistic: 0 },
      },
      {
        id: 32,
        label: "No, I prefer to go with the flow.",
        score: { Enterprising: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 12,
    text: "Do you enjoy working with numbers, charts, or spreadsheets?",
    options: [
      {
        id: 33,
        label: "Yes, I enjoy working with numbers and data.",
        score: { Conventional: 2 },
      },
      {
        id: 34,
        label: "Sometimes, but only when necessary.",
        score: { Conventional: 1 },
      },
      {
        id: 35,
        label: "No, I prefer other types of work.",
        score: { Conventional: 0 },
      },
    ],
  },
  {
    id: 13,
    text: "Do you enjoy fixing or repairing things, like cars, appliances, or furniture?",
    options: [
      {
        id: 36,
        label:
          "Yes, I love working with my hands and solving practical problems.",
        score: { Realistic: 3, Artistic: 0 },
      },
      {
        id: 37,
        label:
          "Sometimes, but only when necessary or when I have the right tools.",
        score: { Realistic: 2, Artistic: 0 },
      },
      {
        id: 38,
        label: "No, I prefer other types of activities.",
        score: { Realistic: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 14,
    text: "Do you enjoy volunteering or helping people in need?",
    options: [
      {
        id: 39,
        label:
          "Yes, I find it very rewarding to support and help other people.",
        score: { Social: 3 },
      },
      {
        id: 40,
        label: "Sometimes, but it depends on the situation.",
        score: { Social: 1 },
      },
      {
        id: 41,
        label:
          "No, I prefer making a difference in my own way, even if it's not directly through volunteering",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 15,
    text: "Are you good with making decisions?",
    options: [
      {
        id: 42,
        label: "Yes, I like taking charge and making decisions.",
        score: { Enterprising: 3, Conventional: 0 },
      },
      {
        id: 43,
        label: "Sometimes, but I prefer collaborating rather than leading.",
        score: { Enterprising: 1, Conventional: 0 },
      },
      {
        id: 44,
        label: "No, I prefer to follow instructions.",
        score: { Enterprising: 0, Conventional: 1 },
      },
    ],
  },
  {
    id: 16,
    text: "Do you enjoy organizing files, schedules, or managing data?",
    options: [
      {
        id: 45,
        label:
          "Yes, I find it satisfying to keep things in order and well-organized.",
        score: { Conventional: 3, Artistic: 0 },
      },
      {
        id: 46,
        label: "Sometimes, but only when it’s necessary for a project.",
        score: { Conventional: 1, Artistic: 0 },
      },
      {
        id: 47,
        label: "No, I prefer more creative or hands-on tasks.",
        score: { Conventional: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 17,
    text: "Do you enjoy analyzing data or solving complex problems?",
    options: [
      {
        id: 48,
        label: "Yes, I like digging into details and figuring things out.",
        score: { Investigative: 3, Artistic: 0 },
      },
      {
        id: 49,
        label: "Sometimes, but it can be tiring.",
        score: { Investigative: 1, Artistic: 0 },
      },
      {
        id: 50,
        label: "No, I prefer simpler or more creative tasks.",
        score: { Investigative: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 18,
    text: "Do you enjoy interacting with customers or clients in a service setting?",
    options: [
      {
        id: 51,
        label: "Yes, I like working with people and helping them.",
        score: { Social: 3, Realistic: 0 },
      },
      {
        id: 52,
        label: "Sometimes, but I prefer working behind the scenes.",
        score: { Social: 1, Realistic: 0 },
      },
      {
        id: 53,
        label: "No, I prefer working with things rather than people.",
        score: { Social: 0, Realistic: 1 },
      },
    ],
  },
  {
    id: 19,
    text: "Do you enjoy managing budgets or handling financial transactions?",
    options: [
      {
        id: 54,
        label: "Yes, I like working with numbers and managing finances.",
        score: { Conventional: 3, Artistic: 0 },
      },
      {
        id: 55,
        label: "Sometimes, but it can be stressful.",
        score: { Conventional: 2, Artistic: 0 },
      },
      {
        id: 56,
        label: "No, I prefer other types of tasks.",
        score: { Conventional: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 20,
    text: "Do you enjoy planning events or organizing group activities?",
    options: [
      {
        id: 57,
        label:
          "Yes, I love coordinating details and making sure everything runs smoothly.",
        score: { Enterprising: 2, Social: 1 },
      },
      {
        id: 58,
        label: "Sometimes, but it can be overwhelming.",
        score: { Enterprising: 1, Social: 1 },
      },
      {
        id: 59,
        label: "No, I prefer participating rather than organizing.",
        score: { Enterprising: 0, Social: 1 },
      },
    ],
  },
  {
    id: 21,
    text: "Would you speak or give presentations to an audience easily?",
    options: [
      {
        id: 60,
        label: "Yes, I am fine with that.",
        score: { Enterprising: 3, Investigative: 0 },
      },
      {
        id: 61,
        label: "Sometimes, but it depends on the situation or the topic.",
        score: { Enterprising: 1, Investigative: 0 },
      },
      {
        id: 62,
        label: "No, I don’t like being in the spotlight.",
        score: { Enterprising: 0, Investigative: 3 },
      },
    ],
  },
  {
    id: 22,
    text: "Do you enjoy reading books or researching topics of interest in your free time?",
    options: [
      {
        id: 63,
        label: "Yes, I often spend my free time reading or researching.",
        score: { Investigative: 3, Social: 0 },
      },
      {
        id: 64,
        label: "Sometimes, but I also enjoy other activities.",
        score: { Investigative: 1, Social: 2 },
      },
      {
        id: 65,
        label: "No, I prefer more active or social hobbies.",
        score: { Investigative: 0, Social: 2 },
      },
    ],
  },
  {
    id: 23,
    text: "Do you enjoy developing new strategies or business ideas?",
    options: [
      {
        id: 66,
        label: "Yes, I love coming up with innovative solutions and plans.",
        score: { Enterprising: 2, Conventional: 0 },
      },
      {
        id: 67,
        label: "Sometimes, but I also enjoy implementing existing strategies.",
        score: { Enterprising: 1, Conventional: 0 },
      },
      {
        id: 68,
        label: "No, I prefer working within established frameworks.",
        score: { Enterprising: 0, Conventional: 1 },
      },
    ],
  },
  {
    id: 24,
    text: "Do you enjoy managing detailed documentation or reports?",
    options: [
      {
        id: 69,
        label: "Yes, I find it satisfying to keep detailed records.",
        score: { Conventional: 3, Social: 0 },
      },
      {
        id: 70,
        label: "Sometimes, but I also enjoy more varied tasks.",
        score: { Conventional: 2, Social: 1 },
      },
      {
        id: 71,
        label: "No, I prefer creative or practical activities.",
        score: { Conventional: 0, Social: 1 },
      },
    ],
  },
  {
    id: 25,
    text: "Do you enjoy outdoor work that involves nature or animals?",
    options: [
      {
        id: 72,
        label:
          "Yes, I love working outdoors and being around nature or animals.",
        score: { Realistic: 3, Investigative: 0 },
      },
      {
        id: 73,
        label: "Sometimes, but I also like indoor work.",
        score: { Realistic: 1, Investigative: 1 },
      },
      {
        id: 74,
        label: "No, I prefer working in an office or other indoor settings.",
        score: { Realistic: 0, Investigative: 2 },
      },
    ],
  },
  {
    id: 26,
    text: "Do you enjoy working in roles that require empathy and understanding of others' emotions?",
    options: [
      {
        id: 75,
        label:
          "Yes, I excel at understanding and supporting others emotionally.",
        score: { Social: 3 },
      },
      {
        id: 76,
        label:
          "Sometimes, but I prefer tasks that require less emotional involvement.",
        score: { Social: 2 },
      },
      {
        id: 77,
        label:
          "No, I find it challenging to work in roles that require high emotional empathy.",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 27,
    text: "Do you enjoy negotiating or persuading others to achieve a goal?",
    options: [
      {
        id: 78,
        label: "Yes, I love using persuasion to achieve my objectives.",
        score: { Enterprising: 3 },
      },
      {
        id: 79,
        label: "Sometimes, but I prefer collaboration rather than persuasion.",
        score: { Enterprising: 1 },
      },
      {
        id: 80,
        label: "No, I avoid situations where I have to persuade others.",
        score: { Enterprising: 0 },
      },
    ],
  },
  {
    id: 28,
    text: "Do you enjoy setting up new projects or businesses from scratch?",
    options: [
      {
        id: 81,
        label: "Yes, I find it exciting to start new ventures.",
        score: { Enterprising: 2, Conventional: 0 },
      },
      {
        id: 82,
        label: "Sometimes, but I prefer to join established projects.",
        score: { Enterprising: 1, Conventional: 0 },
      },
      {
        id: 83,
        label: "No, I prefer maintaining and improving existing systems.",
        score: { Enterprising: 0, Conventional: 1 },
      },
    ],
  },
  {
    id: 29,
    text: "Do you enjoy working in environments where you can see immediate, tangible results?",
    options: [
      {
        id: 84,
        label: "Yes, I love seeing the direct impact of my work.",
        score: { Realistic: 2, Investigative: 0 },
      },
      {
        id: 85,
        label: "Sometimes, but I don’t always need immediate results.",
        score: { Realistic: 1, Investigative: 1 },
      },
      {
        id: 86,
        label:
          "No, I prefer tasks that focus on long-term goals or strategies.",
        score: { Realistic: 0, Investigative: 1 },
      },
    ],
  },
  {
    id: 30,
    text: "Do you enjoy using tools or equipment to create or fix things?",
    options: [
      {
        id: 87,
        label: "Yes, I love using tools or equipment to solve problems.",
        score: { Realistic: 3, Artistic: 0 },
      },
      {
        id: 88,
        label: "Sometimes, but I prefer tasks that don’t always involve tools.",
        score: { Realistic: 1, Artistic: 0 },
      },
      {
        id: 89,
        label: "No, I find working with tools or equipment tedious.",
        score: { Realistic: 0, Artistic: 2 },
      },
    ],
  },
  {
    id: 31,
    text: "Do you enjoy building relationships with clients, colleagues, or peers?",
    options: [
      {
        id: 90,
        label: "Yes, I enjoy forming connections and building relationships.",
        score: { Social: 3 },
      },
      {
        id: 91,
        label: "Sometimes, but I also appreciate working independently.",
        score: { Social: 1 },
      },
      {
        id: 92,
        label:
          "No, I prefer to focus on my tasks rather than building relationships.",
        score: { Social: 0 },
      },
    ],
  },
  {
    id: 32,
    text: "Do you enjoy working with mechanical systems, like engines or electrical circuits?",
    options: [
      {
        id: 93,
        label:
          "Yes, I love working with and understanding how machines and systems operate.",
        score: { Realistic: 3, Investigative: 0 },
      },
      {
        id: 94,
        label: "Sometimes, but only when I need to fix something.",
        score: { Realistic: 2, Investigative: 0 },
      },
      {
        id: 95,
        label:
          "No, I prefer tasks that don't involve mechanical systems or technical work.",
        score: { Realistic: 0, Investigative: 1 },
      },
    ],
  },
  {
    id: 33,
    text: "Do you enjoy working on projects that allow you to express your emotions or ideas?",
    options: [
      {
        id: 96,
        label:
          "Yes, I find it fulfilling to express my feelings through my work.",
        score: { Artistic: 3, Conventional: 0 },
      },
      {
        id: 97,
        label: "Sometimes, but it’s not always necessary.",
        score: { Artistic: 1, Conventional: 0 },
      },
      {
        id: 98,
        label:
          "No, I prefer projects that are more objective and less personal.",
        score: { Artistic: 0, Conventional: 2 },
      },
    ],
  },
  {
    id: 34,
    text: "Do you enjoy working with procedures and guidelines to ensure accuracy?",
    options: [
      {
        id: 99,
        label:
          "Yes, I find following procedures important for achieving precise results.",
        score: { Conventional: 3, Artistic: 0 },
      },
      {
        id: 100,
        label: "Sometimes, but I prefer flexibility.",
        score: { Conventional: 1, Artistic: 0 },
      },
      {
        id: 101,
        label: "No, I prefer a more creative or less structured approach.",
        score: { Conventional: 0, Artistic: 1 },
      },
    ],
  },
  {
    id: 35,
    text: "Do you enjoy using imagination to solve problems or think of new concepts?",
    options: [
      {
        id: 102,
        label:
          "Yes, I love using my imagination to come up with innovative solutions.",
        score: { Artistic: 3, Conventional: 0 },
      },
      {
        id: 103,
        label: "Sometimes, but I prefer more practical approaches.",
        score: { Artistic: 2, Conventional: 0 },
      },
      {
        id: 104,
        label: "No, I prefer solving problems with well-established methods.",
        score: { Artistic: 0, Conventional: 1 },
      },
    ],
  },
  {
    id: 36,
    text: "When you cook or prepare meals, do you enjoy experimenting with new recipes or ingredients?",
    options: [
      {
        id: 105,
        label:
          "Yes, I love being creative in the kitchen and trying new things.",
        score: { Artistic: 2, Conventional: 0 },
      },
      {
        id: 106,
        label: "Sometimes, but I often stick to familiar recipes.",
        score: { Artistic: 1, Conventional: 0 },
      },
      {
        id: 107,
        label: "No, I prefer following recipes exactly as they are.",
        score: { Artistic: 0, Conventional: 1 },
      },
    ],
  },
];

export default questions;
