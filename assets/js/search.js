var searchField=$("#search-field").ghostHunter({
	results: "#results",
	onKeyUp: true,
	includebodysearch: true,
	info_template: "<div class='row results_info'>Posts found: {{amount}}</div>",
	result_template: "<a href='{{link}}' id='gh-{{ref}}' class='row result_item gh-search-item'><div class='column result_title'>{{title}}</div><div class='column result_date'>{{pubDate}}</div></a>"
});