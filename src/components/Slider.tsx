"use client";
import React, {useState} from 'react';
import SliderSquare from './SliderSquare';

interface SliderProps {
  Color: string;
  Colors: string;
  Colorl: string;
}

const Slider: React.FC<SliderProps> = ({ Color, Colors, Colorl }) => {
    const [position, setPosition] = useState(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        const startX = e.clientX;

    const handleMouseMove = (moveEvent: MouseEvent) => {
        const deltaX = moveEvent.clientX - startX;
        setPosition((prevPosition) => prevPosition + deltaX);
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div onMouseDown={handleMouseDown}>
                <SliderSquare color={Color} colors={Colors} colorl={Colorl} />
            </div>
        </div>
  );
};

export default Slider
