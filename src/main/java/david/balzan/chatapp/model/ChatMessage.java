package david.balzan.chatapp.model;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class ChatMessage {
    private String content;
    private String sender;
    private LocalDateTime timeStamp = LocalDateTime.now();

    public enum MessageType {LEAVE, CHAT, JOIN}

    private MessageType type;
}
