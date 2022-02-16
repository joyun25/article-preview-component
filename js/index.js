$.when( $.ready ).then(function() {
    // Document is ready.
    $('.author_share a').click(function (e) { 
        e.preventDefault();
        $('.author_floatBox').toggleClass('hidden')
    });
    
    $('.author_floatBox_share a').click(function (e) { 
        e.preventDefault();
        $('.author_floatBox').toggleClass('hidden')
    });
});
