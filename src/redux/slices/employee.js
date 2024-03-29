import { createSlice } from '@reduxjs/toolkit';
// firebase
import { initializeApp } from 'firebase/app';
import { query, getFirestore, addDoc, getDocs, collection, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { FIREBASE_API } from '../../config';
//
import { dispatch } from '../store';
// ----------------------------------------------------------------------
// firebase constants
const app = initializeApp(FIREBASE_API);
const db = getFirestore(app);
// ----------------------------------------------------------------------
const initialState = {
  isLoading: false,
  error: null,
  employees: [],
  selectedEmployeeId: null,
  selectedRange: null,
};

const slice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET EMPLOYEES
    getEmployeesSuccess(state, action) {
      state.isLoading = false;
      state.employees = action.payload;
    },

    // CREATE EMPLOYEE
    createEmployeeSuccess(state, action) {
      const newEmployee = action.payload;
      state.isLoading = false;
      state.employees = [...state.employees, newEmployee];
    },

    // UPDATE EMPLOYEE
    updateEmployeeSuccess(state, action) {
      const employee = action.payload;
      const updateEmployee = state.employees.map((_employee) => {
        if (_employee.id === employee.id) {
          return employee;
        }
        return _employee;
      });

      state.isLoading = false;
      state.employees = updateEmployee;
    },

    // DELETE EMPLOYEE
    deleteEmployeeSuccess(state, action) {
      const { employeeId } = action.payload;
      const deleteEmployee = state.employees.filter((employee) => employee.id !== employeeId);
      state.employees = deleteEmployee;
    },

    // SELECT EMPLOYEE
    selectEmployee(state, action) {
      const employeeId = action.payload;
      state.selectedEmployeeId = employeeId;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { selectEmployee } = slice.actions;

// ----------------------------------------------------------------------

export function getEmployees() {
  return async () => {
    dispatch(slice.actions.startLoading());
    try {
      const employees = [];
      (await getDocs(query(collection(db, 'employees')))).forEach((doc) => {
        employees.push({ ...doc.data(), id: doc.id });
      });
      dispatch(slice.actions.getEmployeesSuccess(employees));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function createEmployee(newEmployee) {
  addDoc(collection(db, 'employees'), newEmployee);
}

// ----------------------------------------------------------------------

export function updateEmployee(employee) {
  updateDoc(doc(db, 'employees', `${employee.id}`), employee);
}
// ----------------------------------------------------------------------

export function deleteEmployee(employeeId) {
  deleteDoc(doc(db, 'employees', employeeId));
}
