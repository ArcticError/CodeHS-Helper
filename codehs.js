// Does this even work?

// ==UserScript==
// @name         codehs script
// @namespace    http://codehs.com
// @version      0.1
// @description  codehs laziness
// @author       Mustafa A.
// @match        https://codehs.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // (".file-list").append('<li></li>')
    if(window.location.href.includes("editor"))
    {
        const parts = window.location.href.split("/");

        const found = parts[4];

        const answers_url = "https://codehs.com/editor/ajax/get_solution_code?itemID="+found+"&method=get_solution_code";

        // console.log(answers_url);

        const items = [];

        const jsz = $.getJSON(answers_url, function(data) {


            $.each( data, function( key, val ) {
                items.push(val);
                //  console.log(items);
            });
            console.log(items[0]);
            $(".file-list").append('<li><TextArea rows="18" cols="30">'+items[0]+'</TextArea></li>');
        });

        // (".file-list").append('<li>'+items[0]+'</li>');



    }
})();
