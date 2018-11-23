$(window).resize(function ()
{
    var contactform1 = $('.contactform');
    $(contactform1).css('transition', '0s');
    var contactform2 = $('.contactform2');
    $(contactform2).css('transition', '0s');
});

$(document).ready(function ()
{
    $.when().done(function ()
    {
        setTimeout(function ()
        {
            $('body').css('opacity', '1');
            $('body').css('transition', '1s');
        }, 0);
    }).then(function ()
    {
        setTimeout(function ()
        {
            var contactform1 = $('.contactform');
            $(contactform1).css('top', '25%');
            $(contactform1).css('transition', '0s');

            setTimeout(function ()
            {
                $(contactform1).css('opacity', '1');
                $(contactform1).css('top', '');
                $(contactform1).css('transition', '1s');

                setTimeout(function ()
                {
                    $('input[type="text"]:first').focus();
                }, 1000);
            }, 100);
        }, 0);
    });

    $('body').children().eq(0).on('scroll', function ()
    {
        if (parseInt($(this).scrollTop() + $(this).innerHeight()) >= (parseInt($(this)[0].scrollHeight)))
        {
            setTimeout(function ()
            {
                var contactform2 = $('.contactform2');
                if (parseInt($(contactform2).css('opacity')) != 1)
                {
                    $(contactform2).css('top', '75%');
                    $(contactform2).css('transition', '0s');

                    setTimeout(function ()
                    {
                        $(contactform2).css('opacity', '1');
                        $(contactform2).css('top', '');
                        $(contactform2).css('transition', '1s');
                    }, 100);
                }
            }, 0);
        }
    })
});

function emphasisin(div)
{
    $('.featureditem').css('opacity', '0.5');
    $('.featureditem').css('transition', '0.5s');
    $(div).css('opacity', '1');
};

function emphasisout(div)
{
    $('.featureditem').css('opacity', '');
    $('.featureditem').css('transition', '0.5s');
};