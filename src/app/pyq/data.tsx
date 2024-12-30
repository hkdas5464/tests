import { link } from "node:fs";
import { title } from "node:process";
import { describe } from "node:test";

interface Subjects {

    title: string;
    link: string;
    description: string;
}

export const English = [
    {
        description: "SSC CGL 2023 COMPLETE MATHS COMPILATION (ENGLISH)",
        title: 'SSC CGL 2023',
        link: "https://drive.google.com/file/d/13KwtRUwU7vV-4JbOTXtCXKkpbgxEde_I/view?usp=sharing"
    },
    {
        description: "ALGEBRA SSC CGL 2023 T-1 all 88 Questions",
        title: 'ALGEBRA',
        link: "https://drive.google.com/file/d/1WsGzdRA-cWcVbFCYG2pN88aELsnRr4_F/view?usp=sharing"
    },
    {
        description: "Average SSC CGL 2023 T-1",
        title: 'Average',
        link: "https://drive.google.com/file/d/1XWYiM_zY4fas-sLDbvp_VV3S-pXMzTgM/view?usp=sharing"
    }, {
        description: "Boat & Stream SSC CGL 2023 T-1",
        title: 'Boat & Stream',
        link: "https://drive.google.com/file/d/1XXNLkR7oouu6nyVrag7OZfkg0Q9sMVtV/view?usp=sharing"
    }, {
        description: "Computerengone liner SSC Delhi police constable 2023",
        title: 'SSC Delhi police',
        link: "https://drive.google.com/file/d/1Xtbyn5ijfbSWgu9n4Y7ngpAqfTgAEeVK/view?usp=sharing"
    }
    , {
        description: "Geometry(triangle) SSC CGL 2023 Tier-1 all quesitons",
        title: 'Geometry',
        link: "https://drive.google.com/file/d/1Wtd6OHvirmrfXwi69NL9EjQ7GPi2Qbl_/view?usp=sharing"
    },
    {
        description: "Mensuration 3D SSC CGL",
        title: 'Mens.',
        link: "https://drive.google.com/file/d/1WbZruvfo2k61i2LgxJgLKAZoY1k4vkBT/view?usp=sharing"
    }, {
        description: "Mixture & Alligation SSC CGL 2023",
        title: 'Mixture & Alligation',
        link: "https://drive.google.com/file/d/1XaCMJl-FiHipkIHrN2PHa9WAbGAe_rkN/view?usp=sharing"
    }, {
        description: "Number System SSC CGL 2023",
        title: 'Number System',
        link: "https://drive.google.com/file/d/1WsvQCC0cIf40EkzeMMDaK1dJDBbYV-pv/view?usp=sharing"
    },
    {
        description: "Police & Thief SSC CGL 2023 T-1",
        title: 'Police & Thief',
        link: "https://drive.google.com/file/d/1XfsmhJij4iwLnYb1nG-2-EngycN3t6lV/view?usp=sharing"
    }
    ,
    {
        description: "Profit Loss and Discount SSC CGL 2023",
        title: 'P & L & Discount',
        link: "https://drive.google.com/file/d/1XmFZB6eoMMPnuOWpEPHoG2e5tjYaeDQs/view?usp=sharing"
    }
    ,
    {
        description: "Race SSC CGL 2023 T-1",
        title: 'Race',
        link: "https://drive.google.com/file/d/1XW3KotqYnCrWVPcdJZsh5zB8QCNMdFWt/view?usp=sharing"
    }
    ,
    {
        description: "Ratio & Proportion SSC CGL 2023",
        title: 'Ratio & Proportion',
        link: "https://drive.google.com/file/d/1XR7d9sXWUJxVPNQB-cNd6VBUZhxK4lkX/view?usp=sharing"
    }
    ,
    {
        description: "SI AND CI (Eng) SSC CGL 2023",
        title: 'SI AND CI',
        link: "https://drive.google.com/file/d/1WfrkWTozQoR5yljMfEbuQ9oDsPpN_MsI/view?usp=sharing"
    }
    ,
    {
        description: "Time Speed & Distance SSC CGL 2023",
        title: 'Time Speed & Distance',
        link: "https://drive.google.com/file/d/1X2KQuaEvyFJ67xSeSTx3030EY-xCpb2G/view?usp=sharing"
    }]

