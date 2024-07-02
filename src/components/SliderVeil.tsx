import React from 'react';
import VerticalLine from './VerticalLine';

interface SliderVeilProps {
  color: string;
  colors: string;
  colorl: string;
}

const SliderVeil: React.FC<SliderVeilProps> = ({ color, colors, colorl }) => {
    return (
        <div className="absolute top-0 bottom-0 w-full h-full">
            <VerticalLine/>
        </div>
    );
};

export default SliderVeil;