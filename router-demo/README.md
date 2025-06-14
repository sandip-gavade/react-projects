# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

| Term            | Purpose                                       |
| --------------- | --------------------------------------------- |
| `BrowserRouter` | Enables client-side routing using history API |
| `Routes`        | Groups all the `<Route>` elements             |
| `Route`         | Maps a path (like `/about`) to a component    |
| `Link`          | Navigation without full page reload           |

| Feature                      | Description                                     |
| ---------------------------- | ----------------------------------------------- |
| **Route Parameters**         | Access dynamic URL values like `/user/:id`      |
| **`useParams()`**            | Hook to read values like `id` from URL          |
| **`useLocation()`**          | Hook to access the current URL and query params |
| **Nested Routes**            | Child routes rendered within parent             |
| **Layout with `<Outlet />`** | Shared layout (like nav) for child pages        |

| Hook            | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `useParams()`   | Get dynamic URL segment (`:id`)                    |
| `useLocation()` | Get full location object (pathname, search, state) |
| `Outlet`        | Render nested route under parent layout            |

| URL                      | What You’ll See                 |
| ------------------------ | ------------------------------- |
| `/users`                 | Users list                      |
| `/users/101`             | Profile of user 101             |
| `/queryinfo?name=Sandip` | Current pathname + query string |

| Feature         | Code Example              | Purpose                       |
| --------------- | ------------------------- | ----------------------------- |
| `NavLink`       | `<NavLink to="/about" />` | Auto styling for active route |
| `useNavigate()` | `navigate('/home')`       | Programmatic navigation       |
| 404 page        | `path="*"`                | Fallback for unmatched routes |

| URL                  | Result                           |
| -------------------- | -------------------------------- |
| `/users/102`         | Shows user profile               |
| `/some/invalid/url`  | Shows custom 404 + "Go Home" btn |
| `/queryinfo?foo=bar` | `useLocation` shows query string |

src/
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ ├── Contact.jsx
│ ├── Users.jsx <- parent
│ ├── UserProfile.jsx <- child route /users/:id
│ └── QueryInfo.jsx <- shows useLocation()
├── App.jsx
└── main.jsx

Next Ideas:
Protect routes (auth logic)

Lazy load components with React.lazy + Suspense

Add loading spinner while navigating

Want to do any of those? Or wrap this with a layout page (like a common header)?
