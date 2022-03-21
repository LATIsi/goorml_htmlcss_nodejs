//모듈 가져오기

const axios = require('axios');
const cheerio = require('cheerio');

function main(){
	axios.get("https://news.daum.net/breakingnews/digital")
		.then(data =>{
		
		//성공시 200 아니면 400
		if(data.status == 200 ){
			
			let content = [];
			
			const $ = cheerio.load(data.data);
			const $List = $('#mArticle > div.box_etc > ul > li');
			
			$List.each(function(i){
				content[i]= {
					title:$(this).find('li > div > strong > a').text(),
					info:$(this).find('li > div > strong > span').text(),
					content:$(this).find('li > div > div > span').text(),
					img:$(this).find('li > a > img').attr('src')
				}
				console.log(content);	
				
				
			});
			
			
			
			
			
		}else {
			console.log('통신이 되지 않았습니다.');	
			
			
		}
	});
}

main();