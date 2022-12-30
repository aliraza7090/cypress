import { Runnable } from "mocha";
import "./commands";

Cypress.on("uncaught:exception"), (err, Runnable) => {
    return false;
};
import "cypress-xpath";
require('cypress-xpath');