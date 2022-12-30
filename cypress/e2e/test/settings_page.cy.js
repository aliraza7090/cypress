/// <reference types="cypress" />
import Datepicker_calender from "../../support/pageobject/Datepickerpage";
import calender from "../pages/calender";
import { category } from "../pages/category";
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
import { Staticpage } from "../pages/Static_page";
const Category = new category
const Login = new Loginpage
const Static_page = new Staticpage
const Calender = new calender
const datepicker_calender = new Datepicker_calender

describe('Organization page', () => {

    it('Verify settings_category exists', () => {
       Login.HitURL(environment_variable.URL)
       Login.enterUsername(environment_variable.email_identifier, environment_variable.email)
       Login.enterPassword(environment_variable.password_identifier, environment_variable.password)
       Login.enterClick(environment_variable.login_button, environment_variable.url_validity)
       Category.clickCategory(environment_variable.Settings_identifier, environment_variable.Settings_url)
    
    })

    
    it('Verify_Profile_settings_button_exists', () => {

       Static_page.Verify_Entity_and_click(environment_variable.Profile_settings_identifier, environment_variable.Profile_settings)
    })

    it('Enter_name', () => {

        Static_page.entertext(environment_variable.Name_identifier, environment_variable.Name)
     })

    it('Verify_email_field_is_disbaled', () => {

        Static_page.Disabled_entity(environment_variable.Email_address_identifier)
    })

    it('Enter_Date_of_birth', () => {

        Calender.get_datepicker().first().click()
        Calender.get_calender().should('be.visible')
        cy.selectMonth('July 2022') 
    })
    
    it('Gender_dropdown', () => {

        Static_page.Value_from_dropdown(environment_variable.Gender_identifier, environment_variable.Gender, environment_variable.Option)
    })

    it('Phone_Number', () => {

        Static_page.entertext(environment_variable.Phone_number_identifier, environment_variable.Phone_number)
    })

    it('submit_button', () => {

        cy.wait(3000)
        Static_page.Verify_button(environment_variable.Submit_button)
    })


    it('Verify_Security_button_exists', () => {

        cy.wait(5000)
        Static_page.Verify_Entity_and_click(environment_variable.Security_identifier, environment_variable.Security)
        //cy.wait(3000)
     })
    
    it ("Enter Old password", () => {
        Static_page.entertext(environment_variable.Old_password_identifier, environment_variable.Old_password)
    })

    it ("Enter New password", () => {
        Static_page.entertext(environment_variable.New_password_identifier, environment_variable.New_password)
    })


    it('submit_button', () => {

        cy.wait(3000)
        Static_page.Verify_button(environment_variable.Submit_button)
    })

})

