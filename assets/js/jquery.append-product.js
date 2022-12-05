let src = new Array(3);
let index = 10;

let dollar = [
    '$0.99',
    '$4.99',
    '$9.99',
    '$41.99',
    '$44.99',
    '$49.99',
    '$91.99',
    '$94.99',
    '$99.99',
    '$199.99'
];

function getStarTag(){
    let max = 5;
    let random = Math.floor((Math.random() * 10)) % max;

    let text_warning = `<i class="text-warning fa fa-star"></i>`;
    let text_muted = `<i class="text-muted fa fa-star"></i>`;
    let result = text_warning;

    for(let i = 0; i < random; i++){
        result += text_warning;
    }

    for (let i = 0; i < max-random-1; i++) {
        result += text_muted;
    }

    return result;
}

function appendProduct(){
    if(index > 99){
        return;
    }

    for(let row=0; row<2; row++){
        for (let i = 0; i < src.length; i++) {
            src[i] = "상품" + index;
            index++;
            
            let star = getStarTag();
            let random = Math.floor((Math.random() * 10));
            let tag = `
            <div class="col-md-4">
                <div class="card mb-4 product-wap rounded-0">
                    <div class="card rounded-0">
                        <img class="card-img rounded-0 img-fluid" src="assets/goods/` + src[i] + `.jpg">
                        <div class="card-img-overlay rounded-0 product-overlay d-flex align-items-center justify-content-center">
                            <ul class="list-unstyled">
                                <li><a class="btn btn-success text-white" href="shop-single.html"><i class="far fa-heart"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="far fa-eye"></i></a></li>
                                <li><a class="btn btn-success text-white mt-2" href="shop-single.html"><i class="fas fa-cart-plus"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <a href="shop-single.html" class="h3 text-decoration-none"><strong>`+ src[i] +`</strong></a>
                        <ul class="w-100 list-unstyled d-flex justify-content-between mb-0">
                            <li>(세부사항)</li>
                            <li class="pt-2">
                                <span class="product-color-dot color-dot-red float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-blue float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-black float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-light float-left rounded-circle ml-1"></span>
                                <span class="product-color-dot color-dot-green float-left rounded-circle ml-1"></span>
                            </li>
                        </ul>
                        <ul class="list-unstyled d-flex justify-content-center mb-1">
                            <li>
                                ` + star + `
                            </li>
                        </ul>
                        <p class="text-center mb-0">` + dollar[random] + `</p>
                    </div>
                </div>
            </div>`;

            console.log(random)

            $('#product').append(tag);
        }
    }
}

$('#btnMore').click(function(){
    appendProduct();

    $(window).on("scroll", function(){
        let scroll_height = $(window).scrollTop()+$(window).height();
        let document_height = $(document).height();
        if(scroll_height == document_height){
            appendProduct();
        }
    });

    $(this).addClass('d-none');
    $('#btnStop').removeClass('d-none');
});

$('#btnStop').click(function(){
    $(this).addClass('d-none');
    $('#btnMore').removeClass('d-none');

    $(window).off("scroll");
})