export type MarkerType = "pin" | "square";

export interface Location {
  id: string;
  type: "pin" | "square";
  name: string;
  coordinates: [number, number];
  popUpLocation: "above" | "below";
  content: {
    title: string;
    subtitle: string;
    image?: string;
    videoUrl?: string;
    videoThumbnail?: string;
    learnMoreUrl?: string;
  };
}

export const locations: Location[] = [
  {
    id: "mo",
    name: "Missouri",
    type: "pin",
    coordinates: [-94.578331, 39.099724],
    popUpLocation: "below",
    content: {
      videoUrl: "https://player.vimeo.com/video/830670385",
      videoThumbnail: `${process.env.PUBLIC_URL}/img/kansas-city-thumbnail.png`,
      title: "Kansas City, MO",
      subtitle: "Kansas City Streetcar",
      learnMoreUrl: "https://www.chargingusforward.com/kansas-city-streetcar",
    },
  },
  {
    id: "pa",
    type: "pin",
    name: "Pennsylvania",
    coordinates: [-79.7489, 40.8774],
    popUpLocation: "below",
    content: {
      videoUrl: "https://player.vimeo.com/video/842673721",
      videoThumbnail: `${process.env.PUBLIC_URL}/img/pittsburgh-thumbnail.png`,
      title: "Pittsburgh, PA",
      subtitle: "POGOH E-Bikeshare Program",
      learnMoreUrl: "https://www.chargingusforward.com/pogoh",
    },
  },
  {
    id: "co",
    type: "pin",
    name: "Colorado",
    coordinates: [-105.3111, 39.113],
    popUpLocation: "below",
    content: {
      videoUrl: "https://player.vimeo.com/video/911006737",
      videoThumbnail: `${process.env.PUBLIC_URL}/img/denver-thumbnail.png`,
      title: "Denver, CO",
      subtitle: "Colorado Electric Scenic & Historic Byways",
      learnMoreUrl:
        "https://www.chargingusforward.com/colorado-electric-byways",
    },
  },
  {
    id: "mi",
    type: "pin",
    name: "Michigan",
    coordinates: [-83.5552, 42.3314],
    popUpLocation: "below",
    content: {
      title: "Detroit, MI",
      subtitle: "Forth’s Affordable Mobility Platform Carshare",
      videoUrl: "https://player.vimeo.com/video/1056864205",
      videoThumbnail: `${process.env.PUBLIC_URL}/img/detroit-thumbnail.png`,
      learnMoreUrl: "https://www.chargingusforward.com/forths-amp",
    },
  },
  {
    id: "mn",
    type: "pin",
    name: "Minnesota",
    coordinates: [-93.9993, 45.6945],
    popUpLocation: "below",
    content: {
      title: "Minneapolis, MN",
      subtitle: "Minnesota Clean School Bus Programs",
      videoUrl: "https://player.vimeo.com/video/1038026387",
      videoThumbnail: `${process.env.PUBLIC_URL}/img/minneapolis-thumbnail.png`,
      learnMoreUrl: "https://www.chargingusforward.com/minnesota-esb-programs",
    },
  },
  {
    id: "wa",
    type: "pin",
    name: "Washington",
    coordinates: [-122.4429, 47.2529],
    popUpLocation: "below",
    content: {
      title: "Tacoma, WA",
      subtitle: "Coming Soon",
    },
  },
  {
    id: "ut",
    type: "pin",
    name: "Utah",
    coordinates: [-109.5319, 38.5733],
    popUpLocation: "below",
    content: {
      title: "Moab, UT",
      subtitle: "Coming Soon",
    },
  },
  {
    id: "tx",
    type: "square",
    name: "Texas",
    coordinates: [-97.5169, 31.7965],
    popUpLocation: "above",
    content: {
      image: `${process.env.PUBLIC_URL}/img/issue-brief-texas.jpg`,
      title: "TEXAS ISSUE BRIEF",
      subtitle: "Clean Trucks",
      learnMoreUrl: "https://www.chargingusforward.com/texas-issue-brief",
    },
  },
  {
    id: "ga",
    name: "Georgia",
    type: "square",
    coordinates: [-84.388, 33.749],
    popUpLocation: "above",
    content: {
      image: `${process.env.PUBLIC_URL}/img/issue-brief-georgia.png`,
      title: "GEORGIA ISSUE BRIEF",
      subtitle: "EV Manufacturing",
      learnMoreUrl: "https://www.chargingusforward.com/georgia-issue-brief",
    },
  },
  {
    id: "oh",
    name: "Ohio",
    type: "square",
    coordinates: [-83.6431, 40.3676],
    popUpLocation: "below",
    content: {
      image: `${process.env.PUBLIC_URL}/img/issue-brief-ohio.jpg`,
      title: "OHIO ISSUE BRIEF",
      subtitle: "Clean Ports",
      learnMoreUrl: "https://www.chargingusforward.com/ohio-issue-brief",
    },
  },
  {
    id: "az",
    name: "Arizona",
    type: "square",
    coordinates: [-111.0937, 34.0489],
    popUpLocation: "above",
    content: {
      title: "ARIZONA ISSUE BRIEF",
      subtitle: "Charging Infrastructure",
      image: `${process.env.PUBLIC_URL}/img/issue-brief-arizona.png`,
      learnMoreUrl: "https://www.chargingusforward.com/arizona-issue-brief",
    },
  },
];
