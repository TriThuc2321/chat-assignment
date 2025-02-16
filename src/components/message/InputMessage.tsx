import { Button, Input } from '@/libs/heroUI';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

export default function InputMessage() {
  return (
    <div className="flex w-full items-center gap-4 border-t border-gray-200 px-4 py-3">
      <Input
        classNames={{
          base: 'w-full',
          inputWrapper: 'border-1 border-primary text-typography py-7 pl-4',
        }}
        endContent={
          <Button isIconOnly className="my-4 rounded-full" variant="solid">
            <PaperAirplaneIcon className="size-5" />
          </Button>
        }
        placeholder="Type your message..."
        size="lg"
      />
    </div>
  );
}
