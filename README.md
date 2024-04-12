# 목차

1. [**서비스 소개**](#💌서비스-소개)
2. [**기획 배경**](#💌기획-배경)
3. [**개발 멤버**](#💌개발-멤버-및-일정-소개)
4. [**기능 소개**](#💌기능-소개)
5. [**시연 영상**](#💌시연-영상)
6. [**기술 스택**](#💌기술-스택)
7. [**프로젝트 일정 및 산출물**](#💌프로젝트-산출물)
8. [**회고**](#💌회고)
   <br/>

---

<br/>

# 💌서비스 소개

## 서비스 설명

### 개요

- 서비스 명 : **`밤편지`**
- 한줄 소개 : **`타로 카드` 컨셉의 `감성 다이어리`**

### 타겟 🎯

- 일기를 작성하며 하루를 갈무리하고 싶은 사람 📝
- 따뜻한 말 한마디가 그리운 사람 😢
- 오늘의 이야기를 나누고 싶은 사람 💗

# 💌기획 배경

## 배경

오늘 하루는 어떠셨나요?

어쩌면 오늘은 새로운 도전에 첫 발을 내딛었을 수도 있고, 사랑하는 이와의 소소한 다툼으로 마음이 무거웠을 수도 있습니다. 때로는 그저 누군가의 따뜻한 말 한마디가 그리울 수도 있죠.

가끔은 누군가에게 자랑을 하고 싶기도, 위로를 받고 싶기도 해요. 하지만 나만의 내밀한 일기를 남에게 보여주는 건 언제나 떨리고 부담스러운 일이죠.

`밤편지`를 받아보세요. 당신의 일상 속 작은 이야기들, 그리고 마음 깊은 곳에 숨겨둔 감정들을 타로카드와 함께 나누어보세요. 우리는 여러분의 이야기에 귀 기울이며, 공감과 위로를 전할 준비가 되어 있어요.

당신이 원한다면 그 누구에게도 말하지 않아요. 마음껏 털어놓아 주세요. 오늘 당신의 이야기를 통해, 스스로를 위로하고, 또 다른 누군가와 공감의 순간을 나누어 보세요.

## 목적 ☁

**타로 카드를 통해 하루를 되돌아 보며 위로를 받을 수 있는 서비스**

- 일기를 꾸준하게 작성할 수 있도록 저희가 도와드릴게요.

- 누구에게도 말 못할 고민이라 위로받지 못해 슬펐나요? GPT가 위로해드릴게요.

- 비슷한 상황을 겪는, 혹은 비슷한 감정을 느끼는 사람들이 있을까 궁금한가요? 추천 사연을 확인해보세요.

# 💌개발 멤버 및 일정 소개

## 📆 프로젝트 기간

### 24.02.19 ~ 24.04.05

- 기획 및 설계 : 24.02.19 ~ 24.03.10
- 프로젝트 구현 : 24.03.11 ~ 24.04.01
- 버그 수정 및 산출물 정리 : 24.04.02 ~ 24.04.05

<br />

<table>
    <tr>
        <td height="140px" align="center"> <a href="https://github.com/heon118">
            <img src="https://avatars.githubusercontent.com/heon118" width="140px" /> <br><br> 👑 이승헌 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/hyojin030">
            <img src="https://avatars.githubusercontent.com/hyojin030" width="140px" /> <br><br> ⛑ 김효진 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/olrlobt">
            <img src="https://avatars.githubusercontent.com/olrlobt" width="140px" /> <br><br> ⛑ 이승헌 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/youngkimi">
            <img src="https://avatars.githubusercontent.com/youngkimi" width="140px" /> <br><br> ⛑ 김영섭 <br>(Back-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/lainlnya">
            <img src="https://avatars.githubusercontent.com/lainlnya" width="140px" /> <br><br> ⛑ 김예림 <br>(Front-End) </a> <br></td>
        <td height="140px" align="center"> <a href="https://github.com/NamjunKim12">
            <img src="https://avatars.githubusercontent.com/NamjunKim12" width="140px" /> <br><br> ⛑ 김남준 <br>(Front-End) </a> <br></td>
    </tr>
    <tr>
        <td align="center">Infra<br/>CI/CD</td>
        <td align="center">AI/ML</td>
        <td align="center">AI/ML<br/>Backend</td>
        <td align="center">Backend</td>
        <td align="center">Frontend</td>
        <td align="center">Frontend</td>
    </tr>
</table>

# 💌기능 소개

## 회원가입 및 로그인

- 카카오 소셜 로그인을 활용하여 서비스에 회원가입 및 로그인을 할 수 있습니다.

  ![시연영상_01_로그인](./assets/gif/카카오로그인.gif)

## 메인화면

- 메인 화면에서 유저가 뽑은 타로카드를 좌우로 스와이프하여 확인할 수 있습니다.
- 타로카드를 클릭했을 때 해당 일자에 작성한 다이어리로 이동할 수 있습니다.
- 당일에 다이어리를 작성하지 않았을 경우 '오늘의 일기 작성하기' 버튼을 통해 다이어리 작성 화면으로 이동할 수 있습니다.

  ![시연영상_02_메인](./assets/gif/메인.gif)

## 첫 로그인이거나, 사용 이력이 오래되었을 경우

- 최초 로그인한 유저이거나, 4주 이내에 다이어리를 작성한 이력이 없는 유저라면 과거 카드를 뽑을 수 있습니다.

  ![시연영상_03_로그인유저과거카드](./assets/gif/로그인후과거카드뽑기.gif)

## 과거 카드 뽑기

- 셔플 버튼을 통해 카드 셔플이 가능하며, 카드를 클릭해 타로를 한 장 뽑을 수 있습니다.
- 다이어리 쓰러가기 버튼을 통해 다이어리쓰기 화면으로 이동할 수 있습니다.

  ![시연영상_04_과거카드뽑기](./assets/gif/과거카드뽑기.gif)

## 일기 작성 및 오늘의 카드 확인

- 오늘 일기를 작성하지 않은 유저라면 일기를 작성할 수 있습니다.
- 사연의 공개 여부를 클릭할 수 있습니다.
- 오늘의 일기를 저장하면 일기의 감정을 분석하여 뽑힌 카드를 받을 수 있습니다.

  ![시연영상_05_다이어리작성](./assets/gif/다이어리작성.gif)

## OPEN AI의 하루 코멘트

- 오늘 작성한 일기와 3장의 카드를 종합하여 OPEN AI가 전해준 하루의 코멘트를 받을 수 있습니다.

  ![시연영상_06_GPT코멘트](./assets/gif/GPT코멘트.gif)

## 사연 추천 받기

- 내가 쓴 일기를 바탕으로 나와 비슷한 카드를 뽑은 사람의 사연을 추천 받을 수 있습니다.

  ![시연영상_07_사연추천](./assets/gif/사연%20추천.gif)

# 💌기술 스택

## 1. <빅데이터 관련 하나 넣기>

### 000이란?

![webSocket]()

<aside>

<!-- 예시 -->

> 웹 소켓은 사용자의 브라우저와 서버 사이의 메세지를 교환하기 위한 통신 기술입니다.

Socket Connection을 유지한 채, 실시간으로 양방향 통신 혹은 데이터 전송이 가능하고, 상태 프로토콜, 클라이언트와 서버가 한 번 연결되면 같은 연결을 이용해 통신하기 대문에 TCP 커넥션 비용을 아낄 수 있습니다.

### 적용

<!-- 예시 -->

`나랑` 에서는 실시간 상태 공유를 위해 모집글 별 채팅방 기능에 webSocket을 사용합니다.

## 3. 개발 환경

<img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=Spring Boot&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Spring Security-6DB33F?style=for-the-badge&logo=Spring Security&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/JSON Web Tokens-000000?style=for-the-badge&logo=JSON Web Tokens&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Gradle-02303A?style=for-the-badge&logo=Gradle&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <br/> <img src="https://img.shields.io/badge/Amazon EC2-569A31?style=for-the-badge&logo=Amazon EC2&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=for-the-badge&logo=Amazon S3&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=NGINX&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=Docker&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Jenkins-D24939?style=for-the-badge&logo=Jenkins&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=Ubuntu&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/><br>
<img src="https://img.shields.io/badge/mySql-007ec6?style=for-the-badge&logo=mySql&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <br/>
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/>
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/zustand-764ABC?style=for-the-badge&logo=react&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Node.js-339939?style=for-the-badge&logo=Node.js&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/Scss-cc6699?style=for-the-badge&logo=sass&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/react query-F73F51?style=for-the-badge&logo=react query&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/><br>
<img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <img src="https://img.shields.io/badge/GitLab-FCA121?style=for-the-badge&logo=GitLab&logoColor=white" style="height : auto; margin-left : 10px; margin-right : 10px;"/> <br/>

# 💌프로젝트 산출물

## 프로젝트 진행

### 1. Git flow

---

- Git flow 사용을 위해 우아한 형제들의 [gitflow](https://techblog.woowahan.com/2553/)을 참고했습니다.
- 최종 `master`브랜치에서 프론트엔드와 백엔드의 작업공간을 나누어 `develop`, `dev-front` 두 하위 브랜치를 각각 분기하여 작업합니다.
- 긴급한 버그발생시 `hotfix`를 수행할 브랜치 또한 따로 분기하였습니다.
- `develop` 브랜치의 작업 내용을 QA하며 수정할 `release` 브랜치를 분기하여 작업하였습니다.

`commit message`는 git hooks 파일을 활용해 `feature/[지라티켓번호]-[기능명(영어)]`로 통일하여 작성했습니다.<br>

### 2. Jira

---

매주 월요일 오전 금주의 진행 이슈를 백로그에 등록했습니다. 전주에 완료하지 못한 이슈나, 앞으로 진행할 이슈들을 추가하였습니다.

- 에픽은 몇 번의 스프린트가 요구되는 큰 업무 덩어리로, `프로젝트 기획/프로젝트 설계/유저 서비스/다이어리 서비스/추천 서비스/인프라`의 6개 분류로 구성했습니다.
- 스토리는 유저의 요구사항을 명시하는 역할로, 명확한 전달을 위하여 `[BE][경매] 유저는 경매 입찰을 통해 물건을 구매할 수 있다.`와 같이 작성했습니다.
- 작업현황을 지라에 반영함으로써 각 팀원이 어떤 작업을 하고있는지, 일정에 딜레이가 있는지 파악하여 애자일 원칙을 준수하고자 노력했습니다.<br>

## 프로젝트 설계

### 1. Figma

[![figma](./assets/image/figma.png)](https://www.figma.com/file/QkvXoQ8tU6SJqGmFpRw24H/%EB%B0%A4%ED%8E%B8%EC%A7%80?type=design&node-id=0-1&mode=design&t=8kVHN06rz2Zyp7cj-0)
<br>

### 2. ERD

![erd]()
<br>

### 3. Architecture

![ERD](./assets/image/architecture.png)

### 3. API 문서

[![api](./assets/image/API명세.png)](https://acoustic-waiter-143.notion.site/API-ef4fbd209fbf45ec8f2b6c2c2e9d4526)

### 4. 포팅 매뉴얼

[포팅 매뉴얼](./assets/porting-manual.md)

# 💌회고

- [이승헌(팀장)](https://github.com/heon118) :
- [김효진](https://github.com/hyojin030) :
- [이승헌](https://github.com/olrlobt) :
- [김영섭](https://github.com/youngkimi) : 아직 엉성한 부분이 많아 차근차근 개선해나가야할 것 같습니다. 초기 기획했던 것보다는 프로젝트 사이즈가 많이 줄어들어 아쉽습니다. 기획적으로 보다 완성도 있는 프로젝트를 위한 몇 가지 기능을 추가하고, 단위 테스트 작성과 안정적 서비스 제공, 성능 개선을 위한 리팩토링 작업이 필요하겠다는 생각이 듭니다.
- [김예림](https://github.com/lainlnya) : 마지막에 시간에 쫓겨 최적화를 하지 못한 점이 아쉬웠습니다. 또한 타로카드가 뽑혀질 때 로딩 시간 없이 카드가 갑작스럽게 뽑히는 느낌이 들어 사용자 경험 향상을 위해 개선해보고 싶다는 생각이 들었습니다.
  프론트엔드 팀원과 코드리뷰를 하며 진행하면 서로의 부분을 디버깅하거나, 구조를 일관성있게 유지하는 것에 도움이 되지 않았을까 하는 아쉬움이 남았습니다. 다음 번에는 코드리뷰를 도입하여 서로의 코드에 대해 피드백을 갖는 시간이 있었으면 좋을 것 같습니다.
- [김남준](https://github.com/NamjunKim12) : 프로젝트에 도입할 기술에 대해 공부하며 근거있는 기술을 선정하기 위해 노력했고, useEffect 의 생명주기에 관련된 트러블 슈팅 과정에서 기술의 작동원리를 더 잘 파악해야겠다는 생각이 들었습니다.
