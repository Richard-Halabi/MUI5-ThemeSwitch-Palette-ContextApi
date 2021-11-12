import React, { useState, createContext, useReducer } from 'react';
import { exerciseReducer } from './movementsReducer';
import { types } from './types';
// External interface
//import { Selected } from '../../components/TrainingPlanner/FormSelectExcercise';
import { v4 as uuidv4 } from 'uuid';

// Declare interfaces
export interface StateInterface {
  // unit: {
  //   [index: string]: string[];
  // };
  StabelItems: { [index: string]: [{ id: string; amount: number; name: string }] };
  AddStabelItems: (amount: number, name: string, id: string, stabelType: string) => void;
  UpdateStabelItems: (amount: number, name: string, id: string, stabelType: string) => void;
  // StabelExpandabels: { [index: string]: [{ amount: number; name: string }] };
  // AddStabelStabelExpandabelss: (amount: number, name: string, id: string) => void;
  //DeleteRoutine: (id: string) => void;
  //muscleGroups: { [index: string]: [{ id: string; muscle: string }] };
  //AddMuscleGroup: (select: string, parentId: string) => void;
  //DeleteMuscleGroup: (select: string, parentId: string) => void;
  // muscleGroupsFilter: { [index: string]: [muscle: string] };
  // SetMuscleGroupsFilter: (select: string, parentId: string) => void;
  // RemoveMuscleGroupsFilter: (select: string, parentId: string) => void;
  // exercises: {
  //   [index: string]: [
  //     {
  //       exercise: string;
  //       weight: string;
  //       sets: string;
  //       reps: string;
  //       rest: string;
  //       id: string;
  //       parentId: string;
  //       grandParentId: string;
  //     }
  //   ];
  // };
  // AddExercise: (selectObj: Selected, parentId: string, grandParentId: string) => void;
  // DeleteExcercise: (id: string, parentId: string, grandParentId: string) => void;
  // // exercisesFilter: {};
  // // notice: {};
  // // formSelection: [];
  // exercisesOptions: { [index: string]: { name: string; type: string; equipment: string }[] };
  // compactView: boolean;
  // setCompactView: (state: boolean) => void;
  // dayExercisesCount: { [index: string]: number[] };
  // AddDailyExercisesCount: (count: number, parentId: string) => void;
  // RemoveDailyExercisesCount: (parentId: string) => void;
  // checked: { [index: string]: number[] };
  // //CheckCheckBox: () => void;
  // //UnCheckCheckBox: () => void;
  // AddCheck: (count: number, parentId: string) => void;
  // RemoveCheck: (parentId: string) => void;
  // exercisesCount: { [index: string]: number[] };
  // AddExercisesCount: (count: number, parentId: string) => void;
  // RemoveExercisesCount: (count: number, parentId: string) => void;
  // exercisesProgress: { [index: string]: number[] };

  // //defaultCheckBoxes: boolean;
  // checkBoxGlobalState: { [index: string]: boolean };
  // setCheckBoxGlobal: (state: boolean, grandParentId: string) => void;
}

let parsed = {
  'Stabel Income': JSON.parse(localStorage.getItem('Stabel Income') || '[]'),
  'Must Pay': JSON.parse(localStorage.getItem('Must Pay') || '[]'),
  Dept: JSON.parse(localStorage.getItem('Dept') || '[]'),
  Savings: JSON.parse(localStorage.getItem('Savings') || '[]'),
};

let test = JSON.parse(localStorage.getItem('test') || '[]');
console.log(parsed);

