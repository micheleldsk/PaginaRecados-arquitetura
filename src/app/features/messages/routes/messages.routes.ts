import { Router } from "express";
import { MessagesController } from "../controllers";
import { checkMessageValidator, createMessageValidator, deleteMessageValidator, updateMessageValidator } from "../validators";

export const messagesRouter = Router();

messagesRouter.post('/create', [createMessageValidator], new MessagesController().addMessage);

messagesRouter.get('/:userUid', new MessagesController().getUserMessages);

messagesRouter.put('/:uid', [checkMessageValidator, updateMessageValidator], new MessagesController().updateMessage);

messagesRouter.delete('/:uid', [checkMessageValidator, deleteMessageValidator], new MessagesController().deleteMessage);





















// export const messageRouter = Router()

// messageRouter.post('/message', userIdValidator,createMessageValidator, new MessagesController().addMessage)

// messageRouter.get('/messages/:userId', userIdValidator, new MessagesController().getUserMessages)

// messageRouter.get('/messages/search/:userId', userIdValidator, searchTitleMessageValidator, new MessagesController().searchByTitleMessages)

// messageRouter.get('/messages/search/status/:userId', userIdValidator, searchStatusMessageValidator, new MessagesController().searchByStatusMessages)

// messageRouter.put('/message/:messageId', messageIdValidator, updateMessageValidator, new MessagesController().updateMessage)

// messageRouter.put('/message/active/:messageId', messageIdValidator, new MessagesController().toggleActiveStatus)

// messageRouter.delete('/message/:messageId', messageIdValidator, new MessagesController().deleteMessage)