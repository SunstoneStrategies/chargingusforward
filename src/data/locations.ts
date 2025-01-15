export type MarkerType = "pin" | "square";

export interface Location {
  id: string;
  type: "pin" | "square";
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
    type: "pin",
    coordinates: [-94.578331, 39.099724],
    popUpLocation: "below",
    content: {
      videoUrl: "https://player.vimeo.com/video/830670385",
      videoThumbnail: `${process.env.PUBLIC_URL}/img/kansas-city-thumbnail.png`,
      title: "Kansas City, MO",
      subtitle: "Ride KC E-Bikeshare Program",
      learnMoreUrl: "https://www.chargingusforward.com/kc-ride",
    },
  },
  {
    id: "pa",
    type: "pin",
    coordinates: [-77.7489, 40.0379],
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
    id: "mn",
    type: "square",
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
    id: "tx",
    type: "square",
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
  {
    id: "mi",
    type: "square",
    coordinates: [-83.0458, 42.3314],
    popUpLocation: "below",
    content: {
      title: "MICHIGAN ISSUE BRIEF",
      subtitle: "Coming soon",
    },
  },
];
