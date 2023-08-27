// import KCLogo from "./Images/KC.png";
const appData = {
  pointsData: [
    {
      id: 12332,
      name: "Kansas City, MO",
      state: "Missouri",
      title: "KANSAS CITY, MO",
      translateProp: "translate( 10%, -55%)",
      coordinates: [-94.578331, 39.099724],
      description:
        "The Kansas City Streetcar gets people out of their cars and into the community.",
      // Note: You can only add one info between image, vimeoVideo, youtubeVideo.
      vimeoVideo: "https://player.vimeo.com/video/830670385",
      youtubeVideo: "",
      // image: KCLogo, sample
      image: "",
    },
    {
      id: 999,
      name: "Pittsburg",
      state: "Pennsylvania",
      title: "Pittsburgh, PA",
      coordinates: [-79.9928601184325, 40.440514432625896],
      translateProp: "translate(100%, -66%)",
      description: `Pittsburgh's POGOH e-bike share program provides bike access for work, errands, and leisure.`,
      // Note: You can only add one info between image, vimeoVideo, youtubeVideo.
      vimeoVideo: "https://player.vimeo.com/video/842673721",
      youtubeVideo: "",
      // image: KCLogo, sample
      image: "",
    },
    {
      id: 3,
      name: "Denver",
      state: "Colorado",
      title: "Denver, CO",
      translateProp: "translate(-60%, -60%)",
      coordinates: [-104.9903, 39.7392], // Corrected coordinates
      description: `Coming Soon.`,
      // Note: You can only add one info between image, vimeoVideo, youtubeVideo.
      // vimeoVideo: "https://player.vimeo.com/video/842673721",
      youtubeVideo: "",
      // image: KCLogo, sample
      image: "",
    },
  ],

  activeCoordinates: [],
};

export default appData;