export const GK_GS = [{
    description: 1,
    title: '2020',
    link: ""
},
{
    description: 2,
    title: '2021',
    link: ""
}, {
    description: 3,
    title: '2022',
    link: ""
}, {
    description: 4,
    title: '2023',
    link: ""
}]

export const Reasoning = [{
    description: "Reasoning DSSSB JJA Mar 2024 compilation_RBE_compressed",
    title: 'Reasoning DSSSB',
    link: "https://drive.google.com/file/d/1_eUfR5yibFDQewnCtx0-KDwd_FqFfMuP/view?usp=sharing"
},
{
    description: "SSC_CGL2021_REASONING(English)_topic-wise_RBE (optimized)",
    title: 'SSC_CGL2021_REASONING',
    link: "https://drive.google.com/file/d/1ABULsUPqnlGKGGtazjGafycufBzAz-TV/view?usp=sharing"
}]


export const Mathsdata: Subjects[] = [
    {
        description: "Selection_Post_Phase_viii_,ix,_x,_xi_All_Maths_Questions",
        title: "Selection_Post_Phase",
        link: "https://drive.google.com/file/d/1DnY39Id7mh3Jw5rgXvL6bxFhhQNzXeTM/view?usp=sharing"
    },
    {
        description: "RPF SI ALL Maths QUESTIONS 2019",
        title: "RPF SI ALL Maths QUESTIONS",
        link: "https://drive.google.com/file/d/1DsYcjvTYLylRHAMk9DpH6421Tp5l6JXA/view?usp=sharing"
    },
    {
        description: "RRB NTPC ALL Maths QUESTIONS 2019",
        title: "RRB NTPC ALL Maths QUESTIONS",
        link: "https://drive.google.com/file/d/1E93sraZ256YZVjoMgHyjAl2n-x6uGqn3/view?usp=sharing"
    },
    {
        description: "Railway ALP ALL Maths QUESTIONS (Bilingual)",
        title: "Railway ALP ALL Maths",
        link: "https://drive.google.com/file/d/1E8xLSCxCRqoO_2-QVg1K0EzF3wxLdKmW/view?usp=sharing",
    },

    {
        description: "Railway Group D ALL Maths QUESTIONS (Bilingual)",
        title: "Railway Group D ALL Maths",
        link: "https://drive.google.com/file/d/1ENX1UQQQP4udKsyixZEiA6Qv85JcX1or/view?usp=sharing"
    },

    {
        description: "CPO 2023 All Shift Ques + Solution",
        title: "CPO 2023 All Shift Ques + Sol",
        link: "https://drive.google.com/file/d/1ERiKoOU_wHRvM1og7nUZeqF7DCnZZavw/view?usp=sharing"
    },

    {
        description: "CDS-1 (2024) All Maths Questions With Answer Key",
        title: "CDS-1 (2024) All Maths Questions With Answer Key",
        link: "https://drive.google.com/file/d/1EQx9BU5jh9MqbWMn67WDNWc_XRKPY_XN/view?usp=sharing"
    },
    {
        description: "RPF CONSTABLE ALL Maths QUESTIONS 2019",
        title: "RPF CONSTABLE ALL Maths QUESTIONS",
        link: "https://drive.google.com/file/d/1EE3yBEKep4s3pt-jhUCGUc4kTA5CvBOe/view?usp=sharing"
    },
    {
        description: "Selection_Post_Phase_viii_,ix,_x,_xi_All_Maths_Questions",
        title: "Selection_Post_Phase",
        link: "https://drive.google.com/file/d/1DnY39Id7mh3Jw5rgXvL6bxFhhQNzXeTM/view?usp=sharing"
    },
    {
        description: "ALGEBRA SSC CGL 2023 T-1 all 88 Questions",
        title: 'ALGEBRA',
        link: "https://drive.google.com/file/d/1WsGzdRA-cWcVbFCYG2pN88aELsnRr4_F/view?usp=sharing"
    },
    {
        description: "Average SSC CGL 2023 T-1",
        title: 'Average',
        link: "https://drive.google.com/file/d/1XWYiM_zY4fas-sLDbvp_VV3S-pXMzTgM/view?usp=sharing"
    }, {
        description: "Boat & Stream SSC CGL 2023 T-1",
        title: 'Boat & Stream',
        link: "https://drive.google.com/file/d/1XXNLkR7oouu6nyVrag7OZfkg0Q9sMVtV/view?usp=sharing"
    }, {
        description: "Computerengone liner SSC Delhi police constable 2023",
        title: 'SSC Delhi police',
        link: "https://drive.google.com/file/d/1Xtbyn5ijfbSWgu9n4Y7ngpAqfTgAEeVK/view?usp=sharing"
    }
    , {
        description: "Geometry(triangle) SSC CGL 2023 Tier-1 all quesitons",
        title: 'Geometry',
        link: "https://drive.google.com/file/d/1Wtd6OHvirmrfXwi69NL9EjQ7GPi2Qbl_/view?usp=sharing"
    },
    {
        description: "Mensuration 3D SSC CGL",
        title: 'Mens.',
        link: "https://drive.google.com/file/d/1WbZruvfo2k61i2LgxJgLKAZoY1k4vkBT/view?usp=sharing"
    }, {
        description: "Mixture & Alligation SSC CGL 2023",
        title: 'Mixture & Alligation',
        link: "https://drive.google.com/file/d/1XaCMJl-FiHipkIHrN2PHa9WAbGAe_rkN/view?usp=sharing"
    }, {
        description: "Number System SSC CGL 2023",
        title: 'Number System',
        link: "https://drive.google.com/file/d/1WsvQCC0cIf40EkzeMMDaK1dJDBbYV-pv/view?usp=sharing"
    },
    {
        description: "Police & Thief SSC CGL 2023 T-1",
        title: 'Police & Thief',
        link: "https://drive.google.com/file/d/1XfsmhJij4iwLnYb1nG-2-EngycN3t6lV/view?usp=sharing"
    }
    ,
    {
        description: "Profit Loss and Discount SSC CGL 2023",
        title: 'P & L & Discount',
        link: "https://drive.google.com/file/d/1XmFZB6eoMMPnuOWpEPHoG2e5tjYaeDQs/view?usp=sharing"
    }
    ,
    {
        description: "Race SSC CGL 2023 T-1",
        title: 'Race',
        link: "https://drive.google.com/file/d/1XW3KotqYnCrWVPcdJZsh5zB8QCNMdFWt/view?usp=sharing"
    }
    ,
    {
        description: "Ratio & Proportion SSC CGL 2023",
        title: 'Ratio & Proportion',
        link: "https://drive.google.com/file/d/1XR7d9sXWUJxVPNQB-cNd6VBUZhxK4lkX/view?usp=sharing"
    }
    ,
    {
        description: "SI AND CI (Eng) SSC CGL 2023",
        title: 'SI AND CI',
        link: "https://drive.google.com/file/d/1WfrkWTozQoR5yljMfEbuQ9oDsPpN_MsI/view?usp=sharing"
    }
    ,
    {
        description: "Time Speed & Distance SSC CGL 2023",
        title: 'Time Speed & Distance',
        link: "https://drive.google.com/file/d/1X2KQuaEvyFJ67xSeSTx3030EY-xCpb2G/view?usp=sharing"
    },
    {
        description: "Trigonometry SSC CGL 2023",
        title: 'Trigono',
        link: "https://drive.google.com/file/d/1KtCI9Ceg8P8KnCEH6ZSNm5TXjR8Pnyo5/view?usp=sharing"

    }
    ,
    {
        description: "TIME AND WORK CGL 2023 TIER 1",
        title: 'TIME AND WORK',
        link: "https://drive.google.com/file/d/1TxjqpAebROdzLbOPwJMbtMftJMQxvk8z/view?usp=sharing"
    },
    {
        description: "Circle SSC CGL 2023",
        title: 'Circle',
        link: "https://drive.google.com/file/d/1XjC10dQoLH8IU7TQH9PT1jRK-jIgAbJ6/view?usp=sharing"
    },

]


