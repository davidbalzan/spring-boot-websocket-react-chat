package david.balzan.chatapp;

import lombok.Data;

@Data
public class ChatMessage {
    private String content;
    private String sender;

    public enum MessageType {LEAVE, CHAT, JOIN}

    private MessageType type;
}
