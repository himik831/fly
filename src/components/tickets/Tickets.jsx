import Header from "../header/Header.tsx";
import Search from "./search/Search";
import Ticket from "../tickets/ticket/Ticket";
import TicketImage from "../../assets/img/tickets.jpg";
import classes from "./Tickets.module.scss";
import searchTickets from "../../hooks/api/search_tickets/searchTickets.ts";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { BarLoader, BounceLoader, BeatLoader } from "react-spinners";

const goToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Tickets() {
  const searchTicketDetails = useLocation();
  const image = { backgroundImage: `url(${TicketImage})` };

  const [loading, setLoading] = useState(false);
  const [tickets, setTickets] = useState({});

  useEffect(() => {
    searchTickets()
      .then(setTickets)
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
    if (tickets !== {}) setLoading(true);
  }, []);

  return (
    <div className={classes.content}>
      <Header image={image} content={<Search />} />
      <div className={classes.free}></div>
      {loading ? (
        tickets.data.map((e) => <Ticket />)
      ) : (
        <div className={classes.loader}>
          <BeatLoader color={"#82cdc2"} size={15} margin={20} />
        </div>
      )}
      <div className={classes.footer}></div>
      <div className={classes.toTopButton} onClick={() => goToTop()}>
        <MdKeyboardArrowUp size={26} className={classes.icon} />
      </div>
    </div>
  );
}
