import Header from "../header/Header.tsx";
import Search from "./search/Search";
import Ticket from "../tickets/ticket/Ticket";
import TicketImage from "../../assets/img/tickets.jpg";
import classes from "./Tickets.module.scss";
import { MdKeyboardArrowUp } from "react-icons/md";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Tickets() {
  const image = { backgroundImage: `url(${TicketImage})` };

  return (
    <div>
      <Header image={image} content={<Search />} />
      <Ticket />
      <div className={classes.toTopButton} onClick={() => goToTop()}>
        <MdKeyboardArrowUp size={26} className={classes.icon}/>
      </div>
    </div>
  );
}
