// src/lib/coaches.ts

export interface CoachSkill {
    name: string;
  }
  
  export interface Coach {
    id: string;
    name: string;
    title: string;
    type: 'head' | 'assistant' | 'guest'; // To categorize coaches
    photo: string; // URL to the coach's photo
    photoAlt?: string; // Alt text for accessibility
    initials: string; // Fallback for when photo is not available
    shortBio: string; // Brief bio for cards and previews
    fullBio: string[]; // Full bio paragraphs for detailed view
    featured?: boolean; // Flag for featured coaches
    order?: number; // For custom ordering (lower numbers appear first)
    skills: CoachSkill[];
    socialLinks?: {
      twitter?: string;
      instagram?: string;
      linkedin?: string;
      facebook?: string;
    };
    achievements?: string[]; // Notable achievements
    specialty?: string; // Coach's specialty area
    availableForPrivateLessons?: boolean;
  }
  
  export const coaches: Coach[] = [
    {
      id: "mark-ofosu",
      name: "Mark Ofosu",
      title: "Founder & Head Coach",
      type: "head",
      photo: "/images/mark.jpg", // Update with actual photo path
      photoAlt: "Coach Mark Ofosu in Ghana BlueFins uniform",
      initials: "MO",
      featured: true,
      order: 1,
      shortBio: "Former Ghana National Swimmer and current National Triathlete with extensive international competition experience.",
      fullBio: [
        "Mark started his swimming career as a student at the University of Ghana, Legon in 2013, where he was the swim captain of the university swim team for 3 years. He previously was a Ghana National Swimmer and currently is a Ghana National Triathlete.",
        "He has participated in some prestigious meets, including the 2015 Pan-African Games in the Congo and, more recently, the 2022 Commonwealth Games in Birmingham (UK). He is currently a swim coach in the United States and is passionate about incorporating similar techniques, drills, coaching styles, and training regimens in Ghana BlueFins.",
        "He is an ASCA Level 1 coach, FINA level 2 swim coach, a certified lifeguard, and an ITU (International Triathlon Union) level 1 coach. He enjoys interacting with his swimmers, but also knows when he needs to be strict! He is easy-going, open to new ideas, hardworking, and motivated."
      ],
      skills: [
        { name: "ASCA Level 1" },
        { name: "FINA Level 2" },
        { name: "ITU Level 1" },
        { name: "Competitive Swimmer" },
        { name: "Triathlete" }
      ],
      socialLinks: {
        instagram: "https://instagram.com/", // Replace with actual links if available
        linkedin: "https://linkedin.com/"
      },
      achievements: [
        "2022 Commonwealth Games Participant",
        "2015 Pan-African Games Participant",
        "University of Ghana Swim Team Captain (3 years)"
      ],
      specialty: "Competitive Swimming & Triathlon Training",
      availableForPrivateLessons: true
    },
    {
      id: "desmond-amponsah",
      name: "Desmond Amponsah",
      title: "Head Swim Coach",
      type: "head",
      photo: "/images/desmond.jpg", // Update with actual photo path
      photoAlt: "Coach Desmond Amponsah instructing swimmers",
      initials: "DA",
      featured: true,
      order: 2,
      shortBio: "Multilingual coach with extensive experience developing swimmers of all abilities since 2017.",
      fullBio: [
        "Desmond began his swimming career as a student at the University of Ghana in 2014 where he swam competitively for 4 years. He worked at Finishline Swimming Academy in 2015 before joining Ghana BlueFins in 2017 as a swim coach.",
        "Desmond is a FINA Level 2 and ASCA Level 1 certified swim coach. His ability to speak English, French, ASL (American Sign Language), Spanish, and 5 other languages coupled with his knowledge in sociology, makes him invaluable when it comes to dealing with the diversity of athletes in the swim club.",
        "He is very patient, innovative, passionate and results-oriented when teaching. His ability to connect and interact with swimmers aids him in finding ways to fulfill their unique individual swimming needs. Desmond incorporates fun challenges not only to keep swimmers interested in the sport, but also to push them to reach their goals."
      ],
      skills: [
        { name: "ASCA Level 1" },
        { name: "FINA Level 2" },
        { name: "Multilingual" },
        { name: "Sociology Background" },
        { name: "Competitive Swimmer" }
      ],
      socialLinks: {
        instagram: "https://instagram.com/", // Replace with actual links if available
        facebook: "https://facebook.com/"
      },
      achievements: [
        "University of Ghana Competitive Swimmer (4 years)",
        "Innovative training program developer"
      ],
      specialty: "Youth Development & Multilingual Instruction",
      availableForPrivateLessons: true
    },
    // Example Assistant Coaches - Add your actual assistant coaches here
    {
      id: "sarah-addo",
      name: "Sarah Addo",
      title: "Assistant Coach",
      type: "assistant",
      photo: "/images/coaches/sarah-addo.jpg", 
      photoAlt: "Coach Sarah Addo",
      initials: "SA",
      order: 3,
      shortBio: "Specializes in teaching beginners and helping them build confidence in the water.",
      fullBio: [
        "Sarah joined Ghana BlueFins in 2019 after completing her swimming instruction certification. She specializes in working with beginners of all ages, with a particular focus on helping children overcome fear of water.",
        "With her patient approach and encouraging teaching style, Sarah has helped hundreds of new swimmers develop confidence and foundational skills in the water."
      ],
      skills: [
        { name: "Water Safety" },
        { name: "Beginner Instruction" },
        { name: "Child Development" }
      ],
      specialty: "Beginner Swimming & Water Confidence",
      availableForPrivateLessons: true
    },
    {
      id: "kofi-mensah",
      name: "Kofi Mensah",
      title: "Assistant Coach",
      type: "assistant",
      photo: "/images/coaches/kofi-mensah.jpg",
      photoAlt: "Coach Kofi Mensah",
      initials: "KM",
      order: 4,
      shortBio: "Former competitive swimmer focusing on stroke technique refinement and race strategy.",
      fullBio: [
        "Kofi joined the BlueFins coaching team in 2020 after competing at the national level for 5 years. He brings his technical expertise and competitive experience to help swimmers refine their strokes and develop effective race strategies.",
        "His attention to detail and analytical approach have helped many of our competitive swimmers improve their times and technique."
      ],
      skills: [
        { name: "Stroke Technique" },
        { name: "Race Strategy" },
        { name: "Competitive Experience" }
      ],
      specialty: "Technical Stroke Development",
      availableForPrivateLessons: true
    }
    // Add more coaches as needed
  ];
  
  // Helper function to get a coach by ID
  export function getCoachById(id: string): Coach | undefined {
    return coaches.find(coach => coach.id === id);
  }
  
  // Helper function to get all coaches
  export function getAllCoaches(): Coach[] {
    return coaches.sort((a, b) => (a.order || 99) - (b.order || 99));
  }
  
  // Helper function to get coaches by type
  export function getCoachesByType(type: Coach['type']): Coach[] {
    return coaches
      .filter(coach => coach.type === type)
      .sort((a, b) => (a.order || 99) - (b.order || 99));
  }
  
  // Helper function to get featured coaches
  export function getFeaturedCoaches(): Coach[] {
    return coaches
      .filter(coach => coach.featured)
      .sort((a, b) => (a.order || 99) - (b.order || 99));
  }