import { ColorPicker, Text, Box } from '@mantine/core';
import { Dispatch, SetStateAction } from 'react';

interface SwatchesProps {
  colorPalette: string[]
  selectedColor: string
  handleColorChange?: Dispatch<SetStateAction<string>>
}

export function ColorSwatchesPicker ({colorPalette, handleColorChange, selectedColor}: SwatchesProps){
  
  return (
    <Box maw={200} mx="auto">
      <ColorPicker
        format="hex"
        value={selectedColor}
        onChange={handleColorChange}
        withPicker={true}
        fullWidth
        swatches={colorPalette}
      />
      <Text align="center" mt={5}>
        {selectedColor}
      </Text>
    </Box>
  );
}