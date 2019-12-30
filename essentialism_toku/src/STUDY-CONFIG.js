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
            { value: 'boy', shape: "rect", coordinates: "195, 475, 505, 700" },
            { value: 'girl', shape: "rect", coordinates: "1165, 475, 1485, 700" },
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
            { value: 'yes', shape: "rect", coordinates: "475, 650, 650, 900" },
            { value: 'no', shape: "rect", coordinates: "1025, 650, 1200, 900" },
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
            { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
            { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
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
            { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
            { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
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
            { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
            { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
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
            { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
            { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
          ]
        },
      }
    ]
  },
]

var causal_fh = [
  {
    type: 'action',
    id: 'causal_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/causal/causal_fh_chinese1.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'causal_prop1_fence',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/causal/causal_fh_chinese2.mp4',
          coordinates: [
            { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
            { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'causal_prop2_ladybug',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/causal/causal_fh_chinese3.mp4',
          coordinates: [
            { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
            { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'causal_prop3_shadow',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/causal/causal_fh_chinese4.mp4',
          coordinates: [
            { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
            { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
          ]
        },
      }
    ]
  }
]

var homogeneity_fh = [
  {
    type: 'action',
    id: 'homogeneity_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese1.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_warmup1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese2.mp4',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "215, 650, 465, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_warmup2',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese3.mp4',
          coordinates: [
            { value: 'few', shape: "rect", coordinates: "550, 650, 800, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_warmup3',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese4.mp4',
          coordinates: [
            { value: 'lots', shape: "rect", coordinates: "890, 650, 1135, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_warmup4',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese5.mp4',
          coordinates: [
            { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_prop1_marrow',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese6.mp4',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "215, 650, 465, 955" },
            { value: 'few', shape: "rect", coordinates: "550, 650, 800, 955" },
            { value: 'lots', shape: "rect", coordinates: "890, 650, 1135, 955" },
            { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_prop2_kiwi',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese7.mp4',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "215, 650, 465, 955" },
            { value: 'few', shape: "rect", coordinates: "550, 650, 800, 955" },
            { value: 'lots', shape: "rect", coordinates: "890, 650, 1135, 955" },
            { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_prop3_puddle',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_chinese8.mp4',
          coordinates: [
            { value: 'one', shape: "rect", coordinates: "215, 650, 465, 955" },
            { value: 'few', shape: "rect", coordinates: "550, 650, 800, 955" },
            { value: 'lots', shape: "rect", coordinates: "890, 650, 1135, 955" },
            { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
          ]
        },
      }
    ]
  },
]

var natural_fh = [
  {
    type: 'action',
    id: 'nat_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/natural/natural_fh_chinese1.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'nat_girl',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/natural/natural_fh_chinese2.mp4',
          coordinates: [
            { value: 'yes', shape: "rect", coordinates: "170, 700, 620, 925" },
            { value: 'no', shape: "rect", coordinates: "1115, 700, 1555, 925" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'nat_boy',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/natural/natural_fh_chinese3.mp4',
          coordinates: [
            { value: 'yes', shape: "rect", coordinates: "170, 700, 620, 925" },
            { value: 'no', shape: "rect", coordinates: "1115, 700, 1555, 925" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'nat_animal',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/natural/natural_fh_chinese4.mp4',
          coordinates: [
            { value: 'yes', shape: "rect", coordinates: "170, 700, 620, 925" },
            { value: 'no', shape: "rect", coordinates: "1115, 700, 1555, 925" },
          ]
        },
      }
    ]
  }
]

var bound_fh = [
  {
    type: 'action',
    id: 'bound_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/strict_bound/bound_fh_chinese1.mp4',
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'bound_prop1_enzyme',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/strict_bound/bound_fh_chinese2.mp4',
          coordinates: [
            { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
            { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'bound_prop2_perilla',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/strict_bound/bound_fh_chinese3.mp4',
          coordinates: [
            { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
            { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'bound_prop3_roll',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/strict_bound/bound_fh_chinese4.mp4',
          coordinates: [
            { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
            { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
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
var relational = [
  {
    type: 'action',
    id: 'relational1',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/relational/relational_chinese1.mp4',
          coordinates: [
            { value: 'same', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'different', shape: "rect", coordinates: "1200, 500, 1500, 950" },
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
          filename: '../../../assets/movie/relational/relational_chinese2.mp4',
          coordinates: [
            { value: 'different', shape: "rect", coordinates: "150, 500, 400, 950" },
            { value: 'same', shape: "rect", coordinates: "1200, 500, 1500, 950" },
          ]
        },
      }
    ]
  }
]




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
  // forms,
  startGame_fh,
  causal_fh,
  stability_fh,
  bound_fh,
  homogeneity_fh,
  natural_fh,
  def_to_expert,
  relational
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
