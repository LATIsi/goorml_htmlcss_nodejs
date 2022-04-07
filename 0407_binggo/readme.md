socket.io를 이용한 같은 링크내에서의 온라인 빙고게임 구현

----

# 필요한 기능   
1. 현재 접속중 유저 이름 출력
2. 두명이어야지만 게임 시작할수 있게 막기
3. 게임 진행을 위해 턴 넘기기 (자기턴에만 싱행)
4. 자기턴 x일시 진행 못하게
5. 숫자 선택시 상대방에게 알리기
5. 선택된 숫자에 글자효과

설치한 라이브러리
socket.io, pug, npm, express, express-generator ... 

# 추가기능
1. ui 꾸미기
2. 
3. 그 외 ..

# 관련 오류.
extends layout 관련 오류.  
main의 첫째줄에 주석줄을 적어놨더니  
```Declaration of template inheritance ("extends") should be the first thing in the file.  
There can only be one extends statement per file. ```  
이라는 에러 코드가 발생.  

layout은 공용된 레이아웃을 만든것. (기본골자, html, body...) 이것을 pug의 extends로 상속받아. block으로 재정의를 해주면 된다.
pug는... 조금 어색하다.
