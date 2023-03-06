# Micro FE With Module Federation 
This example shows how to handle independent and routings in a MFE setup based on [webpack-module-federation](https://github.com/module-federation). The setup consists of:

- `react` & `vue`: apps using a browser history strategy when acting as hosts and an in-memory history strategy when acting as remotes.
- `host`: host app based on a browser history strategy that handles high-level routing. Host routing determines mounting/unmounting of `react` and `vue` remotes.

The host is the only component responsible for updating browser url. The two level of history strategies (browser + in-memory) are kept in sync through an event-based communication between shell and remotes.

<br>

# Running the demo
Navigate other applications:
1. Install deps: `yarn install`.
2. Start apps: `yarn start`.

Visit http://localhost:8080 to navigate `host` app. `react` and `vue` are also exposed as standalone apps at http://localhost:8081 and http://localhost:8082 respectively. 

<br>
