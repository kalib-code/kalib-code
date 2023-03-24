import { create } from 'zustand'

export const useChatStore = create((set) => ({
    messages: [],
    // @ts-ignore
    addMessage: (message: string) => set((state) => ({ messages: [...state.messages, message] })),
    clearMessages: () => set(() => ({ messages: [] })),
}))
