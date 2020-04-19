using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sol_Demo.Pages.AutoCompleteBoxControl.Extensions
{
    public static class AutoCompleteBoxExtension
    {
        public static async Task AutoCompleteBoxInitAsync(this ElementReference elementReference, IJSRuntime jsRuntime,string autoCompleteBoxContentJson)
        {
            await jsRuntime.InvokeVoidAsync(
                    "autoCompleteBoxInit", elementReference,autoCompleteBoxContentJson);
        }
    }
}
