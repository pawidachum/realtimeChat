import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: '100vh'}}>
            <PrettyChatWindow
                projectId='6b98ffff-ea38-460f-9814-33079e3f1abc'
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100%' }}
            />

        </div>
    )
}
export default ChatsPage