
import { useEducationForm } from "./useEducationForm"
import { useEmploymentHistoryForm } from "./useEmploymentHistoryForm"
import { usePersonalDetailsForm } from "./usePersonalDetailsForm"

export const useUserDataForm = () => ({
  personalDetails: usePersonalDetailsForm(),
  employmentHistory: useEmploymentHistoryForm(),
  education: useEducationForm()
})
