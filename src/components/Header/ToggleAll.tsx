import React from 'react';

type Props = {
  active: boolean;
  onToggleAll: () => void;
};

export const ToggleAll: React.FC<Props> = ({ active, onToggleAll }) => (
  <button
    type="button"
    className={`todoapp__toggle-all ${active ? 'active' : ''}`}
    data-cy="ToggleAllButton"
    onClick={onToggleAll}
  />
);
