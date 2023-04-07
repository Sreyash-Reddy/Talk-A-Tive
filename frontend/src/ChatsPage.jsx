import {PrettyChatWindow} from 'react-chat-engine-pretty'
import "./ChatsPage.css"

const ChatsPage = (props) => {

  return <div style={{ height: '100vh' }} className='chat-window'>
    <PrettyChatWindow projectId='a62898e6-7f08-439d-a511-8e47877f7473' username={props.user.username} secret={props.user.secret} style={{height:'100%'}}/>
  </div>;
};
export default ChatsPage;