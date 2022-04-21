import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  user : {
    id: '',
    email: '',
    img: '',
    name: '',
  },
  signin: false,
  targetDate: '',
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
      state.push(action);
    },
    resetUserState: () => initialState
  }
})

export const { setUserState, setTargetDate, resetUserState, setPlans } = states.actions;
export default states.reducer;