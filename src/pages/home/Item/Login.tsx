import React, { useState } from 'react';
import styled from 'styled-components';

export function LoginWeb() {
    const [isSignUp,setIsSignUp]=useState(true);
    return (
        <Container>
            <Content>
                <Title>Join Our Platform</Title>
                <Text>
                    You can be one of the <InlineText color='#EE10B0'>members</InlineText> of our platform by just adding some necessarily information. If you already have an account on our website, you can just hit the <InlineText color='#0E9EEF'>Login button</InlineText>.
                </Text>
            </Content>
            <Features>
                <Option>
                    <ButtonOption isSelected={isSignUp} onClick={()=>setIsSignUp(prev=>!prev)}>Sign Up</ButtonOption>
                    <ButtonOption isSelected={!isSignUp} onClick={()=>setIsSignUp(prev=>!prev)}>Login</ButtonOption>
                </Option>
            </Features>
        </Container>
    );
}
const ButtonOption=styled.button<{isSelected:boolean}>`
    color: ${(props)=>props.isSelected?'#ee10b0':'#FAB5E7'};
    font-size: ${(props)=>props.isSelected?24:20}px;
    text-decoration: ${(props)=>props.isSelected?'underline':'none'};
    margin: 5px 0px;
`
const Option=styled.div`
    display: flex;
    flex-direction: row;
    gap:16px ;
width: 100%;
justify-content: center;

`
const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 64px;
   
`;

const Content = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 40px;
    height: 52px;
    color: #FFF;
    font-weight: bold;
    margin-bottom: 10px;
`;

const Text = styled.p`
    font-size: 20px;
    font-family: sans-serif, serif;
    font-weight: 400;
    color: #FFF;
`;

const InlineText = styled.span<{ color?: string }>`
    font-size: 20px;
    font-family: sans-serif, serif;
    font-weight: 400;
    color: ${(props) => props.color || '#FFF'};
`;

const Features = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    background-color: #53063E;
    padding: 16px 25px;
    border-radius: 8px;
    /* justify-content: center; */
    align-items: center;
`;
