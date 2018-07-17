# React-Redux

Redux is a predictable state container for JavaScript applications.

#Terms:

## Views

The User Interface that the user interacts with.

## Reducer

A function that returns a piece of application state. Reducers specify how the application's state changes in response to actions sent to the store. Remember that actions only describe what happened, but don't describe how the application's state changes.

Reducers receive two arguments: Current State & Action.

## Container

A normal React component that has a direct connection to the state managed by Redux. Generally, the most parent component pertaining to the data should be the container.

## Action Creator

An Action Creator is a function that returns an object (action).

## Actions

Actions are payloads of information that send data from your application to your store. They are the only source of information for the store.

## Store

The object that brings everything together. The store holds application state.

## Data Flow:

<div align="center">

### `View`

### &darr;

### `Action Creator`

### &darr;

### `Returns an Action`

### &darr;

### `Action is sent to Reducers`

### &darr;

### `Reducers process the action and return new state`

### &darr;

### `Notify containers of changes to state`

### &darr;

### `Rerender with updated Props`
