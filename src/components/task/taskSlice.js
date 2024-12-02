import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  task: [],
  loading: false,
  status: "all",
  error: null,
};

export const fetchData = createAsyncThunk("task/fetchData", async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const data = await response.json();
  console.log(data);
  return data.map((task) => ({
    // key={task.id},
    id: task.id,
    title: task.title,
    description: "",
    status: task.completed ? "complete" : "To-do",
  }));
});

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    editTask(state, action) {
      state.task = state.task.map((tasks) =>
        tasks.id !== action.payload.id ? action.payload : tasks
      );
    },

    extraReducers: (builder) => {
      builder
        .addCase(fetchData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })

        .addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.task = action.payload;
        })
        .addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  },
});

// console.log(fetchData);

export const { addTask, editTask } = taskSlice.actions;
export default taskSlice.reducer;
