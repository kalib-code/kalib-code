import {
    useMutation,
    useQueryClient,
    useQuery,
} from '@tanstack/react-query'


interface Chat {
    message: string
    parentMessageId: string | null
}


const postChat = async (message: string ,  parentMessageId: string | null) => {
    const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, parentMessageId }),
    })
    return res.json()
}

export const useChat = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: ({message ,parentMessageId }:Chat) => postChat(message, parentMessageId),
        onSuccess: (data) => {
            queryClient.setQueryData(['chat'], (old: any) => [...old, data])
        },
    })
}

export const useChatMessages = () => {
    return useQuery({
        queryKey: ['chat']
    })
}
