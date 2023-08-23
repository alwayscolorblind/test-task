import React from 'react';
import { Note } from './Note';

// Реализовать интерфейс заметок
// По кнопке + заметки должны добавляться
// Поле ввода должно очищаться после добавления
// Заметки должны хранится в стейте компонента
// Note - компонент одной заметки
// Заметки могут быть с одинаковыми названиями
// Заметки должны удалятся по клику на Note
// Заметки должны быть отсортированы по алфавиту
// Количество заметок должно быть подсчитано в header

export const App = () => {
  return (
      <>
        <div className="header">Notes list, total {'{Total notes must be here}'}</div>
        <div className="container">
          {/* button must add notes */}
          <div className="btn">
            +
          </div>
          <input
              type="text"
              value={'123'}
              className="textInput"
              autoFocus
          />
          {/* render notes here */}
        </div>
      </>
  );
};