export const CurrentAffairs = [{
    description: "RBE Revolutionary Current Affairs",
    title: 'RBE',
    link: "https://drive.google.com/file/d/1CZOCs6skQWiRwfgJTmVrxZ9UWCPW3mQd/view?usp=sharing"
},
{
    description: "Parmar",
    title: 'Parmar',
    link: "https://drive.google.com/file/d/13a84Zkvx7tEBgaaoil70jOWX2b9c1uky/view?usp=sharing"
}
    ,
{
    description: "Parmar",
    title: 'Parmar',
    link: "https://drive.google.com/file/d/13a84Zkvx7tEBgaaoil70jOWX2b9c1uky/view?usp=sharing"
}
]

export const EnglishData = [
    {
        description: "TARUN_GROVER_PAID_ENGLISH_HAND_WRITTEN_NOTES_PDF",
        title: 'TARUN_GROVER_PAID_ENGLISH',
        link: "https://drive.google.com/file/d/19u77aVf6idfJch-JBbbJU303yNMJPbFM/view?usp=sharing"
    },
    {
        description: "Idioms_Book_for_SSC_CPO,_CHSL,_CGL",
        title: 'Idioms_Book_for_SSC',
        link: "https://drive.google.com/file/d/1BmztFAtnQOvNFWJXp9Q7rwBJEVwSGKv-/view?usp=sharing"
    },
    {
        description: "English topic-wise SSC CPO 2023 T-1_img_RBE_compressed",
        title: 'English All',
        link: "https://drive.google.com/file/d/10zHzVqk9XqnR8Q7FPp0SAZX2AX6-Qcfb/view?usp=sharing"
    },
    {
        description: "Last 5 Years IDIOMS",
        title: 'IDIOMS',
        link: "https://drive.google.com/file/d/15dYP18h4MFoJ5J0HF1rQRud_hvLocyV5/view?usp=sharing"
    }
    ,
    {
        description: "IB ACIO 2024 complete solution eBook",
        title: 'IB ACIO 2024',
        link: "https://drive.google.com/file/d/14mq4sP2RDc781MMpHX2eEkCz5lamJg-A/view?usp=sharing"
    }
    ,
    {
        description: "IB ACIO 2024 Complete Vocab eBook",
        title: 'IB ACIO VOCAB',
        link: "https://drive.google.com/file/d/1vV2vfbqjDja5gI2twErSretHrPeeVRlV/view?usp=sharing"
    }
]

