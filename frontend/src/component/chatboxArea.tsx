import React, {
  useRef,
  ChangeEvent,
  KeyboardEvent,
  Dispatch,
  SetStateAction,
} from "react";
import { Send, Paperclip } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface ChatboxAreaProps {
  onSendMessage: () => void;
  onFileUpload: (file: File) => void;
  inputMessage: string;
  setInputMessage: Dispatch<SetStateAction<string>>;
}

const ChatboxArea: React.FC<ChatboxAreaProps> = ({
  onSendMessage,
  onFileUpload,
  inputMessage,
  setInputMessage,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputMessage(e.target.value);
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSendMessage();
    }
  };

  const triggerFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  return (
    <div className='relative'>
      <Textarea
        value={inputMessage}
        onChange={handleInputChange}
        onKeyUp={handleKeyPress}
        placeholder='Type your message here... (Press Enter to send)'
        className='pr-20'
        rows={3}
      />
      <div className='absolute bottom-2 right-2 flex'>
        <Button
          size='icon'
          variant='ghost'
          onClick={triggerFileUpload}
          className='mr-1'
        >
          <Paperclip className='h-4 w-4' />
        </Button>
        <Button size='icon' onClick={onSendMessage}>
          <Send className='h-4 w-4' />
        </Button>
      </div>
      <input
        ref={fileInputRef}
        type='file'
        className='hidden'
        onChange={handleFileUpload}
      />
    </div>
  );
};

export default ChatboxArea;
