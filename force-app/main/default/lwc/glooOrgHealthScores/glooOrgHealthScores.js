import { LightningElement, api } from 'lwc';
import CHAMPION_SENTIMENT from '@salesforce/schema/Account.Champion_Sentiment_Score__c';
import PRODUCT_ONBOARDING from '@salesforce/schema/Account.Champion_Product_Onboarding_Score__c';
import PRODUCT_ADOPTION from '@salesforce/schema/Account.Product_Adoption_Score__c';
import PAYMENT_STATUS from '@salesforce/schema/Account.Payment_Status_Score__c';
import RETENTION_SCORE from '@salesforce/schema/Account.Champion_Retention_Score__c';
import SUPPORT_SCORE from '@salesforce/schema/Account.Champion_Support_Score__c';
import FEEDBACK_SCORE from '@salesforce/schema/Account.Champion_Feedback_Score__c';



export default class GlooOrgHealthScores extends LightningElement {
    sentimentScore = CHAMPION_SENTIMENT;
    productOnboardingScore = PRODUCT_ONBOARDING;
    productAdoptionScore = PRODUCT_ADOPTION;
    paymentStatusScore = PAYMENT_STATUS;
    retentionScore = RETENTION_SCORE;
    supportScore = SUPPORT_SCORE;
    feedbackScore = FEEDBACK_SCORE;

    @api recordId;
    @api objectApiName;
}