import React from "react";
import { TouchableOpacity, Text, TouchableOpacityProps, TextProps  } from "react-native";
import { Button as ComponentButton} from "./style";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    height: number;
    backgroundColor: string;
    borderRadius?: string; 
    fontSize?: number;
    color?: string;
    borderColor?: string;
}

const Button: React.FC<ButtonProps> = ({title, height, backgroundColor, fontSize, borderRadius, color, borderColor}) => {
    return (
        <ComponentButton height={height} backgroundColor={backgroundColor} borderRadius={borderRadius} borderColor={borderColor}>
            <Text style={{fontSize: fontSize, color: color, fontFamily: 'Overpass'}}>{title}</Text>
        </ComponentButton>
    );
};

export default Button;