import { CRIAR_NOVO_EVENTO } from '../actions';

const estadoInicial = { eventos: {} };

export function eventoReducer(state = estadoInicial, action){
  const evento = action.evento;
  switch(action.type){
    case CRIAR_NOVO_EVENTO:
      return {
        ...state,
        [evento.id]: evento
      }
    default:
      return estadoInicial
  }
}
