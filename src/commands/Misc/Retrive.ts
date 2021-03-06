/* eslint-disable @typescript-eslint/no-explicit-any */
import { MessageType, proto, WAMessage } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'seek',
            description: 'Use only for Fun or I will shut down the BOT.. Message from ISURU😈',
            adminOnly: true,
            category: 'misc',
            usage: `Get View once message `
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!M.quoted) return void (await M.reply(`Quote the "viewOnceMessage" you want to retrieve, Don't use this for make someone Uncomfortable, Or I will shut down the BOT, Message from ISURU😈`))
        if (
            !(M?.quoted?.message?.message as proto.Message)?.viewOnceMessage?.message?.videoMessage &&
            !(M.quoted.message?.message as proto.Message).viewOnceMessage?.message?.imageMessage
        )
            return void M.reply('Quote the "viewOnceMessage" that you want to retrieve')
        return void M.reply(
            await this.client.downloadMediaMessage(
                (M.quoted.message?.message as proto.Message).viewOnceMessage as WAMessage
            ),
            MessageType[
                (M.quoted.message?.message as proto.Message).viewOnceMessage?.message?.imageMessage ? 'image' : 'video'
            ],
            undefined,
            undefined,
            'Oh Yes😈, this message is now public property... Use only for Fun or I will shut down the BOT.. Message from ISURU😈'
        )
    }
    }
