/// <reference types="cypress-xpath" />
import { category } from "../pages/category";
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
import { Staticpage } from "../pages/Static_page";
const Category = new category
const Login = new Loginpage
const Static_page = new Staticpage
  it('test listing', () => {
    Login.HitURL(environment_variable.URL)
    Login.enterUsername(environment_variable.email_identifier, environment_variable.email)
    Login.enterPassword(environment_variable.password_identifier, environment_variable.password)
    Login.enterClick(environment_variable.login_button, environment_variable.url_validity)
    Category.clickCategory(environment_variable.Doctor_identifier, environment_variable.Doctor_url)
    Static_page.Verify_Entity(environment_variable.Doctor_page_title_identifier,environment_variable.Doctor_page_title)
    Static_page.Verify_icon(environment_variable.Home_icon)
    Static_page.verify_record_count(environment_variable.Records_identifier)
    cy.wait(3000)
    Static_page.enterClick(environment_variable.Add_doctor_identifier)
    Static_page.Add_doctor_with_email(environment_variable.Add_doctor_email_identifier)

    Static_page.enterClick(environment_variable.Invite_button_identifier)
    cy.wait(3000)
    Static_page.verify_record_count_after_addition()
  
  

  })