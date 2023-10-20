$(document).ready(function () {

    $('body').on('click', '.deleteThis', function () {
        swal({
            title: "Are you sure?",
            text: "You will not be able to recover this!",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Yes, delete it!',
            closeOnConfirm: false,
            //closeOnCancel: false
        },
            function () {
                swal("Deleted!", "", "success");
            });
    })
    $('body').on('click', function (e) {
        if (!$(e.target).closest(".sideBar").length) {
            $('.navItem').removeClass('active')
            $('.innerSidebar').removeClass('active');
        }


    })
    $('body').on('click', '.menuListing .navItem', function (e) {
        e.preventDefault();
        let thisId = $(this).attr('data-toggle');
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.innerSidebar[data-attr="' + thisId + '"]').removeClass('active');
        }
        else {
            $('.navItem').removeClass('active')
            $('.innerSidebar').removeClass('active');
            $(this).addClass('active');
            $('.innerSidebar[data-attr="' + thisId + '"]').addClass('active');
        };
    });


    $('body').on('click', '.toggleFilters', function (e) {
        $('.filters').stop().slideToggle()
    })
    $('body').on('click', '.toggleNav', function (e) {
        e.preventDefault();
        let thisId = $(this).attr('data-toggle');
        $(this).addClass('active');
        $('.toggleThis[data-attr="' + thisId + '"]').addClass('active');
        $('body').addClass('mobileNavOpen');
    });
    $('body').on('click', '.closeNav', function (e) {
        let thisId = $(this).attr('data-close');
        if (thisId) {
            $('.toggleThis[data-attr="' + thisId + '"]').removeClass('active');
            $('.toggleNav[data-toggle="' + thisId + '"]').removeClass('active');
        }
        else {
            $('.toggleThis').removeClass('active')
            $('.toggleNav').removeClass('active');
            $('body').removeClass('mobileNavOpen');
        }
    });
    $('body').on('click', '.getThis', function () {
        let price = $(this).find('.price').text();
        let qty = $(this).find('.qty').text(); 
        $('#price').val(price);
        $('#qty').val(qty);
    })
});