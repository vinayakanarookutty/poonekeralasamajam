import { TextInput } from "flowbite-react";
import "../css/events.css";
import event_data from "../data/event_data.json";
import EventCards from "../components/EventCards";
import { useState,useEffect } from "react";
import BreadCrump from "../components/ui/BreadCrump";

function Events() {
    const [search, setSearch] = useState("");
    const upcomming = event_data.events.upcomming;
    const completed = event_data.events.upcomming;
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    console.log(search);

    return (
        <>
            {/* <NewHeader /> */}
            <div className="event-container bg-white">
                <div className=" mt-5 d-flex justify-start w-75">
                    <BreadCrump items={["Events"]} />
                </div>
                <div className="event-header">
                    <p>Events </p>
                    <TextInput
                        className="event-search"
                        placeholder="Search"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className="event-contents">
                    {upcomming.length >= 0 ? (
                        <div className="event-upcomming">
                            <p> Upcoming Events</p>

                            <div className="event-cards">
                                {upcomming.map((items) => (
                                    <EventCards items={items} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="events-null">
                            No Upcomming Events Available
                        </p>
                    )}

                    {completed.length >= 0 ? (
                        <div className="event-completed">
                            <p> Completed Events</p>
                            <div className="event-cards">
                                {completed.map((items) => (
                                    <EventCards items={items} />
                                ))}
                            </div>
                        </div>
                    ) : (
                        <p className="events-null">No Events </p>
                    )}
                </div>
            </div>
            
        </>
    );
}

export default Events;
