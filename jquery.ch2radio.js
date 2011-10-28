
 /**
 * jQuery ch2radio plugin
 *
 * Copyright (c) 2011 Soufiane Hassou
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Converts checkboxes to radio buttons
 * This plugin was originally created to fix SOBI2 (http://www.sigsiu.net/sobi2.html) lack  of radio buttons
 * If you are using this plugin for SOBI2, Create a checkbox group with a custom class and apply ch2radio to it.
 */
 
(function($) {
    $.fn.ch2radio = function() {

        return this.each(function() {
            var r = $(this);
            var attributes = '';
            $.each(r.get(0).attributes, function(index, attr) {
                if (attr.name === "type") {
                    attr.value = 'radio';
                }
                attributes += attr.name + '="' + attr.value + '" ';
            });
            r.replaceWith('<input ' + attributes + '/>');

        });
    };
})(jQuery);