//클릭시 해당 url을 새 탭에서 열어주는 함수

function onAnchorClick(event){
	chrome.tabs.create({
		selected:true ,//기본은 true이다.(새로운탭) false는 열린탭으로 이동
		url:event.srcElement.href, //이벤트를 발생시킨 엘레멘트의 링크를 가져옴
	});
	return false;
}


//가장 많이 방문한 URL 배열을 띄워주기.'

function buildPopupIcon(divName, data){
	var popDiv = document.getElementById(divName);
	
	var ul = document.createElement('ul');
	popDiv.appendChild(ul);
	
	for(var i =0, ie= data.length; i<ie; ++i){
		
		var a= document.createElement('a');
		a.href =data[i];
		
		a.appendChild(document.createTextNode(data[i]));
		a.addEventListener('click',onAnchorClick);
		
		var li =document.createElement('li');
		li.appendChild(a);
		ul.appendChild(li);
	}	
}

function buildTypeUrlList(){
	
	//일주일전 시각 표시
	var ms = 1000 * 60 * 60 * 24 * 7;
	var onWeekAgo = (new Date).getTime() - ms;
	
	var numRequestOutstanding = 0;
	
	//history 배열
	chrome.history.search({
		startTime: onWeekAgo,
		text:''
	}, function(historyItems){
		//해당하는 url 찾기
		for(var i=0;i<historyItems.length;++i){
			var url = historyItems[i].url;
			
			var processVisitsWithUrl = function(url){
				return function(visitItem){
					//url중에서 유저가 직접 방문해 들어간 url 조회
					//클로저 사용
					proceddVisits(url,visitItem);
				}
			}
		
			//세부 방문정보 (링크 타고갔는지, 검색했는지..)
			chrome.history.getVisits((url:url),processVisitsWithUrl(url));	
			numRequestOutstanding++;
		
		}
		
		if(!numRequestOutstanding){
			//종료함수
			
			
			
		}
	})
	
	//url 반복횟수
	
	var urlToCount = {};
	// 그 url중 유저가 직접 입력한 url찾기
	var processVisits = function(url, visitItem){
		for (var i =0, le = visitItem.length; i<le ; ++i){
			if(visitItem[i].transition != 'typed'){
				continue;
			}
		
			if(!urlToCount[url]){
				urlToCount[url]=0;
			}	
			
			urlToCount[url]++;
		}
		
		if(!--numRequestOutstanding){
			//종료 최종배열함수 만들기 호출
			
		}
	}
	
	
	
	// 많이 찾은 url 찾기
	
	
	// 그 배열 만들고
	
	//콜백함수 호출

	
}

//html이 모두 로드되었을때 실행하는 함수
//DOMContentLoaded 하나의 html문서가 다 로드되었을떄 하는 함수
document.addEventListener('DOMContentLoaded',function(){
	
	buildPopupIcon('typedUrl_div');

});





