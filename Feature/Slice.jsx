
//Day 1

// import { createSlice } from "@reduxjs/toolkit";


// export const Counter = createSlice({
//     name : "Counter",
//     initialState : {count : 0},
//     reducers : {
//         increment : (state, action) => {
//             state.count += 1
//         },
//         decrement : (state, action) => {
//             state.count -= 1
//         }
//     }
// })

// export const {increment, decrement} = Counter.actions

// export default Counter.reducer;



//Day 2

import { createSlice } from "@reduxjs/toolkit";

export const todo = createSlice({
    name: "todo",
    initialState: {
      students: []
    },
    reducers: {
      addData: (state, action) => {
        state.students.push(action.payload)
      },
      deleteData: (state, action) => {
        state.students = state.students.filter(student => student.id !== action.payload);
      }
    }

  });
  
  export const {addData, deleteData} = todo.actions;
  export default todo.reducer