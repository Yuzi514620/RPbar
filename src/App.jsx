import { useState, useEffect } from 'react';
import './App.css';
import { getImage } from './assets'
import galleryImagesData from './data/galleryImages.json';
import staffListData from './data/staffList.json';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import RuleIcon from '@mui/icons-material/Gavel';
import PeopleIcon from '@mui/icons-material/People';
import MenuBookIcon from '@mui/icons-material/MenuBook';


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
          <p>6. 本店為五、六營業，表定營業時間 22:00~01:00。還請各位顧客注意當日是否有店員排班，以獲得最佳體驗。</p>
          <p>7. 本店有 DC 群歡迎加入預約：<a className="special-link" href="https://discord.gg/zVfRK8s7vQ" target="_blank" rel="noopener noreferrer">與咪子有約 | Showa Modern Lounge</a></p>
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
function RulesPage() {
  return (
    <div className="page active">
      <section className="content-section">
        <div className="notice-box">
          <h3>入店規範</h3>
          <p>🌹 咪子小百合公關酒吧：顧客入店守則與服務須知 🌹</p>
          <p>歡迎光臨。為了確保每位賓客都能在舒適、安全的氛圍中享受音樂與交流，並保障本店員工的工作環境，請在進入服務前詳閱以下規範：</p>

          <h4>一、服務定位與內容</h4>
          <ul>
            <li>核心服務：本店定位為「純交流公關酒吧」，服務內容僅限於陪伴聊天、音樂演奏與紀念合照。</li>
            <li>純粹交流：嚴禁任何涉及性暗示、色情話題或違反遊戲規範之「魔法性交易」服務。如經發現，本店將立即停止服務並請離現場。</li>
          </ul>

          <h4>二、攝影與肖像規範</h4>
          <ul>
            <li>禁止私自拍攝：為確保場內秩序與隱私，禁止顧客自行進行攝影/截圖。</li>
            <li>官方拍攝服務：如有拍照需求，請洽詢服務人員。由本店員工操作拍攝能確保畫面品質，並方便場控人員管理。</li>
            <li>禁止違規拍攝：本店嚴拒任何涉及 Mod 改圖、R18+ 內容或違反遊戲規章之「魔法拍攝」。嚴禁在店內直播錄影。</li>
            <li>社群發布規則：於服務期間獲得之合照，若需發布至社群平台（如 FB、IG、X、DC 等），請務必標記當事者或「咪子小百合」，或事先徵得店員同意。嚴禁在未告知的情況下擅自發布。</li>
          </ul>

          <h4>三、互動邊界與隱私保護</h4>
          <ul>
            <li>尊重角色設定：本店員工以 Roleplay (RP) 身分進行服務，禁止打探員工之真實性別、性取向或任何現實生活資訊。</li>
            <li>拒絕過當要求：請勿對員工提出令人不適的要求。店員有權隨時拒絕令其感到猶豫或不適的請求。</li>
            <li>下班即私人：店員在營業時間外皆為一般玩家。嚴禁在營業時間外跟蹤、騷擾店員，或針對 RP 設定以外的個人隱私進行探查。</li>
          </ul>

          <h4>四、營業與交易流程</h4>
          <ul>
            <li>先付後籌：為確保服務流程順暢，請於服務開始前完成支付。</li>
          </ul>

          <h4>五、違規處理機制</h4>
          <ul>
            <li>黑名單制度：若顧客出現暗示、勸誘違法交易、騷擾或屢次違反上述規範之行為，本店將直接列入永久黑名單，並於 Discord 群組及相關管道進行通報。</li>
          </ul>

        </div>
      </section>
    </div>
  );
}

function StaffPage() {
  const [openSongs, setOpenSongs] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState(null);

  const handleOpenSongs = (staff) => {
    setSelectedStaff(staff);
    setOpenSongs(true);
  };

  const handleCloseSongs = () => {
    setOpenSongs(false);
    setSelectedStaff(null);
  };

  useEffect(() => {
    if (openSongs) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [openSongs]);

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
                <span
                  className="special-content"
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {staff.special}
                </span>
                {staff.link?.url && staff.link?.text && (
                <a
                  href={staff.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="special-content"
                >
                  {staff.link.text}
                </a>
              )}
              </div>

              

              {staff.songs?.length > 0 && (
                <button
                  type="button"
                  className="staff-song-btn"
                  onClick={() => handleOpenSongs(staff)}
                >
                  點歌簿
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {openSongs && selectedStaff && (
        <div className="dialog-overlay" onClick={handleCloseSongs}>
          <div className="dialog" onClick={(e) => e.stopPropagation()}>
            <div className="dialog-title">
              <span>{selectedStaff.name} 點歌簿</span>
              <button
                type="button"
                className="dialog-close"
                onClick={handleCloseSongs}
              >
                ×
              </button>
            </div>

            <div className="dialog-content" style={{ display: 'flex', gap: '9px', flexDirection: 'column' }}>
              {selectedStaff.songs.map((song, index) => (
                <div className="song-item" key={`${song}-${index}`}>
                  {song}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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
                <b className="menu-title">香檳</b>
                <br />
                <small className="menu-subtitle">讓美好的夜晚加上微醺的心跳聲吧</small>
              </td>
              <td className="price-val">
                <i>單支 / 30,000 Gil+</i>
              </td>
            </tr>
            <tr>
              <td>
                <b className="menu-title">香檳塔</b>
                <br />
                <small className="menu-subtitle">為今夜的公主喊出振奮的香檳CALL！</small>
              </td>
              <td className="price-val">
                <i>100,000 Gil+</i>
              </td>
            </tr>
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleShowPage = (pageId) => {
    setPage(pageId);
    setDrawerOpen(false); // Close drawer after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { id: 'home', label: '關於我們', icon: <InfoIcon /> },
    { id: 'rules', label: '入店規範', icon: <RuleIcon /> },
    { id: 'staff', label: '店員介紹', icon: <PeopleIcon /> },
    { id: 'menu', label: '深夜價目', icon: <MenuBookIcon /> },
  ];

  return (
    <div className="app">
      {isMobile ? (
        <>
          <AppBar position="static" sx={{ backgroundColor: '#0a0908' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <h1 style={{ margin: 0, fontSize: '1.2rem' }}>與咪子有約</h1>
            </Toolbar>
          </AppBar>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
          >
            <List sx={{ width: 250, backgroundColor: '#0a0908', height: '100%' , color: '#c5a059' }}>
              {navItems.map((item) => (
                <ListItem button key={item.id} onClick={() => handleShowPage(item.id)}>
                  <ListItemIcon sx={{ color: '#c5a059' }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItem>
              ))}
            </List>
          </Drawer>
        </>
      ) : (
        <nav>
          <button type="button" onClick={() => handleShowPage('home')}>
            關於我們
          </button>
          <button type="button" onClick={() => handleShowPage('rules')}>
            入店規範
          </button>
          <button type="button" onClick={() => handleShowPage('staff')}>
            店員介紹
          </button>
          <button type="button" onClick={() => handleShowPage('menu')}>
            深夜價目
          </button>
        </nav>
      )}

      {page === 'home' && <HomePage />}
      {page === 'rules' && <RulesPage />}
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
