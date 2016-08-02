define("portfolioList",
	["jquery"], function ($) {

	function createTemplate(imgName) {
		return $(`<div class="col-sm-4 portfolio-item">
			<a href="#portfolioModal4" class="portfolio-link" data-toggle="modal">
			<div class="caption">
			<div class="caption-content">
			<i class="fa fa-search-plus fa-3x"></i>
			</div> 
			</div>
			<img src="img/portfolio/${imgName}.png" class="img-responsive" alt="">
			</a>
		</div>`);
	}

	var arrayOfPortfolioImages = [
		"cabin",
		"cake",
		"circus",
		"game",
		"safe",
		"submarine"
	];

	arrayOfPortfolioImages.forEach(function (img) {
		$('#portfolio-list').append(createTemplate(img));
	});

});