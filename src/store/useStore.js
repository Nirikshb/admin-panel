// import { create } from "zustand";


// const useStore = create((set) => ({
//   name : '',
//   description  : '',
//   createName: (value) => set({ name: value }),
//   createDescription: (value) => set({ description: value }),

// }))
const formData = {
  machine: "",
  mollyBase: "",
  geometryId: "",
  runNumber: "",
  growthHeight: "",
  cycleStatus: "",
  startedAt: "",
  endedAt: "",
  seeds: [
    
    {
    geometryMatrixId: '',
    height: "",
    width: "",
    breadth: "",
    finalHeight: "",
    defectReason: "",
    status: "",
    locked: false,
  }],
};

// export default useStore;
import { create } from 'zustand';

const useStore = create((set, get) => ({
  name: '',
  description: '',

  setName: (value) => set({ name: value }),
  setDescription: (value) => set({ description: value }),

  resetForm: () => set({ name: '', description: '' }),

  submitForm: () => {
    const { name, description } = get();
    console.log("Submitting form data:", { name, description });
  },
}));

export default useStore;
