import React, { useState, createContext, useReducer } from 'react';
import { types } from './types';
import { ActionType } from './movementsState';
import { StateInterface } from './movementsState';

export const exerciseReducer = (state: StateInterface, action: ActionType): any => {
  switch (action.type) {
    // ADD A DAY
    case types.ADD_STABEL_ITEM:
      let add = [...state.StabelItems[action.payload.stabelType], { name: action.payload.name, amount: action.payload.amount, id: action.payload.id }];
      localStorage.setItem(action.payload.stabelType, JSON.stringify(add));
      return {
        ...state,
        StabelItems: {
          ...state.StabelItems,
          [action.payload.stabelType!]: [
            ...(state.StabelItems[action.payload.stabelType!] ?? []),
            { name: action.payload.name, amount: action.payload.amount, id: action.payload.id },
          ],
        },
      };

    //Delete The routine
    case types.UPDATE_STABEL_ITEM:
      let update = [
        ...(state.StabelItems[action.payload.stabelType!] ?? []).map((el) =>
          el.id === action.payload.id ? { name: action.payload.name, amount: action.payload.amount, id: action.payload.id } : el
        ),
      ];
      localStorage.setItem(action.payload.stabelType, JSON.stringify(update));
      return {
        ...state,
        StabelItems: {
          ...state.StabelItems,
          [action.payload.stabelType!]: [
            ...(state.StabelItems[action.payload.stabelType!] ?? []).map((el) =>
              el.id === action.payload.id ? { name: action.payload.name, amount: action.payload.amount, id: action.payload.id } : el
            ),
          ],
        },
      };
    // Delete THE DAY
    //  case types.DELETE_ROUTINE:
    // Shallow copy !!
    //const newState = {
    //  ...state,
    // };
    //delete newState.exercises[action.id];
    // return {
    // ...state,
    //Delete The routine
    //routines: [...state.routines.filter((routine: { id: string }) => routine.id !== action.payload.id)],
    // Delete The groupe
    //  muscleGroups: {
    //     ...state.muscleGroups,
    //     [action.payload.parentId]: state.muscleGroups[action.payload.parentId]?.splice(0, -1),
    //   },
    //     // Delete The muscle filter
    //     muscleGroupFilter: {
    //       ...state.muscleGroupFilter,
    //       [action.index]: [...(state.muscleGroupFilter[action.index] ?? [])].splice(0, -1),
    //     },
    //     exercises: newState.exercises,
    //  };
    // ADD MUSCLE GROUP
    // case types.ADD_MUSCLE_GROUP:
    //   return {
    //     ...state,
    //     muscleGroups: {
    //       ...state.muscleGroups,
    //       [action.payload.parentId!]: [...(state.muscleGroups[action.payload.parentId!] ?? []), { id: action.payload.id, muscle: action.payload.select }],
    //     },
    //   };

    // REMOVE MUSCLE GROUP
    // case types.DELETE_MUSCLE_GROUP:
    //   return {
    //     ...state,
    //     muscleGroups: {
    //       ...state.muscleGroups,
    //       [action.payload.parentId!]: state.muscleGroups[action.payload.parentId!]?.filter((el) => el.id !== action.payload.id),
    //     }, // [...state.muscleGroups[action.index].filter(exercise => exercise.id !== action.id)]
    //   };

    // SET MUSCLE GROUP FILTER
    // case types.SET_MUSCLE_GROUPS_FILTER:
    //   return {
    //     ...state,
    //     muscleGroupsFilter: {
    //       ...state.muscleGroupsFilter,
    //       [action.payload.parentId!]: [...(state.muscleGroupsFilter[action.payload.parentId!] ?? []), action.payload.select],
    //     },
    //   };

    // SET MUSCLE GROUP FILTER
    // case types.REMOVE_MUSCLE_GROUPS_FILTER:
    //   return {
    //     ...state,
    //     muscleGroupsFilter: {
    //       ...state.muscleGroupsFilter,
    //       [action.payload.parentId!]: state.muscleGroupsFilter[action.payload.parentId!]?.filter((el) => el !== action.payload.select),
    //     },
    //   };

    // ADD EXERCISE
    // case types.ADD_EXERCISE:
    //   return {
    //Original
    //   ...state,
    //   exercises: {
    //     ...state.exercises,
    //     [action.idparent]: [
    //       //...(state.exercises[action.index] ?? []),
    //       ...(state.exercises[action.idparent] ?? []), /// WTHE F ?????????????????????????????????????????????????
    //       {
    //         index: action.index,
    //         id: action.id,
    //         exercise: action.exercise,
    //         weight: action.weight,
    //         sets: action.sets,
    //         reps: action.reps,
    //         rest: action.rest,
    //       },
    //     ],
    //   },
    // };
    //     // Parent id !!!
    //   ...state,
    //   exercises: {
    //     ...state.exercises,
    //     [action.payload.grandParentId!]: [
    //       //...(state.exercises[action.index] ?? []),
    //       ...(state.exercises[action.payload.grandParentId!] ?? []), /// WTHE F ?????????????????????????????????????????????????
    //       {
    //         parentId: action.payload.parentId,
    //         id: action.payload.id,
    //         exercise: action.payload.selectObj?.exercise,
    //         weight: action.payload.selectObj?.weight,
    //         sets: action.payload.selectObj?.sets,
    //         reps: action.payload.selectObj?.reps,
    //         rest: action.payload.selectObj?.rest,
    //       },
    //     ],
    //   },
    // };
    // return {
    //   ...state,
    //   exercises: {
    //     ...state.exercises,
    //     [action.grandParentId]: state.exercises[action.grandParentId]?.map((item) =>
    //       item[action.idparent]
    //         ? {
    //             ...item,
    //             [action.idparent]: [
    //               ...(item[action.idparent] ?? []),
    //               {
    //                 index: action.index,
    //                 id: action.id,
    //                 exercise: action.exercise,
    //                 //weight: action.weight,
    //                 //sets: action.sets,
    //                 //reps: action.reps,
    //                 //rest: action.rest,
    //               },
    //             ],
    //           }
    //         : item
    //     ),
    //   },
    //};

    // DELETE EXERCISE
    // case types.DELETE_EXCERCISE:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     exercises: {
    //       ...state.exercises,
    //       [action.payload.grandParentId!]: [...state.exercises[action.payload.grandParentId!]?.filter((el) => el.id !== action.payload.id)],
    //     },
    //   };

    // // ADD CUSTOM EXERCISE
    // case ADD_CUSTOM_EXCERCISE:
    //   return {
    //     ...state,
    //     exercisesOptions: {
    //       ...state.exercisesOptions,
    //       [action.muscleGroup]: [...state.exercisesOptions[action.muscleGroup], action.excercis],
    //     },
    //   };

    // // DELETE CUSTOM EXERCISE
    // case REMOVE_CUSTOM_EXCERCISE:
    //   return {
    //     // ...state,
    //     // exercisesOptions: {
    //     //   ...state.exercises,
    //     //   [action.parentId]: [...state.exercises[action.parentId]?.filter((el) => el.id !== action.id)],
    //     // },
    //   };

    // // SET MUSCLE GROUP FILTER
    // case SET_EXCERCISE_FILTER:
    //   return {
    //     ...state,
    //     exercisesFilter: {
    //       ...state.exercisesFilter,
    //       [action.id]: [...(state.exercisesFilter[action.id] ?? []), action.select],
    //     },
    //   };

    // // SET MUSCLE GROUP FILTER
    // case REMOVE_EXCERCISE_FILTER:
    //   return {
    //     ...state,
    //     exercisesFilter: {
    //       ...state.exercisesFilter,
    //       [action.index]: state.exercisesFilter[action.index]?.filter((el) => el !== action.select),
    //     },
    //   };

    // case ADD_NOTICE:
    //   return {
    //     ...state,
    //     notice: {
    //       ...state.notice, // copy the old and makes you able to add a new ! ???
    //       // then cope the neted state using action.partemID
    //       [action.parentId]: [...(state.notice[action.parentId] ?? []), { id: action.id }],
    //     },
    //   };

    // case DELETE_NOTICE:
    //   return {
    //     ...state,
    //     notice: {
    //       ...state.notice,
    //       [action.parentId]: [...state.notice[action.parentId]?.filter((el) => el.id !== action.id)],
    //     },
    //   };

    // case types.COMPACT_VIEW:
    //   return {
    //     ...state,
    //     compactView: action.payload.state,
    //   };

    // case types.ADD_DAY_EXERCISE_COUNT:
    //   return {
    //     ...state,
    //     dayExercisesCount: {
    //       ...state.dayExercisesCount,
    //       [action.payload.parentId!]: [...(state.dayExercisesCount[action.payload.parentId!] ?? []), action.payload.count],
    //     },
    //   };
    // case types.REMOVE_DAY_EXERCISE_COUNT:
    //   return {
    //     ...state,
    //     dayExercisesCount: {
    //       ...state.dayExercisesCount,
    //       [action.payload.parentId!]: [...(state.dayExercisesCount[action.payload.parentId!] ?? [])].slice(0, -1),
    //     },
    //   };

    // case types.ADD_EXERCISE_COUNT:
    //   return {
    //     ...state,
    //     exercisesCount: {
    //       ...state.exercisesCount,
    //       [action.payload.parentId!]: [...(state.exercisesCount[action.payload.parentId!] ?? []), action.payload.count],
    //     },
    //   };

    // case types.REMOVE_EXERCISE_COUNT:
    //   return {
    //     ...state,
    //     exercisesCount: {
    //       ...state.exercisesCount,
    //       [action.payload.parentId!]: [...(state.exercisesCount[action.payload.parentId!] ?? [])].slice(0, -1),
    //     },
    //   };

    // case ADD_EXERCISE_PROGRESS:
    //   return {
    //     ...state,
    //     exercisesProgress: {
    //       ...state.exercisesProgress,
    //       [action.indexId]: [...(state.exercisesProgress[action.indexId] ?? []), action.count],
    //     },
    //   };

    // case REMOVE_EXERCISE_PROGRESS:
    //   return {
    //     ...state,
    //     exercisesProgress: {
    //       ...state.exercisesProgress,
    //       [action.indexId]: [...(state.exercisesProgress[action.indexId] ?? [])].slice(0, -1),
    //     },
    //   };

    // case REST_PROGRESS:
    //   return {
    //     ...state,
    //     exercisesProgress: {
    //       ...state.exercisesProgress,
    //       [action.indexId]: [...(state.exercisesProgress[action.indexId] = [])],
    //     },
    //   };

    // case types.ADD_CHECKED_EXERCISE:
    //   return {
    //     ...state,
    //     checked: {
    //       ...state.checked,
    //       [action.payload.parentId!]: [...(state.checked[action.payload.parentId!] ?? []), action.payload.count],
    //     },
    //   };

    // case types.REMOVE_CHECKED_EXERCISE:
    //   return {
    //     ...state,
    //     checked: {
    //       ...state.checked,
    //       [action.payload.parentId!]: [...(state.checked[action.payload.parentId!] ?? [])].slice(0, -1),
    //     },
    //   };

    // case REST_CHECKED:
    //   return {
    //     ...state,
    //     checked: {
    //       ...state.checked,
    //       [action.parentId]: [...(state.checked[action.parentId] ?? []), action.point],
    //     },
    //   };

    // case types.CHECK_CHECK_BOX:
    //   return {
    //     ...state,
    //     checkBox: {
    //       ...state.checkBox,
    //       [action.payload.parentId]: action.payload.state,
    //     },
    //   };

    // case types.UNCHECK_CHECK_BOX:
    //   return {
    //     ...state,
    //     checkBox: {
    //       ...state.checkBox,
    //       [action.payload.parentId]: action.payload.state,
    //     },
    //   };

    // case types.SET_CHECK_BOX_GLOBAL:
    //   return {
    //     ...state,
    //     checkBoxGlobalState: {
    //       ...state.checkBoxGlobalState,
    //       [action.payload.grandParentId!]: action.payload.state,
    //     },
    //   };

    default:
      return state;
  }
};

// import { movmentsContext } from './context/movements/movementsState';
// let content = contextTest.StabelItems;
// console.log(content);
// //localStorage.setItem('test', JSON.stringify(content));
