export class Datepicker_calender{
    
    get_datepicker(){
        return cy.xpath('//*[@id="birthday"]/div/div[1]/div/input')

    }
    get_calender_div(){
        return cy.get('[class="rdtPicker"]')
    }

    get_navigation_back(){
        return cy.get('[class="rdtPrev"]')
    }

    get_navigation_forward(){
        return cy.get('[class="rdtNext"]')
    }

    get_year_and_month(YearAndMonth){


        return cy.get('th[class="rdtSwitch"]')
    
    }

    get_date(select_date){
        //return cy.get("td[data-value='4'][data-month='2']")
        return cy.contains(select_date).first().click({force: true})
    
    }
    





} 
export default Datepicker_calender