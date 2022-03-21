//모듈 가져오기

const axios = require('axios');
const cheerio = require('cheerio');

function main(){
	axios.get("https://www.melon.com/chart/")
		.then(data =>{
		
		//성공시 200 아니면 400
		if(data.status == 200 ){
			
			let content = [];
			
			const $ = cheerio.load(data.data);
			const $List = $('#lst50');
			//또는 #frm > div > table > tbody >tr 로 해도 좋다. 마지막의 tr 자체가 #lst50인셈.
			
			$List.each(function(i){
				content[i]= {
					title:$(this).find('#lst50 > td > div > div > div.ellipsis.rank01 > span > a').text(),
					singer:$(this).find('#lst50 > td > div > div > div.ellipsis.rank02 > a').text(),
					number:$(this).find('#lst50 > td > div > span.rank').text(),
					img:$(this).find('#lst50 > td > div > a > img').attr('src')
				}
				console.log(content);	
				
				
			});
			
			
			
			
			
		}else {
			console.log('통신이 되지 않았습니다.');	
			
			
		}
	});
}

main();