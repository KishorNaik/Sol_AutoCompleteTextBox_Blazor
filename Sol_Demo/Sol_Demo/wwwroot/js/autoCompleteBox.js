function autoCompleteBoxInit(elementReference, jsonAutoCompleteValue) {
    console.log(elementReference);
    console.log(jsonAutoCompleteValue);

    let autoCompleteBoxModel = JSON.parse(jsonAutoCompleteValue);
    console.log(autoCompleteBoxModel);

    let itemSourceObj = JSON.parse(autoCompleteBoxModel.ItemSourceJson);
    console.log(itemSourceObj);

  
    $(document).ready(function () {

        console.log("Jquery Load");

        //$(elementReference).css({ "background-color": "red" });
        $(elementReference).autocomplete({
            minLength: autoCompleteBoxModel.MinLength,
            source: itemSourceObj,
            select: function (event, ui) {
                console.log(ui.item.value);

                DotNet.invokeMethodAsync('Sol_Demo', 'OnItemSelectedJS', ui.item.value);
            }
        });

    });
}