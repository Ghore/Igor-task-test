import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import eventOperation from "../../redux/eventOperation/eventOperation";

const EventDetail = ({ ...props }) => {
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(eventOperation.getDetailEvent({ id }));
  }, [dispatch, id]);
  const detailEvent = useSelector((state) => state.event.detailEvent);

  return (
    <>
      <Link to="/" >
    Go to the all events
      </Link>
      <ul>
        <li key={detailEvent.id}>
          <h2>{detailEvent.title}</h2>
          <p>{detailEvent.description}</p>
          <p>Sponsor {detailEvent.sponsor}</p>
          <p>date start {detailEvent.date_start}</p>
          <p>date end {detailEvent.date_end}</p>
        </li>
      </ul>
    </>
  );
};

export default EventDetail;
