import React from "react";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/newsletter-registration";
import {getFeaturedEvents} from '../dummy-data'

const HomePage = () => {

  const featuredEvents = getFeaturedEvents();

  return (
    <>
      <EventList items={featuredEvents} />
      {/* <NewsletterRegistration items={props.evens} /> */}
    </>
  );
};

export default HomePage;
