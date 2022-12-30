
export class Loginpage{


    HitURL(url){
        cy.visit(url)

    }    

    enterUsername(emailIdentifier,email){
        cy.get(emailIdentifier).clear()
        cy.get(emailIdentifier).type(`${email}{enter}`).should('have.value', email)
        
    }

    enterPassword(passwordIdenfication,password){
        cy.get(passwordIdenfication).clear()
        cy.get(passwordIdenfication).type(`${password}{enter}`).should('have.value', password)

    }

    enterClick(buttonIdentifier,UrlToVerify){
        cy.get(buttonIdentifier).click()
        cy.url().should('include', UrlToVerify)

    }


}