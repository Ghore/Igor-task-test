import { createSlice } from "@reduxjs/toolkit";

const state = {
  events: [],
  detailEvent: []
};

export const eventSlice = createSlice({
  name: "event",
  initialState: state,
  reducers: {
    getAllEvents: (state, { payload }) => ({
      ...state,
      events: payload.events,
    }),
    getDetail: (state, {payload}) => ({
        ...state,
        detailEvent:payload.event
    })
  },
});
