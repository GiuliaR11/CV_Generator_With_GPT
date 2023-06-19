import { Container, createStyles } from "@mantine/core";
import { Sydney } from "./sydney/Sydney";
import { Oslo } from "./oslo/Oslo";
import { ColorSwatchesPicker } from "../ColorSwatchesPicker";
import { Dispatch, SetStateAction } from "react";
import { CV } from "../../models/CV";

const useStyles = createStyles((theme) => ({
  mainContainer: {
    padding: '0',
    // height: '296mm',
    border: '0.1px solid',
    borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[4],
  },
}))

interface Props {
  cv: CV | null
  isViewMode?: boolean
  selectedTemplate: string
  selectedColor: string
  setSelectedColor?: Dispatch<SetStateAction<string>>
}

export function Template ({selectedTemplate, selectedColor, setSelectedColor, isViewMode, cv}: Props) {
  const { classes } = useStyles();
  // const [selectedTemplateColor, setSelectedTemplateColor] = useState('#323B4C')

  return (
    <>
      {!isViewMode && <ColorSwatchesPicker 
        colorPalette={['#323B4C', '#827A72', '#A4928D', '#7E918F','#7B7F82']}
        selectedColor={selectedColor}
        handleColorChange={setSelectedColor}
      />}
      {cv && <Container className={classes.mainContainer} id='printableComponent'>
        {selectedTemplate === 'Sydney' && <Sydney cv={cv} selectedColor={selectedColor}/>}
        {selectedTemplate === 'Oslo' && <Oslo cv={cv} selectedColor={selectedColor}/>}
      </Container>}
    </>
  )
}