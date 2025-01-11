export type MarkerType = "pin" | "square";

export interface Location {
  id: string;
  coordinates: [number, number];
  popUpCoordinates: [number, number];
  popUpLocation?: "above" | "below";
  type: MarkerType;
  link?: string;
  content?: {
    image?: string;
    videoUrl?: string;
    title: string;
    subtitle: string;
    learnMoreUrl: string;
  };
  cardPosition?: {
    translateX: string;
    translateY: string;
  };
}

export const locations: Location[] = [
  {
    id: "mo",
    type: "pin",
    coordinates: [-94.578331, 39.099724],
    popUpCoordinates: [-105.798331, 38.099724],
    popUpLocation: "below",
    content: {
      image: "/images/missouri.png",
      videoUrl: "https://player.vimeo.com/video/830670385",
      title: "Kansas City, MO",
      subtitle: "Ride KC E-Bikeshare Program",
      learnMoreUrl: "https://www.chargingusforward.com/kc-ride",
    },
  },
  {
    id: "pa",
    type: "pin",
    coordinates: [-77.7489, 40.0379],
    popUpCoordinates: [-89.3489, 40.4379],
    popUpLocation: "below",
    content: {
      image: "/images/pennsylvania.png",
      videoUrl: "https://player.vimeo.com/video/842673721",
      title: "Pittsburgh, PA",
      subtitle: "POGOH E-Bikeshare Program",
      learnMoreUrl: "https://www.chargingusforward.com/pogoh",
    },
  },
  {
    id: "co",
    type: "pin",
    coordinates: [-105.3111, 39.113],
    popUpCoordinates: [-116.2111, 36.99],
    popUpLocation: "below",
    content: {
      image: "/images/colorado.png",
      videoUrl: "https://player.vimeo.com/video/911006737",
      title: "Denver, CO",
      subtitle: "Colorado Electric Scenic & Historic Byways",
      learnMoreUrl:
        "https://www.chargingusforward.com/colorado-electric-byways",
    },
  },
  {
    id: "mn",
    type: "square",
    coordinates: [-93.9993, 45.6945],
    popUpCoordinates: [-106.5093, 43.9945],
    popUpLocation: "below",
    content: {
      title: "Minneapolis, MN",
      subtitle: "Minnesota Clean School Bus Programs",
      videoUrl: "https://player.vimeo.com/video/1038026387",
      learnMoreUrl: "https://www.chargingusforward.com/minnesota-esb-programs",
    },
  },
  {
    id: "tx",
    type: "square",
    coordinates: [-97.5169, 31.7965],
    popUpCoordinates: [-107.9169, 29.7965],
    popUpLocation: "above",
    content: {
      image: "/img/texas-thumbnail.jpg",
      title: "TEXAS ISSUE BRIEF",
      subtitle: "Clean Trucks",
      learnMoreUrl: "https://www.chargingusforward.com/texas-issue-brief",
    },
  },
  {
    id: "ga",
    type: "square",
    coordinates: [-84.388, 33.749],
    popUpCoordinates: [-94.388, 32.749],
    popUpLocation: "above",
    content: {
      image: "/img/georgia-thumbnail.png",
      title: "GEORGIA ISSUE BRIEF",
      subtitle: "EV Manufacturing",
      learnMoreUrl: "https://www.chargingusforward.com/georgia-issue-brief",
    },
  },
  {
    id: "oh",
    type: "square",
    coordinates: [-83.6431, 40.3676],
    popUpCoordinates: [-95.4431, 39.7676],
    popUpLocation: "below",
    content: {
      image: "/img/ohio-thumbnail.jpg",
      title: "OHIO ISSUE BRIEF",
      subtitle: "Clean Ports",
      learnMoreUrl: "https://www.chargingusforward.com/ohio-issue-brief",
    },
  },
  {
    id: "az",
    type: "square",
    coordinates: [-111.0937, 34.0489],
    popUpCoordinates: [-121.0937, 31.0489],
    popUpLocation: "above",
    content: {
      title: "ARIZONA ISSUE BRIEF",
      subtitle: "Charging Infrastructure",
      image: "/img/arizona-thumbnail.png",
      learnMoreUrl: "https://www.chargingusforward.com/arizona-issue-brief",
    },
  },
];
