import React, { useState } from 'react';
import styled from 'styled-components';
import { FaUser } from 'react-icons/fa'; 
import { FiPhone } from "react-icons/fi";
import { MdOutlineMail} from "react-icons/md";
import { IconType } from 'react-icons';
type User = {
    name: string;
    phone: string;
    email: string;
    id: string;
}
const defaultUser: User = {
    name: 'Medolias',
    phone: '0002004',
    email: 'Medolias@gmail.com',
    id: "0"
}
export function LoginWeb() {
    const [isSignUp, setIsSignUp] = useState(true);
    const [user, setUser] = useState<User>(defaultUser);

    const handleInput = ({ text }: { text: string }) => { }
 
    return (
        <Container>
            <Content>
                <Title>Join Our Platform</Title>
                <Text>
                    You can be one of the <InlineText color='#EE10B0'>members</InlineText> of our platform by just adding some necessary information. If you already have an account on our website, you can just hit the <InlineText color='#0E9EEF'>Login button</InlineText>.
                </Text>
            </Content>
            <Features>
                <Option>
                    <ButtonOption isSelected={isSignUp} onClick={() => setIsSignUp(prev => !prev)}>Sign Up</ButtonOption>
                    <ButtonOption isSelected={!isSignUp} onClick={() => setIsSignUp(prev => !prev)}>Login</ButtonOption>
                </Option>
                <div className='inline-flex gap-[8px]'>
                    <ViewInput>
                        <TitleInput>Name</TitleInput>
                        <InputWrapper>
                            <FaUser color="#FFF" size={24} />
                            <Input placeholder='Enter your name'
                                type='text'
                                required
                                id='input-name'
                                name='userName'
                                onChange={() => { }}
                            />
                        </InputWrapper>
                    </ViewInput>
                    <ViewInput>
                        <TitleInput>Number</TitleInput>
                        <InputWrapper>
                            <FiPhone color="#FFF" size={24} />
                            <Input placeholder='Enter your number'
                                id='input-tel'
                                type='tel'
                                required
                                name='userPhone'
                                onChange={() => { }}
                            />
                        </InputWrapper>
                    </ViewInput>
                </div>
                <div className='flex-col flex w-full gap-[8px] mt-[8px]'>
                    <TitleInput>Email</TitleInput>
                    <div className='h-[40px] inline-flex align-middle items-center border-x border-y pl-[10px] rounded-[8px] border-white '>
                    <MdOutlineMail size={24} color='#FFF'/>
                    <InputMail placeholder='Enter your Email' id='input-email' type='email' required name='useEmail' onChange={() => { }} />
                    </div>  </div>        
                 <Button onClick={()=>{}} style={{fontSize:18,fontFamily:'Roboto'}}>Sign Up</Button>  
                <ViewDivide>
                    <Divide/>
                    <Text style={{marginRight:15,marginLeft:15}}>Or</Text>
                    <Divide/>
                </ViewDivide>
                <Button style={{background:'transparent',marginTop:0,alignItems:'center',borderWidth:1,flexDirection:'row',display:'flex'}}>
                <ImageIcon src={require('src/assets/images/icon_gg.png')} style={{width:36,height:36,background:'transparent',marginRight:6}}/>
                <Text>Sign Up With Google</Text>
                </Button>
            </Features>
        </Container>
    );
}

const ButtonOption = styled.button<{ isSelected: boolean }>`
    color: ${(props) => props.isSelected ? '#ee10b0' : '#FAB5E7'};
    font-size: ${(props) => props.isSelected ? 24 : 20}px;
    text-decoration: ${(props) => props.isSelected ? 'underline' : 'none'};
    margin: 5px 0px;
`;

const Option = styled.div`
    display: flex;
    flex-direction: row;
    gap:16px;
    width: 100%;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    margin-top: 64px;
    width: 100%;
    max-width:1000px;
justify-content: space-between;
   
`;

const Content = styled.div`
    max-width: 477px;
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

    background-color: #53063E;
    padding: 16px 25px;
    border-radius: 8px;
    align-items: center;
    width: 477px;
`;

const ViewInput = styled.div`
    display: flex;
    gap:16px;
    flex-direction: column;
    flex:1;
`;

const TitleInput = styled.h2`
    font-size: 20px;
    font-weight: 500;
    color: #FFF;
    font-family: sans-serif, serif;
`;

const InputWrapper = styled.div`
    display: flex;
    align-items: center;
    background-color: transparent;
    border-width: 1.5px;
    border-color: #a89999;
    border-radius: 8px;
    padding-left: 10px;
    height:40px;
    transition: box-shadow 0.3s ease;
`;

const Input = styled.input`
  color: #FFF;
  background-color: transparent;
  font-size: 12px;
  font-family: sans-serif;
  width: 100%;
  border: 0px solid #FFF;
  height: 32px;
  outline: none;
  margin: 2px 8px 2px 10px;
  border-radius: 5px;
  max-width: 195px;

  &:focus {
    outline-offset: 0;
  }

  &:hover {
    box-shadow: 0px 0.5px 1px 0px #FFF;
  }

  &:active {
    border-color: #FFF;
  }

  @media (min-width: 1536px) {
    &:hover {
      box-shadow: none;
    }
  }
`;
const InputMail=styled.input`
     color: #FFF;
  background-color: transparent;
  font-size: 12px;
  font-family: sans-serif;
  width: 100%;
  border: 0px solid #FFF;
  height: 32px;
  outline: none;
  margin: 2px 8px 2px 10px;
  border-radius: 5px;
  &:focus {
    outline-offset: 0;
  }

  &:hover {
    box-shadow: 0px 0.5px 1px 0px #FFF;
  }

  &:active {
    border-color: #FFF;
  }

  @media (min-width: 1536px) {
    &:hover {
      box-shadow: none;
    }
  }

`
const Button=styled.button`
    color: #FFF;
    border-radius: 4px;
    background-color: #ee10b0;
    height: 44px;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    transition: box-shadow 0.3s ease,transform 0.3s ease;
    &:hover{
        box-shadow: 0px 0.5px  #FFF;
        transform: scale(1.01);
    }
    &:active{
        transform: scale(0.99);
    }
`
const ViewDivide=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
    margin-bottom: 8px;
    
`
const Divide=styled.div`
    height: 1px;
    width:190px;
    background-color: #fff;
    border-radius: 4px;
    background: #FFF;

`
const ImageIcon=styled.img`
  

`
