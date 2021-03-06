import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getConcerts = ({ concerts }) => concerts.data;
export const getRequest = ({ concerts }) => concerts.request;

export const getConcert = ({ concerts }) => concerts.singleConcert;

export const getTicketInfo = ({ concerts }) => concerts.ticketInfo;

/* ACTIONS */

// action name creator
const reducerName = 'concerts';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_CONCERTS = createActionName('LOAD_CONCERTS');
const LOAD_CONCERT = createActionName('LOAD_CONCERT');

const SELECT_CONCERT = createActionName('SELECT_CONCERT');
const UPDATE_TICKET = createActionName('UPDATE_TICKET');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadConcerts = payload => ({ payload, type: LOAD_CONCERTS });
export const loadConcert = payload => ({ payload, type: LOAD_CONCERT });

export const selectConcert = payload => ({ payload, type: SELECT_CONCERT });
export const updateTicket = payload => ({ payload, type: UPDATE_TICKET });

/* THUNKS */

export const loadConcertsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/concerts`);
      dispatch(loadConcerts(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadConcertRequest = id => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/concerts/${id}`);
      dispatch(loadConcert(res.data));
      dispatch(endRequest());

    } catch (e) {
      dispatch(errorRequest(e.message));
    }

  };
};

/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
  singleConcert: null,
  ticketInfo: null
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_TICKET:
      return { ...statePart, ticketInfo: action.payload }
    case UPDATE_TICKET:
      return { ...statePart, ticketInfo: null }
    case LOAD_CONCERT:
      return { ...statePart, singleConcert: action.payload };
    case LOAD_CONCERTS:
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}