export const animals = [
    { key: "SSC2024", label: "2024" },
    { key: "SSC2023", label: "2023" },
    { key: "SSC2022", label: "2022" },
    { key: "SSC2021", label: "2021" },
    { key: "SSC2020", label: "2020" },
    { key: "SSC2019", label: "2019" },
    { key: "SSC2018", label: "2018" },

];


export const SSC2024 = [
    { key: "SSC CHSL TIRE 2 2024", label: "SSC CHSL TIRE 2 2024", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
    { key: "SSC CGL 2024 TIRE 1", label: "SSC CGL 2024", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
    { key: "SSC CGL 2024 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
    { key: "SSC CGL 2024 ENGLISH ALL", label: "SSC CGL 2024 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
    { key: "SSC CGL 2024 REASONING ALL", label: "SSC CGL 2024 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
    { key: "SSC CGL 2024 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2024 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
    { key: "SSC CGL 2024 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2024 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
    { key: "SSC CHSL 2024 TIRE 1", label: "SSC CHSL 2024 TIRE 1", link: "https://drive.google.com/file/d/1lOP_4ev-svJ2ped6j82qkIurrBfP6eut/view?usp=sharing" },
    { key: "SSC CPO 2024 TIRE 1", label: "SSC CPO 2024 TIRE 1", link: "https://drive.google.com/file/d/1l9kEyZlBN6hbhdifZ2zUZdnep4jL1xBw/view?usp=sharing" },
    {key:"SSC PHASE XII 2024 ",label:"SSC PHASE XII 2024",link:"https://drive.google.com/file/d/1PsPv7Wf52mrruTKPoE5eV8QQr46be6FP/view?usp=sharing"}
];

export const jpsc2021 = [
    { key: "GENERAL STUDIES I", label: "GENERAL STUDIES I", link: "https://drive.google.com/file/d/1g3Q58s_A1Mh45UUd2SZhwn5q1fM4FH0e/preview" },
    {key:"GENERAL STUDIES II",label:'GENERAL STUDIES II',link:"https://drive.google.com/file/d/1zX-yZSRRlsa2gXhWZemW8HL4U6oM1k5y/preview"},
    {key:"INDIAN CONSTITUTION AND POLITY, PUBLIC ADMINISTRATION AND GOOD GOVERNANCE",label:'INDIAN CONSTITUTION AND POLITY, PUBLIC ADMINISTRATION AND GOOD GOVERNANCE',link:"https://drive.google.com/file/d/1Qi8Dxv1TvlMFHc3fnkXum-oh41FPeVfq/preview"},
    {key:"INDIAN EICONOMY, GLOBALIZATION AND SUSTAINABLH DEVELOPMENT",label:'INDIAN EICONOMY, GLOBALIZATION AND SUSTAINABLH DEVELOPMENT',link:"https://drive.google.com/file/d/1aGD6HUdt4H1dNnBpHoycORhETZAWgd-G/preview"}
];





export const countryStateData = [
    {
        countryKey: 'SSC2024',
        countryName: 'SSC 2024',
        states: [
            { key: "SSC CHSL TIRE 2 2024", label: "SSC CHSL TIRE 2 2024", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2024 TIRE 1", label: "SSC CGL 2024", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2024 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2024 ENGLISH ALL", label: "SSC CGL 2024 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2024 REASONING ALL", label: "SSC CGL 2024 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2024 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2024 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2024 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2024 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "SSC CHSL 2024 TIRE 1", label: "SSC CHSL 2024 TIRE 1", link: "https://drive.google.com/file/d/1lOP_4ev-svJ2ped6j82qkIurrBfP6eut/view?usp=sharing" },
            { key: "SSC CPO 2024 TIRE 1", label: "SSC CPO 2024 TIRE 1", link: "https://drive.google.com/file/d/1l9kEyZlBN6hbhdifZ2zUZdnep4jL1xBw/view?usp=sharing" },
            { key: "SSC PHASE XII 2024 ", label:"SSC PHASE XII 2024",link:"https://drive.google.com/file/d/1PsPv7Wf52mrruTKPoE5eV8QQr46be6FP/view?usp=sharing"}

        ],
    },
    {
        countryKey: 'SSC2023',
        countryName: 'SSC 2023',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'SSC2022',
        countryName: 'SSC 2022',
        states: [
            { key: "SSC CGL TIRE 1 2022", label: "SSC CGL TIRE 1 2022", link: "https://www.dropbox.com/scl/fi/ztzoqelva0wq7qnq3grry/SSC-CGL-2022-T-1-40-SETS-ENGLISH.pdf?rlkey=p0i9gdmv41xytpjuoiym04jrd&st=n2hjpzdg&dl=0" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'SSC2021',
        countryName: 'SSC 2021',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'SSC2020',
        countryName: 'SSC 2020',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'SSC2019',
        countryName: 'SSC 2019',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    }
];


export const jpscData = [
    {
        countryKey: 'JPSC2021',
        countryName: 'JPSC 2021',
        states: [
            { key: "GENERAL STUDIES I", label: "GENERAL STUDIES I", link: "https://drive.google.com/file/d/1g3Q58s_A1Mh45UUd2SZhwn5q1fM4FH0e/preview" },
            {key:"GENERAL STUDIES II",label:'GENERAL STUDIES II',link:"https://drive.google.com/file/d/1zX-yZSRRlsa2gXhWZemW8HL4U6oM1k5y/preview"},
            {key:"INDIAN CONSTITUTION AND POLITY, PUBLIC ADMINISTRATION AND GOOD GOVERNANCE",label:'INDIAN CONSTITUTION AND POLITY, PUBLIC ADMINISTRATION AND GOOD GOVERNANCE',link:"https://drive.google.com/file/d/1Qi8Dxv1TvlMFHc3fnkXum-oh41FPeVfq/preview"},
            {key:"INDIAN EICONOMY, GLOBALIZATION AND SUSTAINABLH DEVELOPMENT",label:'INDIAN EICONOMY, GLOBALIZATION AND SUSTAINABLH DEVELOPMENT',link:"https://drive.google.com/file/d/1aGD6HUdt4H1dNnBpHoycORhETZAWgd-G/preview"}


        ],
    },
    {
        countryKey: 'JPSC 2020',
        countryName: 'JPSC 2020',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1g3Q58s_A1Mh45UUd2SZhwn5q1fM4FH0e/preview" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/viewerng/viewer?embedded=true&url=https://cdn.kitchencabinetkings.com/media/siege/kitchen-printables/kitchen-printables_avocado-toast_poster.pdf" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'JPSC 2019',
        countryName: 'JPSC 2019',
        states: [
            { key: "SSC CGL TIRE 1 2022", label: "SSC CGL TIRE 1 2022", link: "https://www.dropbox.com/scl/fi/ztzoqelva0wq7qnq3grry/SSC-CGL-2022-T-1-40-SETS-ENGLISH.pdf?rlkey=p0i9gdmv41xytpjuoiym04jrd&st=n2hjpzdg&dl=0" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'JPSC 2018',
        countryName: 'JPSC 2018',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'JPSC 2017',
        countryName: 'JPSC 2017',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    },
    {
        countryKey: 'JPSC 2016',
        countryName: 'JPSC 2016',
        states: [
            { key: "SSC CHSL TIRE 2 2023", label: "SSC CHSL TIRE 2 2023", link: "https://drive.google.com/file/d/1T9C0uZzaw-aiAfZA62u_1noRS4LcfXix/view?usp=drive_link" },
            { key: "SSC CGL 2023", label: "SSC CGL 2023", link: "https://drive.google.com/file/d/1HMhbtPsPEaaYHx71TEctRBhQDSXsMc9o/view?usp=sharing" },
            { key: "SSC CGL 2023 MATHS ALL TOPIC WISE", label: "SSC CGL 2024 MATHS ALL TOPIC WISE", link: "https://drive.google.com/file/d/15BAEXxrsB7sje1U_22JbxdI8qNZOddXv/view?usp=sharing" },
            { key: "SSC CGL 2023 ENGLISH ALL", label: "SSC CGL 2023 ENGLISH MATHS ALL", link: "https://drive.google.com/file/d/142pNPh-1_gS2_4TTGl7cJK8k7ZmMdSTv/view?usp=sharing" },
            { key: "SSC CGL 2023 REASONING ALL", label: "SSC CGL 2023 REASONING ALL", link: "https://drive.google.com/file/d/1Q4onFNbbb1fMqAjsWl1XyBnkBQuWZAcS/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS ENGLISH ALL TOPIC WISE", link: "https://drive.google.com/file/d/1WH5VVCqJRg7bSxw8XvSamEOuZrKgJB-5/view?usp=sharing" },
            { key: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", label: "SSC CGL 2023 GK/GS HINDI ALL TOPIC WISE", link: "https://drive.google.com/file/d/1NObNixWuYaWMWeFdYpIOEb6lwNC94v8Q/view?usp=sharing" },
            { key: "2019", label: "2019", link: "" },
            { key: "2018", label: "2018", link: "" },
        ],
    }
];



