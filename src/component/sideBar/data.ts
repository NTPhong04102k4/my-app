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
export const SIDE_BAR = [
  {
    title: "Menu",
    data: [
      {
        id: 0,
        name: "Home",
        path: "/home",
        componentIcon: BiHomeAlt,
      },
      {
        id: 1,
        name: "Discover",
        path: "/discovery",
        componentIcon: MdOutlineExplore,
      },
      {
        id: 2,
        name: "Albums",
        path: "/albums",
        componentIcon: RiRecordCircleLine,
      },
      {
        id: 3,
        name: "Artists",
        path: "/artists",
        componentIcon: FaRegUserCircle,
      },
    ],
  },
  {
    title: "Library",
    data: [
      {
        id: 4,
        name: "Recently Added",
        path: "/recentlyAdded",
        componentIcon: GoClock,
      },
      {
        id: 5,
        name: "Most played",
        path: "/mostPlayed",
        componentIcon: IoRefreshCircleOutline,
      },
    ],
  },
  {
    title: "Playlist and favorite",
    data: [
      {
        id: 6,
        name: "Your favorites",
        path: "/yourFavorite",
        componentIcon: FaRegHeart,
      },
      {
        id: 7,
        name: "Your playlist",
        path: "/yourPlaylist",
        componentIcon: MdQueueMusic,
      },
      {
        id: 8,
        name: "Add playlist",
        path: "/addPlaylist",
        componentIcon: MdLibraryAdd,
      },
    ],
  },
  {
    title: "General",
    data: [
      {
        id: 9,
        name: "Setting",
        path: "/setting",
        componentIcon: MdOutlineSettings,
      },
      {
        id: 10,
        name: "Logout",
        path: "/logout",
        componentIcon: IoIosLogOut,
      },
    ],
  },
];
