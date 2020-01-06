System.register("scripts", ["jquery"], function (exports_1, context_1) {
    "use strict";
    var $;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function ($_1) {
                $ = $_1;
            }
        ],
        execute: function () {
            $(document).ready(function () {
                console.log("ready!");
            });
            $.ajax({
                type: "POST",
                url: "/v1/upload",
                data: "IDS=" + requests,
                dataType: "json",
                success: function (response) {
                    var name = response;
                    var yourTableHTML = "";
                    jQuery.each(name, function (i, data) {
                        $("#main_table").append("<tr><td>" + data + "</td></tr>");
                    });
                }
            });
        }
    };
});
