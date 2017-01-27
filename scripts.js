var elem = document.getElementById('localFiles');

var disorders = [
	"major depressive disorder", "persistent depressive disorder", "schizophrenia", "schizoaffective disorder", "delusional disorder", "bipolar disorder", "genearlized anxiety disorder", "panic disorder",
	"obsessive-compulsive disorder", "acute stress disorder", "post-traumatic stress disorder", "alchohol use disorder", " borderline personality disorder", "antisocial personality disorder",
	"anorexia nervosa", "bulimia nervosa", " attention-deficit/hyperactivity disorder", " autism spectrum disorder", "insomnia", "parasomnias", "circadian rhythm disorders", "restless legs syndrome", "narcolepsy",
	"somatization disorder", "conversion disorder"
]

var newList = '';
for(var i in shuffle(disorders)){
	newList += '<li>' + disorders[i] + '</li>';
}
elem.innerHTML += newList;




function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}
