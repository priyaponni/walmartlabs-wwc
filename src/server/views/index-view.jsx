//
// This is the server side entry point for the React app.
//

import ReduxRouterEngine from "electrode-redux-router-engine";
import {routes} from "../../client/routes";
import {createStore} from "redux";
import rootReducer from "../../client/reducers";
import fs from "fs";
import path from "path";


const Promise = require("bluebird");
const readFileAsync = Promise.promisify(fs.readFile);


function storeInitializer(req, vehicles) {
  let initialState = {
    cars: vehicles
  };
  return createStore(rootReducer, initialState);
}

function createReduxStore(req, match) {
  return Promise.all([
    req.server
      .inject("/vehicles")
      .then(res => {
        return JSON.parse(res.payload);
      })
      .catch(() => {
        return {};
      })
  ]).then(([vehicles]) => storeInitializer(req, vehicles));
}

module.exports = req => {
  const app = (req.server && req.server.app) || req.app;
  if (!app.routesEngine) {
    app.routesEngine = new ReduxRouterEngine({ routes, createReduxStore });
  }

  return app.routesEngine.render(req);
};