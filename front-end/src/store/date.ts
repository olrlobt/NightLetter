import { convertDateFormatToKorean, getTodayDate } from '@/utils/dateFormat';
import { create } from 'zustand';

interface DateState {
    date: string;
    daysDifference: number;
    setDate: (date: string) => void;
    setDaysDifference: (daysDifference: number) => void;
}

const useStore = create<DateState>(set => ({
    date: "",
    daysDifference: 0,
    setDate: (date: string) => set({ date }),
    setDaysDifference: (daysDifference: number) => set({ daysDifference })
}));

export default useStore;