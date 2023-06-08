import { Stepper, Group, Button, Container, createStyles } from "@mantine/core";
import { useState } from "react";
import { UserDataForm } from "../components/UserDataForm";
import { TemplateViewer } from "./TemplateViewer";
import { useUserDataForm } from "../hooks";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))

export function CreateCVPage() {
  const { classes } = useStyles();

  const isCvDataValid = () => {
    return forms.personalDetails.isValid() && 
      forms.employmentHistory.isValid() && 
      forms.personalDetails.isValid()
  }

  const isNextStepDisabled = () => {
    if (active === 0)
      return !isCvDataValid()
  }

  const forms = useUserDataForm();

  const [active, setActive] = useState(0);

  const nextStep = () => {
    // console.log(forms)
    // forms.personalDetails.validate()
    // forms.employmentHistory.validate()
    // forms.education.validate()
    // if (isCvDataValid()) {
    //   setActive((current) => (current < 3 ? current + 1 : current))
    // }
    setActive((current) => (current < 3 ? current + 1 : current))
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const shouldAllowSelectStep = (step: number) => {
    return true
    // const isTemplateSelected = false
    // if (step === 1)
    //   return isCvDataValid()
    // if (step === 2) {
    //   return isCvDataValid() && isTemplateSelected
    // }
  }
  
  return (
    <>
      <Container className={classes.container}>
        <Stepper active={active} onStepClick={nextStep} breakpoint="sm">
          <Stepper.Step label="First step" description="Fill in your CV Data">
            <UserDataForm forms={forms}/>
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Choose a template">
            <TemplateViewer/>
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Export CV">
            Step 3 content: Export as PDF
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
        <Group position="center" mt="xl">
          {active > 0 && <Button variant="default" disabled={active === 0} onClick={prevStep}>Back</Button>}
          <Button onClick={nextStep}>Next step</Button>
        </Group>
      </Container>
    </>
  )
}