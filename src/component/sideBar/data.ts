import { BiHomeAlt } from "react-icons/bi";
import { MdOutlineExplore } from "react-icons/md";
import { RiRecordCircleLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
import { GoClock } from "react-icons/go";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { MdQueueMusic } from "react-icons/md";
import { MdLibraryAdd } from "react-icons/md";
export const sidebarComponent = [
  {
    title: "Menu",
    data: [
      {
        featuresID: 0,
        featuresName: "Home",
        path: "/home",
        componentIcon: BiHomeAlt,
      },
      {
        featuresID: 1,
        featuresName: "Discover",
        path: "/discovery",
        componentIcon: MdOutlineExplore,
      },
      {
        featuresID: 2,
        featuresName: "Albums",
        path: "/albums",
        componentIcon: RiRecordCircleLine,
      },
      {
        featuresID: 3,
        featuresName: "Artists",
        path: "/artists",
        componentIcon: FaRegUserCircle,
      },
    ],
  },
  {
    title: "Library",
    data: [
      {
        featuresID: 4,
        featuresName: "Recently Added",
        path: "/recentlyAdded",
        componentIcon: GoClock,
      },
      {
        featuresID: 5,
        featuresName: "Most played",
        path: "/mostPlayed",
        componentIcon: IoRefreshCircleOutline,
      },
    ],
  },
  {
    title: "Playlist and favorite",
    data: [
      {
        featuresID: 6,
        featuresName: "Your favorites",
        path: "/yourFavorite",
        componentIcon: FaRegHeart,
      },
      {
        featuresID: 7,
        featuresName: "Your playlist",
        path: "/yourPlaylist",
        componentIcon: MdQueueMusic,
      },
      {
        featuresID: 8,
        featuresName: "Add playlist",
        path: "/addPlaylist",
        componentIcon: MdLibraryAdd,
      },
    ],
  },
  {
    title: "General",
    data: [
      {
        featuresID: 9,
        featuresName: "Setting",
        path: "/setting",
        componentIcon: MdOutlineSettings,
      },
      {
        featuresID: 10,
        featuresName: "Logout",
        path: "/logout",
        componentIcon: IoIosLogOut,
      },
    ],
  },
];
