import ChatList from "@/components/ChatList";

type Props = {
    params: {},
    searchParams: {
        error: string;
    }
}

function ChatPage({ searchParams: {error}}: Props) {
  return (
    <div>
        {/* Chat Permission chat */}


        {/* Chat List */}
        <ChatList />


    </div>
  )
}

export default ChatPage;