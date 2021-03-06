import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'joke',
            description: 'random jokes.',
            aliases: ['jokes'],
            category: 'fun',
            usage: `${client.config.prefix}joke`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await axios
            .get(`https://v2.jokeapi.dev/joke/Any`)
            .then((response) => {
                // console.log(response);
                const text = `π€‘ *Joker:* Now Smileπ\n\n*π Joke:* ${response.data.setup}\n\n*π‘ Answer:* ${response.data.delivery}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`π Error: ${err}`)
            })
    }
}