console.log(test);
const defaultState: StateInterface = {
  // unit: {
  //   EU: ['Kg', 'Meter', 'Kilomiter'],
  //   US: ['Pound', 'feet', 'Mile'],
  // },
  // Add a day
  StabelItems: { ...parsed },
  AddStabelItems: () => {},
  UpdateStabelItems: () => {},
  //DeleteRoutine: () => {},
  // Add a muscle group
  //muscleGroups: {},
  //AddMuscleGroup: () => {},
  //DeleteMuscleGroup: () => {},
  // muscleGroupsFilter: {},
  // SetMuscleGroupsFilter: () => {},
  // RemoveMuscleGroupsFilter: () => {},
  // exercises: {},
  // AddExercise: () => {},
  // DeleteExcercise: () => {},
  // // exercisesFilter: {},
  // // notice: {},
  // // formSelection: [],
  // exercisesOptions: {
  //   //ChestBody: ['Push-ups'],
  //   //Chest: ['Bench Press', 'Dumbbell Bench Press', 'Decline  Bench  Press', 'Dumbbell Flyes', 'Incline Bench Press'],

  //   Chest: [
  //     { name: 'Bench Press', type: '', equipment: 'Barbell' },
  //     { name: 'Decline Bench Press', type: '', equipment: 'Barbell' },
  //     { name: 'Incline Bench Press', type: '', equipment: 'Barbell' },

  //     //      { name: 'Barbell Bench Press', type: 'Wide Grip', equipment: 'Barbell' },
  //     //      { name: 'Decline Bench Press', type: 'Wide Grip', equipment: 'Barbell' },

  //     { name: 'Dumbbell  Bench Press', type: '', equipment: 'Dumbbell' },
  //     { name: 'Dumbbell Incline Bench Press', type: '', equipment: 'Dumbbell' },
  //     { name: 'Dumbbell  Decline Bench Press', type: '', equipment: 'Dumbbell' },
  //   ],

  //   // customChest: [],
  //   Back: [
  //     { name: 'Lat pull Down', type: '', equipment: 'Barbell' },
  //     { name: 'Lat pull Down', type: '', equipment: 'Barbell' },
  //     { name: 'Barbell Good Morning', type: '', equipment: 'Barbell' },
  //     { name: 'Barbell Deadlift', type: '', equipment: 'Barbell' },
  //     { name: 'Reverse fly', type: '', equipment: 'Barbell' },
  //     { name: 'Barbell Row', type: '', equipment: 'Barbell' },
  //     { name: 'Dumbbell Row', type: '', equipment: 'Barbell' },
  //     { name: 'V-Bar Pull Down', type: '', equipment: 'Barbell' },
  //     { name: 'Seated Cable Row', type: '', equipment: 'Barbell' },
  //   ],

  //   Forearms: [
  //     { name: 'Lat pull Down', type: '', equipment: 'Barbell' },
  //     { name: 'Lat pull Down', type: '', equipment: 'Barbell' },
  //     { name: 'Barbell Good Morning', type: '', equipment: 'Barbell' },
  //     { name: 'Barbell Deadlift', type: '', equipment: 'Barbell' },
  //     { name: 'Reverse fly', type: '', equipment: 'Barbell' },
  //     { name: 'Barbell Row', type: '', equipment: 'Barbell' },
  //     { name: 'Dumbbell Row', type: '', equipment: 'Barbell' },
  //     { name: 'V-Bar Pull Down', type: '', equipment: 'Barbell' },
  //     { name: 'Seated Cable Row', type: '', equipment: 'Barbell' },
  //   ],
  //   // customBack: [],
  //   // Shoulders: ['Triceps pull down'],
  //   // customShoulders: [],
  //   // Biceps: ['Cable Hammer Curl', 'Hummer Curl', 'Concentration Curl', 'Machine Preacher Curls'],
  //   // customBiceps: [],
  //   // Triceps: ['Triceps pull down'],
  //   // customTriceps: [],
  //   // Legs: ['Triceps pull down'],
  //   // customLegs: [],
  //   // Calves: ['Triceps pull down'],
  //   // customCalves: [],
  //   // Abs: ['Triceps pull down'],
  //   // customAbs: [],
  //   // Cardio: ['Treadmill', 'Elliptical', 'Stair climber', 'Rowing machine', 'Indoor cycling'],
  // },
  // compactView: true,
  // setCompactView: () => {},

  // // Will be removed later since exercises is giving the same values !!!! below code is obsolite !!
  // dayExercisesCount: {},
  // AddDailyExercisesCount: () => {},
  // RemoveDailyExercisesCount: () => {},
  // exercisesCount: {},
  // AddExercisesCount: () => {},
  // RemoveExercisesCount: () => {},
  // exercisesProgress: {},
  // checked: {},
  // //checkCheckBox: () => {},
  // //UnCheckCheckBox: () => {},

  // AddCheck: () => {},
  // RemoveCheck: () => {},
  // // delete: false,
  // //defaultCheckBoxes: true,
  // checkBoxGlobalState: {},
  // setCheckBoxGlobal: () => {},
};

export interface ActionType {
  type: number;
  payload: {
    //selectObj?: Selected;
    stabelType: string;
    amount: number;
    name: string;
    id: string;
    parentId?: string;
    grandParentId?: string;
    state?: boolean;
    count?: number;
  };
}

export const movmentsContext = createContext(defaultState);

