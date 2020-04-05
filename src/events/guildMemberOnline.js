module.exports = (totalOnline, member) => {
  message.guild.members.fetch().then(fetchedMembers => {
    const totalOnline = fetchedMembers.filter(member => member.presence.status === 'online');
  });
}
