## 🐹 React Todo List
React 1주차 개인 투두리스트 과제 프로젝트 입니다!<br/><br/>
겸사겸사, 평소에 써보고 싶었던 `component ui`인 `shadcn ui` 라이브러리를 적용하였습니다!<br/>
겸사겸사2, 해보고 싶었던 React 프로젝트를 Github Actions를 사용하여 Github Page로 배포하는 `Workflow`도 구성해보았습니다 ✍🏻<br/>
겸사겸사3, shadcn ui에 의존적인 `tailwind`도 적용해 볼 수 있었습니다.<br/><br/>
그러면서 `tailwind` className을 어떤식으로 관리하는 것이 좋을까? 고민하고 해결해보는 시간도 가졌습니다!<br/>
아무쪼록 많은 것을 학습할 수 있었던 좋은 시간이였습니다 🔍

## ⭐️ 주요 기능

### 1. Todo 작성
<img width="1230" alt="image" src="https://github.com/1eeyerin/sparta-todo/assets/40863185/1291e063-80ad-432c-8f6f-323b80ed5edf"><br/>
- useState를 이용하여 Todos를 저장합니다.<br/>
- localstorage를 사용하여, 재 접속시에도 기존 데이터를 유지할 수 있도록 하였습니다.
<br/>

### 2. 작성폼 유효성 검사
<img width="1201" alt="image" src="https://github.com/1eeyerin/sparta-todo/assets/40863185/5a98a309-10d0-4e76-9423-c0ba8a668b01"><br/>
- shadcn ui에서 제안하는 zod 유효성 검사 라이브러리를 이용하여, 2자 이상 필수 작성될 수 있도록 하였습니다.
<br/>

### 3. 상태 알림 Toast
<img width="400" alt="image" src="https://github.com/1eeyerin/sparta-todo/assets/40863185/24adddbc-41f4-450e-b926-fbf3003ba88d"><br/>
- Todo가 수정, 삭제, 상태 변경이 일어나는 경우 사용자에게 명확하게 인지 될 수 있도록 Toast를 노출하였습니다.
<br/>

### 4. 삭제 / Todo 완료 변경
<img width="400" alt="image" src="https://github.com/1eeyerin/sparta-todo/assets/40863185/d3665c21-dee3-4229-bea9-fb526415bf98"><br/>
- Todo의 상태를 수정하고, 삭제할 수 있습니다.
<br/>


## 🍉 주요 파일 및 컴포넌트 설명

### .github/workflows/`deploy.yml`
Github Page 배포를 위한 Github Actions script

### components/ui/*
shadcn ui에서 제공하는 컴포넌트 모음 (기본 경로)

### lib/`utils.js`
shadcn ui에서 제공된 className 병합 함수 (기본 경로)

---

### src/components/layout/`index.jsx`
layout의 컴포넌트들을 index로부터 export 할 수 있도록 정의

### src/components/layout/`Header.jsx`
상단 헤더

### src/components/layout/`Container.jsx`
컨텐츠 너비를 제한하는 컴포넌트

---

### src/components/todo/`index.jsx`
todo의 컴포넌트들을 index로부터 export 할 수 있도록 정의

### src/components/todo/`Todo.jsx`
todo 카드 컴포넌트

### src/components/todo/`TodoList.jsx`
todo의 부모 컴포넌트

### src/components/todo/`TodoForm.jsx`
todo를 생성하는 입력 폼 컴포넌트
