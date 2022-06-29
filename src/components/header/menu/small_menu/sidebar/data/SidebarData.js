import { GiEarthAmerica } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";
import { GiCommercialAirplane, GiSmartphone } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";

const iconSize = 20;

export const SidebarData = [
  {
    level: 1,
    values: [
      {
        title: "Despre companie",
        path: "/",
        icon: <AiFillInfoCircle size={iconSize} />,
      },
      {
        title: "Destinatii populare",
        path: "/",
        icon: <GiCommercialAirplane size={iconSize} />,
      },
      {
        title: "Blog",
        path: "/",
        icon: <GiEarthAmerica size={iconSize} />,
      },
    ],
  },
  {
    level: 2,
    values: [
      {
        title: "Help",
        path: "/",
        icon: <IoIosHelpCircleOutline size={iconSize} />,
      },
      {
        title: "Contacts",
        path: "/",
        icon: <GiSmartphone size={iconSize} />,
      },
      {
        title: "Termeni si conditii",
        path: "/",
        icon: <HiOutlineDocumentText size={iconSize} />,
      },
    ],
  },
  {
    level: 3,
    values: [
      {
        title: "Language",
        path: "/",
        icon: <MdLanguage size={iconSize} />,
      },
    ],
  },
];
