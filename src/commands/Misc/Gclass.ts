import { MessageType } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IPackage, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'grooms',
            description: 'Google class rooms',
            category: 'misc',
            usage: `#grooms`,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const pkg: IPackage = require(join(__dirname, '..', '..', '..', 'package.json'))
        const image = this.client.assets.get('bep')
        if (!image) return void null
        return void M.reply(
            image,
            MessageType.image,
            undefined,
            undefined,
            `āļø *AMT Google Class Rooms* āļø\n\nš *Basic work shop practice 1: [Code]  "wr7pam4"*\n\nš *OSH:  https://classroom.google.com/c/Mzc5OTg1OTM0ODA2?cjc=rak5pb [code :rak5pbq]*\n\nš *Basic electronic practice: [Code]  "zdt77my"*\n\nš *Automobile mechanic: https://classroom.google.com/c/MzgwNDYzNDg1OTE5?cjc=mgql55p*\n\nš *English and IT: https://classroom.google.com/c/MzgwNDc5MTMxODcx?cjc=ift6snb*\n\nš *Basic engineering drawing: https://classroom.google.com/c/NDQxNzA5Mjk0NDg1?cjc=bzt672a (code: bzt672a)*\n\nš *Automobile electrician: [Code]  "vuesqax"*\n`
        )
    }
}
