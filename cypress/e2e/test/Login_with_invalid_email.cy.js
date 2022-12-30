/// <reference types="cypress" />
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
const loginpage = new Loginpage()

  it('Login with inavlid email and password', () => {
    loginpage.HitURL(environment_variable.URL)
    loginpage.enterUsername(environment_variable.email_identifier, environment_variable.Invalid_email)
    loginpage.enterPassword(environment_variable.password_identifier, environment_variable.password)
    loginpage.enterClick(environment_variable.login_button, environment_variable.URL)
  })