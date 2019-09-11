const hideAllOffers = () => {
    $('#escolhas').hide(200)
    $('#escolhas').children().hide();
}
const showSelectedOffer = (offer) => {
    $('#escolhas').show(200)
    $(`#${offer}`).show(200)
}

$(document).ready(function(){
    $('input#input_text, textarea#textarea2').characterCounter();
    $('.collapsible').collapsible();
    $('.tabs').tabs();
    $('.modal').modal();
    $('#opcao').on('change',function(){

    let selectedOption = $(this).val();

        hideAllOffers();
        showSelectedOffer(selectedOption);

    });
    
    $('#checkbox').on('change', function(){
        $('#ocorrenciasBox').toggle(200)
        hideAllOffers();
    });

    $(".yesButton").click(function(){
        $(this).parent().next().show()
    });
    $(".noButton").click(function(){
        $(this).parent().next().hide()
    });
});