// Creating the state  MUST BE A CAPITAL OTHER WISE IT WILL BTICH !! AND REFUSE TO COMPILE
const MovementsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(exerciseReducer, defaultState);

  console.log(state, '::::::::::::::::::::::::::');
  // let content = state;
  // localStorage.setItem('test', JSON.stringify(content));

  const AddStabelItems = (amount: number, name: string, id: string, stabelType: string) => {
    dispatch({
      type: types.ADD_STABEL_ITEM,
      payload: {
        amount: amount,
        name: name,
        id: id,
        stabelType: stabelType,
      },
    });
  };

  const UpdateStabelItems = (amount: number, name: string, id: string, stabelType: string) => {
    dispatch({
      type: types.UPDATE_STABEL_ITEM,
      payload: {
        amount: amount,
        name: name,
        id: id,
        stabelType: stabelType,
      },
    });
  };

  // const DeleteRoutine = (id: string) => {
  //   dispatch({
  //     type: types.DELETE_ROUTINE,
  //     payload: { id: id },
  //   });
  // };

  // const AddMuscleGroup = (select: string, parentId: string) => {
  //   dispatch({
  //     type: types.ADD_MUSCLE_GROUP,
  //     payload: {
  //       select: select,
  //       id: uuidv4(),
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const DeleteMuscleGroup = (id: string, parentId: string) => {
  //   dispatch({
  //     type: types.DELETE_MUSCLE_GROUP,
  //     payload: {
  //       id: id,
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const SetMuscleGroupsFilter = (select: string, parentId: string) => {
  //   dispatch({
  //     type: types.SET_MUSCLE_GROUPS_FILTER,
  //     payload: { select: select, parentId: parentId },
  //   });
  // };

  // const RemoveMuscleGroupsFilter = (select: string, parentId: string) => {
  //   dispatch({
  //     type: types.REMOVE_MUSCLE_GROUPS_FILTER,
  //     payload: { select: select, parentId: parentId },
  //   });
  // };

  // const AddExercise = (selectObj: Selected, parentId: string, grandParentId: string) => {
  //   dispatch({
  //     type: types.ADD_EXERCISE,
  //     payload: {
  //       selectObj: {
  //         exercise: selectObj.exercise,
  //         weight: selectObj.weight.split(' ')[0],
  //         sets: selectObj.sets,
  //         reps: selectObj.reps,
  //         rest: selectObj.rest,
  //         duration: selectObj.duration,
  //         distance: selectObj.distance,
  //         calories: selectObj.calories,
  //       },
  //       id: uuidv4(),
  //       parentId: parentId,
  //       grandParentId: grandParentId,
  //     },
  //   });
  // };
  // const DeleteExcercise = (id: string, parentId: string, grandParentId: string) => {
  //   dispatch({
  //     type: types.DELETE_EXCERCISE,
  //     payload: {
  //       id: id,
  //       parentId: parentId,
  //       grandParentId: grandParentId,
  //     },
  //   });
  // };
  //
  // const addCustomExcrcise = (excercis, muscleGroup) => {
  //   dispatch({
  //     type: ADD_CUSTOM_EXCERCISE,
  //     excercis: excercis,
  //     muscleGroup: muscleGroup,
  //   });
  // };

  // const RemoveCustomExcrcise = (excercis, muscleGroup) => {
  //   dispatch({
  //     type: REMOVE_CUSTOM_EXCERCISE,
  //     excercis: excercis,
  //     muscleGroup: muscleGroup,
  //   });
  // };

  // const SetExcerciseFilter = (select, id) => {
  //   dispatch({
  //     type: SET_EXCERCISE_FILTER,
  //     select: select,
  //     id: id,
  //   });
  // };

  // const RemoveExcerciseFilter = (select, index) => {
  //   dispatch({
  //     type: REMOVE_EXCERCISE_FILTER,
  //     select: select,
  //     index: index,
  //   });
  // };

  // const AddNotice = (id, parentId) => {
  //   dispatch({
  //     type: ADD_NOTICE,
  //     id: id,
  //     parentId: parentId,
  //   });
  // };

  // const DeleteNotice = (id, parentId) => {
  //   dispatch({
  //     type: DELETE_NOTICE,
  //     id: id,
  //     parentId: parentId,
  //   });
  // };

  // const AddDailyExercisesCount = (count: number, parentId: string) => {
  //   dispatch({
  //     type: types.ADD_DAY_EXERCISE_COUNT,
  //     payload: {
  //       count: count,
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const RemoveDailyExercisesCount = (parentId: string) => {
  //   dispatch({
  //     type: types.REMOVE_DAY_EXERCISE_COUNT,
  //     payload: {
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const AddExercisesCount = (count: number, parentId: string) => {
  //   dispatch({
  //     type: types.ADD_EXERCISE_COUNT,
  //     payload: {
  //       count: count,
  //       parentId: parentId,
  //     },
  //   });
  // };
  // const RemoveExercisesCount = (count: number, parentId: string) => {
  //   dispatch({
  //     type: types.REMOVE_EXERCISE_COUNT,
  //     payload: {
  //       count: count,
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const AddExcerciseProgress = (count, indexId) => {
  //   dispatch({
  //     type: ADD_EXERCISE_PROGRESS,
  //     indexId: indexId,
  //     count: count,
  //   });
  // };

  // const RemoveExcerciseProgress = (indexId) => {
  //   dispatch({
  //     type: REMOVE_EXERCISE_PROGRESS,
  //     indexId: indexId,
  //   });
  // };
  // const RestProgress = (indexId) => {
  //   dispatch({
  //     type: REST_PROGRESS,
  //     indexId: indexId,
  //   });
  // };

  // const AddCheck = (count: number, parentId: string) => {
  //   dispatch({
  //     type: types.ADD_CHECKED_EXERCISE,
  //     payload: {
  //       count: count,
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const RemoveCheck = (parentId: string) => {
  //   dispatch({
  //     type: types.REMOVE_CHECKED_EXERCISE,
  //     payload: {
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const RestChecked = (points, parentId) => {
  //   dispatch({
  //     type: REST_CHECKED,
  //     parentId: parentId,
  //     points: points,
  //   });
  // };

  // const CheckCheckBox = (state: boolean, parentId: string) => {
  //   dispatch({
  //     type: types.CHECK_CHECK_BOX,
  //     payload: {
  //       state: state,
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const UnCheckCheckBox = (state: boolean, parentId: string) => {
  //   dispatch({
  //     type: types.UNCHECK_CHECK_BOX,
  //     payload: {
  //       state: state,
  //       parentId: parentId,
  //     },
  //   });
  // };

  // const setCheckBoxGlobal = (state: boolean, grandParentId: string) => {
  //   dispatch({
  //     type: types.SET_CHECK_BOX_GLOBAL,
  //     payload: {
  //       state: state,
  //       grandParentId: grandParentId,
  //     },
  //   });
  // };

  // const setCompactView = (state: boolean) => {
  //   dispatch({
  //     type: types.COMPACT_VIEW,
  //     payload: { state: state },
  //   });
  // };

  console.log(state, ':::::::::::::::::::::::::::::::::::::::');
  return (
    <movmentsContext.Provider
      value={{
        //unit: state.unit,
        StabelItems: state.StabelItems,
        AddStabelItems,
        UpdateStabelItems,
        //DeleteRoutine,
        //muscleGroups: state.muscleGroups,
        //AddMuscleGroup,
        //DeleteMuscleGroup,
        // muscleGroupsFilter: state.muscleGroupsFilter,
        // SetMuscleGroupsFilter,
        // RemoveMuscleGroupsFilter,
        // exercises: state.exercises,
        // AddExercise,
        // DeleteExcercise,
        // exercisesOptions: state.exercisesOptions,
        // //exercisesFilter: state.exercisesFilter,
        // compactView: state.compactView,
        // setCompactView,
        // dayExercisesCount: state.dayExercisesCount,
        // AddDailyExercisesCount,
        // RemoveDailyExercisesCount,
        // exercisesCount: state.exercisesCount,
        // AddExercisesCount,
        // RemoveExercisesCount,
        // checked: state.checked,
        //CheckCheckBox,
        //UnCheckCheckBox,

        //exercisesProgress: state.exercisesProgress,

        // delete: state.delete,
        // defaultCheckBoxes: state.defaultCheckBoxes,
        // checkBoxGlobalState: state.checkBoxGlobalState,
        // setCheckBoxGlobal,
        // addCustomExcrcise,
        // RemoveCustomExcrcise,
        // SetExcerciseFilter,
        // RemoveExcerciseFilter,
        // AddNotice,
        // DeleteNotice,

        // AddExcerciseProgress,
        // RemoveExcerciseProgress,
        // RestProgress,

        //AddCheck,
        //RemoveCheck,
        // RestChecked,
      }}
    >
      {children}
    </movmentsContext.Provider>
  );
};

export default MovementsProvider;
