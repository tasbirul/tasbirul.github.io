$('form').submit(function (event) {
    event.preventDefault();
    convertInputDegree()
});


$('#inputDegree').on('input', () => convertInputDegree());
$('#selectInputDegreeType').change(() => convertInputDegree());
$('#selectConversionType').change(() => convertInputDegree());


function convertInputDegree() {

    let inputDegree = parseInt($('#inputDegree').val());
    let selectInputDegreeType = $('#selectInputDegreeType').val();
    let conversionType = $('#selectConversionType').val();

    let resultValue = "";

    switch (selectInputDegreeType) {

        case "C":
            resultValue = cTo(inputDegree, conversionType);
            break;

        case "F":
            resultValue = fTo(inputDegree, conversionType);
            break;

        case "K":
            resultValue = kTo(inputDegree, conversionType);
            break;

    }

    if (isNaN(inputDegree)) {
        $('#convertedDegree').text('');
        return;
    }

    // To update the Degree Unit
    $('#convertedUnit').text(conversionType)


    // To update the Degree Value
    $('#convertedDegree').text(resultValue.toFixed(2));

}


function fTo(inputDegreeValue, conversionDegreeType) {

    let temperature = '';

    switch (conversionDegreeType) {
        case 'F':
            temperature = inputDegreeValue;
            break;
        case 'C':
            temperature = eval((inputDegreeValue - 32) * (5 / 9));
            break;
        case 'K':

            temperature = eval((inputDegreeValue + 459.67) * (5 / 9));
            break;

    }
    return temperature;
}



function cTo(inputDegreeValue, conversionDegreeType) {


    let temperature = '';

    switch (conversionDegreeType) {

        case 'C':
            temperature = inputDegreeValue;
            break;
        case 'F':
            temperature = eval((inputDegreeValue * (9 / 5)) + 32);
            break;


    }

    return temperature;
}


