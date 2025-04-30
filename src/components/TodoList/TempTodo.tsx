import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoLoader } from './TodoLoader';

type Props = {
  todo: Todo;
};

export const TempTodo: React.FC<Props> = ({ todo }) => (
  <div data-cy="Todo" className="todo">
    <label className="todo__status-label" aria-label="Toggle todo status">
      <input
        data-cy="TodoStatus"
        type="checkbox"
        className="todo__status"
        checked={todo.completed}
        readOnly
      />
    </label>

    <span data-cy="TodoTitle" className="todo__title">
      {todo.title}
    </span>

    <button
      type="button"
      className="todo__remove"
      data-cy="TodoDelete"
      disabled
    >
      ×
    </button>

    <TodoLoader isActive />
  </div>
);
