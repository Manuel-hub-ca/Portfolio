import { useContext } from 'react';
import { ColorPointerContext } from '../context/ColorPointerContext';
export const useColorPointing = () => useContext(ColorPointerContext);
