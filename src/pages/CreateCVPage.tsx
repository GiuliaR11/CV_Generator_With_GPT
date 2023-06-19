import { Stepper, Group, Button, Container, createStyles } from "@mantine/core";
import { useEffect, useState } from "react";
import { UserDataForm } from "../components/UserDataForm";
import { TemplateViewer } from "./TemplateViewer";
import { useUserDataForm } from "../hooks";
import { Template } from "../components/cv-templates/Template";
import { Check, Download } from "tabler-icons-react";
import { createCV, getCVById } from "../services/CVService";
import { CV, Templates, newEmptyCV } from "../models/CV";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../store";

const useStyles = createStyles((theme) => ({
  container: {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
}))

interface Props {
  activeStep?: number
  isViewMode? : boolean
}

export function CreateCVPage({activeStep, isViewMode}: Props) {
  // @ts-ignore
  const [cv, setCv] = useState<CV | null>(newEmptyCV)
  let { id } = useParams()

  const [forms, setForms] = useUserDataForm();
  const [active, setActive] = useState(activeStep ?? 0);

  useEffect(() => {
    if (id) {
      getCVById(id)
      .then((cv) => {
        setForms(cv)
        setCv(cv);
        setSelectedTemplate(cv?.templateName ?? 'Sydney')
        setSelectedTemplateColor(cv?.templateColor ?? '#827A72')
      })
    }
  }, [id]);

  const areCVFormsValid = () => {
    return forms.personalDetails.isValid() && 
      forms.employmentHistories.isValid() && 
      forms.personalDetails.isValid() &&
      forms.cvdetails.isValid()
  }

  const validateForm = () => {
    if (forms) {
      const {cvdetails, personalDetails, employmentHistories, educations} = forms
      const allForms = [cvdetails, personalDetails, employmentHistories, educations];
      allForms.forEach(form => {
        form.validate()
      });
    }
  }

  const nextStep = () => {
    if (active === 0) {
      validateForm()
    }
    if (!areCVFormsValid()) {
      return
    }
    setActive((current) => (current < 3 ? current + 1 : current))
  };

  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  const handleDownload = () => {
      const printableComponent = document.getElementById('printableComponent');
      
      if (printableComponent) {
        const styles = Array.from(document.styleSheets)
          .map((sheet) => {
            try {
              return Array.from(sheet.cssRules).map((rule) => rule.cssText).join('\n');
            } catch (error) {
              console.warn('Failed to process CSS rules from', sheet.href, error);
            }
            return '';
          })
          .join('\n');
    
        const printWindow = window.open('', '', 'width=794,height=1123');
        const content = `
          <html>
            <head>
              <style>
                ${styles}
                @media print {
                  #printableComponent {
                    display: block;
                  }
                }
              </style>
            </head>
            <body>
              ${printableComponent.outerHTML}
            </body>
          </html>
        `;
        if (printWindow) {
          printWindow.document.open();
          printWindow.document.write(content);
          printWindow.document.close();
          printWindow.print();
        }
      }
  }

  const navigate = useNavigate();
  const auth = useSelector(selectAuth);
  const {user} = auth
  const userId = user?.id

  const handleSaveCV = () => {
      createCV({
        id: cv?.id,
        name: forms.cvdetails.values.name,
        templateName: selectedTemplate as Templates,
        templateColor: selectedTemplateColor,
        educations: forms.educations.values.educations,
        personalDetails: forms.personalDetails.values,
        employmentHistories: forms.employmentHistories.values.employmentHistories
      }, userId)
      .then((r) => {
        console.log(r)
        if (r) {
          navigate('/my-cvs')
        } 
      })
    }

  const [selectedTemplate, setSelectedTemplate] = useState('Sydney')
  const [selectedTemplateColor, setSelectedTemplateColor] = useState('#827A72')

  const { classes } = useStyles();
  
  return (
    <>
      <Container className={classes.container}>
        <Stepper active={active} onStepClick={nextStep} breakpoint="sm">
          <Stepper.Step label="First step" description="Fill in your CV Data">
            {cv && <UserDataForm 
              forms={forms} 
            />}
          </Stepper.Step>
          <Stepper.Step label="Second step" description="Choose a template">
            <span>{cv?.templateName} {selectedTemplate}</span>
            <TemplateViewer 
              setSelectedTemplate={setSelectedTemplate}
              selectedTemplate={selectedTemplate}
            />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Export CV">
            <Template
              cv={cv}
              isViewMode={isViewMode}
              selectedTemplate={selectedTemplate} 
              selectedColor={selectedTemplateColor}
              setSelectedColor={setSelectedTemplateColor}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click back button to get to previous step
          </Stepper.Completed>
        </Stepper>
        <Group position="center" mt="xl">
          {active > 0 && <Button variant="default" disabled={active === 0} onClick={prevStep}>Back</Button>}
          {active < 2 && <Button onClick={nextStep}>Next step</Button>}
          {active === 2 && <Button variant="light" leftIcon={<Download />} onClick={handleDownload}>
            Download
          </Button>}
          {active === 2 && <Button leftIcon={<Check />} onClick={handleSaveCV}>
            Save
          </Button>}
        </Group>
      </Container>
    </>
  )
}