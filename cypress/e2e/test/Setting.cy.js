/// <reference types="cypress" />
import { category } from "../pages/category";
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
const Category = new category
const Login = new Loginpage

  it('Verify settings_category exists', () => {
    Login.HitURL(environment_variable.URL)
    Login.enterUsername(environment_variable.email_identifier, environment_variable.email)
    Login.enterPassword(environment_variable.password_identifier, environment_variable.password)
    Login.enterClick(environment_variable.login_button, environment_variable.url_validity)
    Category.clickCategory(environment_variable.Settings_identifier, environment_variable.Settings_url)
    



})