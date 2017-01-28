PsychManager.module("Entities", function(Entities, PsychManager, Backbone, Marionette, $, _){
    var neuroDisorders;

    Entities.neuroDisorder = Backbone.Model.extend({});
    Entities.neuroDisorderCollection = Backbone.Collection.extend({
        model: Entities.neuroDisorder
    });

    var initializeNeuroDisorders = function(){
        neuroDisorders = new Entities.neuroDisorderCollection([
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Mechanical Radiculopathy"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Idiopathic facial Neuropathy"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Mechanical Mononeuropathy"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Vestibular Schwannoma"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Trigeminal Neuralgia"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Acute Inflammatory Demyelinating Polyradiculoneuropathy"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Diabetic Polyneuroapthy"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Charcot-Marie-Tooth Disease"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Autoimmune Myositis"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Duchenne Muscular Dystrophy"
            },
            {
                disorder: "Peripheral Neurological Disorders",
                attribute: "Myasthenia Gravis"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Ischemic Stroke and Transietn Ischemic Attack"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Nontraumatic Intracerebral Hemorrage"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Intracranial Vascular Malformations"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Mechanical Myelopathy"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Transient Global Amnesia"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Pituitary Adenoma"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Meningioma"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Nervous System Matastases"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Astrocytoma"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Parkinson Disease"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Focla Seizures"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Dystonia"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Multiple Sclerosis"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Neurocysticercosis"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Glocal Cerebral Hypoxia/hypoglycemia/ischemia"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Head Trauma"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Osmotic Neural Syndromes"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Aneurysmal Subarachnoid Hemorrhage"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Infectious Meningitis"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Viral Encephalitis"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Hydrocephalus"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Essential Tremor"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Giant Cell Arteritis"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Huntinton Disease"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Primary Headaches"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Generalized tonic-clonic Seizures"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Febrile Seizures"
            },
            {
                disorder: "Central Neurological Disorders",
                attribute: "Absence Seizures"
            },
            {
                disorder: "Mixed Central & Peripheral Neurological Disorders",
                attribute: "Thiamine Deficiency Neural Syndromes"
            },
            {
                disorder: "Mixed Central & Peripheral Neurological Disorders",
                attribute: "Neuroborreliosis"
            },
            {
                disorder: "Mixed Central & Peripheral Neurological Disorders",
                attribute: "B12 Deficiency Neural Syndromes"
            },
            {
                disorder: "Mixed Central & Peripheral Neurological Disorders",
                attribute: "Alcoholic Neural syndromes"
            },
            {
                disorder: "Mixed Central & Peripheral Neurological Disorders",
                attribute: "Human Immunodeficiency Visu Neural Syndromes"
            },
            {
                disorder: "Mixed Central & Peripheral Neurological Disorders",
                attribute: "Amyotrophic Lateral Sclerosis"
            },
            {
                disorder: "Neurodevelopmental disorders",
                attribute: "Chiari Malformation"
            },
            {
                disorder: "Neurodevelopmental Disorders",
                attribute: "cerbral palsy"
            },
            {
                disorder: "Neurodevelopmental Disorders",
                attribute: "Neural Tube Defects"
            },
            {
                disorder: "Delirium",
                attribute: "Delirium"
            },
            {
                disorder: "Dementia",
                attribute: "Alzheimer's disease"
            },
            {
                disorder: "Dementia",
                attribute: "Vascular Dementia"
            },
            {
                disease: "Dementia",
                attribute: "Dementia with Lewy Bodies"
            },
            {
                disorder: "Dementia",
                attribute: "Frontotemporal Demntia"
            },
            {
                disorder: "Dementia",
                attribute: "Mixed Dementia"
            },
            {
                disorder: "Intellectual Disability",
                attribute:" Intellectual Disability"
            }
        ])
    }

    var API = {
        getNeuroDisorderEntities: function(){
            if(neuroDisorders === undefined){
                initializeNeuroDisorders();
            }
            return neuroDisorders;
        }
    };
    PsychManager.reqres.setHandler("neuroDisorder:entities", function () {
        return API.getNeuroDisorderEntities();
    });
});
