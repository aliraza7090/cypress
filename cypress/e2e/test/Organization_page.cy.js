/// <reference types="cypress-xpath" />
import { category } from "../pages/category";
import { environment_variable } from "../pages/Env";
import {Loginpage} from "../pages/log_in"
import { Staticpage } from "../pages/Static_page";
const Category = new category
const Login = new Loginpage
const Static_page = new Staticpage

describe('Organization page', () => {


  it('navigate_to_organization_page', () => {
    Login.HitURL(environment_variable.URL)
    Login.enterUsername(environment_variable.email_identifier, environment_variable.email)
    Login.enterPassword(environment_variable.password_identifier, environment_variable.password)
    Login.enterClick(environment_variable.login_button, environment_variable.url_validity)
    Category.clickCategory(environment_variable.Organizational_listing_identifier, environment_variable.Organizational_listing_url)
  })

  it('verify_organization_title', () => {
    Static_page.Verify_Entity(environment_variable.Organization_page_title_identifier,environment_variable.Organization_page_title)
  })

  it('verify_home_icon_on_organization_page', () => {
    Static_page.get_element_with_xpath(environment_variable.Home_icon_on_add_organization)
  })

  it('Verify_add_Department_button_exists', () => {
    Static_page.Verify_Entity(environment_variable.Add_department_identifier, environment_variable.Button_department)
  })

  it('Verify_Department_button_exists', () => {
    Static_page.Verify_Entity_and_click(environment_variable.Department_identifer, environment_variable.Department_title)
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

  it('Verify_Field_title (Action))', () => {
   Static_page.Verify_Entity(environment_variable.Action_Title_identifier_department, environment_variable.Action_Title_department)

  })




  it('Verify_icon (EDIT))', () => {
     Static_page.Verify_icon(environment_variable.Edit_icon_identifier_organization)
  
  })

   it('Verify_icon (DELETE))', () => {
      Static_page.Verify_icon(environment_variable.Delete_icon_identifier_organization)

   })


  it('Verify_no_of_record', () => {
    Static_page.verify_record_count(environment_variable.Records_identifier)

  })



  it('Verify_Designation_button_exists', () => {
    Static_page.Verify_Entity_and_click(environment_variable.Designation_identifer, environment_variable.Designation_title)
  })


  it('Verify_add_Designation_button_exists', () => {
    Static_page.Verify_Entity(environment_variable.Add_designation_identifier, environment_variable.Button_designation)
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

  it('Verify_Field_title (Action))', () => {
   Static_page.Verify_Entity(environment_variable.Action_Title_identifier_department, environment_variable.Action_Title_department)

  })

  it('Verify_icon (EDIT))', () => {
     Static_page.Verify_icon(environment_variable.Edit_icon_identifier_organization)
  
  })

   it('Verify_icon (DELETE))', () => {
      Static_page.Verify_icon(environment_variable.Delete_icon_identifier_organization)

   })


  it('Verify_no_of_record', () => {
    Static_page.verify_record_count(environment_variable.Records_identifier)

  })

})