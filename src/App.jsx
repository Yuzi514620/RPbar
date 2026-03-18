import { useState } from 'react';
import './App.css';
import { getImage } from './assets'
import galleryImagesData from './data/galleryImages.json';
import staffListData from './data/staffList.json';


const galleryImages = galleryImagesData.map((image) => ({
  src: getImage(image.file),
  alt: image.alt,
  caption: image.caption,
}));

const staffList = staffListData.map((item) => ({
  ...item,
  img: getImage(item.file),
}));

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
          <p>3. 本店服務低消為 10000 GIL，附飲料一杯，請隨意入座。如需指名服務請私訊 RP 標誌店員洽詢。</p>
          <p>4. 除每位店員可以指名聊天服務外，每位店員也有特殊指名服務，還請參考店員介紹。</p>
          <p>5. 本店不提供 ERP 服務，每位店員接受程度不同。請在雙方都能接受的程度暢談。</p>
          <p>6. 本店為五、六營業，表定營業時間 22:00~02:00。還請各位顧客注意當日是否有店員排班，以獲得最佳體驗。</p>
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
                <span className="special-content" style={{ whiteSpace: 'pre-line' }}>{staff.special}</span>
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
                <i>酒水免費提供</i>
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
