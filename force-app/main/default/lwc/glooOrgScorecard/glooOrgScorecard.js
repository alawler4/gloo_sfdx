import { LightningElement, api, wire, track } from 'lwc';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import CSM_SENTIMENT from '@salesforce/schema/Account.CSM_Sentiment_Score__c';
import FIRST_LOGIN from '@salesforce/schema/Account.First_Login_Score__c';
import CLAIMED_PHONE from '@salesforce/schema/Account.Claimed_Phone_Number_Score__c';
import COMMUNITY_MEMBER from '@salesforce/schema/Account.Community_Member_Score__c';
import FIRST_CONNECTION from '@salesforce/schema/Account.First_Connection_Received_Score__c';
import FIRST_RESPONSE from '@salesforce/schema/Account.First_Connection_Response_Score__c';
import CHMS_SCORE from '@salesforce/schema/Account.CHMS_Score__c';
import BROADCAST_SCORE from '@salesforce/schema/Account.First_Broadcast_Score__c';
import OPT_IN_SCORE from '@salesforce/schema/Account.Opt_Ins_Score__c';
import EXPLORER_SETTINGS from '@salesforce/schema/Account.Explorer_Settings_Score__c';
import PLATFORM_LOGINS from '@salesforce/schema/Account.Platform_Logins_Score__c';
import TEAM_SCORE from '@salesforce/schema/Account.Team_Members_Score__c';
import MESSAGE_VOLUME from '@salesforce/schema/Account.Message_Volume_Score__c';
import ENGAGEMENT_RECEIVED from '@salesforce/schema/Account.Engagement_Received_Score__c';
import FEATURE_ADOPTION from '@salesforce/schema/Account.Feature_Adoption_Score__c';
import CONNECTION_VOLUME from '@salesforce/schema/Account.Connection_Volume_Score__c';
import SUBSCRIPTION_STATUS from '@salesforce/schema/Account.Subscription_Status_Score__c';
import PAYMENT_STATUS from '@salesforce/schema/Account.Payments_Score__c';
import RENEWAL_STATUS from '@salesforce/schema/Account.Renewal_Status_Score__c';
import SUPPORT_CSAT from '@salesforce/schema/Account.CSAT_Score__c';
import SUPPORT_CASES from '@salesforce/schema/Account.Cases_Score__c';
import ORG_NPS from '@salesforce/schema/Account.NPS_Score__c';
import ORG_CES from '@salesforce/schema/Account.CES_Score__c';
import REFERRAL_SCORE from '@salesforce/schema/Account.Referral_Program_Score__c';
import PARTNER_SCORE from '@salesforce/schema/Account.Partner_Programs_Score__c';
import chartjs from '@salesforce/resourceUrl/ChartJs';

const fields = [CSM_SENTIMENT, FIRST_LOGIN,CLAIMED_PHONE,COMMUNITY_MEMBER,FIRST_CONNECTION,FIRST_RESPONSE,CHMS_SCORE,BROADCAST_SCORE,OPT_IN_SCORE,EXPLORER_SETTINGS,PLATFORM_LOGINS,TEAM_SCORE,MESSAGE_VOLUME,ENGAGEMENT_RECEIVED,FEATURE_ADOPTION,CONNECTION_VOLUME,SUBSCRIPTION_STATUS,PAYMENT_STATUS,RENEWAL_STATUS,SUPPORT_CSAT,SUPPORT_CASES,ORG_NPS,ORG_CES,REFERRAL_SCORE,PARTNER_SCORE];
export default class GlooOrgScorecard extends LightningElement {
    @api recordId;
    @api objectApiName;

    @wire(getRecord, {
        recordId: "$recordId",
        fields: fields
    })
    account;

    renderedCallback() {
        console.log(this.account.data);
    }

    get csmSentiment() {
        return getFieldValue(this.account.data, CSM_SENTIMENT);
    }

    get firstLogin() {
        return getFieldValue(this.account.data, FIRST_LOGIN);
    }

    get claimedPhone() {
        return getFieldValue(this.account.data, CLAIMED_PHONE);
    }

    get communityMember() {
        return getFieldValue(this.account.data, COMMUNITY_MEMBER);
    }

    get firstConnection() {
        return getFieldValue(this.account.data, FIRST_CONNECTION);
    }

    get firstResponse() {
        return getFieldValue(this.account.data, FIRST_RESPONSE);
    }

    get chms() {
        return getFieldValue(this.account.data, CHMS_SCORE);
    }

    get broadcasts() {
        return getFieldValue(this.account.data, BROADCAST_SCORE);
    }

    get optIns() {
        return getFieldValue(this.account.data, OPT_IN_SCORE);
    }

    get explorerSettings() {
        return getFieldValue(this.account.data, EXPLORER_SETTINGS);
    }

    get platformLogins() {
        return getFieldValue(this.account.data, PLATFORM_LOGINS);
    }

    get teamMembers() {
        return getFieldValue(this.account.data, TEAM_SCORE);
    }

    get messageVolume() {
        return getFieldValue(this.account.data, MESSAGE_VOLUME);
    }

    get engagementReceived() {
        return getFieldValue(this.account.data, ENGAGEMENT_RECEIVED);
    }

    get featureAdoption() {
        return getFieldValue(this.account.data, FEATURE_ADOPTION);
    }

    get connectionVolume() {
        return getFieldValue(this.account.data, CONNECTION_VOLUME);
    }

    get subscriptionStatus() {
        return getFieldValue(this.account.data, SUBSCRIPTION_STATUS);
    }

    get paymentStatus() {
        return getFieldValue(this.account.data, PAYMENT_STATUS);
    }

    get renewalStatus() {
        return getFieldValue(this.account.data, RENEWAL_STATUS);
    }

    get supportCSAT() {
        return getFieldValue(this.account.data, SUPPORT_CSAT);
    }

    get supportCases() {
        return getFieldValue(this.account.data, SUPPORT_CASES);
    }

    get orgNPS() {
        return getFieldValue(this.account.data, ORG_NPS);
    }

    get orgCES() {
        return getFieldValue(this.account.data, ORG_CES);
    }

    get orgReferral() {
        return getFieldValue(this.account.data, REFERRAL_SCORE);
    }

    get partnerPrograms() {
        return getFieldValue(this.account.data, PARTNER_SCORE);
    }
}