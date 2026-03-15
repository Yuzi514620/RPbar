import { useState } from 'react';
import './App.css';

const galleryImages = [
  {
    src: 'https://github.com/harry0621/-/blob/main/%E6%B0%B4%E5%B9%95.png?raw=true',
    alt: '昭和之夢',
    caption: '【昭和之夢】',
  },
  {
    src: 'https://github.com/harry0621/-/blob/main/%E8%88%9E%E5%8F%B0%E5%90%A7%E6%AA%AF.png?raw=true',
    alt: '沉寂吧檯',
    caption: '【沉寂吧檯】',
  },
  {
    src: 'https://github.com/harry0621/-/blob/main/%E5%BA%A7%E4%BD%8D.png?raw=true',
    alt: '摩登角落',
    caption: '【摩登角落】',
  },
];

const staffList = [
  {
    name: '咪子',
    img: 'https://github.com/harry0621/-/blob/main/%E5%92%AA%E5%AD%902.png?raw=true',
    desc: '店主。期待與每一位旅客共譜深夜的樂章。',
    special: '【 此處填寫特殊服務內容 】',
  },
  {
    name: '鹹魚',
    img: 'https://github.com/harry0621/-/blob/main/%E9%B9%B9%E9%AD%9A2.png?raw=true',
    desc: '店員。以優雅的服務，帶您領略昭和氛圍的寧靜。',
    special: `拍立得服務:1張10000GIL
深度輔導:微光的對話(獨立兩人空間) 30min 300000GIL`,
  },
  {
    name: '伊萊諾斯',
    img: 'https://github.com/harry0621/-/blob/main/%E4%BC%8A%E8%90%8A.png?raw=true',
    desc: '店員。日夜交替時，他卸下了白日的身分，成為了溫柔沉穩的傾聽者。願每位前來的客人都能留下美好的回憶。',
    special: `指定陪伴30min + 合照一張 + 開香檳 150,000 Gil
一般拍立得 附簽名 10,000 Gil
親密拍立得 附簽名 30,000 Gil
拍立得加購簽繪 + 5,000 Gil
伴遊服務 需討論議價`,
  },
  {
    name: '閻羅',
    img: 'https://github.com/harry0621/-/blob/main/%E9%96%BB%E7%BE%85.png?raw=true',
    desc: '帶上你的白日夢，給予你最極致的危險寵溺。',
    special: '【 此處填寫特殊服務內容 】',
  },
  {
    name: '羽神天音',
    img: 'https://github.com/harry0621/-/blob/main/%E7%BE%BD%E7%A5%9E.png?raw=true',
    desc: '樂手。當琴弦撥動，為你洗去一天的疲憊，旋律會在心裡與你共鳴。',
    special: '【 此處填寫特殊服務內容 】',
  },
  {
    name: '小霖兒',
    img: 'https://github.com/harry0621/-/blob/main/%E5%B0%8F%E9%9C%96%E5%85%92.png?raw=true',
    desc: '樂手。讓我為您演奏一首歌，閉上眼睛，把心交給我。這一刻，我希望您聽見幸福的顏色。',
    special: '【 此處填寫特殊服務內容 】',
  },
];

function HomePage() {
  return (
    <div className="page active">
      <header className="hero">
        <div className="hero-est">ESTABLISHED 2026</div>
        <h1>與咪子有約</h1>
        <p className="subtitle">昭和摩登 ｜ 表演眾多 ｜ 深夜暢談</p>
      </header>

      <section className="content-section">
        <div className="about-text">
          <p>在白銀鄉的街道盡頭，隱藏著一扇通往昭和年代的大門。</p>
          <p>這裡有咪子親手打造的華麗水幕，以及充滿復古光影的靜謐角落。</p>
          <p>我們不只是一間酒吧，更是讓靈魂暫時停泊的失落之地。</p>
          <p>奧汀 伺服器 ｜ 白銀鄉7區2號公寓</p>
        </div>

        <div className="notice-box">
          <h3>入店須知</h3>
          <p>1. 進入本店，請將武器及寵物收起來，以保護店員及其他客人的安全。</p>
          <p>2. 本店可隨意參觀。如有 RP 服務需求請幫我將標誌改為希望組隊，會有店員來服務您。也請務必將 RP 標誌留給店員。</p>
          <p>3. 本店服務低消為 1000 GIL，附飲料一杯，請隨意入座。如需指名服務請私訊 RP 標誌店員洽詢。</p>
          <p>4. 除每位店員可以指名聊天服務外，每位店員也有特殊指名服務，還請參考店員介紹。</p>
          <p>5. 本店不提供 ERP 服務，每位店員接受程度不同。請在雙方都能接受的程度暢談。</p>
          <p>6. 本店一到日皆有營業，表定營業時間 21:00~02:00。還請各位顧客注意當日是否有店員排班，以獲得最佳體驗。</p>
        </div>

        <div className="gallery">
          {galleryImages.map((item) => (
            <div className="gallery-item" key={item.caption}>
              <img src={item.src} alt={item.alt} />
              <div className="img-caption">{item.caption}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function StaffPage() {
  return (
    <div className="page active">
      <h2>STAFF</h2>
      <div className="staff-list">
        {staffList.map((staff, index) => (
          <div
            className={`staff-card ${index % 2 === 1 ? 'reverse' : ''}`}
            key={staff.name}
          >
            <div className="staff-img">
              <img src={staff.img} alt={staff.name} />
            </div>
            <div className="staff-info">
              <div className="staff-name">{staff.name}</div>
              <p className="staff-desc">{staff.desc}</p>
              <div className="staff-special">
                <span className="special-title">個人特殊指名服務：</span>
                <span className="special-content">{staff.special}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MenuPage() {
  return (
    <div className="page active">
      <h2>深夜價目表</h2>
      <div className="menu-box">
        <table className="menu-table">
          <tbody>
            <tr>
              <td>
                <b className="menu-title">昭和經典雞尾酒特調 / 店員特調軟飲</b>
                <br />
                <small className="menu-subtitle">伴隨微光的入座之禮</small>
              </td>
              <td className="price-val">
                <i>1000 Gil</i>
              </td>
            </tr>
            <tr>
              <td>
                <b className="menu-title">指定陪伴服務 (15min)</b>
                <br />
                <small className="menu-subtitle">價格依每位店員而定</small>
              </td>
              <td className="price-val">
                <i>50,000 Gil+</i>
              </td>
            </tr>
            <tr>
              <td>
                <b className="menu-title">各式店員表演</b>
                <br />
                <small className="menu-subtitle">舞台表演與旋律</small>
              </td>
              <td className="price-val">
                <i>打賞制</i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState('home');

  const handleShowPage = (pageId) => {
    setPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav>
        <button type="button" onClick={() => handleShowPage('home')}>
          關於我們
        </button>
        <button type="button" onClick={() => handleShowPage('staff')}>
          店員介紹
        </button>
        <button type="button" onClick={() => handleShowPage('menu')}>
          深夜價目
        </button>
      </nav>

      {page === 'home' && <HomePage />}
      {page === 'staff' && <StaffPage />}
      {page === 'menu' && <MenuPage />}

      <footer>
        奧汀 伺服器 ｜ 白銀鄉7區2號公寓
        <br />
        <br />© 2026 與咪子有約 - All Rights Reserved.
      </footer>
    </div>
  );
}