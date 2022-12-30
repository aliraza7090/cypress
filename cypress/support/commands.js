// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
///.<reference types ="Cypress"./>
///.<reference types ="Cypress-xpath"./>
//import cypress from "cypress";
import "cypress-xpath";
import { Command } from "wd/lib/special-keys";
import Datepicker_calender from "./pageobject/Datepickerpage";
import DateUtilis from "./dateutilis/dateutilis";
import { Staticpage } from "../e2e/pages/Static_page";
var datepicker_calender = new Datepicker_calender();
var dateutilis = new DateUtilis();
var static_page = new Staticpage();


Cypress.Commands.add('selectMonth', (monthName) => {

    
    datepicker_calender.get_year_and_month().then(($month) => {
        
        do{
            if($month.text().includes(monthName)){
                cy.log(monthName + " is selected")
                datepicker_calender.get_date(4)
                cy.wait(2000)
                return
                
                
            }
            

            else{

               datepicker_calender.get_navigation_back().first().click()
            }
            

        }
        while($month.text().includes(!monthName))
        
    
        cy.selectMonth(monthName)
     


    })


})





// Cypress.Commands.add('selectYear', (YearName) => {
//     var s = YearName;
//     var i = s.indexOf(' ');
//     var partOne = s.slice(0, i).trim()
//     var partTwo = s.slice(i + 1, s.length).trim();

//     const currentYear = new Date().getFullYear()
//     datepicker_calender.get_year_and_month().then(($year) => {
//         if($year.text()==partTwo){
//             cy.log($year.text())
//             cy.log(partTwo + 'year is selected')
//             return
//         }
//         else{
//             if(partTwo < currentYear ){
//                 datepicker_calender.get_navigation_back().first().click()
//             }

//             else if(partTwo > currentYear)(
//                 datepicker_calender.get_navigation_forward().first().click()
//             )
//         }
//         while (!YearName)
//         cy.selectYear(YearName)
//     })

// })

// Cypress.Commands.add('selectMonth', (monthName) => {
//     var s = monthName;
//     var i = s.indexOf(' ');
//     var partOne = s.slice(0, i).trim();
//     //var partTwo = s.slice(i + 1, s.length).trim();

//     let currentMonth = new Date().getMonth() +1
//     var givenMonth = dateutilis.getMonthIndexFromName(partOne)

//     datepicker_calender.get_year_and_month().then(($month) => {

//         if($month.text().includes(partOne)){
//             cy.log(partOne + 'month is selected')
//             cy.log($month.text())
//             //cy.log(monthName)
//             //cy.log (givenMonth)
//             //cy.log(currentMonth)
//             cy.log(pt_mt)
//             return
//         }
//         else{
//             if(givenMonth > currentMonth){
//                 cy.log (givenMonth)
//                 cy.log(currentMonth)
//                 datepicker_calender.get_navigation_forward().first().click()
//             }

//             else if(givenMonth < currentMonth){
//                 cy.log (givenMonth+ "=givenmonth")
//                 cy.log(currentMonth)
//                 cy.log(partOne)
//                 datepicker_calender.get_navigation_back().first().click()
//             }

//         }
//         cy.selectMonth(partOne)

//     })

// })




// Cypress.Commands.add('SelectDate', (Date) => {
//     datepicker_calender.get_date().eq(Date - 1).click()
//     cy.log(Date + 'Date is selected')

//     cy.selectDate(Date)

// })