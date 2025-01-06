import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchApi = createAsyncThunk("FetchApi", async () => {
    let response = await axios.get("http://localhost:5000/Dairy")
    let res = response.data
    return res
})

export const addQuantity = createAsyncThunk("addQuantity", async (id) => {
    const response = await axios.get(`http://localhost:5000/Dairy/${id}`)
    const updatedItem = {
        ...response.data,
        quantity: response.data.quantity + 1,
        price: `₹${(response.data.quantity + 1) * parseFloat(response.data.price.replace("₹", ""))}`
    };
    await axios.put(`http://localhost:5000/Dairy/${id}`, updatedItem)
    return updatedItem;
})


export const removeQuantity = createAsyncThunk("removeQuantity", async (id) => {
    const response = await axios.get(`http://localhost:5000/Dairy/${id}`);
    const originalPrice = parseFloat(response.data.price.replace("₹", "")) / response.data.quantity; // Base price per unit
    const updatedQuantity = response.data.quantity > 0 ? response.data.quantity - 1 : 0;

    const updatedItem = {
        ...response.data,
        quantity: updatedQuantity,
        price: `₹${updatedQuantity > 0 ? updatedQuantity * originalPrice : originalPrice}`
    };

    await axios.put(`http://localhost:5000/Dairy/${id}`, updatedItem);
    return updatedItem;
});



export const Api = createSlice({
    name: "Api",
    initialState: {data: [], loading: true},
    reducer: {},

    extraReducers: (builder) => {
        // builder.addCase(FetchApi.fulfilled, (state, action) => {
        //     state.loading = false
        //     state.data = action.payload
        // }),

        builder
        .addCase(FetchApi.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })

        .addCase(addQuantity.fulfilled, (state, action) => {
            const itemIndex = state.data.findIndex((e) => e.id === action.payload.id)
            if(itemIndex > -1){
                state.data[itemIndex] = action.payload
            }
        })
        
        .addCase(removeQuantity.fulfilled, (state,action) => {
            const itemIndex = state.data.findIndex((e) => e.id === action.payload.id)
            if(itemIndex > -1) {
                state.data[itemIndex] = action.payload
            }
        })


    }
})

export default Api.reducer












// export const Api = createSlice({
//     name: "Api",
//     initialState: { data: [], loading: true, quantities: {}, cartDetails: {} },
//     reducers: {
//         increment: (state, action) => {
//             const id = action.payload;
//             if (state.quantities[id] != null) {
//                 state.quantities[id]++;
//             }
//         },
//         decrement: (state, action) => {
//             const id = action.payload;
//             if (state.quantities[id] > 1) {
//                 state.quantities[id]--;
//             } else {
//                 delete state.quantities[id];
//                 delete state.cartDetails[id];
//             }
//         },
//         addToCart: (state, action) => {
//             const product = action.payload;
//             const { id } = product;
    
//             if (!state.cartDetails[id]) {
//                 state.cartDetails[id] = { ...product, quantity: 1 };
//                 state.quantities[id] = 1;
//             } else {
//                 state.cartDetails[id].quantity++;
//                 state.quantities[id]++;
//             }
//         }
//     },
        
//     extraReducers: (builder) => {
//         builder.addCase(FetchApi.pending, (state) => {
//             state.loading = true;
//         });

//         builder.addCase(FetchApi.fulfilled, (state, action) => {
//             state.loading = false;
//             state.data = action.payload;
//         });
//     }
// });

// export const { increment, decrement } = Api.actions;
// export default Api.reducer;
