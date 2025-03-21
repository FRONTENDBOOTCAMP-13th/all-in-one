// 헤더 웹 컴포넌트 정의
class ThirtyoneHeader extends HTMLElement {
  constructor() {
    super();

    // Shadow DOM 생성
    this.attachShadow({ mode: 'open' });

    // 현재 페이지 속성 가져오기
    this.currentPage = this.getAttribute('current-page') || '';

    // 컴포넌트 초기화
    this.render();

    // 이벤트 리스너 등록
    this.setupEventListeners();
  }

  // 컴포넌트의 관찰 속성 정의
  static get observedAttributes() {
    return ['current-page'];
  }

  // 속성 변경 시 호출되는 메서드
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'current-page' && oldValue !== newValue) {
      this.currentPage = newValue;
      this.updateCurrentPage();
    }
  }

  // 컴포넌트가 DOM에 연결될 때 호출
  connectedCallback() {
    // 접근성을 위한 ARIA 속성 추가
    this.setAttribute('role', 'banner');
    this.updateCurrentPage();
  }

  // 현재 페이지 표시 업데이트
  updateCurrentPage() {
    const pageLinks = this.shadowRoot.querySelectorAll('.header-page-nav a');

    pageLinks.forEach((link) => {
      // 모든 링크에서 현재 페이지 표시 스타일 제거
      link.classList.remove(
        'current-page-so',
        'current-page-sc',
        'current-page-pt',
        'current-page-29'
      );

      // 현재 페이지에 해당하는 링크에 스타일 추가
      if (
        this.currentPage === 'special-order' &&
        link.classList.contains('current-page-so')
      ) {
        link.classList.add('current-page-so');
      } else if (
        this.currentPage === 'showcase' &&
        link.classList.contains('current-page-sc')
      ) {
        link.classList.add('current-page-sc');
      } else if (
        this.currentPage === 'pt' &&
        link.classList.contains('current-page-pt')
      ) {
        link.classList.add('current-page-pt');
      } else if (
        this.currentPage === '29magazine' &&
        link.classList.contains('current-page-29')
      ) {
        link.classList.add('current-page-29');
      }
    });
  }

  // 이벤트 리스너 설정
  setupEventListeners() {
    // 컴포넌트가 렌더링된 후 이벤트 리스너 추가
    setTimeout(() => {
      // 모바일 메뉴 관련 이벤트 리스너 등록
      const menuItems = this.shadowRoot.querySelectorAll('.top-menu');

      menuItems.forEach((item) => {
        // 키보드 접근성을 위한 키보드 이벤트 리스너
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            const subMenu = item.querySelector('.sub-menu');
            if (subMenu) {
              const isVisible = subMenu.style.display === 'block';
              subMenu.style.display = isVisible ? 'none' : 'block';
            }
          }
        });
      });
    }, 0);
  }

  // 컴포넌트 렌더링
  render() {
    // 스타일 및 템플릿 생성
    this.shadowRoot.innerHTML = `
      <style>
        /* 기본 스타일 */
       :host {
  display: block;
  position: sticky;
  top: 0;
  z-index: 100;
  background: #fff;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

        /* 접근성 관련 클래스 */
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border-width: 0;
        }

        ul, li {
          list-style-type: none;
          margin: 0;
          padding: 0;
        }

        a {
          text-decoration: none;
          color: black;
        }

        a:focus {
          outline: 2px solid #4a90e2;
        }

        /* 헤더 스타일 - position:sticky 수정 */
      .header-31cm {
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0; /* sticky 작동을 위해 필요 */
        gap: 30px;
        padding-inline: 50px;
        padding-top: 30px;
        z-index: 100; /* 다른 요소 위에 표시되도록 z-index 증가 */
        background: #fff;
      }
        .header-31cm-inner {
          display: flex;
          justify-content: space-between;
        }

        /* 로고 스타일 */
        .logo {
          width: 90px;
          height: 25px;
        }

        /* 헤더 내비게이션 스타일 */
        .header-inner-nav ul {
          display: flex;
          column-gap: 16px;
        }

        .item-heart {
          margin-top: 2px;
        }

        .nav-item {
          display: flex;
          font-size: 10px;
          align-items: center;
          column-gap: 4px;
        }

        /* 모바일 네비게이션 */
        .header-nav-mobile {
          display: none;
        }

        .nav-hidden-item {
          display: none;
        }

        /* 페이지 메뉴 스타일 */
         .header-page-nav {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }

         /* 폰트 크기 조정 */
     .header-page-nav ul {
        display: flex;
        column-gap: 20px;
        font-size: 40px !important; /* !important로 강제 적용 */
        font-weight: 900;
        flex-flow: wrap;
        list-style: none;
        padding: 0;
        margin: 0;
      }

       .header-page-nav ul li a {
        font-size: 40px !important; /* 직접 a 태그에도 폰트 사이즈 적용 */
        font-weight: 900;
        text-decoration: none;
        color: black;
      }

        .header-page-nav a:hover {
          border-bottom: 5px solid black;
        }

       /* 현재 페이지 표시 스타일 */
      .current-page-so, .current-page-sc, .current-page-pt, .current-page-29 {
        border-bottom: 5px solid black;
      }

       
      .header-main-menu {
        display: flex;
        column-gap: 20px;
        list-style-type: none;
        font-weight: 600;
        padding-bottom: 30px;
        font-size: 17px !important; /* !important로 우선순위 높이기 */
        flex-wrap: wrap;
      }
      

        .top-menu:hover {
          border-bottom: 3px solid black;
        }

        .top-menu:focus-within {
          border-bottom: 3px solid black;
        }

        /* 서브메뉴 스타일 */
        .sub-menu {
          display: none;
          overflow: hidden;
          padding: 1rem;
          width: 100vw;
          position: absolute;
          left: 0;
          margin-top: 3px;
        }

        .top-menu:hover .sub-menu {
          display: block;
          border-top: 1px solid lightgray;
          background: white;
        }

        .top-menu:focus-within .sub-menu {
          display: block;
          border-top: 1px solid lightgray;
          background: white;
        }

        .sub-menu > ul {
          float: left;
        }

        .sub-menu > ul:not(:last-child) {
          margin-right: 1rem;
        }

         .drop-down-menu {
        margin-right: 74px;
        font-weight: normal;
        font-size: 13px !important; /* !important로 우선순위 높이기 */
        padding-block: 5px;
        padding-inline: 32px;
      }

        .drop-down-menu.size-up {
          font-size: inherit;
          font-weight: inherit;
        }

        /* 얇고 기울린 폰트의 메뉴 */
        .top-menu-slim {
          font-weight: 200;
          font-style: italic;
        }

        .top-menu-border {
          border-left: 1px solid #c4c4c4;
          padding-top: 4px;
          padding-left: 20px;
        }

        /* 반응형 스타일 */
        @media (max-width: 1024px) {
          .header-31cm {
            gap: 10px;
            padding-top: 20px;
          }

          .logo {
            width:.logo {
            width: 65px;
            height: 20px;
          }

          .header-inner-nav svg {
            width: 15px;
            height: 15px;
          }

          .header-inner-nav .nav-hidden-item {
            display: inline-block;
            margin-top: 1px;
          }

          .header-inner-nav span {
            display: none;
          }

          .header-page-nav svg {
            width: 30px;
            height: 30px;
            display: none;
          }

         .header-page-nav ul {
          font-size: 25px !important;
          column-gap: 13px;
        }

        .header-page-nav ul li a {
          font-size: 25px !important;
        }

          .header-page-nav a:hover {
            border-bottom: 3px solid black;
          }

          .header-main-menu {
            column-gap: 10px;
            font-size: 12px;
          }

          .top-menu:hover {
            border-bottom: 2px solid black;
          }

          .drop-down-menu {
            font-size: 10px;
          }

          .top-menu-border {
            padding-left: 10px;
            padding-top: 2px;
          }
        }

        /* 모바일 스타일 */
        @media (max-width: 541px) {
          .logo {
            width: 100px;
            height: 27px;
          }

          .header-31cm {
            padding: 10px;
          }

          .header-inner-nav,
          .header-page-nav,
          .header-main-menu-nav {
            display: none;
          }

          .header-nav-mobile {
            display: flex;
            gap: 10px;
            align-items: center;
          }
        }

        /* 접근성 강화를 위한 추가 스타일 */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      </style>
      
    <header class="header-31cm">
      <div class="header-31cm-inner">
        <h1 class="sr-only">쇼핑몰 31cm</h1>
        <a href="#">
          <img
            src="/src/assets/images/header-images/31cm_logo_high_res.webp"
            alt="31cm 쇼핑몰 메인으로 이동"
            class="logo"
            width="90"
            height="25"
          />
        </a>
        <nav class="header-nav-mobile" aria-label="모바일 헤더 네비게이션">
          <a href="#" aria-label="장바구니">
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
              <a href="#" class="nav-item" aria-label="나의 페이지">
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
              <a href="#" class="nav-item item-heart" aria-label="나의 좋아요">
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
              <a href="#" class="nav-item" aria-label="장바구니">
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
              <a href="#" class="nav-item" aria-label="로그인">
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
          <li><a href="#" class="current-page-so">Special-Order</a></li>
          <li><a href="#" class="current-page-sc">Showcase</a></li>
          <li><a href="#" class="current-page-pt">PT</a></li>
          <li><a href="#" class="current-page-29">29Magazine</a></li>
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
            <a href="#" class="main-menu">BEST</a>
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
                <li class="drop-down-menu"><a href="#">캐리어,여행가방</a></li>
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
                <li class="drop-down-menu"><a href="#">지갑,카드케이스</a></li>
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
            <a href="/" class="main-menu">MEN</a>
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
                <li class="drop-down-menu"><a href="#">캐리어,여행가방</a></li>
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
                <li class="drop-down-menu"><a href="#">지갑,카드케이스</a></li>
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
            <a href="/" class="main-menu">INTERIOR</a>
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
            <a href="/" class="main-menu">KITCHEN</a>
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
            <a href="/" class="main-menu">ELECTRONICS</a>
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
            <a href="/" class="main-menu">DIGITAL</a>
            <div class="sub-menu">
              <ul>
                <li
                  class="drop-down-menu size-up"
                  aria-label="컴퓨터,디지털용품 전체보기"
                >
                  <a href="#">컴퓨터,디지털</a>
                </li>
                <li class="drop-down-menu"><a href="#">음향기기</a></li>
                <li class="drop-down-menu"><a href="#">모바일,웨어러블</a></li>
                <li class="drop-down-menu"><a href="#">모바일 엑세서리</a></li>
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
            <a href="/" class="main-menu">BEAUTY</a>
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
                <li class="drop-down-menu"><a href="#">네일,디자인타투</a></li>
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
            <a href="/" class="main-menu">FOOD</a>
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
            <a href="/" class="main-menu">LEISURE</a>
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
            <a href="/" class="main-menu">KIDS</a>
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
                <li class="drop-down-menu"><a href="#">임산부,태교용품</a></li>
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
            <a href="/" class="main-menu">CULTURE</a>
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
            <a href="">Lookbook</a>
          </li>
        </ul>
      </nav>
    </header>
  `;
  }
}

customElements.define('header-component', ThirtyoneHeader);
