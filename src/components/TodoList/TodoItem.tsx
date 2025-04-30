/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoLoader } from './TodoLoader';

type Props = {
  todo: Todo;
  isDeleting: boolean;
  isUpdating: boolean;
  isEditing: boolean;
  editTitle: string;
  setEditTitle: (title: string) => void;
  onEditStart: (id: number, title: string) => void;
  onEditSubmit: (id: number, oldTitle: string) => void;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
  editInputRef: React.RefObject<HTMLInputElement>;
};

export const TodoItem: React.FC<Props> = ({
  todo,
  isDeleting,
  isUpdating,
  isEditing,
  editTitle,
  setEditTitle,
  onEditStart,
  onEditSubmit,
  onToggle,
  onDelete,
  editInputRef,
}) => {
  const handleKeyDown = (e: React.KeyboardEvent, oldTitle: string) => {
    if (e.key === 'Escape') {
      setEditTitle(oldTitle);
      onEditStart(-1, '');
    }
  };

  const handleBlur = (oldTitle: string) => {
    if (editTitle.trim() !== oldTitle) {
      onEditSubmit(todo.id, oldTitle);
    } else {
      setEditTitle(oldTitle);
      onEditStart(-1, '');
    }
  };

  return (
    <div data-cy="Todo" className={`todo ${todo.completed ? 'completed' : ''}`}>
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          onChange={() => onToggle(todo.id, todo.completed)}
        />
      </label>

      {isEditing ? (
        <form
          onSubmit={e => {
            e.preventDefault();
            onEditSubmit(todo.id, todo.title);
          }}
        >
          <input
            ref={editInputRef}
            data-cy="TodoTitleField"
            type="text"
            className="todo__title-field"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onBlur={() => handleBlur(todo.title)}
            onKeyDown={e => handleKeyDown(e, todo.title)}
          />
        </form>
      ) : (
        <>
          <span
            data-cy="TodoTitle"
            className="todo__title"
            onDoubleClick={() => onEditStart(todo.id, todo.title)}
          >
            {todo.title}
          </span>

          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDelete"
            onClick={() => onDelete(todo.id)}
            disabled={isDeleting || isUpdating}
          >
            ×
          </button>
        </>
      )}

      <TodoLoader isActive={isDeleting || isUpdating} />
    </div>
  );
};
