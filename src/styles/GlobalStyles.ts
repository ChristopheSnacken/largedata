import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Axiforma';
        font-weight: 300;
        font-style: normal;
        src: url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Light.eot');
        src: url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Light.eot?#iefix') format('embedded-opentype'),
            url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Light.woff2') format('woff2'),
            url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Light.woff') format('woff');
    }
    @font-face {
        font-family: 'Axiforma';
        font-weight: 400;
        font-style: normal;
        src: url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Regular.eot');
        src: url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Regular.eot?#iefix') format('embedded-opentype'),
            url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Regular.woff2') format('woff2'),
            url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Regular.woff') format('woff');
    }
    @font-face {
        font-family: 'Axiforma';
        font-weight: 700;
        font-style: normal;
        src: url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Bold.eot');
        src: url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Bold.eot?#iefix') format('embedded-opentype'),
            url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Bold.woff2') format('woff2'),
            url('https://pblx.s3.amazonaws.com/ewo/fonts/Axiforma-Bold.woff') format('woff');
    }
    
    html,
    body {
        height: 100%;
        margin: 0;
        font-family: Helvetica, Arial,'Axiforma', sans-serif;
    }

    

* {
    box-sizing: border-box;
}
a {
    color: black;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

h2 {
    font-weight: 300;
    font-size: 25px;
}

p {
    line-height: 2;
    font-weight: 300;
    font-size: 16px;
}

button {
    font-family: inherit;
}

ul {
    padding: 0;
    margin: 0;
}

li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

img {
    max-width: 100%;
}
`;
