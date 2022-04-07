socket.io를 이용한 같은 링크내에서의 채팅 구현.

----

# 필요한 기능   
1. 접속시 알림
2. 닉네임 변경
3. 닉네임 변경시 알림
4. 유저가 떠날시 알림

설치한 라이브러리
 npm, socket.io, pug, express, express-generator ... 

# 추가기능
1. ui 꾸미기
2. 실시간 접속 유저 이름 보여주기
3. 그 외 ..


# 오류 수정한것들
pug는 link로 css를 연결하는것보다 style - include로 연결하는게 잘 된다.  

css 꾸미기
현재 인원 알리기 (참여자)

# 알아낸 것 
pug는 block과 includes로 미리 만든 파일/코드덩어리를 불러올수있는데.
여기서 block은 .pug만 가능하고, extends로 불러온뒤 재정의, 또는 새로 추가하는 동적방법이다.  
즉 block은 기본적은 뼈대(공통적인 부분)이 목적이고, 1번만 불러 확장시킨다.  
부모를 유지하고 붙이고 싶을시..  

```
extends layout.pug

block append head

이런식으로 append를 붙인다.

```

그러나...  
include는 때에 따라서 같은코드 적용시 여러번 부르기가 가능하다.  
그러나 정적파일이라 확장(재정의- 오버라이딩)을 할수없다.


