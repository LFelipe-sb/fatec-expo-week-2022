import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import addHours from 'date-fns/addHours'

export function formatDate(date) {
  console.log(date)
  try {
    return format(addHours(parseISO(date), 3), "dd/MM/yyyy - H:mm", {
      locale: ptBR,
    }); 
  } catch(err) {
    console.log(err);
  }
}

export function formatDateEstand(date) {
  try {
    return format(parseISO(date), "dd/MM/yyyy", {
      locale: ptBR,
    }); 
  } catch(err) {
    console.log(err);
  }
}