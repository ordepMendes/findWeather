import styled from "styled-components/native";

import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { ReactNode } from "react";

interface ButtonProps extends TouchableOpacityProps {
    backgroundColor?: string;
    borderRadius?: string;
    children: ReactNode;
    borderColor?: string;
    height: number;
}

export const Button = styled.TouchableOpacity<ButtonProps>`
    background-color: ${(props) => props.backgroundColor || 'transparent'};
    width: 328px;
    height:  ${(props) => props.height};
    align-items: center;
    justify-content: center;
    border-radius: ${(props) => props.borderRadius || '10px'};
    border-width: 1px;
    border-color: ${(props) => props.borderColor || 'transparent'};;
`;