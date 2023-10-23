import React from "react";
import { Link } from "react-router-dom"; // Импортируем Link из react-router-dom
import "./ContactPage.css"; // Импорт файла стилей

const ContactPage = () => {
  return (
    <div className="container">
      <h2>Контакты и информация</h2>
      {/* Добавляем кнопку "Назад" с использованием deep link */}
      <Link to="/">Назад</Link>
      <p>
        Добро пожаловать на мой сайт! Я рад предоставить вам информацию о моей компании и услугах.
      </p>
      <p>
        Для связи со мной, пожалуйста, используйте следующие контактные данные:
      </p>
      <ul>
        <li>Электронная почта: info@example.com</li>
        <li>Телефон: +77475581043</li>
        <li>Адрес:  Город Алматы, Казахстан</li>
      </ul>
      <p>
        Следите за нашими обновлениями на социальных сетях:
      </p>
      <ul>
        <li>
          <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactPage;
