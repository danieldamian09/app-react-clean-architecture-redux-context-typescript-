import { AppDispatch, RootState } from '@/redux/store';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';




// Nuestro hook personalizado para usar el selector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// Nuestro hook personalizado para usar el dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;