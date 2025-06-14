# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

React In-Built Hooks Summary

| Hook                   | Description                                                             | Typical Use Case                                  |
| ---------------------- | ----------------------------------------------------------------------- | ------------------------------------------------- |
| `useState`             | Creates a piece of local state                                          | Storing UI input, toggles, etc.                   |
| `useEffect`            | Runs side-effects like data fetching, subscriptions, etc.               | Fetch API on mount, sync state with props         |
| `useContext`           | Access context value                                                    | Theming, user auth, shared state                  |
| `useReducer`           | Like `useState`, but for complex state logic                            | Form validation, state transitions                |
| `useRef`               | Persist values across renders without triggering re-renders             | DOM access, storing timers or previous values     |
| `useMemo`              | Memoize expensive calculations                                          | Avoid re-calculating filtered/sorted data         |
| `useCallback`          | Memoize functions to prevent re-creation                                | Function props passed to child components         |
| `useLayoutEffect`      | Like `useEffect` but fires **synchronously after render**               | Measuring layout (e.g., DOM width)                |
| `useImperativeHandle`  | Customizes what is exposed via `ref` when using `forwardRef()`          | Parent triggering child actions via ref           |
| `useDebugValue`        | Used in custom hooks to label debug info in React DevTools              | Display custom hook values in DevTools            |
| `useId`                | Generates unique IDs for accessibility (SSR safe)                       | ID generation in forms and lists                  |
| `useTransition`        | Allows marking state updates as non-blocking (for concurrent rendering) | Smooth loading UIs, search filters                |
| `useDeferredValue`     | Defers a value update until less urgent updates are complete            | Input typing responsiveness                       |
| `useSyncExternalStore` | Reads from external stores with concurrent rendering compatibility      | State management libs (like Redux or Zustand)     |
| `useInsertionEffect`   | Inject styles before DOM mutation (used by CSS-in-JS libs)              | Style libraries like Emotion or styled-components |
