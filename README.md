###### Likelion Front-end Bootcamp

# 🖥️ 31CM - UI Clone Project(CSS)

> 29CM 클론 프로젝트

![Image](https://github.com/user-attachments/assets/74b5aa53-6120-45f7-a6f0-662bba7449b1)

31CM는 [29CM](https://www.29cm.co.kr/)의 UI/UX를 클론하여 **디자인 및 레이아웃 구현**에 집중한 팀 프로젝트입니다.  
웹페이지의 주요 섹션을 구현하며, 최신 웹 기술을 활용하여 29CM의 UI/UX를 재현하는 것을 목표로 제작되었습니다.

## ✨ 기술 스택

| 카테고리               | 기술 스택                                                                                                                                                                        |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **환경**               | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)                                                                                           |
| **마크업 및 스타일링** | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) |
| **빌드**               | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)                                                                                           |
| **배포 및 운영**       | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white)                                                                                  |
| **버전 관리**          | ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) |

## 🧶 프로젝트 구조

```
📦 project-root
├── 📂 src
│   ├── 📂 assets
│   ├── 📂 common      # 이미지 및 기타 정적 파일
│   ├── 📂 components  # 재사용 가능한 UI 컴포넌트
│   ├── 📂 pages       # 각 페이지별 HTML 파일
│   ├── 📂 scripts     # javascript 파일
├── ├── 📜 main.js
├── ├── 📜 style.css
├── 📜 .gitignore
├── 📜 .prettierignore
├── 📜 .prettierrc.cjs
├── 📜 index.html
├── 📜 package-lock.json
├── 📜 package.json
├── 📜 README.md
└── 📜 vite.config.js
```

## 📆 진행 일정

- **03.14 - 03.16**: 프로젝트 셋업
- **03.17 - 03.23**: 페이지 마크업 및 스타일링
- **03.24 - 03.25**: 최종 디버깅 및 배포

## 📷 프로젝트 이미지

///// 완성된 이후 주요 이미지(혹은 gif) 추가 예정 \***\*\*\*\*\***\*\*\*\*\***\*\*\*\*\***

## 🎨 주요 구현 사항

### 1. 반응형 웹 디자인

- 모바일, 태블릿, 데스크톱 환경에서 최적화된 UI 제공
- `@media` 쿼리를 활용한 유연한 레이아웃 설계

### 2. Light/Dark 모드 디자인

- 사용자 환경에 따라 밝은 모드와 어두운 모드 자동 적용
- prefers-color-scheme 미디어 쿼리를 활용한 테마 전환

### 3. 원본 사이트와의 차이점

- 다크 모드 지원
- 시맨틱 태그 사용
- header nav의 tab 접근성 개선
- 텍스트 및 그리드 정렬 개선
- 반응형 보완
- 버튼 및 링크 태그에 hover 효과 추가

## 🛠️ 설치 및 실행 방법

```bash
# 프로젝트 클론
git clone https://github.com/FRONTENDBOOTCAMP-13th/all-in-one.git
```

```bash
# 프로젝트 폴더로 이동
cd your-repo
```

```bash
# 패키지 설치
npm install
```

```bash
# 개발 서버 실행
npm run dev
```

## 🍀 팀 소개

| 김연호                                                                                    | 정원식                                                                                    | 박시운                                                                                    | 장아영                                                                                    |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| ![Image](https://github.com/user-attachments/assets/1b393dde-161c-4579-89f4-d5f2fdf192c1) | ![Image](https://github.com/user-attachments/assets/5b73a8db-aa7e-452f-8df0-662659c9a546) | ![Image](https://github.com/user-attachments/assets/75e20922-753c-4025-9397-aaca620297af) | ![Image](https://github.com/user-attachments/assets/418b89d5-3d64-4454-9e6d-833b9119795b) |
| riderkim88@gmail.com                                                                      | jwe0516@naver.com                                                                         | parksw003@gmail.com                                                                       | fern3eh@gmail.com                                                                         |
| https://github.com/KYDDD                                                                  | https://github.com/jwe0516                                                                | https://github.com/parksiwoon                                                             | https://github.com/cay0716                                                                |

## 🍄 팀 역할 분배

| 이름       | 역할                                                          |
| ---------- | ------------------------------------------------------------- |
| **김연호** | 팀장 & Showcase, Best, Login 페이지 구현                      |
| **박시운** | 29Magazine, 29Magazine-Details 페이지 및 Footer 컴포넌트 구현 |
| **정원식** | PT, Special-Order 페이지 및 Header 컴포넌트 구현              |
| **장아영** | MainPage, 29-Welcoming-Wednesday, Brand-News 페이지 구현      |

## 📚 참고 자료

- [29CM 공식 웹사이트](https://www.29cm.co.kr/)
- [HTML/CSS 기초 가이드](https://developer.mozilla.org/ko/docs/Web/HTML)
- [CSS 스타일링 가이드](https://developer.mozilla.org/ko/docs/Web/CSS)
