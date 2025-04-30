import React from 'react';

type Props = {
  errorMessage: string | null;
  isHidden: boolean;
  onHide: () => void;
};

export const ErrorNotification: React.FC<Props> = ({
  errorMessage,
  isHidden,
  onHide,
}) => (
  <div
    data-cy="ErrorNotification"
    className={`notification is-danger is-light has-text-weight-normal ${isHidden ? 'hidden' : ''}`}
  >
    <button
      data-cy="HideErrorButton"
      type="button"
      className="delete"
      onClick={onHide}
    />
    {errorMessage}
  </div>
);
