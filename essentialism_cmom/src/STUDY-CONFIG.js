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

var startGame_fh = [
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

var startGame_nh = [
  {
    type: 'action',
    id: 'novel_human',
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

///////// Essentialism Tasks /////////

///// Causal Explanations /////
var causal_fh = [
  {
    type: 'action',
    id: 'causal_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/causal/causal_fh_eng1.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'causal_prop1_fence',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/causal/causal_fh_eng2.mp4',
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
            filename: '../../../assets/movie/causal/causal_fh_eng3.mp4',
            coordinates: [
              { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
              { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
            ]
          },
        }
      ]
    },
    // {
    //   type: 'action',
    //   id: 'causal_prop3_shadow',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/causal/causal_fh_eng4.mp4',
    //         coordinates: [
    //           { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
    //           { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
    //         ]
    //       },
    //     }
    //   ]
    // }
    {
      type: 'control',
      shuffle: true
    }
  ]
]

var causal_nh = [
  {
    type: 'action',
    id: 'causal_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/causal/causal_nh_eng1.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'causal_prop1_fence',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/causal/causal_nh_eng2.mp4',
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
            filename: '../../../assets/movie/causal/causal_nh_eng3.mp4',
            coordinates: [
              { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
              { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
            ]
          },
        }
      ]
    },
    // {
    //   type: 'action',
    //   id: 'causal_prop3_shadow',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/causal/causal_nh_eng4.mp4',
    //         coordinates: [
    //           { value: 'group', shape: "rect", coordinates: "110, 715, 515, 925" },
    //           { value: 'individual', shape: "rect", coordinates: "1120, 715, 1550, 925" },
    //         ]
    //       },
    //     }
    //   ]
    // }
    {
      type: 'control',
      shuffle: true
    }
  ]
]

///// Stability /////
var stability_fh = [
  {
    type: 'action',
    id: 'check1_birthgender',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_fh_eng1.mp4',
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
          filename: '../../../assets/movie/stability/stability_fh_eng2.mp4',
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
    id: 'stability_transition',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_fh_eng_trans.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'prop1_amino',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/stability/stability_fh_eng3.mp4',
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
            filename: '../../../assets/movie/stability/stability_fh_eng4.mp4',
            coordinates: [
              { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
              { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
            ]
          },
        }
      ]
    },
    // {
    //   type: 'action',
    //   id: 'prop3_stick',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/stability/stability_fh_eng5.mp4',
    //         coordinates: [
    //           { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
    //           { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      type: 'control',
      shuffle: true
    }
  ],
  {
    type: 'action',
    id: 'prop4_gender',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_fh_eng6.mp4',
          coordinates: [
            { value: 'girl', shape: "rect", coordinates: "80, 700, 400, 900" },
            { value: 'boy', shape: "rect", coordinates: "1200, 700, 1525, 900" },
          ]
        },
      }
    ]
  },
]

var stability_nh = [
  {
    type: 'action',
    id: 'check1_birthmom',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_nh_eng1.mp4',
          coordinates: [
            { value: 'zarpie', shape: "rect", coordinates: "225, 170, 505, 900" },
            { value: 'notzarpie', shape: "rect", coordinates: "1165, 170, 1425, 900" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'check2_caregiver',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_nh_eng2.mp4',
          coordinates: [
            { value: 'zarpie', shape: "rect", coordinates: "225, 170, 505, 900" },
            { value: 'notzarpie', shape: "rect", coordinates: "1165, 170, 1425, 900" },
          ]
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'prop1_amino',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/stability/stability_nh_eng3.mp4',
            coordinates: [
              { value: 'zarpie', shape: "rect", coordinates: "80, 700, 400, 900" },
              { value: 'notzarpie', shape: "rect", coordinates: "1200, 700, 1525, 900" },
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
            filename: '../../../assets/movie/stability/stability_nh_eng4.mp4',
            coordinates: [
              { value: 'zarpie', shape: "rect", coordinates: "80, 700, 400, 900" },
              { value: 'notzarpie', shape: "rect", coordinates: "1200, 700, 1525, 900" },
            ]
          },
        }
      ]
    },
    // {
    //   type: 'action',
    //   id: 'prop3_stick',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/stability/stability_eng5.mp4',
    //         coordinates: [
    //           { value: 'zarpie', shape: "rect", coordinates: "80, 700, 400, 900" },
    //           { value: 'notzarpie', shape: "rect", coordinates: "1200, 700, 1525, 900" },
    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      type: 'control',
      shuffle: true
    }
  ],
  {
    type: 'action',
    id: 'prop4_isazarpie',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/stability/stability_nh_eng6.mp4',
          coordinates: [
            { value: 'zarpie', shape: "rect", coordinates: "80, 700, 400, 900" },
            { value: 'notzarpie', shape: "rect", coordinates: "1200, 700, 1525, 900" },
          ]
        },
      }
    ]
  },
]

