# react-clickable-hoc

[![Build Status](https://travis-ci.org/neilbryson/react-clickable-hoc.svg?branch=master)](https://travis-ci.org/neilbryson/react-clickable-hoc)
[![devDependencies Status](https://david-dm.org/neilbryson/react-clickable-hoc/dev-status.svg)](https://david-dm.org/neilbryson/react-clickable-hoc?type=dev)

Executes `onClick` to keyboard actions for improved accessibility of your React components.

Pressing Enter or the space bar (`onKeyDown`) on the wrapped component will trigger `onClick`, if it exists.

## Installation

Requires React v16.

```bash
npm install --save react-clickable-hoc
```

## Usage

Simply import the module and wrap a component with it !

```javascript
  import clickable from 'react-clickable-hoc';

  import Component from './path/to/Component';

  // Wrap the component using react-clickable-hoc.
  const WrappedComponent = clickable(Component);
  
  render() {
    const onClick = () => { console.log('clicked !') };
    // Use it like a normal component.
    return <WrappedComponent onClick={onClick} />
  }
```

### License
[MIT](/LICENSE)

