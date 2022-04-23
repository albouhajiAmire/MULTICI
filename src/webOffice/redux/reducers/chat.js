import { GET_CHAT, COUNT_CHAT_NAV, VIEW_CHAT, NOTIFI_CHAT, NEW_CHAT } from "../constans/chat"

const INITIAL_STATE = {
    count_nav: 0,
    chats: [],
    notifi_chats: [],
}


const chatsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNT_CHAT_NAV:
            return {
                ...state,
                count_nav: action.payload
            }
        case VIEW_CHAT:

            const indexVchats = state.chats.findIndex(c => c._id === action.payload)
            const indexVnotifi_chats = state.notifi_chats.findIndex(c => c._id === action.payload)
            state.notifi_chats.splice(indexVnotifi_chats, 1)

            if (!state.chats[indexVchats].viewed) {
                state.chats[indexVchats].viewed = true
                state.count_nav = state.count_nav - 1 
            }
            return {
                ...state,
                chats: state.chats,
                count_nav: state.count_nav ,
                notifi_chats: state.notifi_chats 

            }

            case NEW_CHAT:
                const indexNnotifi_chats = state.notifi_chats.findIndex(c => c._id === action.payload)
                const indexNchats = state.chats.findIndex(c => c._id === action.payload)

                if(indexNnotifi_chats === -1){
                    state.chats[indexNchats].viewed = false
                    state.count_nav = state.count_nav + 1 
                    state.notifi_chats.push(state.chats[indexNchats])
                }

                return {
                    ...state,
                    chats: state.chats,
                    count_nav: state.count_nav ,
                    notifi_chats: state.notifi_chats 
    
                }
        case GET_CHAT:

            return {
                ...state,
                chats: action.payload
            }

        case NOTIFI_CHAT:

            return {
                ...state,
                notifi_chats: action.payload
            }

        default: return state

    }
}

export default chatsReducer