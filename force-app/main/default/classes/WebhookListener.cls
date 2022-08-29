/*******************************************
 * Author: Austin Lawler
 * Created Date: 2022.05.09
 * Description: Class to handle webhooks sent from Intercom to Salesforce
 *******************************************/

@RestResource(urlMapping='/api/Webhook/*')
global with sharing class WebhookListener {
    @HttpPost
    global static String handlePost() {
        String subject = RestContext.request.params.get('subject');
        System.debug('Subject: '+subject);
        return subject;
    }
    /*Webhook_Event__c e = new Webhook_Event__c();
        e.Subject__c = subject;
        insert e();*/
}