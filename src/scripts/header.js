// header-component.js
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        /* 리셋 및 기본 스타일 */
        .sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
  border: 0;
}
        *, *::before, *::after {
          box-sizing: border-box;
        }
        * {
          margin: 0;
          padding: 0;
        }
        ul[role='list'], ol[role='list'] {
          list-style: none;
        }
        html:focus-within {
          scroll-behavior: smooth;
        }
        a:not([class]) {
          text-decoration-skip-ink: auto;
        }
        img, picture, svg, video, canvas {
          max-width: 100%;
          height: auto;
          vertical-align: middle;
          font-style: italic;
          background-repeat: no-repeat;
          background-size: cover;
        }
        input, button, textarea, select {
          font: inherit;
        }
        @media (prefers-reduced-motion: reduce) {
          html:focus-within {
            scroll-behavior: auto;
          }
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
            transition: none;
          }
        }
        body, html {
          height: 100%;
          scroll-behavior: smooth;
        }
        /* 기타 공통 스타일 */
        fieldset {
          display: flex;
          gap: 10px;
          width: 80%;
          margin: 30px;
          padding: 20px;
        }
        fieldset legend {
          text-align: center;
        }
        .padding-222 {
          font-size: 30px;
          margin-top: 100px;
          text-align: center;
          width: 85%;
        }
        .header-page-nav-comp {
          display: flex;
        }
        svg {
          font-style: normal;
        }
        * {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

/* 컴포넌트를 위한 */
fieldset {
  display: flex;
  gap: 0.625rem;
}

fieldset aside.banner-31cm-mobile {
  display: flex;
}

fieldset.header-31cm {
  display: none;
}

svg {
  font-style: normal;
}

.padding-222 {
  font-size: 1.5625rem;
  margin-top: 3.125rem;
  text-align: center;
  width: 85%;
}

fieldset {
  width: 80%;
  margin: 1.25rem;
  padding: 1.875rem;
}

fieldset legend {
  text-align: center;
}

/* 리셋 */
ul,
li {
  list-style-type: none;
}

a {
  text-decoration: none;
  color: #000;
}

/* 헤더 이너 */
.header-31cm-inner {
  display: flex;
  justify-content: space-between;
}

.header-31cm-inner .header-inner-nav ul {
  display: flex;
  column-gap: 1rem;
}

.header-31cm-inner .item-heart {
  margin-top: 0.125rem;
}

.header-31cm-inner .nav-item {
  display: flex;
  font-size: 0.625rem;
  align-items: center;
  column-gap: 0.3125rem;
  font-weight: 200;
}

@media (max-width: 1024px) {
  .header-31cm-inner .header-inner-nav svg {
    width: 0.9375rem;
    height: 0.9375rem;
  }
  .header-31cm-inner .header-inner-nav .nav-hidden-item {
    display: inline-block;
    margin-top: 0.0625rem;
  }
  .header-31cm-inner .header-inner-nav span {
    display: none;
  }
}

/* 헤더 : 페이지 메뉴  */
.header-page-nav {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 1024px) {
  .header-page-nav svg {
    width: 1.875rem;
    height: 1.875rem;
    display: none;
  }
}

.header-page-nav ul {
  display: flex;
  column-gap: 1.25rem;
  font-size: 2.5rem;
  font-weight: 700;
  flex-flow: wrap;
}

@media (max-width: 1024px) {
  .header-page-nav ul {
    font-size: 1.5625rem;
    column-gap: 0.8125rem;
  }
}

.header-page-nav ul a:hover {
  border-bottom: 5px solid #000;
}

@media (max-width: 1024px) {
  .header-page-nav ul a:hover {
    border-bottom: 3px solid #000;
  }
}

/* 서브메뉴 */
.sub-menu {
  display: none;
  overflow: hidden;
  padding: 1rem;
  width: 100vw;
  position: absolute;
  left: 0;
  margin-top: 0.1875rem;
}

.top-menu:hover .sub-menu,
.top-menu:focus-within .sub-menu {
  display: block;
  border-top: 1px solid #e4e4e4;
  background: #fff;
}

.sub-menu > ul {
  float: left;
}

.sub-menu > ul:not(:last-child) {
  margin-right: 1rem;
}

.header-main-menu {
  display: flex;
  column-gap: 1.125rem;
  list-style-type: none;
  font-weight: 500;
  padding-bottom: 1.875rem;
  font-size: 1rem;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .header-main-menu {
    column-gap: 0.625rem;
    font-size: 0.75rem;
  }
}

.top-menu:hover {
  border-bottom: 3px solid #000;
}

@media (max-width: 1024px) {
  .top-menu:hover {
    border-bottom: 2px solid #000;
  }
}

.drop-down-menu {
  margin-right: 4.625rem;
  font-weight: normal;
  font-size: 0.8125rem;
  padding-block: 0.3125rem;
  padding-inline: 2rem;
}

@media (max-width: 1024px) {
  .drop-down-menu {
    font-size: 0.625rem;
  }
}

.drop-down-menu.size-up {
  font-size: inherit;
  font-weight: inherit;
}

/* 얇고 기울린 폰트의 메뉴 */
.top-menu-slim {
  font-weight: 100;
  font-style: italic;
}

.top-menu-border {
  border-left: 1px solid #c4c4c4;
  padding-top: 0.25rem;
  padding-left: 1.25rem;
}

@media (max-width: 1024px) {
  .top-menu-border {
    padding-left: 0.625rem;
    padding-top: 0.125rem;
  }
}

/* 최종 반응형 추가 */
.header-31cm {
  display: flex;
  flex-direction: column;
  position: sticky;
  gap: 1.875rem;
  padding-inline: 3.125rem;
  padding-top: 1.875rem;
  z-index: 1;
  inset-block-start: 0;
  background: #fff;
}

@media (max-width: 1024px) {
  .header-31cm {
    gap: 0.625rem;
    padding-top: 1.25rem;
  }
}

@media (max-width: 1024px) {
  .logo {
    width: 4.0625rem;
    height: 1.25rem;
  }
}

/* 모바일 */
.nav-hidden-item,
.header-nav-mobile,
.header-31cm-mobile {
  display: none;
}

/* 배너 */
.banner-31cm-mobile {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding-block: 0.6875rem;
  width: 100%;
  background: #000;
  font-size: 0.8125rem;
  padding-inline: 1rem 0.5rem;
  font-weight: 600;
  text-transform: uppercase;
}

.banner-31cm-mobile a {
  color: #fff;
}

.banner-31cm-mobile p {
  color: #fff;
}

.banner-31cm-mobile span {
  color: #ff4800;
  font-size: 0.75rem;
}

@media (max-width: 541px) {
  .banner-31cm-mobile {
    display: flex;
  }
}

.banner-item-button {
  background: #ff4800;
  font-size: 0.625rem;
  padding: 0.375rem 0.75rem;
}

.banner-item-wrap {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

@media (max-width: 541px) {
  .logo {
    width: 6.25rem;
    height: 1.6875rem;
  }

  .header-31cm-inner {
    padding: 0.625rem 0.9375rem;
  }

  .header-31cm {
    padding: 0;
  }

  .header-inner-nav,
  .header-page-nav,
  .header-main-menu-nav {
    display: none;
  }

  .header-nav-mobile {
    display: flex;
    gap: 0.625rem;
    align-items: center;
  }
}

.logo {
  content: url('/images/logo.webp');
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: #121212;
    color: #fff;
  }

  .header-31cm {
    background-color: #121212;
  }

  a {
    color: #fff;
  }

  .banner-31cm-mobile {
    background-color: #1e1e1e;
  }

  .banner-31cm-mobile p,
  .banner-31cm-mobile a {
    color: #fff;
  }

  .banner-31cm-mobile span {
    color: #ff4800;
  }

  .banner-item-button {
    background-color: #ff4800;
    color: #000;
  }

  .top-menu:hover .sub-menu,
  .top-menu:focus-within .sub-menu {
    background-color: #1e1e1e;
    border-top: 1px solid #333333;
  }

  .top-menu:hover,
  .top-menu:focus-within {
    border-bottom-color: #f5f5f5;
  }

  .top-menu-border {
    border-left: 1px solid #444444;
  }

  .drop-down-menu a {
    color: #f5f5f5;
  }

  .header-page-nav ul li {
    border-bottom-color: #f5f5f5;
  }

  svg path,
  svg rect,
  svg text {
    fill: #f5f5f5 !important;
    stroke: #121212 !important;
  }

  .logo {
    content: url('/images/logodark.webp');
  }

  .header-page-nav ul a:hover {
    border-bottom: 5px solid #f5f5f5;
  }

  @media (max-width: 1024px) {
    .header-page-nav ul a:hover {
      border-bottom: 3px solid #f5f5f5;
    }
  }
}
}
      </style>
      
      <!-- HTML 마크업 -->
      <aside class="banner-31cm-mobile" aria-label="31cm 모바일 배너">
      <a href="#" class="banner-item-wrap">
        <svg
          width="28px"
          height="28px"
          viewBox="0 0 28 28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="28"
            height="28"
            fill="black"
            rx="8"
            ry="8"
            stroke="white"
            stroke-width="0.3"
          />

          <text
            x="50%"
            y="55%"
            fill="white"
            font-size="16px"
            font-family="PretendardVariable"
            font-weight="400"
            text-anchor="middle"
            alignment-baseline="middle"
          >
            31
          </text>
        </svg>
        <p>31cm 앱 설치하고 <span>15%</span> 할인 받기</p>
      </a>
      <a href="#" class="banner-item-button">앱으로 보기</a>
    </aside>
    <header class="header-31cm">
      <h1 class="sr-only">쇼핑몰 31cm</h1>
      <div class="header-31cm-inner">
        <a href="/src/pages/MainPage.html">
          <img
            src="/images/logo.webp"
            alt="31cm 쇼핑몰 메인으로 이동"
            class="logo"
            width="90"
            height="25"
          />
        </a>
        <nav class="header-nav-mobile" aria-label="모바일 헤더 네비게이션">
          <a href="/src/pages/LoginPage.html" aria-label="장바구니">
            <svg
              width="30"
              height="25"
              viewBox="0 0 14 17"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7.01953 0.75C6.02496 0.75 5.07114 1.14508 4.36788 1.84835C3.84409 2.37214 3.49126 3.03492 3.34528 3.75H1.17103C0.664931 3.75 0.269531 4.15819 0.269531 4.65V15.6091L0.269749 15.6182C0.275426 15.8518 0.371344 16.0741 0.537379 16.2385C0.703406 16.4029 0.926651 16.4966 1.16028 16.4999L1.16565 16.5H12.868C13.3741 16.5 13.7695 16.0918 13.7695 15.6V10.875H7.01953V9.375H13.7695V4.65C13.7695 4.165 13.3727 3.75 12.868 3.75H10.6938C10.5478 3.03492 10.195 2.37214 9.67116 1.84835C8.96796 1.14508 8.01411 0.75 7.01953 0.75ZM8.61051 2.90901C8.85006 3.14856 9.03006 3.43657 9.14083 3.75H4.89821C5.00903 3.43657 5.18898 3.14856 5.42854 2.90901C5.85051 2.48705 6.42283 2.25 7.01953 2.25C7.61623 2.25 8.18856 2.48705 8.61051 2.90901Z"
                fill="none"
                stroke="black"
                stroke-width="1"
              />
            </svg>
          </a>
          <a href="#" aria-label="검색">
            <svg
              width="30"
              height="25"
              viewBox="0 0 35 35"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M15.983 4.25001C9.50287 4.25001 4.24967 9.50321 4.24967 15.9833C4.24967 22.4634 9.50287 27.7167 15.983 27.7167C19.2163 27.7167 22.141 26.4113 24.2651 24.2946C26.3991 22.1681 27.7163 19.2313 27.7163 15.9833C27.7163 9.50321 22.4631 4.25001 15.983 4.25001ZM0.583008 15.9833C0.583008 7.47816 7.47783 0.583344 15.983 0.583344C24.4882 0.583344 31.383 7.47816 31.383 15.9833C31.383 19.5818 30.147 22.8941 28.0792 25.5154L34.8766 32.2842L32.2894 34.8824L25.483 28.1046C22.8668 30.1574 19.5668 31.3833 15.983 31.3833C7.47783 31.3833 0.583008 24.4885 0.583008 15.9833Z"
              />
            </svg>
          </a>
        </nav>
        <nav class="header-inner-nav" aria-label="헤더 네비게이션">
          <ul>
            <li>
              <a
                href="/src/pages/LoginPage.html"
                class="nav-item"
                aria-label="나의 페이지"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 14 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.76953 1.4375V0.6875H6.26953V1.4375V5.1875V5.9375H7.76953V5.1875V1.4375Z"
                    fill="black"
                  />
                  <path
                    d="M13.7695 15.3125H0.269531V7.9994C0.269531 7.47837 0.692524 7.0625 1.20703 7.0625H12.832C13.3498 7.0625 13.7695 7.4822 13.7695 8V15.3125Z"
                  />
                </svg>
                <span aria-hidden="true">MY PAGE</span>
              </a>
            </li>
            <li>
              <a
                href="/src/pages/LoginPage.html"
                class="nav-item item-heart"
                aria-label="나의 좋아요"
              >
                <svg
                  width="16"
                  height="14"
                  viewBox="0 0 16 14"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M8.01961 2.81258C7.41398 1.522 6.13633 0.625 4.64453 0.625C2.56052 0.625 0.894531 2.37622 0.894531 4.504C0.894531 5.34921 1.24055 6.11095 1.56535 6.64382C1.72976 6.91352 1.89394 7.13312 2.01751 7.2859C2.07943 7.3624 2.13151 7.42263 2.16883 7.46447C2.18749 7.4854 2.2025 7.50175 2.21323 7.5133L2.22604 7.52688L2.22991 7.531L2.23117 7.53227L8.01953 13.5405L13.8072 7.53295L13.8079 7.53227L13.8092 7.531L13.813 7.52695L13.8258 7.5133C13.8365 7.50175 13.8515 7.4854 13.8702 7.46447C13.9076 7.42263 13.9596 7.3624 14.0216 7.2859C14.1451 7.13312 14.3093 6.91352 14.4737 6.64382C14.7985 6.11095 15.1445 5.34921 15.1445 4.504C15.1445 2.37546 13.4785 0.625 11.3945 0.625C9.90286 0.625 8.62531 1.52223 8.01961 2.81258Z"
                  />
                </svg>
                <span aria-hidden="true">MY LIKE</span>
              </a>
            </li>
            <li>
              <a
                href="/src/pages/LoginPage.html"
                class="nav-item"
                aria-label="장바구니"
              >
                <svg
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.01953 0.75C6.02496 0.75 5.07114 1.14508 4.36788 1.84835C3.84409 2.37214 3.49126 3.03492 3.34528 3.75H1.17103C0.664931 3.75 0.269531 4.15819 0.269531 4.65V15.6091L0.269749 15.6182C0.275426 15.8518 0.371344 16.0741 0.537379 16.2385C0.703406 16.4029 0.926651 16.4966 1.16028 16.4999L1.16565 16.5H12.868C13.3741 16.5 13.7695 16.0918 13.7695 15.6V10.875H7.01953V9.375H13.7695V4.65C13.7695 4.165 13.3727 3.75 12.868 3.75H10.6938C10.5478 3.03492 10.195 2.37214 9.67116 1.84835C8.96796 1.14508 8.01411 0.75 7.01953 0.75ZM8.61051 2.90901C8.85006 3.14856 9.03006 3.43657 9.14083 3.75H4.89821C5.00903 3.43657 5.18898 3.14856 5.42854 2.90901C5.85051 2.48705 6.42283 2.25 7.01953 2.25C7.61623 2.25 8.18856 2.48705 8.61051 2.90901Z"
                  />
                </svg>
                <span aria-hidden="true">SHOPPING BAG</span>
              </a>
            </li>
            <li>
              <a
                href="/src/pages/LoginPage.html"
                class="nav-item"
                aria-label="로그인"
              >
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.01953 0.5C3.53425 0.5 1.51953 2.51472 1.51953 5V6.5H0.582031C0.271374 6.5 0.0195312 6.75185 0.0195312 7.0625V14.9375C0.0195312 15.2481 0.271374 15.5 0.582031 15.5H11.457C11.7677 15.5 12.0195 15.2481 12.0195 14.9375V7.0625C12.0195 6.75185 11.7677 6.5 11.457 6.5H10.5195V5C10.5195 2.51472 8.50481 0.5 6.01953 0.5ZM9.01953 6.5V5C9.01953 3.34314 7.67636 2 6.01953 2C4.36268 2 3.01953 3.34314 3.01953 5V6.5H9.01953ZM6.76953 9.125C6.76953 8.71078 6.43376 8.375 6.01953 8.375C5.60531 8.375 5.26953 8.71078 5.26953 9.125V10.625C5.26953 11.0392 5.60531 11.375 6.01953 11.375C6.43376 11.375 6.76953 11.0392 6.76953 10.625V9.125Z"
                  />
                </svg>
                <span aria-hidden="true">LOGIN</span>
              </a>
            </li>
            <li class="nav-hidden-item">
              <a href="#" class="nav-item" aria-label="검색">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M15.983 4.25001C9.50287 4.25001 4.24967 9.50321 4.24967 15.9833C4.24967 22.4634 9.50287 27.7167 15.983 27.7167C19.2163 27.7167 22.141 26.4113 24.2651 24.2946C26.3991 22.1681 27.7163 19.2313 27.7163 15.9833C27.7163 9.50321 22.4631 4.25001 15.983 4.25001ZM0.583008 15.9833C0.583008 7.47816 7.47783 0.583344 15.983 0.583344C24.4882 0.583344 31.383 7.47816 31.383 15.9833C31.383 19.5818 30.147 22.8941 28.0792 25.5154L34.8766 32.2842L32.2894 34.8824L25.483 28.1046C22.8668 30.1574 19.5668 31.3833 15.983 31.3833C7.47783 31.3833 0.583008 24.4885 0.583008 15.9833Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <nav class="header-page-nav" aria-label="페이지 메뉴">
        <ul>
          <li>
            <a href="/src/pages/SpecialOrder.html" class="current-page-so"  part="current-page-so"
              >Special-Order</a
            >
          </li>
          <li>
            <a href="/src/pages/ShowCase.html" class="current-page-sc"  part="current-page-sc"
              >Showcase</a
            >
          </li>
          <li><a href="/src/pages/PT.html" class="current-page-pt"  part="current-page-pt">PT</a></li>
          <li>
            <a href="/src/pages/Magazine.html" class="current-page-29"  part="current-page-29"
              >29Magazine</a
            >
          </li>
        </ul>
        <a href="#" aria-label="검색">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M15.983 4.25001C9.50287 4.25001 4.24967 9.50321 4.24967 15.9833C4.24967 22.4634 9.50287 27.7167 15.983 27.7167C19.2163 27.7167 22.141 26.4113 24.2651 24.2946C26.3991 22.1681 27.7163 19.2313 27.7163 15.9833C27.7163 9.50321 22.4631 4.25001 15.983 4.25001ZM0.583008 15.9833C0.583008 7.47816 7.47783 0.583344 15.983 0.583344C24.4882 0.583344 31.383 7.47816 31.383 15.9833C31.383 19.5818 30.147 22.8941 28.0792 25.5154L34.8766 32.2842L32.2894 34.8824L25.483 28.1046C22.8668 30.1574 19.5668 31.3833 15.983 31.3833C7.47783 31.3833 0.583008 24.4885 0.583008 15.9833Z"
            />
          </svg>
        </a>
      </nav>
      <nav class="header-main-menu-nav" aria-label="주 메뉴">
        <ul class="header-main-menu">
          <li class="top-menu">
            <a href="/src/pages/Best.html" class="main-menu current-page-best"  part="current-page-best"
              >BEST</a
            >
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">WOMEN</a>
            <div class="sub-menu">
              <ul>
                <li class="drop-down-menu size-up" aria-label="의류 전체보기">
                  <a href="#">의류</a>
                </li>
                <li class="drop-down-menu"><a href="#">상의</a></li>
                <li class="drop-down-menu"><a href="#">바지</a></li>
                <li class="drop-down-menu"><a href="#">원피스</a></li>
                <li class="drop-down-menu"><a href="#">스커트</a></li>
                <li class="drop-down-menu"><a href="#">점프수트</a></li>
                <li class="drop-down-menu"><a href="#">셋업</a></li>
                <li class="drop-down-menu"><a href="#">엑티브웨어</a></li>
                <li class="drop-down-menu"><a href="#">아우터</a></li>
                <li class="drop-down-menu"><a href="#">니트웨어</a></li>
                <li class="drop-down-menu"><a href="#">언더웨어</a></li>
                <li class="drop-down-menu"><a href="#">홈웨어</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu size-up" aria-label="가방 전체보기">
                  <a href="#">가방</a>
                </li>
                <li class="drop-down-menu"><a href="#">기타가방</a></li>
                <li class="drop-down-menu">
                  <a href="#">캐리어,여행가방</a>
                </li>
                <li class="drop-down-menu"><a href="#">보스틴백</a></li>
                <li class="drop-down-menu"><a href="#">웨이스트백</a></li>
                <li class="drop-down-menu"><a href="#">숄더백</a></li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">크로스백</a></li>
                <li class="drop-down-menu"><a href="#">토트백</a></li>
                <li class="drop-down-menu"><a href="#">에코,캔버스백</a></li>
                <li class="drop-down-menu"><a href="#">백팩</a></li>
                <li class="drop-down-menu"><a href="#">클러치</a></li>
                <li class="drop-down-menu"><a href="#">파우치</a></li>
                <li class="drop-down-menu"><a href="#">가방 액세서리</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu size-up" aria-label="신발 전체보기">
                  <a href="#">신발</a>
                </li>
                <li class="drop-down-menu"><a href="#">레이스업 슈즈</a></li>
                <li class="drop-down-menu"><a href="#">플렛 슈즈</a></li>
                <li class="drop-down-menu"><a href="#">기능화</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">로퍼</a></li>
                <li class="drop-down-menu"><a href="#">부츠</a></li>
                <li class="drop-down-menu"><a href="#">힐,펌프스</a></li>
                <li class="drop-down-menu"><a href="#">샌들</a></li>
                <li class="drop-down-menu"><a href="#">슬리퍼</a></li>
                <li class="drop-down-menu"><a href="#">스니커즈</a></li>
                <li class="drop-down-menu"><a href="#">신발 액세서리</a></li>
                <li class="drop-down-menu"><a href="#">뮬</a></li>
              </ul>
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="액세서리 전체보기"
                >
                  <a href="#">액세서리</a>
                </li>
                <li class="drop-down-menu"><a href="#">넥타이</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">주얼리</a></li>
                <li class="drop-down-menu"><a href="#">모자</a></li>
                <li class="drop-down-menu"><a href="#">시계</a></li>
                <li class="drop-down-menu">
                  <a href="#">지갑,카드케이스</a>
                </li>
                <li class="drop-down-menu"><a href="#">아이웨어</a></li>
                <li class="drop-down-menu"><a href="#">벨트</a></li>
                <li class="drop-down-menu"><a href="#">양말</a></li>
                <li class="drop-down-menu"><a href="#">스카프,카라</a></li>
                <li class="drop-down-menu"><a href="#">머플러</a></li>
                <li class="drop-down-menu"><a href="#">장갑</a></li>
                <li class="drop-down-menu"><a href="#">헤어 액세서리</a></li>
                <li class="drop-down-menu"><a href="#">기타 액세서리</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">MEN</a>
            <div class="sub-menu">
              <ul>
                <li class="drop-down-menu size-up" aria-label="의류 전체보기">
                  <a href="#">의류</a>
                </li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">언더웨어</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">아우터</a></li>
                <li class="drop-down-menu"><a href="#">상의</a></li>
                <li class="drop-down-menu"><a href="#">하의</a></li>
                <li class="drop-down-menu"><a href="#">셋업</a></li>
                <li class="drop-down-menu"><a href="#">홈웨어</a></li>
                <li class="drop-down-menu"><a href="#">이너웨어</a></li>
                <li class="drop-down-menu"><a href="#">니트웨어</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu size-up" aria-label="가방 전체보기">
                  <a href="#">가방</a>
                </li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu">
                  <a href="#">캐리어,여행가방</a>
                </li>
                <li class="drop-down-menu"><a href="#">보스턴백</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">크로스백</a></li>
                <li class="drop-down-menu"><a href="#">웨이스트백</a></li>
                <li class="drop-down-menu"><a href="#">토트백</a></li>
                <li class="drop-down-menu"><a href="#">백팩</a></li>
                <li class="drop-down-menu"><a href="#">숄더백</a></li>
                <li class="drop-down-menu"><a href="#">랩탑백</a></li>
                <li class="drop-down-menu"><a href="#">에코,캔버스백</a></li>
                <li class="drop-down-menu"><a href="#">클러치</a></li>
                <li class="drop-down-menu"><a href="#">파우치</a></li>
                <li class="drop-down-menu"><a href="#">기타 가방</a></li>
                <li class="drop-down-menu"><a href="#">가방 액세서리</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu size-up" aria-label="신발 전체보기">
                  <a href="#">신발</a>
                </li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">기능화</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">스니커즈</a></li>
                <li class="drop-down-menu"><a href="#">로퍼</a></li>
                <li class="drop-down-menu"><a href="#">구두</a></li>
                <li class="drop-down-menu"><a href="#">부츠</a></li>
                <li class="drop-down-menu"><a href="#">샌들</a></li>
                <li class="drop-down-menu"><a href="#">신발 액세서리</a></li>
                <li class="drop-down-menu"><a href="#">슬리퍼</a></li>
              </ul>
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="액세러리 전체보기"
                >
                  <a href="#">액세서리</a>
                </li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu">
                  <a href="#">지갑,카드케이스</a>
                </li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">모자</a></li>
                <li class="drop-down-menu"><a href="#">시계</a></li>
                <li class="drop-down-menu"><a href="#">아이웨어</a></li>
                <li class="drop-down-menu"><a href="#">넥타이</a></li>
                <li class="drop-down-menu"><a href="#">벨트</a></li>
                <li class="drop-down-menu"><a href="#">양말</a></li>
                <li class="drop-down-menu"><a href="#">스카프</a></li>
                <li class="drop-down-menu"><a href="#">머플러</a></li>
                <li class="drop-down-menu"><a href="#">장갑</a></li>
                <li class="drop-down-menu"><a href="#">쥬얼리</a></li>
                <li class="drop-down-menu"><a href="#">기타 액세서리</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">INTERIOR</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="가구,인테리어 전체보기"
                >
                  <a href="#">가구,인테리어</a>
                </li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">홈패브릭</a></li>
                <li class="drop-down-menu"><a href="#">가구</a></li>
                <li class="drop-down-menu"><a href="#">홈데코</a></li>
                <li class="drop-down-menu"><a href="#">침구</a></li>
                <li class="drop-down-menu"><a href="#">조명</a></li>
                <li class="drop-down-menu"><a href="#">아트,디자인</a></li>
                <li class="drop-down-menu"><a href="#">스테이셔너리</a></li>
                <li class="drop-down-menu"><a href="#">가드닝</a></li>
                <li class="drop-down-menu"><a href="#">책,음반</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu"><a href="#">선물하기</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">KITCHEN</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="주방,생활용품 전체보기"
                >
                  <a href="#">주방,생활</a>
                </li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">청소수납</a></li>
                <li class="drop-down-menu"><a href="#">냄비,팬,솥</a></li>
                <li class="drop-down-menu"><a href="#">조리도구</a></li>
                <li class="drop-down-menu"><a href="#">컵,잔,텀블러</a></li>
                <li class="drop-down-menu"><a href="#">그릇,커트터리</a></li>
                <li class="drop-down-menu"><a href="#">테이블데코</a></li>
                <li class="drop-down-menu"><a href="#">주방잡화</a></li>
                <li class="drop-down-menu"><a href="#">주방수납,정리</a></li>
                <li class="drop-down-menu"><a href="#">수납,정리</a></li>
                <li class="drop-down-menu"><a href="#">생필품</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu"><a href="#">욕실</a></li>
                <li class="drop-down-menu"><a href="#">홈프레그린스</a></li>
                <li class="drop-down-menu"><a href="#">기타생활</a></li>
                <li class="drop-down-menu"><a href="#">반려동물</a></li>
                <li class="drop-down-menu"><a href="#">선물하기</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">ELECTRONICS</a>
            <div class="sub-menu">
              <ul>
                <li class="drop-down-menu size-up" aria-label="가전 전체보기">
                  <a href="#">가전</a>
                </li>
                <li class="drop-down-menu"><a href="#">영상가전</a></li>
                <li class="drop-down-menu"><a href="#">주방가전</a></li>
                <li class="drop-down-menu"><a href="#">세탁기,건조기</a></li>
                <li class="drop-down-menu"><a href="#">청소기</a></li>
                <li class="drop-down-menu"><a href="#">생활가전</a></li>
                <li class="drop-down-menu"><a href="#">계절가전</a></li>
                <li class="drop-down-menu"><a href="#">이미용가전</a></li>
                <li class="drop-down-menu"><a href="#">건강가전</a></li>
                <li class="drop-down-menu"><a href="#">리퍼브</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">DIGITAL</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="컴퓨터,디지털용품 전체보기"
                >
                  <a href="#">컴퓨터,디지털</a>
                </li>
                <li class="drop-down-menu"><a href="#">음향기기</a></li>
                <li class="drop-down-menu">
                  <a href="#">모바일,웨어러블</a>
                </li>
                <li class="drop-down-menu">
                  <a href="#">모바일 엑세서리</a>
                </li>
                <li class="drop-down-menu"><a href="#">PC,노트북</a></li>
                <li class="drop-down-menu"><a href="#">게임</a></li>
                <li class="drop-down-menu"><a href="#">사진</a></li>
                <li class="drop-down-menu">
                  <a href="#">자동차용품,장난감</a>
                </li>
                <li class="drop-down-menu"><a href="#">스마트모빌리티</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">BEAUTY</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="뷰티용품 전체보기"
                >
                  <a href="#">뷰티</a>
                </li>
                <li class="drop-down-menu"><a href="#">선물세트</a></li>
                <li class="drop-down-menu"><a href="#">스킨케어</a></li>
                <li class="drop-down-menu"><a href="#">해외브랜드</a></li>
                <li class="drop-down-menu"><a href="#">EXCLUSIVE</a></li>
                <li class="drop-down-menu"><a href="#">메이크업</a></li>
                <li class="drop-down-menu"><a href="#">헤어케어</a></li>
                <li class="drop-down-menu"><a href="#">바디케어</a></li>
                <li class="drop-down-menu">
                  <a href="#">네일,디자인타투</a>
                </li>
                <li class="drop-down-menu"><a href="#">프레그런스</a></li>
                <li class="drop-down-menu"><a href="#">여성용품</a></li>
                <li class="drop-down-menu"><a href="#">뷰티소품/기기</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu"><a href="#">맨즈뷰티</a></li>
                <li class="drop-down-menu"><a href="#">이너뷰티</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">FOOD</a>
            <div class="sub-menu">
              <ul>
                <li class="drop-down-menu size-up" aria-label="푸드 전체보기">
                  <a href="#">푸드</a>
                </li>
                <li class="drop-down-menu"><a href="#">선물세트</a></li>
                <li class="drop-down-menu"><a href="#">잼,꿀,오일</a></li>
                <li class="drop-down-menu"><a href="#">음료</a></li>
                <li class="drop-down-menu"><a href="#">가공식품</a></li>
                <li class="drop-down-menu"><a href="#">신선,냉장</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">LEISURE</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="레저용품 전체보기"
                >
                  <a href="#">레저</a>
                </li>
                <li class="drop-down-menu"><a href="#">캠핑</a></li>
                <li class="drop-down-menu"><a href="#">등산,하이킹</a></li>
                <li class="drop-down-menu"><a href="#">골프</a></li>
                <li class="drop-down-menu"><a href="#">수영</a></li>
                <li class="drop-down-menu"><a href="#">러닝</a></li>
                <li class="drop-down-menu"><a href="#">실내운동</a></li>
                <li class="drop-down-menu"><a href="#">여행</a></li>
                <li class="drop-down-menu"><a href="#">테니스</a></li>
                <li class="drop-down-menu"><a href="#">자전거</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">KIDS</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="유아,아동품 전체보기"
                >
                  <a href="#">유아,아동</a>
                </li>
                <li class="drop-down-menu"><a href="#">베이비</a></li>
                <li class="drop-down-menu"><a href="#">유아식,분유</a></li>
                <li class="drop-down-menu"><a href="#">외출 용품</a></li>
                <li class="drop-down-menu">
                  <a href="#">임산부,태교용품</a>
                </li>
                <li class="drop-down-menu"><a href="#">유아 용품</a></li>
                <li class="drop-down-menu"><a href="#">수유 용품</a></li>
                <li class="drop-down-menu"><a href="#">남아 의류</a></li>
                <li class="drop-down-menu"><a href="#">여아 의류</a></li>
                <li class="drop-down-menu"><a href="#">모자</a></li>
                <li class="drop-down-menu"><a href="#">가방</a></li>
                <li class="drop-down-menu"><a href="#">잡화</a></li>
              </ul>
              <ul>
                <li class="drop-down-menu"><a href="#">신발</a></li>
                <li class="drop-down-menu"><a href="#">유아동 식기</a></li>
                <li class="drop-down-menu"><a href="#">유아동 침구</a></li>
                <li class="drop-down-menu"><a href="#">유아동 가구</a></li>
                <li class="drop-down-menu"><a href="#">토이,교육</a></li>
                <li class="drop-down-menu"><a href="#">선물하기</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu">
            <a href="#" class="main-menu">CULTURE</a>
            <div class="sub-menu">
              <ul>
                <li class="drop-down-menu size-up" aria-label="컬쳐 전체보기">
                  <a href="#">컬쳐</a>
                </li>
                <li class="drop-down-menu"><a href="#">티켓</a></li>
              </ul>
            </div>
          </li>
          <li class="top-menu-slim">
            <a class="top-menu-border" href="#">Event</a>
          </li>
          <li class="top-menu-slim">
            <a href="#">Lookbook</a>
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define('header-component', HeaderComponent);
