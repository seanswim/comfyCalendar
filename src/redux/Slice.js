import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";


const initialState = {
  user : {
    id: '',
    email: '',
    img: '',
    name: ''
  },
  signin: false,
  targetDate: moment().format('YYYY MM DD'),
  plans: []
}

export const states = createSlice({
  name: 'state',
  initialState,
  reducers: {
    setUserState: (state, action) => {
      state.user.id = action.payload.user.id;
      state.user.email = action.payload.user.email;
      state.user.img = action.payload.user.img;
      state.user.name = action.payload.user.name;
      state.signin = action.payload.signin;
    },
    setTargetDate: (state, action) => {
      state.targetDate = action.payload;
    },
    setPlans: (state, action) => {
      state.plans = action.payload;
    },
    resetUserState: () => initialState
  }
})

export const { setUserState, setTargetDate, resetUserState, setPlans } = states.actions;
export default states.reducer;