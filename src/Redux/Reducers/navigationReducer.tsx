import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const handleCurrentUser = createAsyncThunk(
  "seniorlivinghub/handleSingup", (data: any) => {
    return data
  }
);

export const handlePasttreatment = createAsyncThunk(
  "seniorlivinghub/handlePasttreatment", (index: number) => {
    return index
  }
);

export const seniorLivingStore: any = createSlice({
  name: "appNavigation",
  initialState: {
      currentUsersData: {}
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleCurrentUser.fulfilled, (state, action) => {
     state.currentUsersData = action.payload
    });
    builder.addCase(handlePasttreatment.fulfilled, (state, action) => {
      const newUpdateData: any = {...state.currentUsersData}
      newUpdateData.pastMedicalTreatments = newUpdateData?.pastMedicalTreatments.filter((_: any, index: number) => index !== action.payload )
      state.currentUsersData = newUpdateData
     });
  },
});

export default seniorLivingStore.reducer;
