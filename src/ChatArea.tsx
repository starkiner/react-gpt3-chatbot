import Chat, { Bubble, useMessages } from "@chatui/core";
import { useState } from "react";
import Conversation from "./conversation";
import defaultSettings from "./characters";
import { Configuration, OpenAIApi } from "openai";
import Cookies from "js-cookie";




const ChatArea = () => {
    const { messages, appendMsg, setTyping } = useMessages([]);
    const [openai, setOpenai] = useState(new OpenAIApi(new Configuration({apiKey: Cookies.get("apiKey")})));

    // Conversation hook
    const [conversation, setConversation] = useState(new Conversation(defaultSettings));

    function handleSend(type: any, val: string) {
        if (type === 'text' && val.trim()) {
            appendMsg({
                type: 'text',
                content: { text: val },
                position: 'right',
            });

            setTyping(true);

            const prompt = conversation.get_prompt(val)
            console.log("Prompt: ", prompt)
            console.log("Conversation: ", conversation.conversation)
            openai.createCompletion({
                model: 'text-davinci-002',
                prompt: prompt,
                stop: defaultSettings['USER_PREFIX'].trim(),
                max_tokens: defaultSettings['MAX_TOKENS'],
                frequency_penalty: defaultSettings['FREQUENCY_PENALTY'],
                presence_penalty: defaultSettings['PRESENCE_PENALTY'],
            }).then((completion) => {
                const responseText = completion.data.choices![0].text!;
                conversation.set_completion(responseText)
                appendMsg({
                    type: 'text',
                    content: { text: responseText.trim() },
                });
            });

            
            //conversation.set_completion("Bala bala")


            //setTimeout(() => {
            //    appendMsg({
            //        type: 'text',
            //        content: { text: 'Bala bala' + val },
            //    });
            //}, 1000);
        }
    }

    function renderMessageContent(msg: any) {
        const { content } = msg;
        return <Bubble content={content.text} />;
    }


    return (
        <>
            <Chat
                navbar={{ title: 'Assistant' }}
                messages={messages}
                renderMessageContent={renderMessageContent}
                onSend={handleSend}
                locale="en"
                placeholder='Type a message'
            />
        </>
    )
}

export default ChatArea;