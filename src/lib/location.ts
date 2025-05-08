// src/lib/locations.ts

export interface Program {
    id: string;
    name: string;
    ageGroup: string;
    description: string[];
    details: {
      key: string;
      value: string;
    }[];
    locationIds: string[];
  }
  
  export interface Location {
    id: string;
    name: string;
    address: string;
    image: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
    contactInfo?: {
      phone?: string;
      email?: string;
    };
    hours?: {
      weekdays?: string;
      weekends?: string;
      notes?: string;
    };
    amenities?: string[];
  }
  
  // Programs data
  export const programs: Program[] = [
    {
      id: "leisure",
      name: "Learn-to-Swim for Leisure",
      ageGroup: "3 years and older",
      description: [
        "This swim lesson program is meant for individuals (ages 3 and up) wanting to learn how to swim for leisure or as a safety skill. They will be taught the necessary skills to be able to swim laps, but will not be taught techniques and rules for competitive swimming.",
        "We will work with all prospective participants in this program to find a convenient time to have swim lessons."
      ],
      details: [
        { key: "Age Group", value: "3 years and older" },
        { key: "Location", value: "Spintex Road (Splash Social Center)" },
        { key: "Schedule", value: "Flexible scheduling available" }
      ],
      locationIds: ["spintex"]
    },
    {
      id: "competitive",
      name: "Learn-to-Swim for Competitive Swimming",
      ageGroup: "5 years and older",
      description: [
        "This swim lesson program is meant for individuals (ages 5 and up) wanting to learn how to swim competitively. They will be taught the necessary skills to be able to swim laps and will be taught the techniques and rules to be a competitive swimmer.",
        "After graduating from this program, swimmers will be able to join the Ghana BlueFins competitive swim team. We will work with all prospective participants in this program to find a convenient time to have swim lessons."
      ],
      details: [
        { key: "Age Group", value: "5 years and older" },
        { key: "Location", value: "Spintex Road (Splash Social Center)" },
        { key: "Schedule", value: "Flexible scheduling available" }
      ],
      locationIds: ["spintex"]
    },
    {
      id: "mini",
      name: "Mini BlueFins",
      ageGroup: "2 to 6 years",
      description: [
        "This program is meant for children (ages 2 to 6) to gain water confidence and learn the fundamentals of swimming. They will learn to blow bubbles, kick, float, be comfortable in water, and do survival swimming techniques.",
        "As they become more confident in the water, they will start to learn the basics of the four swim strokes - freestyle, backstroke, breastroke, and butterfly. The Mini BlueFins program is run in small groups with each practice lasting 30 minutes.",
        "Because younger children need continuous exposure to water and more time to develop their swimming skills, this is an ongoing program that is held several times a week. We suggest swimmers come at least once a week."
      ],
      details: [
        { key: "Age Group", value: "2 to 6 years" },
        { key: "Location", value: "Spintex Road (Splash Social Center)" },
        { key: "Session Length", value: "30 minutes" },
        { key: "Recommended Frequency", value: "At least once per week" }
      ],
      locationIds: ["spintex"]
    },
    {
      id: "team",
      name: "Competitive Swim Team",
      ageGroup: "All ages",
      description: [
        "This program is meant for all age groups and for swimmers who can swim all four competitive strokes – freestyle, backstroke, breaststroke, butterfly. Less experienced swimmers will be working on mastering all four strokes, improving stroke techniques, and building stamina in order to compete in swim meets.",
        "More experienced swimmers will be working on improving stroke techniques, reducing their times, and building their strength and endurance. Swim meets are not required, but are strongly suggested. Swimmers are expected to attend at least 3 workouts a week."
      ],
      details: [
        { key: "Age Group", value: "All ages" },
        { key: "Prerequisites", value: "Ability to swim all four competitive strokes" },
        { key: "Location", value: "Spintex Road (Splash Social Center)" },
        { key: "Expected Attendance", value: "At least 3 workouts per week" }
      ],
      locationIds: ["spintex"]
    },
    {
      id: "masters",
      name: "Masters Swim Team",
      ageGroup: "18 years and older",
      description: [
        "This program is meant for adults (18 years old and above) who want to exercise regularly through swimming, want to improve their swimming ability, and want to become a part of the Ghana BlueFins swimming community.",
        "Swimmers should already be able to swim at least 1 stroke and should be able to swim a lap without stopping. The coach will provide guidance through correcting strokes and running swim sets for all different levels of swimmers.",
        "Those adult swimmers graduating from the learn-to-swim (leisure) program and who can fulfill the above requirements, are eligible to join the masters team."
      ],
      details: [
        { key: "Age Group", value: "18 years and older" },
        { key: "Prerequisites", value: "Ability to swim at least one stroke and complete one lap without stopping" },
        { key: "Location", value: "Burma Camp Swimming Pool" }
      ],
      locationIds: ["burma-camp"]
    }
  ];
  
  // Locations data
  export const locations: Location[] = [
    {
      id: "spintex",
      name: "Spintex Road",
      address: "Splash Social Center, Spintex Road, Accra",
      image: "/images/spintex-pool.jpg",
      coordinates: {
        lat: 5.6037,
        lng: -0.1870
      },
      hours: {
        weekdays: "6:00 AM - 8:00 PM",
        weekends: "7:00 AM - 6:00 PM"
      },
      amenities: [
        "Olympic-size swimming pool",
        "Changing rooms",
        "Shower facilities",
        "Qualified instructors"
      ]
    },
    {
      id: "burma-camp",
      name: "Burma Camp",
      address: "Burma Camp Swimming Pool, Burma Camp, Accra",
      image: "/images/burma-camp-pool.jpg",
      coordinates: {
        lat: 5.5914,
        lng: -0.1587
      },
      hours: {
        weekdays: "6:00 AM - 7:00 PM",
        weekends: "7:00 AM - 5:00 PM"
      },
      amenities: [
        "Standard swimming pool",
        "Changing rooms",
        "Shower facilities",
        "Military-grade training equipment"
      ]
    }
  ];
  
  // Helper functions
  export function getProgramsByLocationId(locationId: string): Program[] {
    return programs.filter(program => program.locationIds.includes(locationId));
  }
  
  export function getLocationById(id: string): Location | undefined {
    return locations.find(location => location.id === id);
  }
  
  export function getAllLocations(): Location[] {
    return locations;
  }
  
  export function getProgramById(id: string): Program | undefined {
    return programs.find(program => program.id === id);
  }
  
  export function getAllPrograms(): Program[] {
    return programs;
  }