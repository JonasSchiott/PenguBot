const { Event } = require("klasa");
const logger = require("../utils/log");

module.exports = class extends Event {

    async run(channel) {
        if (channel.type !== "text") return;
        const log = logger("channels", channel.guild, `📕 **#${channel.name}** (${channel.id}) channel was \`deleted\``);
        const loggingChannel = await channel.guild.channels.fetch(channel.guild.configs.loggingChannel);
        if (log && loggingChannel) loggingChannel.send(log);
    }

};
