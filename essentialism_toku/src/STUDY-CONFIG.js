///////// TEMPLATE /////////

///////// Stimuli /////////

///////// Start Game /////////
var forms = {
  type: 'action',
  id: 'form', // you can change the name of this form to whatever
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
var startGame_fh = [
  {
    type: 'action',
    id: 'familiar_human',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/sample/start_chinese.jpg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
]

var startGame_nh = [
  {
    type: 'action',
    id: 'novel_human',
    stimuli: [
      {
        type: 'picture',
        parameters: {
          filename: '../../../assets/sample/start_chinese.jpg',
          coordinates: [
            { value: 'started', shape: "rect", coordinates: "0, 0, 5000, 5000" },
          ]
        },
      }
    ]
  },
]

///////// Essentialism Tasks /////////

///// Stability /////

// TODO Coordinates
var stability_fh = [
  {
    type: 'action',
    id: 'check1_birthgender',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_chinese1.mp4',
          coordinates: [
            { value: 'boy', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'girl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'check2_islandgender',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_chinese2.mp4',
          coordinates: [
            { value: 'yes', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'no', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prop1_amino',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_chinese3.mp4',
          coordinates: [
            { value: 'girl', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'boy', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prop2_spin',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_chinese4.mp4',
          coordinates: [
            { value: 'girl', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'boy', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prop3_stick',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_chinese5.mp4',
          coordinates: [
            { value: 'girl', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'boy', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'prop4_gender',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_chinese6.mp4',
          coordinates: [
            { value: 'girl', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'boy', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
]


///////// Cognitive Tasks /////////

///// Deference to Experts /////

// TODO Coordinates mostly done but check
var def_to_expert = [
  {
    type: 'action',
    id: 'warmup1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese1.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'wrong', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese2.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'correct', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese3.mp4'
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'hat_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese4.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'head', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese5.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'head', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese6.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'head', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'key_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese7.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'bowl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese8.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'bowl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese9.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'bowl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  }
]

// TODO Coordinates
var relational_thinking = [
  {
    type: 'action',
    id: 'warmup1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese1.mp4',
          coordinates: [
            { value: 'correct', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'wrong', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese2.mp4',
          coordinates: [
            { value: 'wrong', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'correct', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese3.mp4'
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'hat_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese4.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'head', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese5.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'head', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese6.mp4',
          coordinates: [
            { value: 'table', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'head', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'key_unambiguous',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese7.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'bowl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese8.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'bowl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/def_to_expert/deference_to_expert_chinese9.mp4',
          coordinates: [
            { value: 'car', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'bowl', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  }
]


// var check2_kita = [
//   {
//     type: 'action',
//     id: 'check2_kita_y',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pidi3cat_check2_kita.mp4',
//           coordinates: [
//             { value: 'wrong', shape: "rect", coordinates: "150, 260, 400, 900" },
//             { value: 'correct', shape: "rect", coordinates: "650, 260, 975, 900" },
//             { value: 'wrong', shape: "rect", coordinates: "1250, 260, 1500, 900" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'check2_feedback_kita',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pidi3cat_check2_feedback_kita.mp4'
//         },
//       }
//     ]
//   },
// ]

// var check2_gazzer = [
//   {
//     type: 'action',
//     id: 'check2_gazzer_r',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pidi3cat_check2_gazzer.mp4',
//           coordinates: [
//             { value: 'wrong', shape: "rect", coordinates: "150, 260, 400, 900" },
//             { value: 'wrong', shape: "rect", coordinates: "650, 260, 975, 900" },
//             { value: 'correct', shape: "rect", coordinates: "1250, 260, 1500, 900" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'check2_feedback_gazzer',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pidi3cat_check2_feedback_gazzer.mp4',
//         },
//       }
//     ]
//   },
// ]

// var attn_check = [
//   check2_toma,
//   check2_kita,
//   check2_gazzer,
//   {
//     type: 'control',
//     shuffle: true
//   }

// ]


// var pizza = [
//   {
//     type: 'action',
//     id: 'pizza_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pizza_toma.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pizza_kita',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pizza_kita.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pizza_gazzer',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pizza_gazzer.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'control',
//     shuffle: true,
//   }
// ]
// var pizza_gen = [
//   {
//     type: 'action',
//     id: 'pizza_generic_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pizza_gen_toma.mp4',
//         },
//       }
//     ]
//   },
//   pizza
// ]

// var pizza_spec = [
//   {
//     type: 'action',
//     id: 'pizza_specific_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pizza_spec_toma.mp4',
//         },
//       }
//     ]
//   },
//   pizza
// ]

// var piano = [
//   {
//     type: 'action',
//     id: 'piano_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/piano_toma.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'piano_kita',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/piano_kita.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'piano_gazzer',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/piano_gazzer.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'control',
//     shuffle: true,
//   }
// ]

// var piano_gen = [
//   {
//     type: 'action',
//     id: 'piano_generic_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/piano_gen_toma.mp4',
//         },
//       }
//     ]
//   },
//   piano
// ]

// var piano_spec = [
//   {
//     type: 'action',
//     id: 'piano_specific_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/piano_spec_toma.mp4',
//         },
//       }
//     ]
//   },
//   piano
// ]

// var paint = [
//   {
//     type: 'action',
//     id: 'paint_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/paint_toma.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'paint_kita',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/paint_kita.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'paint_gazzer',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/paint_gazzer.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'control',
//     shuffle: true,
//   }
// ]
// var paint_gen = [
//   {
//     type: 'action',
//     id: 'paint_generic_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/paint_gen_toma.mp4',
//         },
//       }
//     ]
//   },
//   paint
// ]
// var paint_spec = [
//   {
//     type: 'action',
//     id: 'piano_specific_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/paint_spec_toma.mp4',
//         },
//       }
//     ]
//   },
//   paint
// ]

// var tree = [
//   {
//     type: 'action',
//     id: 'tree_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/tree_toma.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'tree_kita',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/tree_kita.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'tree_gazzer',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/tree_gazzer.mp4',
//           coordinates: [
//             { value: 'yes', shape: "rect", coordinates: "250, 650, 480, 900" },
//             { value: 'no', shape: "rect", coordinates: "1150, 650, 1380, 900" },
//           ],
//           delayResponse: '3',
//         },
//       }
//     ]
//   },
//   {
//     type: 'control',
//     shuffle: true,
//   }
// ]
// var tree_gen = [
//   {
//     type: 'action',
//     id: 'tree_generic_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/tree_gen_toma.mp4',
//         },
//       }
//     ]
//   },
//   tree
// ]
// var tree_spec = [
//   {
//     type: 'action',
//     id: 'tree_specific_toma',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/tree_spec_toma.mp4',
//         },
//       }
//     ]
//   },
//   tree
// ]

// var transition = [
//   {
//     type: 'action',
//     id: 'transition',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/transition.mp4',
//         },
//       }
//     ]
//   },
// ]


// ///////// General Pragmatics Task /////////
// var pragmatics = [
//   {
//     type: 'action',
//     id: 'pragmatics1',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pragmatics1.mp4',
//           coordinates: [
//             { value: '1', shape: "rect", coordinates: "300, 440, 540, 700" },
//             { value: '2', shape: "rect", coordinates: "650, 440, 960, 700" },
//             { value: '3', shape: "rect", coordinates: "1060, 440, 1325, 700" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pragmatics2',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pragmatics2.mp4',
//           coordinates: [
//             { value: '1', shape: "rect", coordinates: "300, 440, 540, 700" },
//             { value: '2', shape: "rect", coordinates: "720, 440, 900, 700" },
//             { value: '3', shape: "rect", coordinates: "1060, 440, 1325, 700" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pragmatics3',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pragmatics3.mp4',
//           coordinates: [
//             { value: '1', shape: "rect", coordinates: "300, 440, 540, 700" },
//             { value: '2', shape: "rect", coordinates: "720, 440, 900, 700" },
//             { value: '3', shape: "rect", coordinates: "1060, 440, 1325, 700" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pragmatics4',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pragmatics4.mp4',
//           coordinates: [
//             { value: '1', shape: "rect", coordinates: "300, 440, 540, 700" },
//             { value: '2', shape: "rect", coordinates: "750, 440, 860, 700" },
//             { value: '3', shape: "rect", coordinates: "1060, 440, 1325, 700" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pragmatics5',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pragmatics5.mp4',
//           coordinates: [
//             { value: '1', shape: "rect", coordinates: "300, 440, 540, 700" },
//             { value: '2', shape: "rect", coordinates: "700, 440, 960, 700" },
//             { value: '3', shape: "rect", coordinates: "1120, 440, 1325, 700" },
//           ]
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'pragmatics6',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/pragmatics6.mp4',
//           coordinates: [
//             { value: '1', shape: "rect", coordinates: "300, 440, 540, 700" },
//             { value: '2', shape: "rect", coordinates: "700, 440, 960, 700" },
//             { value: '3', shape: "rect", coordinates: "1120, 440, 1325, 700" },
//           ]
//         },
//       }
//     ]
//   }
// ]

///////// End! /////////
// var end = [
//   {
//     type: 'action',
//     id: 'end',
//     stimuli: [
//       {
//         type: 'movie',
//         parameters: {
//           filename: '../../../assets/movie/end.mp4',
//         },
//       }
//     ]
//   },
//   {
//     type: 'action',
//     id: 'form',
//     stimuli: [
//       {
//         type: 'form',
//         parameters: {
//           questions: [
//             { name: 'comments', type: "text", questionText: "Experimenter ID" },
//             { name: 'noise', type: "dropdown", options: ["No noise", "A little noisy", "Noisy", "Very noisy"], questionText: "Please rate the noise level." },
//             { name: 'noise_engagement', type: "dropdown", options: ["No", "A little", "A lot"], questionText: "Did the noise effect the child's engagement?" },
//             { name: 'attentive', type: "dropdown", options: ["Attentive/Excited", "Attentive", "Distracted", "Not paying attention"], questionText: "How attentive was the child?" },
//           ]
//         }
//       }
//     ]
//   }
// ]

///////// The Conditions /////////

var familiar_human = [
  forms,
  startGame_fh,
  stability_fh,
  def_to_expert
  // end
];



// var novel_human = [
//   forms,
//   startGame_nh,
//   intro,
//   attn_check_intro,
//   attn_check,
//   pizza_spec,
//   paint_spec,
//   transition,
//   [
//     tree_spec,
//     piano_spec,
//     {
//       type: 'control',
//       shuffle: true
//     }
//   ],
//   pragmatics,
//   end
// ];



///////// The Study /////////
// This is the study block
// Here is where you list which conditions to include in the study,
// the name of the study, and the last thing that happens in the study

export const Project = {
  conditions: [ // list all of your conditions here. Participants are randomly assigned to one of them
    familiar_human,
  ],
  name: "essentialism_china", // Put the name of your study here
  ended: { // this what happens when your study ends i.e., the last thing that happens before the study restarts
    // right now, I have it set to play a movie that says "Great job!"
    type: 'action',
    id: 'form', // you can change the name of this form to whatever
    stimuli: [
      {
        type: 'form',
        parameters: {
          questions: [
            { name: 'comments', type: "text", questionText: "Experimenter ID" },
            { name: 'attentive', type: "dropdown", options: ["Attentive/Excited", "Attentive", "Distracted", "Not paying attention"], questionText: "How attentive was the child?" },
            { name: 'comments', type: "text", questionText: "Comments? Experimentor errors, when child stopped paying attention, etc?" },
          ]
        }
      }
    ]
  }
}
