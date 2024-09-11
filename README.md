# 배포 주소 
**[🔗 MBTI테스트](mbti-test-6pd8ko5g9-wonbinlees-projects.vercel.app)**

## 🗂️ 파일 구조
```
📦src
├─ App.jsx
├─ 📂api
│  ├─ 📜auth.js
│  └─ 📜testResult.js
├─ 📂components
│  ├─ 📜AuthForm.jsx
│  ├─ 📜Layout.jsx
│  ├─ 📜ProtectedRoute.jsx
│  ├─ 📜TestForm.jsx
│  ├─ 📜TestResultItem.jsx
│  └─ 📜TestResultList.jsx
├─ 📂constant
│  └─ 📜mbtiDescriptions.js
├─ 📂data
│  └─ 📜questions.js
├─ 📜index.css
├─ 📜main.jsx
├─ 📂pages
│  ├─ 📜Home.jsx
│  ├─ 📜LogIn.jsx
│  ├─ 📜Profile.jsx
│  ├─ 📜SignUp.jsx
│  ├─ 📜Test.jsx
│  └─ 📜TestResult.jsx
├─ 📂queries
│  └─ 📜testResultQueries.js
├─ 📂shared
│  └─ 📜Router.jsx
├─ 📂utils
│  └─ 📜mbtiCalculator.jsx
└─ 📂zustand
   └─ 📜authStore.js
```

## 📌 요구 사항

### 필수 구현 사항

- ✅ JWT 인증 서버를 사용하여 회원가입, 로그인, 프로필 수정을 구현
- ✅ 로그인한 사용자가 MBTI 테스트를 진행할 수 있도록 서비스 제공
- ✅ 인증이 되지 않은 사용자는 서비스를 이용할 수 없도록 구현
- ✅ 사용자가 MBTI 테스트를 완료하면, 결과를 계산하여 json-server에 저장
- ✅ 사용자는 자신의 테스트 결과를 삭제할 수 있는 기능 제공
- ✅ 테스트 결과는 비공개로 전환할 수 있도록 설정

### 도전 과제
- ✅ 로그인 유지 기능 구현
- ✅ Zustand를 사용하여 Props Drilling 개선
- ✅ Tanstack Query 사용
- ✅ axios를 이용한 API 호출
<br /><br />

## 🛠️ 사용 기술

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react" />
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" alt="react-router" /><br />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind css" />

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white" alt="javascript" /><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" alt="html" />


### 버전 관리

<img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
<br />

### 협업 툴
<img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" /><img src="https://img.shields.io/badge/notion-000000?style=for-the-badge&logo=notion&logoColor=white" /><br /><br />

## 💡 주요 기능

### 1. 회원가입 로그인
- #### 사용자 인증/인가
  회원가입, 로그인을 통해 인증을 받은 회원들만 서비스를 이용할 수 있습니다.

### 2. 테스트
- #### MBTI 테스트
  MBTI 테스트 문항들을 제공하고 답변에 따라 MBTI 결과를 출력해줍니다.

### 3. 테스트 결과
- #### 서버에 저장된 결과들 가져오기
  사용자들의 테스트 결과들을 불러옵니다. 다른 사람들에게 공개되는 걸 원하지 않을 경우 비공개로 전환할 수 있습니다.
### 4. 마이페이지
- #### 닉네임 수정
  사용자의 닉네임을 수정할 수 있는 기능을 제공합니다.

## ❓ 이슈

### 1. 닉네임 변경 중 문제사항

#### 이슈
닉네임을 변경해도 이미 제출한 결과의 닉네임은 변경되지 않는 문제가 있었습니다.

#### 원인
회원가입, 로그인에 사용되는 서버와 게시물들을 관리하는 서버가 서로 달라 발생한 문제입니다.

#### 해결 방안
닉네임 변경 시 사용자의 결과들을 조회해 그 결과의 닉네임을 변경하는 로직을 추가하였습니다.
