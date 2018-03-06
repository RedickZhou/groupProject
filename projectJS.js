var notOfAge = "You must be 21 years of age to drink. No drink specials available.";

function checkAge() {
var elDrink = document.getElementById('ageChoice2').checked;
if (elDrink === true){
    $('#results').append(notOfAge);
}

};

document.getElementById('submitButton').onclick = checkAge;

function clearResults2() {
    $(function() {
        $('p#results').empty();
        $('[type="checkbox"]').each(function() {
        this.checked = false;
    });
        $('[type="date"]').val('');
        $('[type="radio"]').each(function() {
    this.checked = false;
    });
    $('#submitButton').show();
});};
document.getElementById('resetButton').onclick = clearResults2;




//*********************
function showDeals1() {
    $(function(){
    $('p#show-week').toggle();
   

});};

function showDeals2() {
    $(function(){
    $('p#show-popular').toggle();
});};

function showDeals3() {
    $(function(){
    $('p#show-best').toggle();
});};

function showDeals4() {
    $(function(){
    $('p#show-staff').toggle();

});};

document.getElementById('week').onclick = showDeals1;
document.getElementById('popular').onclick = showDeals2;
document.getElementById('best').onclick = showDeals3;
document.getElementById('staff').onclick = showDeals4;


//use a switch statement for sidebar, example:
// status = 'closed'; // set the default menu status


var Foodrecommend1 = "Flacoís Tacos is what we recommend, here is the address 1116 20 West Granville, check http://flacostacosonline.com/ for detial";

function checkFood(){
    var FoodChoice = document.getElementById('activityChoice1').checked;
if (FoodChoice === true )
{
    $('#results').append(Foodrecommend1);
    }   

};
document.getElementById('submitButton').onclick = checkFood;




var Foodrecommend2 = "Veranda Restaurant & Coffee, it gives 10% off to loyola student"

function checkLoyolaStudent(){
        var StudentChoice = document.getElementById('studentChoice1').checked;

        if (StudentChoice === true )
            if(FoodChoice === true )

            {
                {

             $('#results').append(Foodrecommend2);
             $('#results').append(Foodrecommend1);
                    }
            }
};

document.getElementById('submitButton').onclick = checkLoyolaStudent;




var Eventrecommend1 = "Menís Volleyball vs Ball State. ";
var Eventrecommend2 = "Loyola Fine Arts Exibition ";


function checkevent(){
var eventChoice = document.getElementById('activityChoice3').checked;
var dateChoice = document.getElementById('date').checked;
 
 $('#results').append("here is check event");

if (eventChoice === true )
{

    $('#results').append(Eventrecommend2);

    if (dateChoice === 2018-05-03)
    {
    $('#results').append(Eventrecommend1);
        }
    }   
$('#submitButton').hide();

}



document.getElementById('submitButton').onclick = checkevent;



