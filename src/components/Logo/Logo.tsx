import styled from 'styled-components';

interface IProps {
    src?: string;
}

export const Logo = styled.div<IProps>`
    width: 25px;
    height: 25px;
    background-image: url(${({ src }) => src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;