///// Strict Boundaries /////
var bound_fh = [
  {
    type: 'action',
    id: 'bound_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/strict_bound/bound_fh_eng1.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'bound_prop1_enzyme',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/strict_bound/bound_fh_eng2.mp4',
            coordinates: [
              { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
              { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
            ]
          },
        }
      ]
    },
    // {
    //   type: 'action',
    //   id: 'bound_prop2_perilla',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/strict_bound/bound_fh_eng3.mp4',
    //         coordinates: [
    //           { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
    //           { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      type: 'action',
      id: 'bound_prop3_roll',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/strict_bound/bound_fh_eng4.mp4',
            coordinates: [
              { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
              { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
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

var bound_nh = [
  {
    type: 'action',
    id: 'bound_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/strict_bound/bound_nh_eng1.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'bound_prop1_enzyme',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/strict_bound/bound_nh_eng2.mp4',
            coordinates: [
              { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
              { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
            ]
          },
        }
      ]
    },
    // {
    //   type: 'action',
    //   id: 'bound_prop2_perilla',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/strict_bound/bound_nh_eng3.mp4',
    //         coordinates: [
    //           { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
    //           { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      type: 'action',
      id: 'bound_prop3_roll',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/strict_bound/bound_nh_eng4.mp4',
            coordinates: [
              { value: 'yes_strict', shape: "rect", coordinates: "75, 700, 505, 950" },
              { value: 'no_not_strict', shape: "rect", coordinates: "1110, 700, 1550, 950" },
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

///// Homogeneity /////
var homogeneity_fh = [
  {
    type: 'action',
    id: 'homogeneity_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_eng1.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_fh_eng2.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_fh_eng3.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_fh_eng4.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_fh_eng5.mp4',
          coordinates: [
            { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
          ]
        },
      }
    ]
  },
  {
    type: 'action',
    id: 'homogeneity_warmup5',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_fh_eng_great.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'homogeneity_prop1_marrow',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/homogeneity/homo_fh_eng6.mp4',
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
    // {
    //   type: 'action',
    //   id: 'homogeneity_prop2_kiwi',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/homogeneity/homo_fh_eng7.mp4',
    //         coordinates: [
    //           { value: 'one', shape: "rect", coordinates: "215, 650, 465, 955" },
    //           { value: 'few', shape: "rect", coordinates: "550, 650, 800, 955" },
    //           { value: 'lots', shape: "rect", coordinates: "890, 650, 1135, 955" },
    //           { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      type: 'action',
      id: 'homogeneity_prop3_puddle',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/homogeneity/homo_fh_eng8.mp4',
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
      type: 'control',
      shuffle: true
    }
  ]
]

var homogeneity_nh = [
  {
    type: 'action',
    id: 'homogeneity_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/homogeneity/homo_nh_eng1.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_nh_eng2.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_nh_eng3.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_nh_eng4.mp4',
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
          filename: '../../../assets/movie/homogeneity/homo_nh_eng5.mp4',
          coordinates: [
            { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
          ]
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'homogeneity_prop1_marrow',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/homogeneity/homo_nh_eng6.mp4',
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
    // {
    //   type: 'action',
    //   id: 'homogeneity_prop2_kiwi',
    //   stimuli: [
    //     {
    //       type: 'movie',
    //       parameters: {
    //         filename: '../../../assets/movie/homogeneity/homo_nh_eng7.mp4',
    //         coordinates: [
    //           { value: 'one', shape: "rect", coordinates: "215, 650, 465, 955" },
    //           { value: 'few', shape: "rect", coordinates: "550, 650, 800, 955" },
    //           { value: 'lots', shape: "rect", coordinates: "890, 650, 1135, 955" },
    //           { value: 'all', shape: "rect", coordinates: "1230, 650, 1475, 955" },
    //         ]
    //       },
    //     }
    //   ]
    // },
    {
      type: 'action',
      id: 'homogeneity_prop3_puddle',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/homogeneity/homo_nh_eng8.mp4',
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
      type: 'control',
      shuffle: true
    }
  ]
]

///// Naturalness /////
var natural_fh = [
  {
    type: 'action',
    id: 'nat_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/natural/natural_fh_eng1.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'nat_girl',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/natural/natural_fh_eng2.mp4',
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
            filename: '../../../assets/movie/natural/natural_fh_eng3.mp4',
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
            filename: '../../../assets/movie/natural/natural_fh_eng4.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "170, 700, 620, 925" },
              { value: 'no', shape: "rect", coordinates: "1115, 700, 1555, 925" },
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

var natural_nh = [
  {
    type: 'action',
    id: 'nat_intro',
    stimuli: [
      {
        type: 'movie',
        parameters: {
          filename: '../../../assets/movie/natural/natural_nh_eng1.mp4',
        },
      }
    ]
  },
  [
    {
      type: 'action',
      id: 'nat_zarpie',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/natural/natural_nh_eng2.mp4',
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
      id: 'nat_notzarpie',
      stimuli: [
        {
          type: 'movie',
          parameters: {
            filename: '../../../assets/movie/natural/natural_nh_eng3.mp4',
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
            filename: '../../../assets/movie/natural/natural_nh_eng4.mp4',
            coordinates: [
              { value: 'yes', shape: "rect", coordinates: "170, 700, 620, 925" },
              { value: 'no', shape: "rect", coordinates: "1115, 700, 1555, 925" },
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

///////// The Conditions /////////

var familiar_human = [
  forms,
  startGame_fh,
  causal_fh,
  [
    stability_fh,
    bound_fh,
    homogeneity_fh,
    natural_fh,
    {
      type: 'control',
      shuffle: true
    }
  ],
  [
    def_to_expert,
    relational,
    {
      type: 'control',
      shuffle: true
    }
  ]
];

var novel_human = [
  forms,
  startGame_nh,
  causal_nh,
  [
    stability_nh,
    bound_nh,
    homogeneity_nh,
    natural_nh,
    {
      type: 'control',
      shuffle: true
    }
  ],
  [
    def_to_expert,
    relational,
    {
      type: 'control',
      shuffle: true
    }
  ]
];


///////// The Study /////////

export const Project = {
  conditions: [
    familiar_human,
    // novel_human
  ],
  name: "essentialism_cmom",
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
