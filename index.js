let දවටනය = require ("./wrapper.js");

module.exports = {
    ට්‍රාන්ස්ලේට් : function(එක්ස්ප්‍රස්){
        return new දවටනය(එක්ස්ප්‍රස්(), "express");
    },
    කොන්සොල් : new දවටනය(console, "console"),
    කොල්බෑක් : function (සුත්‍රය){
        return function (එනපනිවිඩය,යනපනිවිඩය){
            const එනපනිවිඩදවටනය = new දවටනය(එනපනිවිඩය, "req");
            const යනපනිවිඩදවටනය = new දවටනය(යනපනිවිඩය, "res");
            return සුත්‍රය(එනපනිවිඩදවටනය,යනපනිවිඩදවටනය);
        }
    }
};