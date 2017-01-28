PsychManager.module("Entities", function(Entities, PsychManager, Backbone, Marionette, $, _){
    var disorders;
    
    Entities.Disorder = Backbone.Model.extend({
        defaults: {
            "disorder":   "",
            "attribute":     "",
        }
    });
    Entities.DisorderCollection = Backbone.Collection.extend({
        model: Entities.Disorder
    });

    var initializeDisorders = function(){
        disorders = new Entities.DisorderCollection([
            {
                disorder: "Depressive Disorders",
                attribute: "major depressive disorder"
                
            },
            {
                disorder: "Depressive Disorders",
                attribute: " persistent depressive disorder"
            },
            {
                disorder: "Psychotic Disorders",
                attribute: "Schizophrenia"
            },
            {
                disorder: "Psychotic Disorders",
                attribute: "Schizoaffective disorder"
            },
            {
                disorder: "Psychotic Disorders",
                attribute: "delusional disorder"
            },
            {
                disorder: "Bipolar disorders",
                attribute: "bipolar disorder"
            },
            {
                disorder: "Anxiety Disorders",
                attribute: "generalized anxiety disorder"
            },
            {
                disorder: "Anxiety Disorders",
                attribute: "panic disorder"
            },
            {
                disorder: "Obsessive-compulsive-disorders",
                attribute: "Obsessive-compulsive disorder"
            },
            {
                disorder: "Trauma-related disorder",
                attribute: "acute stress disorder",
            },
            {
                disorder: "Trauma-related disorder",
                attribute: "post-traumatic stress disorder"
            },
            {
                disorder: "Substance use disorders",
                attribute: "alcohol use disorder",
            },
            {
                disorder: "Personality Disorders",
                attribute: "borderline personality disorder"
            },
            {
                disorder: "Personality Disorders",
                attribute: "antisocial personality disorder"
            },
            {
                disorder: "Eating Disorders",
                attribute: "anorexia nervosa"
            },
            {
                disorder: "Eating Disorders",
                attribute: "bulimia nervosa"
            },
            {
                disorder: "Neurodevelopmental disorders",
                attribute: "attention-deficit/hyperactivty disorder"
            },
            {
                disorder: "Neurodevelopmental disorders",
                attribute: "autism spectrum disorder"
            },
            {
                disorder: "Sleep-wake disorders",
                attribute: "insomnia"
            },
            {
                disorder: "Sleep-wake disorders",
                attribute: "parasomnias"
            },
            {
                disorder: "Sleep-wake disorders",
                attribute: "circadian rhythm disorders"
            },
            {
                disorder: "Sleep-wake disorders",
                attribute: "restless legs syndrome"
            },
            {
                disorder: "Sleep-wake disorders",
                attribute: "narcolepsy"
            },
            {
                disorder: "Somatic Symptom disorders",
                attribute: "Somatization Disorder"
            },
            {
                disorder: "Somatic Symptom disorders",
                attribute: "Conversion Disorder"
            }

        ]);
    };

    var API = {
        getDisorderEntities: function(){
            if(disorders === undefined){
                initializeDisorders();
            }
            return disorders;
        }
    };

    PsychManager.reqres.setHandler("disorder:entities", function () {
        return API.getDisorderEntities();
    });
});