
import { randomId } from "@mantine/hooks"
import { CV } from "../models/CV"
import { useCVDetailsForm } from "./useCVDetailsForm"
import { useEducationForm } from "./useEducationForm"
import { useEmploymentHistoryForm } from "./useEmploymentHistoryForm"
import { usePersonalDetailsForm } from "./usePersonalDetailsForm"
import { useTechnicalExpertiseForm } from "./useTechnicalExpertiseForm"
import { useSkillsForm } from "./useSkillsForm"
import { useLanguagesForm } from "./useLanguagesForm"

export const useUserDataForm: () => [forms: any, setForms: any] = () => {
  const forms = {
    cvdetails: useCVDetailsForm(),
    personalDetails: usePersonalDetailsForm(),
    employmentHistories: useEmploymentHistoryForm(),
    educations: useEducationForm(),
    technicalExpertise: useTechnicalExpertiseForm(),
    skills: useSkillsForm(),
    languages: useLanguagesForm()
    };


  const setForms = (cv: CV | null) => {
    if (!cv) {
      return;
    }

    const mappedEducations = cv.educations.map(ed => ({
      institution: ed.institution ?? '',
      degree: ed.degree ?? '',
      startDate: new Date(ed.endDate) ?? new Date(),
      endDate: new Date(ed.startDate) ?? new Date(),
      city: ed.city ?? '',
      description: ed.description ?? '',
      key: randomId()
    }))

    const mappedEmploymentHistories = cv.employmentHistories.map(history => ({
      jobTitle: history.jobTitle ?? '',
      employer: history.employer ?? '',
      startDate: new Date(history.endDate) ?? new Date(),
      endDate: new Date(history.endDate) ?? new Date(),
      city: history.city ?? '',
      description: history.description ?? '',
      key: randomId()
    }))

    forms.languages.setValues({languages: cv.languages});
    forms.skills.setValues({skills: cv.skills});
    forms.technicalExpertise.setValues({technicalExpertise: cv.technicalExpertise});
    forms.cvdetails.setValues({name: cv.name});
    forms.personalDetails.setValues(cv.personalDetails);
    forms.educations.setValues({educations: mappedEducations})
    forms.employmentHistories.setValues({employmentHistories: mappedEmploymentHistories})
  };

  return [forms, setForms];
}
