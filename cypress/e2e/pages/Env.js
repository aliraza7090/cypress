import { Staticpage } from "./Static_page";
var environment_variable = {
    URL : "https://thechachaproject.com/",
    email_identifier : "[name='username']",
    email : "admin@schedular.com",
    Invalid_email: "admin@schedular.com",
    password_identifier : "[name='password']",
    password : "Phantom99#",
    Invalid_password: "hantom99##",
    login_button : 'button[class="btn btn-gray-800"]',
    calender_identifier : ':nth-child(2) > .nav-link > :nth-child(1) > .sidebar-text',
    url_validity : '/overview',
    Doctor_identifier : ':nth-child(3) > .nav-link > :nth-child(1) > .sidebar-text',
    Organizational_listing_identifier: ':nth-child(4) > .nav-link > :nth-child(1) > .sidebar-text',
    Settings_identifier: ':nth-child(5) > .nav-link > :nth-child(1) > .sidebar-text',
    Calender_url: "https://thechachaproject.com/calendar",
    Doctor_url: "https://thechachaproject.com/listing-view",
    Organizational_listing_url:"https://thechachaproject.com/organizational_listing",
    Settings_url: "https://thechachaproject.com/settings",


//Doctor_page

    Doctor_page_title_identifier: '[class="mb-3 mb-lg-0"]',
    Doctor_page_title_xpath: "//h4[normalize-space()='Doctor Listing']",
    Doctor_page_title: 'Doctor Listing',
    Home_icon: '[class="icon icon-xs"]',
    Add_doctor_identifier: '[class="d-inline-flex align-items-center btn btn-tertiary btn-sm"]',
    Button_Doctor: 'Add Doctor',
    Search_this_table_identifier: '[id="search-bar-0-label"]',
    Search_this_table: "Search this table",
    Search_input_field_identifier: '[id="search-bar-0"]',
    Download_button_identifier: '[class="m-1 btn btn-primary"]',
    Download_button: 'Download',
    Name_Title_identifier: "th[aria-label='Name sortable']",
    Name_Title: "Name",
    Email_Title_identifier: ".thead-light > tr > :nth-child(2)",
    Email_Title: "Email",
    Designation_Title_identifier: ".thead-light > tr > :nth-child(3)",
    Designation_Title: "Designation",
    Department_Title_identifier: ".thead-light > tr > :nth-child(4)",
    Department_Title: "Department",
    Phone_Title_identifier: ".thead-light > tr > :nth-child(5)",
    Phone_Title: "Phone",
    Isactive_Title_identifier: ".thead-light > tr > :nth-child(6)",
    Isactive_Title: "Isactive",
    Action_Title_identifier: ".thead-light > tr > :nth-child(7)",
    Action_Title: "Action",
    Eye_icon_identifier: "",
    Edit_icon_identifier: "",
    Delete_icon_identifier: "",
    Toggle_button:"",
    Records_identifier: ".border-0 tr",
    Record_counter: "7",
    Add_doctor_email_identifier: '#email > .input-group > .form-control',
    Doctor_email: "razaa7090@gmail.com",
    Invite_button_identifier: ".btn-secondary",

// Organization


    Home_icon_on_add_organization: "//*[name()='path' and contains(@d,'M10.707 2.')]",
    Organization_page_title_identifier: "[class='mb-3 mb-lg-0']",
    Organization_page_title: "Organizational Listing",
    Add_department_identifier:'[class="d-inline-flex align-items-center btn btn-tertiary btn-sm"]',
    Button_department: 'Add Department',
    Department_identifer: "[class='mb-sm-3 mb-md-0 nav-link active']",
    Department_title: "Department",
    Designation_identifer: "[class='mb-sm-3 mb-md-0 nav-link']",
    Designation_title: "Designation",
    Search_this_table_identifier: '[id="search-bar-0-label"]',
    Search_this_table: "Search this table",
    Search_input_field_identifier: '[id="search-bar-0"]',
    Download_button_identifier: '[class="m-1 btn btn-primary"]',
    Download_button: 'Download',
    Name_Title_identifier_department: "th[aria-label='Name sortable']",
    Name_Title_department: "Name",
    Action_Title_identifier_department:'.thead-light > tr > :nth-child(2)',
    Action_Title_department: "Action",
    //Edit_icon_identifier_organization: '[class="border-bottom"] > td[xpath="1"] > [class="icon icon-xs me-3"]',
    Delete_icon_identifier_organization: '.border-0 > :nth-child(1) > :nth-child(2) > :nth-child(2)',
    Edit_icon_identifier_organization:':nth-child(3) > .nav-link > :nth-child(1) > .sidebar-text',
    Add_designation_identifier:"button[class='d-inline-flex align-items-center btn btn-tertiary btn-sm']",
    Button_designation: 'Add Designation',

//Setting_page
    
    Profile_settings_identifier: '[data-rr-ui-event-key="profile settings"]',
    Profile_settings: "Profile settings",
    Security_identifier: "[class='mb-sm-3 mb-md-0 nav-link']",
    Security: "Security",
    Name_identifier: '//*[@id="name"]/div/input',
    Name: "Admin",
    Email_address_identifier: "//*[@id='email']/div/input",
    Email_address: "admin@schedular.com",

    Date_of_Birth_identifier: "[class='phoneNumberField form-control PhoneInput']",

    Gender_identifier: "[class='mb-0 form-select']",
    Gender: "Male",
    Option: 'male',

    
    Phone_number_identifier: '//*[@id="phone"]/div/div[1]/input',
    Phone_number: "+92 321 4564567",
    Submit_bt: '[class="mt-2 animate-up-2 d-flex align-items-center mb-1 btn btn-gray-800"]',

    Old_password_identifier:"(//input[@id='oldPasswordInput'])[2]",
    Old_password: "Phantom99#",
    New_password_identifier: "(//input[@id='newPasswordInput'])[2]",
    New_password: "Phantom99#",

    Submit_button: '[class="mt-2 animate-up-2 d-flex align-items-center mb-1 btn btn-gray-800"]'




};


module.exports = {environment_variable};
