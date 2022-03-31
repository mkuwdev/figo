import clsx from 'clsx';
import * as React from 'react';

export default function Accent({ children, className }) {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'bg-gradient-to-tr from-sky-500/60 to-cyan-300/40',
      )}
    >
      {children}
    </span>
  );
}
