///////// Start Game /////////
var forms = {
  type: 'action',
  id: 'form',
  stimuli: [
    {
      type: 'form',
      parameters: {
        questions: [
          { name: 'id', type: "text", questionText: "Participant ID" },
          { name: 'gender', type: "dropdown", options: ["girl", "boy", "other"], questionText: "Participant Gender" },
          { name: 'age', type: "dropdown", options: ["3", "4", "5", "6", "other"], questionText: "Participant Age" },
        ],
      }
    }
  ]
}

var startGame = [
  {
    type: 'action',
    id: 'familiar_human',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/sample/start.jpeg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
]

///////// Cognitive Tasks /////////

///// Deference to Experts /////
var def_hatcup = [
  {
    type: 'action',
    id: 'hat_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng4.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "220, 697, 605, 930" },
            { value: 'head', shape: "rect", coordinates: "1170, 530, 1430, 920" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'cup_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng5.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "220, 697, 605, 930" },
            { value: 'head', shape: "rect", coordinates: "1170, 530, 1430, 920" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'hatcup_ambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng6.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "220, 697, 605, 930" },
            { value: 'head', shape: "rect", coordinates: "1170, 530, 1430, 920" },
          ]
        },
      }
    ]
  }
]

var def_keyspoon = [
  {
    type: 'action',
    id: 'key_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng7.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "260, 697, 600, 920" },
            { value: 'bowl', shape: "rect", coordinates: "1170, 700, 1450, 900" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'spoon_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng8.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "260, 697, 600, 920" },
            { value: 'bowl', shape: "rect", coordinates: "1170, 700, 1450, 900" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'keyspoon_ambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng9.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "260, 697, 600, 920" },
            { value: 'bowl', shape: "rect", coordinates: "1170, 700, 1450, 900" },
          ]
        },
      }
    ]
  }
]

var def_to_expert = [
  {
    type: 'action',
    id: 'warmup1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng1.mp4',
          coordinates: [
            { value: 'person', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'road', shape: "rect", coordinates: "1130, 550, 1550, 925" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'warmup2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng2.mp4',
          coordinates: [
            { value: 'person', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'road', shape: "rect", coordinates: "1130, 550, 1550, 925" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'warmup2_feedback',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_eng3.mp4'
        },
      }
    ]
  },
  [
    def_hatcup,
    def_keyspoon,
    {
      type: 'control',
      shuffle: true
    }
  ]
]

///// Relational vs Object Thinking /////
var relational = [
  {
    type: 'action',
    id: 'relational1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/relational/relational_eng1.mp4',
          coordinates: [
            { value: 'same', shape: "rect", coordinates: "75, 375, 460, 550" },
            { value: 'different', shape: "rect", coordinates: "1120, 375, 1500, 550" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'relational2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/relational/relational_eng2.mp4',
          coordinates: [
            { value: 'different', shape: "rect", coordinates: "75, 375, 460, 550" },
            { value: 'same', shape: "rect", coordinates: "1120, 375, 1500, 550" },
          ]
        },
      }
    ]
  }
]

///// Overhypothesis /////
var overhypothesis = [
  {
    type: 'action',
    id: 'overhypothesis_shape1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/overhypothesis/overhypothesis_eng1.mp4',
          coordinates: [
            { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
            { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
          ]
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'overhypothesis_shape2',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng2.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'action',
      id: 'overhypothesis_shape3',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng3.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'action',
      id: 'overhypothesis_color1',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng4.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'action',
      id: 'overhypothesis_color2',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng5.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'action',
      id: 'overhypothesis_color3',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng6.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'action',
      id: 'overhypothesis_color_decoy',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng7.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'action',
      id: 'overhypothesis_shape_decoy',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/overhypothesis/overhypothesis_eng8.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "1000, 550, 1150, 750" },
              { value: 'no', shape: "rect", coordinates: "1400, 550, 1550, 750" },
            ]
          },
        }
      ]
    },
    {
      type: 'control',
      shuffle: true
    }
  ]
]

///// Inherence Task /////
var inherence = [
  {
    type: 'action',
    id: 'inherence_nocontact',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/inherence/inherence_eng1.mp4',
          coordinates: [
            { value: 'inside', shape: "rect", coordinates: "600, 700, 725, 825" },
            { value: 'outside', shape: "rect", coordinates: "1020, 700, 1140, 825" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'inherence_contact',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/inherence/inherence_eng2.mp4',
          coordinates: [
            { value: 'inside', shape: "rect", coordinates: "815, 765, 875, 830" },
            { value: 'outside', shape: "rect", coordinates: "890, 765, 950, 830" },
          ]
        },
      }
    ]
  }
]

///////// The Conditions /////////

var cognitive_tasks = [
  forms,
  startGame,
  [
    def_to_expert,
    relational,
    overhypothesis,
    {
      type: 'control',
      shuffle: true
    }
  ],
  inherence
];

///////// The Study /////////

export const Project = {
  conditions: [
    cognitive_tasks
  ],
  name: "essentialism_prek_T1",
  ended: {
    type: 'action',
    id: 'form',
    stimuli: [
      {
        type: 'form',
        parameters: {
          questions: [
            { name: 'comments', type: "text", questionText: "Experimenter ID" },
            { name: 'attentive', type: "dropdown", options: ["Attentive/Excited", "Attentive", "Distracted", "Not paying attention"], questionText: "How attentive was the child?" },
            { name: 'comments', type: "text", questionText: "Comments? Experimenter errors, when child stopped paying attention, etc?" },
          ]
        }
      }
    ]
  }
}
