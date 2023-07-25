import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    const chatProps = useMultiChatLogic('6b98ffff-ea38-460f-9814-33079e3f1abc', props.user.username, props.user.secret)
    return (
        <div style={{ height: '100vh'}}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style={{ height: '100%'}}/>
        </div>
    )
}
export default ChatsPage