import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function formatDate(date) {
  try {
    return format(parseISO(date), "dd/MM/yyyy - H:mm", {
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