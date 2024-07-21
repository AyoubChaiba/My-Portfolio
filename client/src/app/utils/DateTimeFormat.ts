import { FormatDateProps } from "../types/componentType";

export const formatDate = ({ date, locales = 'en-US', options = {} }: FormatDateProps): string => {
    const defaultOptions: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateTimeFormat = new Intl.DateTimeFormat(locales, { ...defaultOptions, ...options });
    return dateTimeFormat.format(new Date(date));
};