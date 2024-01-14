import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {

    return (
        <div style={{ height: "90vh", width: "98.5vw" }}>
            <PrettyChatWindow
                projectId="dff849fc-1490-4686-b96e-a939a4a628e1"
                username={props.user.username}
                secret={props.user.secret}
                style={{ height: '100vh' }}
            />
        </div>
    )
}

export default ChatsPage
