module.exports = (sequelize, DataTypes) => {
	return sequelize.define('images', {
		img_url: {
			type: DataTypes.STRING,
			primaryKey: true,
		},
		command: {
			type: DataTypes.STRING,
		},
		posted: {
			type: DataTypes.BOOLEAN,
			defaultValue: 0,
		},
	}, {
		timestamps: false,
	});
};