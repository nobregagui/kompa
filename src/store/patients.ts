import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Patient {
  id: number;
  status: string;
  isActive: boolean;
}

interface PatientsState {
  activePatients: Patient[];
  selectedPatient: any
}

const initialState: PatientsState = {
  activePatients: [],
  selectedPatient: null
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addActivePatient(state, action: PayloadAction<Patient>) {
      const patientIndex = state.activePatients.findIndex(patient => patient.id === action.payload.id);

      if (patientIndex >= 0) {
        state.activePatients[patientIndex] = action.payload;
      } else {
        state.activePatients.push(action.payload);
      }
    },
    setSelectedPatient(state, action) {
      state.selectedPatient = action.payload;
    },
    removeActivePatient(state, action: PayloadAction<number>) {
      state.activePatients = state.activePatients.filter(patient => patient.id !== action.payload);
    }
  }
});

export const { addActivePatient, setSelectedPatient,  removeActivePatient } = patientsSlice.actions;

export const selectActivePatients = (state: { patients: PatientsState }) => state.patients.activePatients;
export const viewPatientSelected = (state: { patients: PatientsState }) => state.patients.selectedPatient;

export default patientsSlice.reducer;
