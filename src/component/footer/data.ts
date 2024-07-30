export interface FeaturesFooter {
  title: string;
  data: {
    id: number | string;
    features: string;
  }[];
}

export const featFooter: FeaturesFooter[] = [
  {
    title: "Melodi",
    data: [
      {
        id: 1,
        features: "Songs",
      },
      {
        id: 2,
        features: "Radio",
      },
      {
        id: 3,
        features: "Podcast",
      },
    ],
  },
  {
    title: "Access",
    data: [
      {
        id: 1,
        features: "Explor",
      },
      {
        id: 2,
        features: "Artists",
      },
      {
        id: 3,
        features: "Playlists",
      },
      {
        id: 4,
        features: "Albums",
      },
      {
        id: 5,
        features: "Trending",
      },
    ],
  },
  {
    title: "Contact",
    data: [
      {
        id: 1,
        features: "About",
      },
      {
        id: 2,
        features: "Policy",
      },
      {
        id: 3,
        features: "Social Media",
      },
      {
        id: 4,
        features: "Support",
      },
    ],
  },
];
export const dataLoginIcon = [
  {
    id: 1,
    icon: "mask-icon-face",
  },
  {
    id: 2,
    icon: "mask-icon-lucide_instagram",
  },
  {
    id: 3,
    icon: "mask-icon-twitter",
  },
  {
    id: 4,
    icon: "mask-icon-call_fill",
  },
];
