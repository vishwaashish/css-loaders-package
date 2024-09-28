
# CSS Loaders

A collection of customizable CSS loaders for web applications.

## Installation

To install the package, run the following command:

```bash
npm install css-loaders
```

## Usage in HTML and CSS

To use the loaders in a simple HTML and CSS project, include the necessary loader component in your HTML file. You can customize the styles using CSS.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="path/to/your/style.css">
    <title>Loader Example</title>
</head>
<body>
    <div class="loader"></div>
</body>
</html>
```

## Usage in React and Other Frameworks

To use the loaders in a React application, you can import the `Loader` component as follows:

```jsx
import React from 'react';
import Loader from 'css-loaders';

const MyComponent = () => {
    return (
        <Loader
            key={1}
            width={48}
            loader={1}
            customCSS={`
                .loader1 {
                    background: red;
                    width: 100px;
                }
            `}
        />
    );
};

export default MyComponent;
```

### Props

The `Loader` component accepts the following props:

- `width`: number | string;
- `primary`: string;
- `secondary`: string;
- `border`: number | string;
- `speed`: number | string;

## Demo

Check out the live demo [here](https://vashish.vercel.app/css-loaders).

