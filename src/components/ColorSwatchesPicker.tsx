import { ColorPicker, Text, Box } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

interface SwatchesProps {
  colorPalette: string[]
  selectedColor: string
  handleColorChange?: Dispatch<SetStateAction<string>>
  showSwatches: boolean
}

export function ColorSwatchesPicker ({colorPalette, handleColorChange, selectedColor, showSwatches}: SwatchesProps){
  
  return (
    <ColorPicker
      pb={'xl'}
      format="hex"
      value={selectedColor}
      onChange={handleColorChange}
      withPicker={true}
      fullWidth
      swatches={showSwatches ? colorPalette : []}
    />
  );
}