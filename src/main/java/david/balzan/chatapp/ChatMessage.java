package david.balzan.chatapp;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ChatMessage {
    private String content;
    private String sender;

    public enum MessageType {LEAVE}

    private MessageType type;
}
