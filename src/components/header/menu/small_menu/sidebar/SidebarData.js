import { useSelector } from "react-redux";
import { GiEarthAmerica } from "react-icons/gi";
import { AiFillInfoCircle } from "react-icons/ai";
import { GiCommercialAirplane, GiSmartphone } from "react-icons/gi";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { HiOutlineDocumentText } from "react-icons/hi";
import Localization from "../../../../localization/Localization.tsx";
import { LOCALIZATION_ID } from "../../../../../constants/enum/enum.tsx";
import { DEFAULT } from "../../../../../constants/localization/default";

export default function SidebarData() {
  const iconSize = 20;
  const languageState = useSelector((state) => state.language.value);

  return [
    {
      level: 1,
      values: [
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.ABOUT_COMPANY}
              defaultValue={DEFAULT.ABOUT_COMPANY}
            />
          ),
          path: "/about_company",
          icon: <AiFillInfoCircle size={iconSize} />,
        },
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.POPULAR_DESTINATION}
              defaultValue={DEFAULT.POPULAR_DESTINATION}
            />
          ),
          path: "/popular_destination",
          icon: <GiCommercialAirplane size={iconSize} />,
        },
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.BLOG}
              defaultValue={DEFAULT.BLOG}
            />
          ),
          path: "/blog",
          icon: <GiEarthAmerica size={iconSize} />,
        },
      ],
    },
    {
      level: 2,
      values: [
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.HELP_AND_ADVICE}
              defaultValue={DEFAULT.HELP_AND_ADVICE}
            />
          ),
          path: "/help",
          icon: <IoIosHelpCircleOutline size={iconSize} />,
        },
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.CONTACTS}
              defaultValue={DEFAULT.CONTACTS}
            />
          ),
          path: "/contacts",
          icon: <GiSmartphone size={iconSize} />,
        },
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.TERMS_AND_CONDITION}
              defaultValue={DEFAULT.TERMS_AND_CONDITION}
            />
          ),
          path: "/terms_and_condition",
          icon: <HiOutlineDocumentText size={iconSize} />,
        },
      ],
    },
    {
      level: 3,
      values: [
        {
          title: (
            <Localization
              language={languageState}
              id={LOCALIZATION_ID.LANGUAGE}
              defaultValue={DEFAULT.LANGUAGE}
            />
          ),
          path: "/language",
          icon: <MdLanguage size={iconSize} />,
        },
      ],
    },
  ];
}
