/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import { category } from "../pages/category";
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
import { Staticpage } from "../pages/Static_page";
const Category = new category
const Login = new Loginpage
const Static_page = new Staticpage

describe('Doctor page', () => {


  it('navigate_to_doctor_page', () => {
    Login.HitURL(environment_variable.URL)
    Login.enterUsername(environment_variable.email_identifier, environment_variable.email)
    Login.enterPassword(environment_variable.password_identifier, environment_variable.password)
    Login.enterClick(environment_variable.login_button, environment_variable.url_validity)
    Category.clickCategory(environment_variable.Doctor_identifier, environment_variable.Doctor_url)
  })

  it('verify_doctor_title', () => {
    Static_page.Verify_Entity(environment_variable.Doctor_page_title_identifier,environment_variable.Doctor_page_title)
  })

  it('verify_home_icon_on_doctor_page', () => {
    Static_page.Verify_icon(environment_variable.Home_icon)
  })

  it('Verify_add_doctor_button_exists', () => {
    Static_page.Verify_Entity(environment_variable.Add_doctor_identifier, environment_variable.Button_Doctor)
  })

  it('Verify_title_(search the table)', () => {
    Static_page.Verify_Entity(environment_variable.Search_this_table_identifier, environment_variable.Search_this_table)

  })

  it('Verify_search_input_field)', () => {
    Static_page.Verify_icon(environment_variable.Search_input_field_identifier)
  })

  it('Verify_Download_button_exists)', () => {
    Static_page.Verify_Entity(environment_variable.Download_button_identifier,environment_variable.Download_button)
  })

  it('Verify_Field_title (NAME))', () => {
    Static_page.Verify_Entity(environment_variable.Name_Title_identifier, environment_variable.Name_Title)

  })

  it('Verify_Field_title (EMAIL))', () => {
    Static_page.Verify_Entity(environment_variable.Email_Title_identifier,environment_variable.Email_Title)

  })

  it('Verify_Field_title (DESIGNATION))', () => {
    Static_page.Verify_Entity(environment_variable.Designation_Title_identifier,environment_variable.Designation_Title)

  })

  it('Verify_Field_title (DEPARTMENT))', () => {
    Static_page.Verify_Entity(environment_variable.Department_Title_identifier,environment_variable.Department_Title)

  })

  it('Verify_Field_title (PHONE))', () => {
    Static_page.Verify_Entity(environment_variable.Phone_Title_identifier,environment_variable.Phone_Title)
  })
  
  
  it('Verify_Field_title (ISACTIVE))', () => {
    Static_page.Verify_Entity(environment_variable.Isactive_Title_identifier,environment_variable.Isactive_Title)
  
  })

  it('Verify_Field_title (ACTION_TITLE))', () => {
    Static_page.Verify_Entity(environment_variable.Action_Title_identifier,environment_variable.Action_Title)

  })

  it('Verify_icon (EYE))', () => {
    //Static_page.Verify_icon(environment_variable.Eye_icon_identifier)
  })

  it('Verify_icon (EDIT))', () => {
    //Static_page.Verify_icon(environment_variable.Edit_icon_identifier)
  
  })

  it('Verify_icon (DELETE))', () => {
    //Static_page.Verify_icon(environment_variable.Delete_icon_identifier)

  })

  //it('Verify_no_of_record', () => {
  //  Static_page.verify_record_count(environment_variable.Records_identifier,environment_variable.Record_counter)

//})

  it('Verify_no_of_record', () => {
    Static_page.verify_record_count(environment_variable.Records_identifier)

})
  


})

