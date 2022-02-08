import React from "react";
import EventList from "../../components/events/EventList";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "./../../components/events/EventsSearch";
import { useRouter } from "next/router";

const AllEvents = () => {
  const allEvents = getAllEvents();
  const router = useRouter();

  const findEvents = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSubmit={findEvents} />
      <EventList items={allEvents} />
    </div>
  );
};

export default AllEvents;
