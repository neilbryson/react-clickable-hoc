import * as React from 'react';

interface InjectedClickProps {
  onKeyDown?(): void;
  onClick?(): void;
}

export default function clickable<T extends object>(WrappedComponent: React.ComponentType<T>): React.ComponentType<T & Partial<InjectedClickProps>>;
