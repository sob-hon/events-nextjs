import React from "react";
import Button from "../ui/Button";
import classes from "./EventList.module.css";
import AddressIcon from "./icons/address-icon";
import ArrowRightIcon from "./icons/arrow-right-icon";
import DateIcon from "./icons/date-icon";
import Image from "next/image"

const EventList = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <li key={item.id} className={classes.item}>
          <Image src={"/" + item.image} alt={item.title} width={250} height={160} />
          <div className={classes.content}>
            <div className={classes.summary}>
              <h2>{item.title}</h2>
              <div className={classes.date}>
                <DateIcon />
                <time>{item.date}</time>
              </div>
              <div className={classes.address}>
                <AddressIcon />
                <address>{item.location}</address>
              </div>
            </div>
            <div className={classes.actions}>
              <Button link={`/events/${item.id}`}>
                <span> Explore Event</span>
                <span className={classes.icon}>
                  <ArrowRightIcon />
                </span>
              </Button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EventList;
