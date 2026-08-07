import React, { useState } from 'react';
import './App.css';
import profilePhoto from './media/WP2A7654_resized.jpg'; 

const App = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [detailsIsExpanded, setDetailsIsExpanded] = useState(false);
  const [workWithIsExpanded, setWorkWithIsExpanded] = useState(false);
  const [notWorkWithIsExpanded, setNotWorkWithIsExpanded] = useState(false);
  const [educationIsExpanded,setEducationIsExpanded] = useState(false);

  const phoneNumber = '+7 (999) 123-45-67';
  const email = 'lyudmilaAksyenova12@gmail.com';
  const telegramUrl = 'https://t.me/Lyudmila7630';
  const telegramUsername="@Lyudmila7630"
  const maxUrl = "https://max.ru"
  const maxUsername="@evgeny_psychologist"

  const aboutText =[
    "IFS (International Family Systems, англ.) – системная семейная терапия субличностей или внутренние семейные системы.",
    "Ричард Шварц разрабатывал метод почти сорок лет. IFS – мягкий метод установления внутренних (со своими субличностями) и внешних (с окружающими людьми) отношений.",
    "В IFS терапии используется понятие множественной модели психики. В каждой личности есть ядро (Self/Я) и много разных субличностей. Ядро обладает только положительными качествами, такими как любопытство/интерес, спокойствие, смелость, уверенность, креативность, присутствие здесь и сейчас, сострадание, сочувствие, понимание, безусловная любовь, осознание, нежность, интуитивность, оптимистичность, мудрость, воодушевление. В то время как субличности подвержены большому спектру эмоций и чувств от позитивных до негативных.  Self – исцеляющая внутренняя суть, всегда готова помочь частям. Осознавание Self важная цель в IFS терапии.",
    "IFS уважительно относится к душевной боли и психологическим травмам и никогда не пытается проломить слой защит или быстро перейти к серьезным темам. Процесс терапии основан на установлении дружеских, партнерских отношений с субличностями из ядра личности – «Я». Метод погружает вас внутрь себя, где вы осознаете процесс и руководите им во время сессии. Вы работаете с пониманием взаимоотношений между субличностями, где наиболее важные отношения устанавливаются между защитными и детскими субличностями, с помощью ядра личности освобождаете субличности от негативных эмоций."
  ]
  const workWithText=[
    "внутриличностные конфликты",
    "личностные расстройства",
    "тревожные расстройства",
    "депрессивные состояния",
    "трудности выбора",
    "панические атаки",
    "прокрастинация",
    "стыд",
    "вина",
    "ревность",
    "вспыльчивость",
    "зависимое поведение"
  ]
  const notWorkWithText=[
    "с парами",
    "с клиентами младше 18 лет",
    "с психическими нарушения в стадии обострения"
  ]
  const hightEducation=[
    "Московский открытый социальный университет г. Москва",
    "Институт по переподготовке и повышению квалификации «УрФУ Имени первого президента России Б.Н. Ельцина» Профессиональная переподготовка по специальности клинический психолог г. Екатеринбург"
  ]
  const additionalEducation=[
    "Институт психотерапии и медицинской психологии им. Б.Д. Карвасарского, г. Санкт-Петербург",
    "Повышение квалификации в методе «Системной семейной терапии субличностей» Р. Шварца, г.Москва",
    "International Family Systems, Level 1 – системная семейная терапия субличностей"
  ]
  const workExperience=[
    "Психологическая практика с 2012 года",
    "Личная терапия и супервизии в методе IFS с 2021 года"
  ]

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopySuccess(true);
      // setTimeout(() => setCopySuccess(false), 2000);
    });
  };

  const mouseOutFromCopyClipboard = () =>{
    setCopySuccess(false);
  }

  return (
    <div className="app">
      {/* Fixed Header */}
      <header className="header">
        <div className="header-container">
          <div className="header-info">
            <h1 className="header-name">Людмила Аксёнова</h1>
            <p className="header-title">Клинический психолог</p>
          </div>
          
          <div className="header-contacts">
            <a 
              onMouseLeave={() => mouseOutFromCopyClipboard()}
              onClick={() => copyToClipboard(telegramUsername)}
              className="contact-link"
              title="Копировать Telegram"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.242-.213-.054-.333-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
              {copySuccess && <span className="tooltip">Скопировано!</span>}
            </a>
            {/* <a 
              href={telegramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              title="Telegram"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295l.213-3.054 5.56-5.022c.242-.213-.054-.333-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a> */}
            {/* <a 
              href={maxUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-link"
              title="Max"
            >
              <svg className="icon" viewBox="0 0 1000 1000" fill="currentColor">
                <path d="M508.211 878.328c-75.007 0-109.864-10.95-170.453-54.75-38.325 49.275-159.686 87.783-164.979 21.9 0-49.456-10.95-91.248-23.36-136.873-14.782-56.21-31.572-118.807-31.572-209.508 0-216.626 177.754-379.597 388.357-379.597 210.786 0 375.947 171.001 375.947 381.604.707 207.347-166.595 376.118-373.94 377.224m3.103-571.585c-102.564-5.292-182.499 65.7-200.201 177.024-14.6 92.162 11.315 204.398 33.397 210.238 10.585 2.555 37.23-18.98 53.837-35.587a189.8 189.8 0 0 0 92.71 33.032c106.273 5.112 197.08-75.794 204.215-181.95 4.154-106.382-77.67-196.486-183.958-202.574z"/>
              </svg>
            </a> */}
            
            {/* <button 
              onClick={() => copyToClipboard(phoneNumber)}
              className="contact-link phone-link"
              title="Копировать номер телефона"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {copySuccess && <span className="tooltip">Скопировано!</span>}
            </button> */}
            
            <a 
              onMouseOut={() => mouseOutFromCopyClipboard()}
              onClick={() => copyToClipboard(email)}
              className="contact-link"
              title="Копировать Email"
            >
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              {copySuccess && <span className="tooltip">Скопировано!</span>}
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Photo Section */}
          <div className="photo-section">
            <div className="photo-container">
              <img 
                // src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop" 
                src = {profilePhoto}
                alt="Евгений Михайленко - Клинический психолог"
                className="profile-photo"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>

          {/* Quote Section */}
          <div className="quote-section">
            <div className="quote-content">
              <div className="quote-mark">"</div>
              <blockquote className="quote-text">
                Научившись доверять себе, сразу поймешь, как жить
              </blockquote>
              <cite className="quote-author">
                Иоанн Вольфганг фон Гёте
              </cite>
              <div className="quote-line"></div>
            </div>
          </div>

        </div>
      </main>
      <section className="text-section">
          <div className="text-container">
            <h2 className="text-title">Обо мне и моем подходе</h2>
            
            <div className={`text-wrapper ${detailsIsExpanded ? 'expanded' : 'collapsed'}`}>
              {aboutText.map((paragraph, index) => (
                <p key={index} className="text-paragraph">{paragraph}</p>
              ))}
              {/* Градиентное затемнение снизу, когда текст свернут */}
              {!detailsIsExpanded && <div className="text-fade"></div>}
            </div>

            <button 
              className="toggle-btn" 
              onClick={() => setDetailsIsExpanded(!detailsIsExpanded)}
            >
              {detailsIsExpanded ? 'Скрыть' : 'Подробнее'}
              {/* Иконка стрелочки, которая поворачивается */}
              <svg 
                className={`arrow-icon ${detailsIsExpanded ? 'rotated' : ''}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>
          </div>
      </section>
      <section className='text-section'>
        <div className='grid-columns'>
          {/* <p className="text-paragraph">{workWithText.forEach(element => {
            
          });}</p> */}
          <div className='grid-columns-right'>
          <p className="text-paragraph-title">Сферы, в которых я работаю:</p>
          {workWithText.map((line, index)=>(
            <p key={index} className="text-list">- {line}</p>
          ))}</div>
          <div className='grid-columns-left'>
          <p className="text-paragraph-title">С кем и чем я не работаю:</p>
          {notWorkWithText.map((line, index)=>(
            <p key={index} className="text-list">- {line}</p>
          ))}</div>
        </div>
      </section>
      <section className="text-section">
        <div className="text-container">
          <h2 className="text-title">Мое образование</h2>
          <p className='text-paragraph-title'>Высшее образование:</p>
          {hightEducation.map((line, index)=>(
            <p key={index} className="text-paragraph">- {line}</p>
          ))}
          <p className="text-paragraph-title">Дополнительное образование:</p>
          {additionalEducation.map((line, index)=>(
            <p key={index} className="text-paragraph">- {line}</p>
          ))}
        </div>
      </section>
      <section className="text-section">
        <div className="text-container">
        <h2 className="text-title">Опыт практики</h2>
        {workExperience.map((line, index)=>(
            <p key={index} className="text-paragraph">- {line}</p>
          ))}
          </div>
      </section>
      <section className="text-section">
        <div className="text-container">
          <h2 className="text-title">Услуги и стоимость</h2>
          <p className="text-paragraph">Индивидуальная онлайн консультация – 70 минут – 5000 рублей</p>
          <p className='text-paragraph'>Zoom, Google meet, Яндекс телемост</p>
        </div>
      </section>
      <footer className='footer'>
        <div className='footer-container'>
          <div className='footer-contacts-container'>
            <span class="footer-contacts">Telegram: </span>
            <a href = {telegramUrl} class = "footer-links">{telegramUsername}</a>
          </div>
          {/* <div className='footer-contacts-container'>
            <span class="footer-contacts">Max: </span>
            <a href = {maxUrl} class = "footer-links">{maxUsername}</a>
          </div> */}
          {/* <div className='footer-contacts-container'>
            <span class="footer-contacts">Телефон: </span>
            <p class = "footer-contact">{phoneNumber}</p>
          </div> */}
          <div className='footer-contacts-container'>
            <span class="footer-contacts">Email: </span>
            <p class = "footer-contact">{email}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;