import { getLuminance } from 'polished';

export const getTextColor = (color: string, light: string, dark: string) => {
    if (!color) return light;

    return getLuminance(color) > 0.5 ? dark : light;
};
