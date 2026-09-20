/*
  Science Year 1 Quiz — Topics 2–7
  Each question is worth 1 mark.
  Content is adapted from the supplied KSSR Science Year 1 textbook.
*/

const TOPICS = [
  { id: 2, name: "Science Room Rules", short: "Room Rules" },
  { id: 3, name: "Living and Non-Living Things", short: "Living Things" },
  { id: 4, name: "Humans", short: "Humans" },
  { id: 5, name: "Animals", short: "Animals" },
  { id: 6, name: "Plants", short: "Plants" },
  { id: 7, name: "Magnets", short: "Magnets" }
];

const QUESTIONS = [
  // Topic 2 — Science Room Rules
  {
    id: "t2q1", topic: 2,
    question: "What should pupils do before entering the Science Room?",
    options: ["Run inside quickly", "Line up", "Eat a snack", "Play near the door"],
    answer: 1,
    explanation: "Pupils should line up before entering the Science Room."
  },
  {
    id: "t2q2", topic: 2,
    question: "What should you do before entering the Science Room?",
    options: ["Ask the teacher for permission", "Open every cupboard", "Switch off the lights", "Bring food inside"],
    answer: 0,
    explanation: "Ask the teacher for permission before entering the Science Room."
  },
  {
    id: "t2q3", topic: 2,
    question: "Which action is NOT allowed in the Science Room?",
    options: ["Listening to the teacher", "Cleaning the table", "Running and playing", "Putting equipment away"],
    answer: 2,
    explanation: "Running, playing and joking in the Science Room can cause accidents."
  },
  {
    id: "t2q4", topic: 2,
    question: "Which activity is not allowed in the Science Room?",
    options: ["Eating and drinking", "Observing an object", "Writing notes", "Using equipment carefully"],
    answer: 0,
    explanation: "Eating and drinking are not allowed in the Science Room."
  },
  {
    id: "t2q5", topic: 2,
    question: "What should pupils do before leaving the Science Room?",
    options: ["Leave everything on the table", "Clean and tidy the Science Room", "Run out of the room", "Hide the equipment"],
    answer: 1,
    explanation: "Clean and tidy the Science Room before leaving."
  },
  {
    id: "t2q6", topic: 2,
    question: "What may happen if rubbish is thrown into the sink?",
    options: ["The sink may become blocked", "The room becomes brighter", "The sink becomes bigger", "The rubbish disappears"],
    answer: 0,
    explanation: "Rubbish can block the sink and make the Science Room unsafe or dirty."
  },

  // Topic 3 — Living and Non-Living Things
  {
    id: "t3q1", topic: 3,
    question: "Which one is a living thing?",
    options: ["Stone", "Toy car", "Cat", "Bench"],
    answer: 2,
    explanation: "A cat is a living thing. A stone, toy car and bench are non-living things."
  },
  {
    id: "t3q2", topic: 3,
    question: "Which list shows the characteristics of living things?",
    options: [
      "Breathe, need water and food, move, reproduce and grow",
      "Shine, roll, float, ring and melt",
      "Only move and make sounds",
      "Only need water"
    ],
    answer: 0,
    explanation: "Living things breathe, need water and food, move, reproduce and grow."
  },
  {
    id: "t3q3", topic: 3,
    question: "Why do humans and animals need food?",
    options: ["To get energy and grow", "To change colour", "To become non-living", "To stop breathing"],
    answer: 0,
    explanation: "Food gives humans and animals energy and also helps them grow."
  },
  {
    id: "t3q4", topic: 3,
    question: "Why do humans and animals need shelter?",
    options: ["To protect them from rain, heat and danger", "To make them smaller", "To stop them from moving", "To turn them into plants"],
    answer: 0,
    explanation: "Shelter protects humans and animals from rain, heat and danger."
  },
  {
    id: "t3q5", topic: 3,
    question: "What are the basic needs of living things shown in this topic?",
    options: ["Food, water and air", "Books, pencils and rulers", "Metal, glass and plastic", "Cars, roads and houses"],
    answer: 0,
    explanation: "Living things need food, water and air. Humans and animals also need shelter."
  },
  {
    id: "t3q6", topic: 3,
    question: "Which order is correct from smallest to biggest?",
    options: ["Elephant → mouse → deer", "Mouse → deer → elephant", "Deer → elephant → mouse", "Elephant → deer → mouse"],
    answer: 1,
    explanation: "From smallest to biggest: mouse, deer, then elephant."
  },

  // Topic 4 — Humans
  {
    id: "t4q1", topic: 4,
    question: "Which body part is used for the sense of sight?",
    options: ["Eyes", "Ears", "Nose", "Tongue"],
    answer: 0,
    explanation: "We use our eyes for the sense of sight."
  },
  {
    id: "t4q2", topic: 4,
    question: "Which body part is used for the sense of hearing?",
    options: ["Skin", "Ears", "Eyes", "Tongue"],
    answer: 1,
    explanation: "We use our ears for the sense of hearing."
  },
  {
    id: "t4q3", topic: 4,
    question: "Which body part helps us identify smells?",
    options: ["Nose", "Eyes", "Skin", "Ears"],
    answer: 0,
    explanation: "We use our nose for the sense of smell."
  },
  {
    id: "t4q4", topic: 4,
    question: "Which body part helps us identify sweet, salty, sour, bitter and tasteless flavours?",
    options: ["Ears", "Tongue", "Skin", "Eyes"],
    answer: 1,
    explanation: "The tongue is used for the sense of taste."
  },
  {
    id: "t4q5", topic: 4,
    question: "Which sense helps us tell whether an object is rough, smooth, soft or hard?",
    options: ["Sight", "Hearing", "Touch", "Smell"],
    answer: 2,
    explanation: "The sense of touch helps us identify textures such as rough, smooth, soft and hard."
  },
  {
    id: "t4q6", topic: 4,
    question: "Which tool can help a person see more clearly when their vision does not work well?",
    options: ["Glasses", "Spoon", "Ruler", "Whistle"],
    answer: 0,
    explanation: "Glasses can help the sense of sight when a person cannot see clearly."
  },

  // Topic 5 — Animals
  {
    id: "t5q1", topic: 5,
    question: "Which body part helps a bird or butterfly to fly?",
    options: ["Wings", "Shell", "Horn", "Scales"],
    answer: 0,
    explanation: "Wings help animals such as birds and butterflies to fly."
  },
  {
    id: "t5q2", topic: 5,
    question: "Which body part helps a fish swim?",
    options: ["Antennae", "Fins", "Horn", "Beak"],
    answer: 1,
    explanation: "Fins help a fish to swim."
  },
  {
    id: "t5q3", topic: 5,
    question: "What is one function of a fish's tail?",
    options: ["To steer its direction", "To make food", "To smell flowers", "To hold a pencil"],
    answer: 0,
    explanation: "The tail helps a fish steer its direction."
  },
  {
    id: "t5q4", topic: 5,
    question: "Why is hard skin important to a crocodile?",
    options: ["It helps defend the crocodile", "It helps the crocodile fly", "It makes food", "It helps the crocodile write"],
    answer: 0,
    explanation: "Hard skin helps a crocodile defend itself."
  },
  {
    id: "t5q5", topic: 5,
    question: "What is a function of horns or a rhinoceros horn?",
    options: ["To defend the animal", "To help the animal read", "To make the animal a plant", "To help the animal breathe underwater"],
    answer: 0,
    explanation: "Horns and a rhinoceros horn can help animals defend themselves."
  },
  {
    id: "t5q6", topic: 5,
    question: "Which statement about animal body parts is true?",
    options: [
      "Different animals can have similar body parts",
      "Every animal has exactly the same body parts",
      "Animals do not use their body parts",
      "Only birds have body parts"
    ],
    answer: 0,
    explanation: "Different animals can share similar body parts, such as fine fur."
  },

  // Topic 6 — Plants
  {
    id: "t6q1", topic: 6,
    question: "Which list shows the main plant parts learned in this topic?",
    options: ["Flower, leaf, stem and root", "Wing, fin, horn and shell", "Eye, ear, nose and tongue", "Magnet, ruler, clip and screw"],
    answer: 0,
    explanation: "The main plant parts learned are flower, leaf, stem and root."
  },
  {
    id: "t6q2", topic: 6,
    question: "What can a flower become?",
    options: ["Fruit and seeds", "A magnet", "A shell", "A pair of wings"],
    answer: 0,
    explanation: "A flower is a reproductive part and can develop into fruit and seeds."
  },
  {
    id: "t6q3", topic: 6,
    question: "What is the main function of a leaf?",
    options: ["To make food", "To hear sounds", "To attract metal objects", "To help animals swim"],
    answer: 0,
    explanation: "Leaves are plant parts used to make food."
  },
  {
    id: "t6q4", topic: 6,
    question: "What does the stem transport?",
    options: [
      "Food from the leaves and water and nutrients from the roots",
      "Only air from flowers",
      "Magnets from the soil",
      "Sound from the roots"
    ],
    answer: 0,
    explanation: "The stem carries food made by the leaves and carries water and nutrients from the roots."
  },
  {
    id: "t6q5", topic: 6,
    question: "What does a root do?",
    options: ["Supports the plant and absorbs water and nutrients", "Helps the plant fly", "Makes sounds", "Attracts paper clips"],
    answer: 0,
    explanation: "Roots support the plant and absorb water and nutrients from the soil."
  },
  {
    id: "t6q6", topic: 6,
    question: "Which pair shows two root types learned in this topic?",
    options: ["Taproot and fibrous root", "Soft root and loud root", "North root and south root", "Wing root and fin root"],
    answer: 0,
    explanation: "The two root types learned are taproot and fibrous root."
  },

  // Topic 7 — Magnets
  {
    id: "t7q1", topic: 7,
    question: "Which object may use a magnet to close tightly?",
    options: ["Refrigerator door", "Glass of water", "Paper book", "Wooden ruler"],
    answer: 0,
    explanation: "A refrigerator door uses a magnet to help it close tightly."
  },
  {
    id: "t7q2", topic: 7,
    question: "Which list contains magnet shapes learned in this topic?",
    options: [
      "Bar, cylinder, U-shaped, horseshoe, button and ring",
      "Triangle, cloud, star, moon, leaf and heart",
      "Spoon, plate, cup, fork, bowl and pan",
      "Eye, ear, nose, tongue, hand and foot"
    ],
    answer: 0,
    explanation: "The topic introduces bar, cylinder, U-shaped, horseshoe, button and ring magnets."
  },
  {
    id: "t7q3", topic: 7,
    question: "Which object can a magnet attract in the textbook activity?",
    options: ["Screw", "Plastic ruler", "Ice-cream stick", "Eraser"],
    answer: 0,
    explanation: "A screw is an example of an object that can be attracted by a magnet."
  },
  {
    id: "t7q4", topic: 7,
    question: "What happens when two like magnetic poles are brought close together?",
    options: ["They repel", "They melt", "They become water", "They always stick forever"],
    answer: 0,
    explanation: "Like poles repel each other."
  },
  {
    id: "t7q5", topic: 7,
    question: "What happens when two unlike magnetic poles are brought close together?",
    options: ["They attract", "They disappear", "They become weaker than paper", "They turn into plastic"],
    answer: 0,
    explanation: "Unlike poles attract each other."
  },
  {
    id: "t7q6", topic: 7,
    question: "How can you tell that one magnet is stronger in the paper-clip investigation?",
    options: [
      "It can attract paper clips from farther away",
      "It is always the biggest magnet",
      "It has the brightest colour",
      "It makes the loudest sound"
    ],
    answer: 0,
    explanation: "A stronger magnet can attract paper clips from a greater distance."
  }
];
