import axios from "axios";
import { eventSlice } from "../eventReducer/eventReducer";

// ВЫТЯГИВАЕМ ВСЕ ИВЕНТЫ С АПИ

const getEvents = () => async (dispatch) => {
  try {
    await axios(
      "https://apihomeofstartups.k-3soft.com/api/v1/test-api/events"
    ).then((res) => {
      const events = res.data.data;
      dispatch(eventSlice.actions.getAllEvents({ events }));
    });
  } catch (error) {
    console.log(error);
  }
};

// ДЕТАЛЬНАЯ ИНФОРМАЦИЯ ИВЕНТА

const getDetailEvent = ({ id }) => async (dispatch) => {
  try {
    await axios(
      `https://apihomeofstartups.k-3soft.com/api/v1/test-api/events/${id}`
    ).then((res) => {
      const event = res.data.data;
      dispatch(eventSlice.actions.getDetail({ event }));
    });
  } catch (error) {
    console.log(error);
  }
};

export default { getEvents, getDetailEvent };
