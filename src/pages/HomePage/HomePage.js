import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import style from "./homePage.module.css";
import eventOperation from "../../redux/eventOperation/eventOperation";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(eventOperation.getEvents());
  }, [dispatch]);

  const allEvents = useSelector((state) => state.event.events);

  return (
    <ul className={style.eventList}>
      {allEvents.map((event) => (
        <>
            <li className={style.eventList__item} key={event.id}>
          <Link to={{
            pathname:`/detail/${event.id}`
          }}>
              <h2>{event.title}</h2>
          </Link>
              <p>{event.description}</p>
            </li>
        </>
      ))}
    </ul>
  );
}

export default HomePage;
