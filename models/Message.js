module.exports = (sequelize, DataTypes) => {
	return sequelize.define('messages', {
		message_id: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		reaction_message_id: {
			type: DataTypes.STRING,
		},
	}, {
		timestamps: false,
	});
};