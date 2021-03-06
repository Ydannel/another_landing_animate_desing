import styled from 'styled-components';

export const Container =styled.div`
    background: #000;
    height: 800px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    font-size: 1rem;
    position: relative;
    z-index: 1;

        ::before{
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: linear-gradient(180deg , rgba(0,0,0,0,2) 0%, rgba(0,0,0,0,6) 100%),
                        linear-gradient(180deg , rgba(0,0,0,0,2) 0%, transparent 100%);
            z-index: 2;
        }
`
export const Wrapper =styled.div``
export const InfoRow =styled.div``
export const Column1 =styled.div``
export const Text =styled.div``
export const TopLine =styled.div``
export const Heading =styled.div``
export const Subtitle =styled.div``
export const BtnWrap =styled.div``