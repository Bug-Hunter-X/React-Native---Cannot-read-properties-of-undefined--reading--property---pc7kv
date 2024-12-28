# React Native - Cannot read properties of undefined (reading 'property')

This repository demonstrates a common error in React Native: attempting to access a property of an object that is null or undefined.  The `bug.js` file contains the erroneous code, while `bugSolution.js` provides a corrected version using optional chaining and nullish coalescing.

## Problem

Asynchronous operations, like API calls, may return null or undefined before data is fetched.  Directly accessing properties of such objects throws an error.

## Solution

The best approach is to use optional chaining (`?.`) and the nullish coalescing operator (`??`) to gracefully handle these cases.

## How to reproduce

1. Clone the repository.
2. Run `npm install`.
3. Run the application.
4. Observe the error in the initial state, followed by the correct behavior once the data loads.

## Contributing

Contributions are welcome!