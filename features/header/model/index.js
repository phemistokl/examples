import { createStore, createEvent } from "effector";

export const changeField = createEvent("change field");

export const $formInput = createStore("");

$formInput.on(changeField, (state, payload) => payload);