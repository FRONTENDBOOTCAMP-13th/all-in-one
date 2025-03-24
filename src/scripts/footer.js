// footer-component.js
class FooterComponent extends HTMLElement {
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
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
            Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

   
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .footer-container {
          display: block;
          padding: 0 50px;
        }
        
        /*고객센터, 소셜 아이콘 있는 부분*/
        .top-section {
          display: flex;
          justify-content: space-between;
          padding: 20px 0;
          border-bottom: 1px solid #eee;
        }
        
        /*고객센터*/
        .top-section-inform {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .customer-service {
          line-height: 150%;
          font-size: 15px;
          font-weight: 700;
        }
        
        .service-hours {
          color: #a0a0a0;
          font-weight: 500;
          font-size: 12px;
        }
        
        .button-group {
          display: flex;
          gap: 10px;
        }
        
        .button {
          box-sizing: border-box;
          width: 94px;
          height: 36px;
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background-color: #000;
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          white-space: nowrap;
        }
        
        .button i {
          margin-left: auto;
          color: #999;
        }
        
        /*소셜 아이콘*/
        .top-section-social {
          display: flex;
          margin-top: auto;
        }
        
        .social-icons {
          display: flex;
          gap: 10px;
        }
        
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #333;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        /*notice, about us, my order, my account, help*/
        .main-footer {
          display: flex;
          justify-content: space-between;
          padding: 30px 0;
          border-bottom: 1px solid #eee;
        }
        
        .footer-column {
          display: block;
        }
        
        .footer-column.notice {
          display: block;
          width: 30%;
        }
        
        .footer-title {
          font-weight: 600;
          margin-bottom: 15px;
          font-size: 14px;
        }
        
        .footer-links,
        .notice-content ul {
          list-style: none;
        }
        
        .notice-content {
          display: block;
          padding: 0 20px 0 0;
        }
        
        .footer-links li,
        .notice-content ul li {
          margin-bottom: 8px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .footer-links li a,
        .notice-content ul li a {
          color: #666;
          text-decoration: none;
          font-size: 13px;
        }
        
        .footer-links li a:hover,
        .notice-content ul li a:hover {
          text-decoration: underline;
        }
        
        /*회사 정보 */
        .bottom-footer {
          display: block;
          padding: 0 200px 50px 0;
          flex-wrap: wrap;
        }
        
        /*개인정보처리방침 행*/
        .bottom-nav {
          display: block;
          margin: 12px 0 4px;
        }
        
        .bottom-nav a {
          display: inline-block;
          color: #333;
          text-decoration: none;
          font-size: 12px;
          font-weight: bolder;
          position: relative;
          margin-right: 15px;
        }
        
        .bottom-nav a:not(:last-child):after {
          content: '';
          position: absolute;
          right: -8px;
          top: 50%;
          transform: translateY(-50%);
          height: 12px;
          width: 1px;
          background-color: #ddd;
        }
        
        /*회사정보 하위요소*/
        .company-info {
          display: block;
          color: #888;
          font-size: 11px;
          line-height: 24px;
        }
        
        .company-info p {
          margin-bottom: 5px;
        }
        
        .company-info span {
          display: inline-block;
          margin-right: 10px;
        }
        
        /*사업자 정보확인 박스*/
        .business-info {
          display: inline-block;
          margin-left: 8px;
          padding: 0 7px;
          color: #fff;
          background-color: #a4a4a4;
          line-height: 20px;
          text-decoration: none;
          cursor: pointer;
        }
        
        .disclaimer {
          padding: 4px 0;
          font-size: 11px;
          color: #888;
        }

        /* 모바일 반응형 (541px 이/* 모바일 반응형 (541px 이하) */
       @media screen and (max-width: 541px) {
        .footer-container {
          padding: 0 15px;
          background-color: #121212;
          color: #e0e0e0;
        }

        /* 이미지에 보이는 부분만 남기고 나머지 감추기 */
        .main-footer {
          display: none;
        }

        /* 고객센터 영역 - 이미지 1에 맞게 조정 */
        .top-section {
          flex-direction: column;
          gap: 20px;
          padding: 15px 0;
          border-bottom: none;
        }

        .top-section-inform .customer-service {
          color: #ffffff;
        }

        .top-section-inform .service-hours {
          color: #a0a0a0;
        }

        .top-section-social {
          margin-top: 20px;
        }

        .top-section-inform .button-group {
          display: flex;
          width: 100%;
          gap: 10px;
        }

        .top-section-inform .button {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 12px;
          background-color: #333333;
          color: #ffffff;
          border: 1px solid #444444;
        }

        .top-section-inform .button i {
          color: #bbbbbb;
        }

        /* 소셜 아이콘 다크모드 적용 */
        .social-icon {
          background-color: #333333;
          border: 1px solid #444444;
        }

        /* 회사 정보 영역 - 이미지 2에 맞게 조정 */
        .bottom-footer {
          padding: 20px 0;
        }

        /* 개인정보처리방침 행 스타일 조정 */
        .bottom-nav {
          display: flex;
          overflow-x: auto;
          white-space: nowrap;
          margin-bottom: 15px;
          padding-bottom: 8px;
          gap: 0;
          border-bottom: 1px solid #333333;
        }

        .bottom-nav a {
          font-size: 12px;
          font-weight: 500;
          margin-right: 15px;
          color: #cccccc;
        }

        .bottom-nav a:not(:last-child):after {
          right: -8px;
          background-color: #444444;
        }

        /* 회사 정보 */
        .company-info {
          display: none;
        }

        /* 사업자정보확인 박스 다크모드 적용 */
        .business-info {
          display: block;
          margin: 10px 0;
          padding: 8px 12px;
          color: #ffffff;
          background-color: #444444;
          line-height: 20px;
          text-align: center;
          border-radius: 4px;
        }

        /* 고지사항 */
        .disclaimer {
          display: none;
        }

        /* 토글 버튼 다크모드 적용 */
        .company-info-toggle-btn {
          background-color: #333333;
          color: #e0e0e0;
          border: 1px solid #444444;
        }

        .company-info.show {
          background-color: #222222;
          border: 1px solid #444444;
          color: #bbbbbb;
        }
      }

      </style>
      
      <div class="footer-container">
        <div class="top-section">
          <section class="top-section-inform">
            <div class="customer-service">고객 센터 1660-2929</div>
            <div class="service-hours">
              운영시간 : 평일 09:00 ~ 18:00 (점심시간 12:00 ~ 13:00 제외)
            </div>
            <div class="button-group">
              <a href="#" class="button">FAQ <i class="mini-con">></i></a>
              <a href="#" class="button">1:1 문의 <i class="mini-con">></i></a>
            </div>
          </section>
          <section class="top-section-social">
            <div class="social-icons">
              <a href="#" class="social-icon">
                <slot name="instagram-icon"></slot>
              </a>
              <a href="#" class="social-icon">
                <slot name="youtube-icon"></slot>
              </a>
              <a href="#" class="social-icon">
                <slot name="apple-icon"></slot>
              </a>
              <a href="#" class="social-icon">
                <slot name="google-play-icon"></slot>
              </a>
            </div>
          </section>
        </div>

        <div class="main-footer">
          <div class="footer-column notice">
            <h3 class="footer-title">NOTICE</h3>
            <div class="notice-content">
              <ul>
                <li>
                  <a href="#">[공지] 무통장 입금 이용 가능 은행 제외 안내</a>
                </li>
                <li>
                  <a href="#">[공지] 29CM 안전 거래 정책 위반 행위에 대한 조치 및 제재 사항 안내</a>
                </li>
                <li>
                  <a href="#">[공지] 2025 설 연휴 고객센터 휴무 및 배송/반품 일정 안내</a>
                </li>
                <li>
                  <a href="#">[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 10월 23일)</a>
                </li>
                <li>
                  <a href="#">[공지] 개인정보 처리방침 개정 예정 안내 (시행일: 2024년 10월 10일)</a>
                </li>
              </ul>
            </div>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">ABOUT US</h3>
            <ul class="footer-links">
              <li><a href="#">29CM 소개</a></li>
              <li><a href="#">인재채용</a></li>
              <li><a href="#">실시 할인 혜택</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">MY ORDER</h3>
            <ul class="footer-links">
              <li><a href="#">주문배송</a></li>
              <li><a href="#">취소/교환/반품 내역</a></li>
              <li><a href="#">상품리뷰 내역</a></li>
              <li><a href="#">증빙서류발급</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">MY ACCOUNT</h3>
            <ul class="footer-links">
              <li><a href="#">회원정보수정</a></li>
              <li><a href="#">회원등급</a></li>
              <li><a href="#">마일리지현황</a></li>
              <li><a href="#">쿠폰</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3 class="footer-title">HELP</h3>
            <ul class="footer-links">
              <li><a href="#">1:1 문의</a></li>
              <li><a href="#">마케팅 제휴, 입점, 대량 주문 문의</a></li>
              <li><a href="#">상품 Q&A내역</a></li>
              <li><a href="#">공지사항</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">고객의 소리</a></li>
            </ul>
          </div>
        </div>

        <div class="bottom-footer">
          <div class="bottom-nav">
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
            <a href="#">문제해결기준</a>
            <a href="#">안전거래센터</a>
            <a href="#">결제대행 위탁사</a>
          </div>

          <div class="company-info">
            <p>
              <span>상호명 : (주)무신사</span>
              <span>사업장소재지 : 서울특별시 성동구 아차산로 13길 11, 1층 (성수동2가, 무신사캠퍼스 본1)</span>
              <span>팩스 : 070-8622-7737</span>
              <span>사업자등록번호 : 211-88-79575</span>
            </p>
            <p>
              <span>통신판매업신고 : 2022-서울성동-01952</span>
              <span class="business-info">사업자정보확인</span>
            </p>
            <p>
              <span>전화번호 : 1660-2929</span>
              <span>이메일 : customer@29cm.co.kr</span>
              <span>대표이사 : 조만호, 박문수</span>
              <span>개인정보 보호책임자 : 이재환</span>
              <span>호스팅서비스 : (주)무신사</span>
            </p>
          </div>

          <div class="disclaimer">
            일부 상품의 경우 29CM는 통신판매의 당사자가 아닌 통신판매중개자로서
            상품, 상품정보, 거래에 대한 책임이 제한될 수 있으므로, 각 상품
            페이지에서 구체적인 내용을 확인하시기 바랍니다.
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('footer-component', FooterComponent);
