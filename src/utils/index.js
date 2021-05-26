import { format } from 'date-fns'

export const formatDate = (date, formatter = 'mm/dd/yyyy') => {
    return format (new Date (date), formatter)
}