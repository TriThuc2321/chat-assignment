import { Header, InputMessage, MessageItem } from '@/components/message';
import { ChatMessage } from '@/types/message';
import { User } from '@/types/user';

const user: User = {
  id: '1',
  username: 'John Doe',
  online: true,
};

const receiver: User = {
  id: '2',
  username: 'Join',
  online: true,
};

const messages: ChatMessage[] = [
  {
    id: '1',
    sender: user,
    receiver,
    message: 'Hello',
    timestamp: 1739699912502,
  },
  {
    id: '4',
    sender: user,
    receiver,
    message: 'Hello, how are you?',
    timestamp: 1739699912502,
  },
  {
    id: '3',
    sender: user,
    receiver,
    message: 'Hello, how are you?',
    timestamp: 1739699912502,
  },
  {
    id: '2',
    sender: receiver,
    receiver: user,
    message: 'I am fine',
    timestamp: 1718534400,
  },
  {
    id: '99',
    sender: receiver,
    receiver: user,
    message: 'Thank you!',
    timestamp: 1718534400,
  },
];

export default function Message() {
  return (
    <div className="flex h-full w-full flex-col">
      <Header user={user} />

      <div className="flex h-full flex-col gap-2 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <MessageItem
            key={message.id}
            isSender={message.sender.id === user.id}
            message={message}
            showDetail={message.sender.id === messages[index + 1]?.sender.id}
          />
        ))}
      </div>

      <InputMessage />
    </div>
  );
}
