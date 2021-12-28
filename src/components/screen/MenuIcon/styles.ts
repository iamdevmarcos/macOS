import styled from "styled-components";

type ContainerProps = {
    icon: string;
}

export const Container = styled.div(({ icon }: ContainerProps) => (`
    width:50px;
    height:50px;
    background-image: url('/assets/images/icons/appicons/${icon}.png');
    background-position: center;
    background-size:cover;
    margin:10px 7px;
    cursor:pointer;
    transition: all ease 0.2s;
    
    &&:hover {
        width:100px;
        height:100px;
        margin-top:-40px; 
    }
`));