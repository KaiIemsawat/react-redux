import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk("users/fetch", async () => {
    const response = await axios.get("http://localhost:3005/users");

    await pause(2000); // DEV ONLY !!

    return response.data;
});

// DEV ONLY
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

/* fetchUsers will automatically have these three properties (from createAsyncThunk()) */
// fetchUsers.pending === "users/fetch/pending"
// fetchUsers.fulfilled === "users/fetch/fulfilled"
// fetchUsers.rejected === "users/fetch/rejected"

export { fetchUsers };
