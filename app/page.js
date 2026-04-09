import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section id="hero">
        <div className="inner hero-content">
          <div className="hero-badge fade-up">
            <span className="hero-badge-dot" />
            YOUR_TAGLINE
          </div>
          <div className="hero-name fade-up d1">YOUR_BRAND</div>
          <div className="hero-role fade-up d2">YOUR_SLOGAN</div>
          <h1 className="hero-headline fade-up d3">
            신뢰할 수 있는,<br />
            <em>최고의 선택.</em>
          </h1>
          <p className="hero-sub fade-up d4">
            고객의 니즈를 정확히 파악하고, 최적의 솔루션을 제공합니다.<br />
            처음부터 끝까지 함께하는 파트너가 되겠습니다.
          </p>
          <div className="hero-cta fade-up d5">
            <a href="#projects" className="btn btn-primary">
              <i className="fa-solid fa-briefcase" /> 레퍼런스 보기
            </a>
            <a href="#contact" className="btn btn-outline">
              문의하기 <i className="fa-solid fa-arrow-right" />
            </a>
          </div>
        </div>
        <div className="scroll-hint">
          <span>SCROLL</span>
          <i className="fa-solid fa-chevron-down" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about">
        <div className="inner">
          <div className="fade-up">
            <span className="sec-label">About</span>
            <h2 className="sec-title">소개</h2>
            <div className="sec-divider" />
          </div>
          <div className="about-grid">
            <div className="about-text fade-up d1">
              <p>
                <strong>YOUR_BRAND</strong>는 고객의 성공을 최우선으로 생각합니다.
                업계 경험을 바탕으로 실질적인 가치를 제공하며,
                지속적인 신뢰 관계를 구축합니다.
              </p>
              <p>
                단순한 서비스 제공을 넘어, 고객과 함께 성장하는 파트너십을 지향합니다.
                문제의 본질을 파악하고 맞춤형 솔루션을 통해 기대 이상의 결과를 만들어냅니다.
              </p>
              <p>
                품질과 신뢰를 바탕으로 오랫동안 기억되는 <strong>브랜드</strong>가 되는 것이
                저희의 목표입니다.
              </p>
            </div>
            <div className="strength-cards">
              <div className="card fade-up d2">
                <div className="card-icon">🎯</div>
                <div className="card-title">전문성</div>
                <p className="card-desc">깊이 있는 전문 지식과 풍부한 경험으로 고객의 문제를 정확하게 해결합니다.</p>
              </div>
              <div className="card fade-up d3">
                <div className="card-icon">🤝</div>
                <div className="card-title">신뢰</div>
                <p className="card-desc">투명한 소통과 약속을 지키는 자세로 오래가는 파트너십을 만들어갑니다.</p>
              </div>
              <div className="card fade-up d4">
                <div className="card-icon">🚀</div>
                <div className="card-title">성과</div>
                <p className="card-desc">고객의 목표 달성을 위해 최선을 다하며, 측정 가능한 결과로 증명합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="skills">
        <div className="inner">
          <div className="fade-up">
            <span className="sec-label">Services</span>
            <p className="sec-sub">고객의 필요에 맞춘 서비스를 제공합니다</p>
            <h2 className="sec-title">서비스</h2>
            <div className="sec-divider" />
          </div>
          <div className="skill-rows">
            <div className="skill-row fade-up d1">
              <div className="skill-cat">핵심 서비스</div>
              <div className="pills">
                <span className="pill pill-green">SERVICE_A</span>
                <span className="pill pill-green">SERVICE_B</span>
                <span className="pill pill-green">SERVICE_C</span>
              </div>
            </div>
            <div className="skill-row fade-up d2">
              <div className="skill-cat">부가 서비스</div>
              <div className="pills">
                <span className="pill pill-gray">SERVICE_D</span>
                <span className="pill pill-gray">SERVICE_E</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REFERENCES ── */}
      <section id="projects">
        <div className="inner">
          <div className="fade-up">
            <span className="sec-label">References</span>
            <p className="sec-sub">실제 진행한 프로젝트와 결과물입니다</p>
            <h2 className="sec-title">레퍼런스</h2>
            <div className="sec-divider" />
          </div>
          <div className="proj-grid">
            <div className="proj-card fade-up d1">
              <div className="proj-banner b1">📌</div>
              <div className="proj-body">
                <div className="proj-name">PROJECT_NAME_A</div>
                <p className="proj-desc">
                  고객의 요구사항을 분석하고 최적의 방향으로 프로젝트를 완성했습니다.
                  기획 단계부터 최종 납품까지 긴밀한 소통을 통해 만족스러운 결과를 도출했습니다.
                </p>
                <div className="proj-tags">
                  <span className="tag">TAG_A</span>
                  <span className="tag">TAG_B</span>
                  <span className="tag">TAG_C</span>
                </div>
              </div>
            </div>
            <div className="proj-card fade-up d2">
              <div className="proj-banner b2">📌</div>
              <div className="proj-body">
                <div className="proj-name">PROJECT_NAME_B</div>
                <p className="proj-desc">
                  고객사의 특성에 맞는 맞춤형 솔루션으로 기대 이상의 성과를 이끌어냈습니다.
                  세밀한 요구사항 반영과 철저한 품질 관리를 통해 성공적으로 마무리했습니다.
                </p>
                <div className="proj-tags">
                  <span className="tag">TAG_A</span>
                  <span className="tag">TAG_B</span>
                </div>
              </div>
            </div>
            <div className="proj-card cs fade-up d3">
              <div className="cs-body">
                <span className="e">✨</span>
                <p>더 많은 레퍼런스를<br />준비 중입니다</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact">
        <div className="inner">
          <div className="contact-grid">
            <div className="contact-left">
              <div className="fade-up">
                <span className="sec-label">Contact</span>
                <h2 className="sec-title">연락처</h2>
                <div className="sec-divider" />
              </div>
              <p className="contact-copy fade-up d1">
                궁금한 점이 있으시거나<br />
                함께 하고 싶다면 편하게 연락주세요.
              </p>
              <div className="contact-items fade-up d2">
                <div className="citem">
                  <i className="fa-solid fa-envelope" />
                  <a href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com</a>
                </div>
                <div className="citem">
                  <i className="fa-solid fa-phone" />
                  <a href="tel:010-0000-0000">010-0000-0000</a>
                </div>
              </div>
              <div className="socials fade-up d3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="slink" aria-label="Instagram">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="slink" aria-label="YouTube">
                  <i className="fab fa-youtube" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="slink" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div>
            </div>
            <div className="fade-up d2">
              <ContactForm />
            </div>
          </div>
          <div className="contact-foot fade-up">
            © {new Date().getFullYear()} YOUR_BRAND. All rights reserved.
          </div>
        </div>
      </section>
    </main>
  )
}
