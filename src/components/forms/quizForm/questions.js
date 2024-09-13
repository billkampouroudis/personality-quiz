const questions = [
  // Realistic (Doers)
  {
    id: 1,
    text: "I am comfortable using tools, equipment, or machinery.",
    category: "realistic",
  },
  {
    id: 2,
    text: "I enjoy working with my hands to fix or build things.",
    category: "realistic",
  },
  {
    id: 3,
    text: "I prefer outdoor activities over working in an office environment.",
    category: "realistic",
  },
  {
    id: 4,
    text: "I prefer jobs where I can be physically active rather than sitting at a desk.",
    category: "realistic",
  },
  {
    id: 25,
    text: "I prefer working with tangible objects rather than abstract ideas.",
    category: "realistic",
  },
  {
    id: 26,
    text: "I prefer solving problems that require a practical approach.",
    category: "realistic",
  },
  {
    id: 27,
    text: "I enjoy working with animals, plants, or natural materials.",
    category: "realistic",
  },
  {
    id: 28,
    text: "I enjoy tasks that require attention to detail and precision.",
    category: "realistic",
  },

  // Investigative (Thinkers)
  {
    id: 5,
    text: "I enjoy solving complex problems that require critical thinking.",
    category: "investigative",
  },
  {
    id: 6,
    text: "I am curious about how things work and enjoy learning about new concepts.",
    category: "investigative",
  },
  {
    id: 7,
    text: "I prefer working in fields that involve research and analysis.",
    category: "investigative",
  },
  {
    id: 8,
    text: "I am good at collecting and interpreting data.",
    category: "investigative",
  },
  {
    id: 9,
    text: "I enjoy reading about scientific or technical advancements.",
    category: "investigative",
  },
  {
    id: 29,
    text: "I like to research topics in-depth to fully understand them.",
    category: "investigative",
  },
  {
    id: 30,
    text: "I find it rewarding to experiment and test different hypotheses.",
    category: "investigative",
  },
  {
    id: 31,
    text: "I am motivated by finding innovative solutions to difficult challenges.",
    category: "investigative",
  },

  // Artistic (Creators)
  {
    id: 10,
    text: "I feel fulfilled when I am able to express myself through creative activities.",
    category: "artistic",
  },
  {
    id: 11,
    text: "I feel inspired by art, music, or other forms of creative expression.",
    category: "artistic",
  },
  {
    id: 12,
    text: "I prefer open-ended tasks over structured or routine ones.",
    category: "artistic",
  },
  {
    id: 32,
    text: "I like to think outside the box and come up with unique ideas.",
    category: "artistic",
  },
  {
    id: 33,
    text: "I enjoy engaging in activities like painting, sculpting, or photography.",
    category: "artistic",
  },
  {
    id: 34,
    text: "I Prefer variety to routine.",
    category: "artistic",
  },
  {
    id: 35,
    text: "I prefer open-ended projects where there are no right or wrong answers.",
    category: "artistic",
  },
  {
    id: 36,
    text: "I enjoy experimenting with different things.",
    category: "artistic",
  },

  // Social (Helpers)
  {
    id: 13,
    text: "I enjoy helping others.",
    category: "social",
  },
  {
    id: 14,
    text: "I am good at understanding how others feel.",
    category: "social",
  },
  {
    id: 15,
    text: "I enjoy working in environments where I can collaborate with others.",
    category: "social",
  },
  {
    id: 37,
    text: "I find it rewarding to teach others new skills or knowledge.",
    category: "social",
  },
  {
    id: 38,
    text: "I often put others’ needs before my own.",
    category: "social",
  },
  {
    id: 39,
    text: "I feel comfortable providing advice or counseling to others.",
    category: "social",
  },
  {
    id: 40,
    text: "I enjoy interacting with customers or clients in a service setting?",
    category: "social",
  },
  {
    id: 41,
    text: "I enjoy building relationships with clients, colleagues, or peers?",
    category: "social",
  },

  // Enterprising (Persuaders)
  {
    id: 16,
    text: "I enjoy taking the lead and directing others toward a goal.",
    category: "enterprising",
  },
  {
    id: 17,
    text: "I prefer competitive environments where I can achieve success.",
    category: "enterprising",
  },
  {
    id: 18,
    text: "I feel comfortable speaking in front of large groups.",
    category: "enterprising",
  },
  {
    id: 19,
    text: "I am motivated by the idea of starting my own business.",
    category: "enterprising",
  },
  {
    id: 42,
    text: "I enjoy negotiating deals or convincing others to see things my way.",
    category: "enterprising",
  },
  {
    id: 43,
    text: "I like setting challenging goals and working hard to achieve them.",
    category: "enterprising",
  },
  {
    id: 44,
    text: "I easily take risks to achieve a goal",
    category: "enterprising",
  },
  {
    id: 45,
    text: "I am comfortable making decisions quickly in high-pressure situations.",
    category: "enterprising",
  },

  // Conventional (Persuaders)
  {
    id: 20,
    text: "I feel satisfied when I organize and categorize information.",
    category: "conventional",
  },
  {
    id: 21,
    text: "I enjoy following established procedures and rules in my work.",
    category: "conventional",
  },
  {
    id: 22,
    text: "I prefer working with numbers, data, or schedules.",
    category: "conventional",
  },
  {
    id: 23,
    text: "I am detail-oriented and always make sure everything is accurate.",
    category: "conventional",
  },
  {
    id: 24,
    text: "I prefer following a set routine in my workday.",
    category: "conventional",
  },
  {
    id: 46,
    text: "I enjoy managing budgets or handling financial transactions?",
    category: "conventional",
  },
  {
    id: 47,
    text: "I am skilled at creating and managing schedules.",
    category: "conventional",
  },
  {
    id: 48,
    text: "I like having clear guidelines and protocols to follow in my work.",
    category: "conventional",
  },
];

export const choices = [
  {
    id: "very_inaccurate",
    label: "Very Inaccurate",
    score: -1,
  },
  {
    id: "moderately_inaccurate",
    label: "Moderately Inaccurate",
    score: 1,
  },
  {
    id: "neutral",
    label: "Neither Accurate Nor Inaccurate",
    score: 2,
  },
  {
    id: "moderately_accurate",
    label: "Moderately Accurate",
    score: 3,
  },
  {
    id: "very_accurate",
    label: "Very Accurate",
    score: 5,
  },
];

export default questions;
