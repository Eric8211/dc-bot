import { SlashCommandBuilder } from "discord.js";

export const command = new SlashCommandBuilder()
.setName('about_me')
.setDescription('The reason why i am created by Kanzaki sama')

export const action = async(interaction)=>{
    interaction.reply("In order to make the server more convenient. Thus kanzaki sama creates me ouob.")
}