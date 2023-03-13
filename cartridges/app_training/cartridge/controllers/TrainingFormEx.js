"use strict";

var server = require("server");
var csrfProtection = require("*/cartridge/scripts/middleware/csrf");
var consentTracking = require("*/cartridge/scripts/middleware/consentTracking");

server.get("FormEx", consentTracking.consent, server.middleware.https, csrfProtection.generateToken, function(
    req,
    res,
    next
) {
    var URLUtils = require("dw/web/URLUtils");
    var Resource = require("dw/web/Resource");
    //These imports are needed for you to uset eh CustomObjectMgr and Transaction classes
    var CustomObjectMgr = require("dw/object/CustomObjectMgr");
    var Transaction = require("dw/system/Transaction");

    var id = req.querystring.id;

    // Replace "<ID of your Object>" as for example NewsLetterSubscription or the ID you gave your custom object
    var object = CustomObjectMgr.getCustomObject("NewsletterSubscription", id);

    // If the return from getCustomObject call is not null, then there is already an instance of the object with this ID and we can't use to create our instance
    // If the return is null, it means the ID we are trying to use can be used to create our object instance
    if (!object) {
        // Remember, object creation, modification and deletion must be done inside transactions
        Transaction.wrap(function() {
            object = CustomObjectMgr.createCustomObject("NewsletterSubscription", id);
        });
    }

    var profileForm = server.forms.getForm("formex");
    profileForm.clear();

    res.render("training/trainingformex", {
        title: Resource.msg("training.form.title.submit", "forms", null),
        profileForm: profileForm,
        actionUrl: URLUtils.url("TrainingFormEx-SubmitFormEx").toString()
    });

    next();
});

server.post("SubmitFormEx", server.middleware.https, consentTracking.consent, csrfProtection.generateToken, function(
    req,
    res,
    next
) {
    var Resource = require("dw/web/Resource");
    var URLUtils = require("dw/web/URLUtils");
    var profileForm = server.forms.getForm("formex");
    var profileFirstName = profileForm.customer.firstname.htmlValue;
    var profileLastName = profileForm.customer.lastname.htmlValue;
    var profileEmail = profileForm.customer.email.htmlValue;
    var profilePass = profileForm.customer.password.htmlValue;
    res.render("training/trainingformexsubmit", {
        title: Resource.msg("training.form.title.edit", "forms", null),
        profileForm: profileForm,
        actionUrl: URLUtils.url("TrainingForm-SubmitRegistration").toString(),
        profileFirstName: profileFirstName,
        profileLastName: profileLastName,
        profileEmail: profileEmail,
        profilePass: profilePass
    });

    next();
});

module.exports = server.exports();
